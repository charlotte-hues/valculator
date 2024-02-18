#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import ValculatorStack from "./valculator-stack";
import { AWS_ACCOUNT, AWS_REGION, AWS_ROLE } from "../env";

const app = new cdk.App();

const env = {
  account: AWS_ACCOUNT,
  region: AWS_REGION,
  role: AWS_ROLE,
};

new ValculatorStack(app, "ValculatorStack", {
  env,
});
