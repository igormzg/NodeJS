exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};

exports.index2 = function (req, res) {
    res.render('index2', { title: 'EJS Title', scripts: ['./javascripts/todo.js'] });
};