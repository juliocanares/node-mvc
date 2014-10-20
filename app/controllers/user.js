var basePath = 'user/';

exports.index = function (req, res) {
	global.db.User.findAll().then(function(users){
    return res.render(basePath + 'index', {users: users});
	});
};


exports.profile = function (req, res) {
	global.db.User.find(req.params.id).then(function(user){
    return res.render(basePath + 'profile', {user: user});
	});
};