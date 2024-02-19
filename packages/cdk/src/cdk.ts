#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import ValculatorStack from "./valculator-stack";

const app = new cdk.App();

const env = {
  region: "eu-west-1",
};

new ValculatorStack(app, "ValculatorStack", {
  env,
  bucketName: "valculator-image-hosting-bucket",
});
