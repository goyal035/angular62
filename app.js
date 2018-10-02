var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*********/
var multer  = require('multer');

global.upload = multer({ 
	dest: 'public/tmp',
	filename: function ( req, file, cb ) {
        cb(null, Date.now()+path.extname(file.originalname));
        //cb( null, file.originalname );
        //cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
    } 
});
global.locale = require('i18n');
locale.configure({
    locales:['en', 'de'],
    defaultLocale : 'de',
    directory: path.join(__dirname, 'public','locales')    
});

global.fs  = require('fs');
global.path = require('path');
global._ = require('lodash');
global.Common = require("./middlewares/common.js");
Common = new Common(5);

global.mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
//mongoose.connect('mongodb://localhost/courier');
mongoose.connect('mongodb://localhost:27017/courier',{ useNewUrlParser: true });

global.Users = require("./models/users.js");
global.UserTokens = require("./models/user_tokens.js");
global.basePath = path.join(__dirname, 'public');
/*********/

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(locale.init);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
