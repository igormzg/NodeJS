
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var loginRouter = require('./routes/login.js');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/javascripts')));

//sql
//var mysql = require('mysql');
//var client = mysql.createConnection({
//    host: 'localhost',
//    port: '3200',
//    user: 'igormzg',
//    password: 'trbn6811QPO',
//    database: 'nodejsdb'
//});

//client.connect(function (err) {
//    if (err) {
//        console.log('Error connecting to Db');
//        return;
//    }
//    console.log('Connection established');
//});
//var a = client.query('select * from users', function (error, result) { 
//    return result;
//});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', loginRouter.login);
app.get('/index2', routes.index2);
app.post('/login', loginRouter.login);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
