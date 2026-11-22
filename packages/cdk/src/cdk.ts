#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import ValculatorStack from "./valculator-stack";

const app = new cdk.App();

const env = {
  region: "eu-west-1",
};

const certificateArn = process.env.IMAGE_CERTIFICATE_ARN;

new ValculatorStack(app, "ValculatorStack", {
  env,
  bucketName: "valculator-image-hosting-bucket",
  certificateArn: certificateArn || undefined,
});
