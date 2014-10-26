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
  var options = {password: req.body.password};
  global.db.User.create(req.body, options).then(function (user) {
      loginUser(req, res, user);
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
        loginUser(req, res, user);
    })(req, res);
};

/**
 * Login manually after signup or when the user exists
 */
var loginUser = function (req, res, user) {
    req.login(user, function (err) {
    		return res.redirect('/users/' + user.username);
    });
};