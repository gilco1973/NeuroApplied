
//var express = require('express');
//var router = express.Router();

function setupRoutes(app, passport) {
    var loginWithLinkedIn = require('./routes/login/login-linkedin');
    var loginWithLGoogle = require('./routes/login/login-google');
    var loginWithPassword = require('./routes/login/login-with-password');
    app.use('/login/linkedin', loginWithLinkedIn);
    app.use('/login/google', loginWithLGoogle);
    app.use('/technician/login', loginWithPassword);
    /* router.get('/', function(req, res, next) {
        res.send('respond with a resource');
      }); */


}

module.exports = setupRoutes;