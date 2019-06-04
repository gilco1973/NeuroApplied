/**
 * Created by Tal on 03/07/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
const {
  google
} = require('googleapis');
//var UserType = require('../../logics/common/UserType.js');
//var Candidates = require('../../models/Candidates');
//var signupCandidate = require('../../logics/candidates/signup-candidate').signupCandidate;
//var signupCandidateFromLinkedIn  = require('../../logics/candidates/signup-candidate').signupCandidateFromLinkedIn;
var validate = require('express-validation');
//var signupValidationSchema = require('../validators/user-data-validator').signupSchema;
//var reportError = require('../../errors').reportError;
//var integrate = require('../../logics/integrations/integrate_main').checkIntegrationsExistsAndExecute;
var request = require('request');
const clientId = "504131472976-h165f9mk368n2j5ghccn572kok4oh5t3.apps.googleusercontent.com";
const clientSecret = "BDJJenZ_mdljva0_nQL0dnPr";

async function loginGoogle(req, res, next) {
  //   const oauth2Client = new google.auth.OAuth2(
  //     clientId,
  //     clientSecret,
  //     req.protocol + '://' + req.headers.host+'/login');

  //   // generate a url that asks permissions for profile and email scopes
  //   const scopes = [
  //     'profile email'
  //   ];

  //   const authurl = oauth2Client.generateAuthUrl({
  //     // 'online' (default) or 'offline' (gets refresh_token)
  //     access_type: 'offline',
  //     include_granted_scopes: true,
  //     state:'google',
  //     // If you only need one scope you can pass it as a string
  //     scope: scopes
  //   });

  //   request.get(authurl, function (err, response, body) {
  //     res.redirect_uri(body);
  //   });
  //   const {
  //     tokens
  //   } = await oauth2Client.getToken(req.query.code)
  //   oauth2Client.setCredentials(tokens);

  //   oauth2Client.on('tokens', (tokens) => {
  //     if (tokens.refresh_token) {
  //       // store the refresh_token in my database!
  //       console.log(tokens.refresh_token);
  //     }
  //     console.log(tokens.access_token);
  //   });


  var data = {
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: req.protocol + '://' + req.headers.host + '/login',
    client_id: clientId,
    client_secret: clientSecret
  }
  var url = 'https://www.googleapis.com/oauth2/v4/token?' +
    'grant_type=' + data.grant_type + '&' +
    'code=' + data.code + '&' +
    'redirect_uri=' + data.redirect_uri + '&' +
    'client_id=' + data.client_id + '&' +
    'client_secret=' + data.client_secret;
  request.post(url, data, function (err, response, body) {
    var obj = JSON.parse(body);
    if (err == null && obj.error == null) {
      getCandidateDetails(obj, req, res);
    } else {
      return res.status(500).json(obj)
    }
  });

}

function getCandidateDetails(obj, req, res) {
  const options = {
    url: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + obj.access_token,
    headers: {
      'User-Agent': 'request',
      Authorization: 'Bearer ' + obj.access_token
    }
  };
  request.get(options, function (err, response, body) {
    if (err == null) {
      var userObj = {};
      var parseString = JSON.parse(body);
      console.dir(parseString);
      console.dir(parseString.family_name);
      console.dir(parseString.given_name);
      userObj.firstName = parseString.given_name;
      userObj.lastName = parseString.family_name;
      userObj.accessToken = obj.access_token;
      userObj.imageUrl = parseString.picture;

      userObj.email = parseString.email;
      signupOrSignin(userObj, req, res, function (err, response) {

        console.log(userObj);
      });
    }
  })
}

function signupOrSignin(obj, req, res, callback) {

}


router.get('/', loginGoogle);

module.exports = router;
