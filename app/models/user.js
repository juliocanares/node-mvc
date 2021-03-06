var crypto = require('crypto');
var uuid = require('node-uuid');
var moment = require('moment');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
	      email: DataTypes.STRING,
	      firstname: DataTypes.STRING,
	      lastname: DataTypes.STRING,
	      fullname: DataTypes.STRING,
	      photo: DataTypes.STRING,
        hashedPassword: DataTypes.STRING,
        salt: DataTypes.STRING,

        tokenVerifyEmail: DataTypes.STRING,
        tokenResetPassword: DataTypes.STRING,
        tokenResetPasswordExpires: DataTypes.DATE,
        
        verified: {type: DataTypes.BOOLEAN, defaultValue: false}
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
        },
        hooks: {
          afterCreate: function (user, options) {
            var random = (Math.floor(100 + Math.random() * 300)).toString();
            options.password = options.password || '123';
            user.salt = user.makeSalt();
            user.photo = 'http://lorempixel.com/' + random + '/' + random + '/';
            user.hashedPassword = user.encryptPassword(options.password, user.salt);
            user.tokenVerifyEmail = uuid.v4();
            user.fullname = user.firstname + ' ' + user.lastname;
            return user.save();
        	}	
	    	}
	  	}
    );
    return User;
};