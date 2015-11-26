var sqlClient = require('../dbConnector');
sqlClient.connect('localhost', '3200', 'igormzg', 'trbn6811QPO', 'nodejsdb');

exports.index = function (req, res) {
    res.render('login', { title: 'Express' });
};

exports.login = function (req, res) {
    sqlClient.query('SELECT * FROM users', function (res1) { 
        res.render('login', { title: 'Express' });
    });
    
}