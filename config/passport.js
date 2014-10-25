var config = require('./config');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/**
 * Serialize Sessions
 */
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

/**
 * Deserialize user data
 */
passport.deserializeUser(function (id, done) {
    global.db.User.findById(id).then(function (user) {
        done(null, user);
    })
});
