var basePath = 'user/';

exports.index = function (req, res) {
	global.db.User.findAll().then(function(users){
    return res.render(basePath + 'index', {users: users});
	});
};

exports.profile = function (req, res) {
	var query = {where:{id:req.params.id}};
	
	global.db.User.find(query).then(function(user){
    return res.render(basePath + 'profile', {user: user});
	});
};