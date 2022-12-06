var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var mysql = require('mysql');
var con = require('./SQL/cart/config/database')

var HomepageRouter = require('./routes/Homepage');
var ServicesRouter = require('./routes/Services');
var AboutRouter = require('./routes/About');
var cashtoutRouter = require('./routes/cashtout');
var product1Router = require('./routes/product1');
var product2Router = require('./routes/product2');
var product3Router = require('./routes/product3');
var cartRouter = require('./SQL/cart/cart_conf');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', HomepageRouter);
app.use('/Services', ServicesRouter);
app.use('/About', AboutRouter);
app.use('/cashtout', cashtoutRouter);
app.use('/product1', product1Router);
app.use('/product2', product2Router);
app.use('/product3', product3Router);
app.use('/cart', cartRouter)

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
