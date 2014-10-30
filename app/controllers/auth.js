var passport = require('passport');

var basePath = 'auth/';

/**
 * Show the view page for signup
 */
exports.signupPage = function (req, res) {
    return res.render(basePath + 'signup');
};

/**
 * User signup
 */
exports.signup = function (req, res) {
  check('email', req.body.email).then(function (emailAvailable) {
        if (!emailAvailable) {
          req.flash('errorMessage', 'Email is not available');
          return res.redirect('back');
        }

        var options = {password: req.body.password};

        global.db.User.create(req.body, options).then(function (user) {
            loginUser(req, res, user);
        });
    });
};


/**
 * Show the view page for login
 */
exports.loginPage = function (req, res) {
    return res.render('auth/login');
};

/**
 * User login
 */
exports.login = function (req, res) {
    passport.authenticate('local', function (err, user, message) {
        if (err) {
            req.flash('errorMessage', 'Something was wrong');
            return res.redirect('back');  
        }
        if (!user){
            req.flash('errorMessage', message);
            return res.redirect('back');  
        }

        loginUser(req, res, user);
    })(req, res);
};

/**
 * Check helper to inspect values
 * in the authentication process
 */
var check = function (property, value) {
    var query = {where: {}};
    query.where[property] = value;
    return global.db.User.find(query).then(function (user) {
        return user === null;
    });
};

/**
 * Login manually after signup or when the user exists
 */
var loginUser = function (req, res, user) {
    req.login(user, function (err) {
        req.flash('successMessage', 'You are logged in');
    		return res.redirect('/users/');
    });
};