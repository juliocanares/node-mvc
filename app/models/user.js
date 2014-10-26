module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
	      username: DataTypes.STRING,
	      email: DataTypes.STRING,
	      firstname: DataTypes.STRING,
	      lastname: DataTypes.STRING,
	      photo: DataTypes.STRING
	    }
    );
    return User;
};