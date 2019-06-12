var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); //<-- required installing 'cors' (npm i cors --save)
var angularClientIndexHtml = require('./app.config').angularClientIndexHtml;
var app = express();
var favicon = require('serve-favicon');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var scheduler = require('node-schedule');
//var initPassport = require('./server/middlewares/passport-init');
var config = require('./app.config').currentEnvConfig;
var env = require('./app.config').currentEnv;
var appName = 'NeuroApplied';
// var config = require('./server/config').currentEnvConfig;
var MongoStore = require('connect-mongo')(session);
require('./models/db');
var routes = require('./routes');

app.use(cors());
// connect to mongodb
mongoose.Promise = require('bluebird');

console.warn('Starting as *** ' + appName + ' *** Configuration');
console.warn('NODE_ENV is *** ' + env + ' *** Configuration');
mongoose.connect(config.db, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30,
    useNewUrlParser: true
});
console.info('Connected to: ' + config.db);
routes(app, passport);
// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
//app.use(bodyParser());
app.set('view engine', 'ejs');

app.use(session({
  secret: 'NeuroApplied hashing',
  store: new MongoStore({
      mongooseConnection: mongoose.connection
  }),
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendFile(angularClientIndexHtml);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendFile(angularClientIndexHtml);
});

module.exports = app;
