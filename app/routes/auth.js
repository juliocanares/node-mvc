var express = require('express');
var router = express.Router();

var controller = require(global.cf.controllers + "/auth");

router.get('/login', controller.loginPage);
router.get('/signup', controller.signupPage);
router.post('/login', controller.login);
router.post('/signup', controller.signup);

module.exports = router;