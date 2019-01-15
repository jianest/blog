//引入项目模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(session({
	secret:'blog',
	cookie:{maxAge:1000*60*24*30},
	resave:false,
	saveUninitialized:true
}));
//视图文件夹设置
app.set('views', path.join(__dirname, 'views'));
//设置使用ejs模板
app.set('view engine', 'ejs');
//使用日志记录中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//使用static中间件，设置静态文件夹的路径
app.use(express.static(path.join(__dirname, 'public')));
//使用路由
app.use('/', indexRouter);
app.use('/users', usersRouter);



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
