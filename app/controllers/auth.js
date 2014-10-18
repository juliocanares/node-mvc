var basePath = 'auth/';

/**
 * Show the view page for signup
 */
exports.signupPage = function (req, res) {
    return res.render(basePath + 'signup');
};

/**
 * Show the view page for login
 */
exports.loginPage = function (req, res) {
    return res.render('auth/login');
};