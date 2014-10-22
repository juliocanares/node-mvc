var basePath = 'pages/';

exports.index = function (req, res) {
    return res.render(basePath + 'index');
};

exports.about = function (req, res) {
    return res.render(basePath + 'about');
};

exports.contact = function (req, res) {
    return res.render(basePath + 'contact');
};