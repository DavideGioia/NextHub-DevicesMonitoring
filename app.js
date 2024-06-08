var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/pages/index');    // ROUTER INDEX
var logsRouter = require('./routes/pages/logs');      // ROUTER LOGS
var adminRouter = require('./routes/pages/admin');    // ROUTER ADMIN PANEL

var app = express();
process.setMaxListeners(0);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/logs', logsRouter);
app.use('/admin', adminRouter);

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


// Funzione per chiudere il pool di connessioni
const closePoolAndExit = async () => {
  try {
    await pool.end();
    console.log('Pool closed');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  } catch (err) {
    console.error('Error closing the pool', err);
    process.exit(1);
  }
};

// Gestione dei segnali di terminazione
process.on('SIGINT', closePoolAndExit);
process.on('SIGTERM', closePoolAndExit);

// Gestione degli errori non catturati
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  closePoolAndExit();
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  closePoolAndExit();
});



module.exports = app;
