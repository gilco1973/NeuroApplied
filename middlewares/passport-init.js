/**
 * Created by Jacob on 28/05/2016.
 */
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/Users');


module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        //return the unique id for the user
        return done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            if (err) {
                return done(err);
            } else if (!user) {
                return done(new Error('User has not found.'));
            } else {
                done(err, user);
            }
        });
    });
    passport.use('login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            User.findOne({'email': email},
                function (err, user) {
                    // In case of any error, return using the done method
                    if (err) {
                        return done(err);
                    } else if (!user) {
                        console.log('User Not Found with username ' + email);
                        return done(null, false);
                    } else {
                        verifyCredentials(user, password, function (err, result) {
                            if (err) {
                                return done(err);
                            } else if (!result) { //if result is false, the credential are wrong.
                                return done(null, false);
                            } else {
                                return done(null, user);
                            }
                        });
                    }
                }
            );
        }
    ));

    function verifyCredentials(user, password, callback) {
        hash(password, user.salt, function (err, hash) {
            if (err) {
                return callback(err);
            } else {
                //True if match false if passwords doesn't match.
                return callback(null, user.password == hash);
            }
        })
    };
};

