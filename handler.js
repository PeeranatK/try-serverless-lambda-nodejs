'use strict';

const { json } = require("body-parser");
const { CognitoIdentityProviderClient, AdminDeleteUserCommand } = require("@aws-sdk/client-cognito-identity-provider");

// var express = require('express');
// var app = express();
// var cors = require('cors');
// const bodyParser = require('body-parser');


module.exports.hello = async (event) => {

  const reqestBody = typeof event.body == "string" ? JSON.parse(event.body) : event.body;

  const userPoolId = "";
  const clientId = "";
  const region = "";

  const poolData = {
    UserPoolId: userPoolId,
    ClientId: clientId,
    region: region
  }

  const client = new CognitoIdentityProviderClient({ region: poolData.region });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
