var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser')


var HomepageRouter = require('./routes/Homepage');
var ServicesRouter = require('./routes/Services');
var AboutRouter = require('./routes/About');
var checkoutRouter = require('./routes/checkout');
var BaspaketRouter = require('./routes/Baspaket');
var PremiumPaketRouter = require('./routes/PremiumPaket');
var WebhostingRouter = require('./routes/Webhosting');
var addToCart = require('./routes/add_to_cart');
var remove = require('./routes/remove');
var loginpage = require('./routes/loginpage');
var loginconf = require('./routes/loginconf')
var registerpage = require('./routes/registerpage');
var registerconf = require('./routes/registerconf');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middle-ware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash())
app.use(
    session({
      secret: '123@abc',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 6000},
    }),
)

app.use('/', HomepageRouter);
app.use('/Services', ServicesRouter);
app.use('/About', AboutRouter);
app.use('/checkout', checkoutRouter);
app.use('/Baspaket', BaspaketRouter);
app.use('/PremiumPaket', PremiumPaketRouter);
app.use('/Webhosting', WebhostingRouter);
app.use('/add', addToCart);
app.use('/login', loginpage);
app.use('/loginconf', loginconf);
app.use('/register', registerpage);
app.use('/registerconf', registerconf);
app.use('/remove', remove);

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
