var basePath = 'user/';

exports.index = function (req, res) {
    return res.render(basePath + 'index');
};