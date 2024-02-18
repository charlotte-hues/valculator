#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import ValculatorStack from "./valculator-stack";
import { AWS_REGION, AWS_BUCKET } from "../env";

const app = new cdk.App();

const env = {
  region: AWS_REGION,
};

new ValculatorStack(app, "ValculatorStack", {
  env,
  bucketName: AWS_BUCKET,
});
