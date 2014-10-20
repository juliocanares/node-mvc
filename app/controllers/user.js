var basePath = 'user/';

exports.index = function (req, res) {
	global.db.User.findAll().then(function(data){
		return res.json({data: data})
    return res.render(basePath + 'index');
	});
};