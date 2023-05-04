var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser')


var HomepageRouter = require('./routes/homepage');
var ServicesRouter = require('./routes/services');
var AboutRouter = require('./routes/about');
var checkoutRouter = require('./routes/checkout');
var BaspaketRouter = require('./routes/baspaket');
var PremiumPaketRouter = require('./routes/premiumpaket');
var WebhostingRouter = require('./routes/webhosting');
var addToCart = require('./routes/add_to_cart');
var remove = require('./routes/remove');
var login = require('./routes/login');
var loginconf = require('./routes/loginconf')
var register = require('./routes/register');
var registerconf = require('./routes/registerconf');
var user = require('./routes/users');
var profile = require('./routes/profile');
var profileRouter = require('./routes/profile');
var ordering = require('./routes/ordering');


var app = express();

const PORT = parseInt(process.env.PORT || '3001');

var oneDay = 1000 * 60 * 60 *24;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middle-ware
app.use('/profile', profileRouter);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash())
app.use(session({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false 
}));




app.use('/', HomepageRouter);
app.use('/services', ServicesRouter);
app.use('/about', AboutRouter);
app.use('/checkout', checkoutRouter);
app.use('/baspaket', BaspaketRouter);
app.use('/premiumPaket', PremiumPaketRouter);
app.use('/webhosting', WebhostingRouter);
app.use('/add', addToCart);
app.use('/login', login);
app.use('/loginconf', loginconf);
app.use('/register', register);
app.use('/registerconf', registerconf);
app.use('/remove', remove);
app.use('/user', user);
app.use('/profile', profile);
app.post('/update-profile', function(req, res) {
  // Handle the form submission here
});
app.use('/ordering', ordering);

 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); //line 79
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

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});

// router.get('/logout', function(req, res, next){

// req.session.destroy();

//  res.redirect("/");

// });

module.exports = app;
 