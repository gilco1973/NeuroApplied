/**
 * Created by Tal on 10 Jun,2016.
 */
'use strict';
var useragent = require('useragent');

function isIE(userAgent) {
    return useragent.is(userAgent).ie;
}

function getUserAgent(req, res, next) {

    if(isIE(req.headers['user-agent'])){
        return res.redirect('/browserNotSupported');
    }

    next();
};




module.exports = {
    getUserAgent
};