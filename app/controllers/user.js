var basePath = 'user/';

exports.index = function (req, res) {
	global.db.User.findAll().then(function(users){
    return res.render(basePath + 'index', {users: users});
	});
};