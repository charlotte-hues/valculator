import { CfnOutput, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import {
  CachePolicy,
  Distribution,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  BlockPublicAccess,
  Bucket,
  BucketAccessControl,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import * as fs from "fs";
import * as path from "path";
import { ValculatorStackProps } from "./valculator-stack-props";

const IMAGE_HOSTNAME = "images.valculator.io";

export default class ValculatorStack extends Stack {
  constructor(scope: Construct, id: string, props: ValculatorStackProps) {
    super(scope, id, props);

    if (
      props.certificateArn &&
      !props.certificateArn.includes(":us-east-1:")
    ) {
      throw new Error(
        "The image certificate must be in us-east-1 so CloudFront can use it.",
      );
    }

    const siteHostingBucket = this.configureImageHostBucket(props.bucketName);
    const distribution = props.certificateArn
      ? this.configureDistribution(siteHostingBucket, props.certificateArn)
      : undefined;

    this.configureDeployment(siteHostingBucket, distribution);
  }

  private configureDistribution(hostingBucket: Bucket, certificateArn: string) {
    const distribution = new Distribution(this, "ImageDistribution", {
      certificate: Certificate.fromCertificateArn(
        this,
        "ImageCertificate",
        certificateArn,
      ),
      domainNames: [IMAGE_HOSTNAME],
      defaultBehavior: {
        // Read the public bucket over HTTPS. An origin access identity would
        // rewrite the bucket policy and can cut off the current site.
        origin: new HttpOrigin(hostingBucket.bucketRegionalDomainName),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
      },
    });

    new CfnOutput(this, "ImageDistributionDomain", {
      value: distribution.distributionDomainName,
    });

    return distribution;
  }

  private configureDeployment(
    hostingBucket: Bucket,
    distribution?: Distribution,
  ) {
    const pathToAppCode = path.join(
      __dirname,
      "../../images/src/assets/item-images",
    );
    if (!fs.existsSync(pathToAppCode)) {
      throw new Error(`No image assets found under '${pathToAppCode}'`);
    }
    const appCode = Source.asset(pathToAppCode);

    new BucketDeployment(this, `DeployValculatorImages`, {
      sources: [appCode],
      destinationBucket: hostingBucket,
      memoryLimit: 512,
      ...(distribution
        ? { distribution, distributionPaths: ["/*"] }
        : {}),
    });
  }

  private configureImageHostBucket(bucketName: string) {
    // Stays publicly readable until valculator.io loads images from CloudFront.
    const hostingBucket = new Bucket(this, `ValculatorImageHostingBucket`, {
      bucketName: bucketName,
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      encryption: BucketEncryption.S3_MANAGED,
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
      accessControl: BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
    });

    return hostingBucket;
  }
}
