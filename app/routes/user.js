var express = require('express');
var router = express.Router();

var controller = require(global.cf.controllers + "/user");

router.get('/', controller.index);
router.get('/:id', controller.profile);

module.exports = router;