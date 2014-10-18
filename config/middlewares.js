exports.isLogged = function (req, res, next) {
  return res.redirect('/auth/login/');
};
