var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aoRouter = require('./routes/Ao');
var quanRouter = require('./routes/Quan');
var khachhangRouter = require('./routes/KhachHang');
var thongtinRouter = require('./routes/thongtin');
const session = require('express-session');
const mongoose = require('mongoose');
require('./models/user_models')
mongoose.connect(process.env.MONGODB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('>>DB connect<<'))
.catch((err)=>console.log('>> DB error',err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var hbs = require('hbs');

hbs.registerHelper('formatDate', function(a,type,t){
  let date = new Date(a)
  let month =  date.getMonth() + 1
  let year = date.getFullYear()
  month = month.toString().length == 1 ? '0' + month: month
  let day = date.getDate().toString().length == 1 ? '0' +  date.getDate().toString() :  date.getDate().toString()
  if(type==1)
  {
    return day + '/' + month + '/' + year
  }
  else{
    return year + '-' + month + '-' + day
  }
})

hbs.registerHelper('formatDate_', function(a,t){
  let date = new Date(a)
  let month =  date.getMonth() + 1
  let year = date.getFullYear()
  month = month.toString().length == 1 ? '0' + month: month
  let day = date.getDate().toString().length == 1 ? '0' +  date.getDate().toString() :  date.getDate().toString()
  return year + '-' + month + '-' + day
})

hbs.registerHelper('Num', function(v,t)
{
    return v+1
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.JWT_SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}))

app.use('/', loginRouter);
app.use('/index', indexRouter);
app.use('/Ao', aoRouter);
app.use('/Quan', quanRouter);
app.use('/users', usersRouter);
app.use('/khachhang', khachhangRouter);
app.use('/thongtin', thongtinRouter);

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
