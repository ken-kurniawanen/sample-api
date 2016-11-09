var express = require('express');
var session = require("express-session");
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');


//db part
//var db = require('./db.js');


var v1 = require('./routes/v1');


//var authorization = require('./routes/authorization');
//var users = require('./routes/users');
//var api = require('./routes/api');
var app = express();
global.appRoot = path.resolve(__dirname);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.listen(3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
    //app.use(session({secret: 'arkenus_session_secret',cookie:{secret: 'arkenus_session_secret'}}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1',v1);
app.use('/',v1);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.message);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
