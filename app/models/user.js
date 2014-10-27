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
          },
          authenticate: function (password) {
              return this.encryptPassword(password, this.salt) === this.hashedPassword;
          },
          encryptPassword: function (password, salt) {
              if (!password || !salt) return '';
              salt = new Buffer(salt, 'base64');
              return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
          },
          makeTokenResetPassword: function () {
              this.tokenResetPassword = uuid.v4();
              this.tokenResetPasswordExpires = moment().add(1, 'hour');
              return this.save();
          }
        }
	    }
    );
    return User;
};