var express = require('express');
var router = express.Router();
var loginUser = require('./login-user');

function loginWithPassword(req, res, next) {
  let email = req.body.email;
  const password = req.body.password;
  email = email.toLowerCase();
  
  loginUser(email, password, true, ((err, result) => {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    return res.status(200).send({
      result: result
    });
  }));
}

router.post('/', loginWithPassword);

module.exports = router;
