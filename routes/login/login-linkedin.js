/**
 * Created by Tal on 03/07/2016.
 */
'use strict';

var express = require('express');
var router = express.Router();
//var UserType = require('../../logics/common/UserType.js');
//var Candidates = require('../../models/Candidates');
//var signupCandidate = require('../../logics/candidates/signup-candidate').signupCandidate;
//var signupCandidateFromLinkedIn  = require('../../logics/candidates/signup-candidate').signupCandidateFromLinkedIn;
var validate = require('express-validation');
//var signupValidationSchema = require('../validators/user-data-validator').signupSchema;
//var reportError = require('../../errors').reportError;
//var integrate = require('../../logics/integrations/integrate_main').checkIntegrationsExistsAndExecute;
var request = require('request');

function loginLinkedIn(req, res, next) {

    var data = {
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: req.protocol+'://'+req.headers.host + '/login',
        client_id: '776im3xq8cf4md',
        client_secret: 'yeNop7boR8ib0MrX'
    }
    var url = 'https://www.linkedin.com/oauth/v2/accessToken?' +
        'grant_type=' + data.grant_type + '&' +
        'code=' + data.code + '&' +
        'redirect_uri=' + data.redirect_uri + '&' +
        'client_id=' + data.client_id + '&' +
        'client_secret=' + data.client_secret;
    request.post(url, data, function (err, response, body) {
        var obj = JSON.parse(body);
        if (err == null && obj.error == null) {
            getCandidateDetails(obj, req, res);
        }
        else
        {
            return res.status(500).json(obj)
        }
    });

}

function getCandidateDetails(obj, req, res) {
    const options = {
        url: 'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))',
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
            console.dir(parseString.firstName.localized.en_US);
            console.dir(parseString.lastName.localized.en_US);
            userObj.firstName = parseString.firstName.localized.en_US;
            userObj.lastName = parseString.lastName.localized.en_US;
            userObj.accessToken = obj.access_token;
            userObj.imageUrl = parseString.profilePicture['displayImage~'].elements[0].identifiers[0].identifier;
            const options = {
                url: 'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
                headers: {
                    'User-Agent': 'request',
                    Authorization: 'Bearer ' + obj.access_token
                }
            };
            request.get(options, function (err, response, body) {
                if (err == null) {
                    var parseString = JSON.parse(body);
                    console.dir(parseString);
                    console.dir(parseString.elements[0]['handle~'].emailAddress);
                    userObj.email = parseString.elements[0]['handle~'].emailAddress;
                    signupOrSignin(userObj, req, res, function (err, response) {


                    });
                }
            })
        }
    });
}

function signupOrSignin(obj, req, res, callback) {
    
}


router.get('/', loginLinkedIn);

module.exports = router;
