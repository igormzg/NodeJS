var mysql = require('mysql');
var client;

exports.connect = function (host, port, user, password, database) {
        client = mysql.createConnection({
        host: host,
        port: port,
        user: user,
        password: password,
        database: database
    });
};

exports.query = function (query,next) {
    //client.connect(function (err) {
        client.query(query, function (error, result) {
            next(result);
        });
    //});
   
};