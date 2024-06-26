import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  BlockPublicAccess,
  Bucket,
  BucketAccessControl,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";
import * as fs from "fs";
import { ValculatorStackProps } from "./valculator-stack-props";

export default class ValculatorStack extends Stack {
  constructor(scope: Construct, id: string, props?: ValculatorStackProps) {
    super(scope, id, props);

    const siteHostingBucket = this.configureImageHostBucket(
      props?.bucketName ?? "image-hosting-bucket"
    );

    this.configureDeployment(siteHostingBucket);
  }

  private configureDeployment(hostingBucket: Bucket) {
    // local path...
    const pathToAppCode = path.join(
      __dirname,
      "../../images/src/assets/item-images"
    );
    if (!fs.existsSync(pathToAppCode)) {
      // published path...
      throw new Error(`No image assets found under '${pathToAppCode}'`);
    }
    const appCode = Source.asset(pathToAppCode);

    new BucketDeployment(this, `DeployValculatorImages`, {
      sources: [appCode],
      destinationBucket: hostingBucket,
      memoryLimit: 512,
    });
  }

  private configureImageHostBucket(bucketName: string) {
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
