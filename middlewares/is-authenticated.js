/**
 * Created by Tal on 10 Jun,2016.
 */
'use strict';

function isAuthenticated(req, res, next) {
    if (req.user) {
        return next();
    } else {
        return res.redirect('/404');
    }
};


module.exports = {
    isAuthenticated: isAuthenticated
};