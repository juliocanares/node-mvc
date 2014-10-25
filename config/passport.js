var config = require('./config');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/**
 * Serialize Sessions
 */
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
