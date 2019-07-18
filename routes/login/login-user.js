var express = require('express');
var guid = require('guid');
var router = express.Router();
var Users = require('../../models/Users');
var hash = require('../../hash');
var UserType = require('../../common/UserType.js');

function setUser(user, data, callback) {
  if (!data.password) {
    data.password = guid.raw().split('-').join('');
  }
  hash(data.password, function (pass, salt, hash) {

    user.email = data.email;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.userType = user.userType || UserType.Customer;
    user.salt = user.salt || salt;
    user.password = user.password || hash;
    user.imgUrl = user.imgUrl || data.imgUrl;

    user.save(function (err) {
      if (err) {
        console.log('Error in saving user: ' + err);
        return callback(err)
      } else {
        console.log(user.email + ' User Registration successful');
        return callback(null, user);
      }
    });
  })
}

function verifyCredentials(user, password, callback) {
  hash(password, user.salt, function (err, hash) {
    if (err) {
      return callback(err);
    } else if (user.password != hash.toString('utf8')) {
      var error = new Error("Wrong Password");
      return callback(error);
    } else {
      return callback(null);
    }
  })
};

function loginUser(email, password, checkPassword = true, callback) {
  Users.findOne({
    email: email
  }, function (err, user) {
    if (err) {
      return callback(err);
    } else if (user) {
      if (!checkPassword) {
        return callback(null, user);
      }
      verifyCredentials(user, password, function (err) {
        if (err) {
          return callback(err);
        }
        return callback(null, user);
      });
    } else if (checkPassword && !user) { //login with user and password fail-no such user
      var err = new Error('User does not exist ');
      return callback(err);

    } else {
      const newUser = new Users();
      const data = {
        email: email,
        password: password
      };
      setUser(newUser, data, function (err, user) {
        if (err) {
          console.log('User Creation Error ' + err);
          var err = new Error('User Creation Error ' + err);
          return callback(err);
        }

        console.log('User Creation Success');
        return callback(null, user);
      })
    }
  })
}

module.exports = loginUser;
