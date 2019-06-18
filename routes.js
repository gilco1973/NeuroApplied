
//var express = require('express');
//var router = express.Router();

function setupRoutes(app, passport) {
    var loginWithLinkedIn = require('./routes/login/login-linkedin');
    var loginWithLGoogle = require('./routes/login/login-google');
    var loginWithLMicrosoft = require('./routes/login/login-microsoft');
    var loginWithPassword = require('./routes/login/login-with-password');
    var getCurrentUser = require('./routes/get-current-user');
    app.use('/login/linkedin', loginWithLinkedIn);
    app.use('/login/google', loginWithLGoogle);
    app.use('/login/microsoft', loginWithLMicrosoft);
    app.use('/technician/login', loginWithPassword);
    app.use('/getCurrentUser', getCurrentUser);
    /* router.get('/', function(req, res, next) {
        res.send('respond with a resource');
      }); */


}

module.exports = setupRoutes;