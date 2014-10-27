var crypto = require('crypto');
var uuid = require('node-uuid');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
	      username: DataTypes.STRING,
	      email: DataTypes.STRING,
	      firstname: DataTypes.STRING,
	      lastname: DataTypes.STRING,
	      photo: DataTypes.STRING
	    },
	    {
	    	instanceMethods: {
          makeSalt: function () {
              return crypto.randomBytes(16).toString('base64');
          }
        }
	    }
    );
    return User;
};