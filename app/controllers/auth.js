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