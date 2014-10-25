process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Load dependencies
 * ====================================================
 */
var express = require('express');

/**
 * Setup global basic configuration
 * ====================================================
 */
global.cf = require('./config/config');
global.md = require('./config/middlewares');
global.db = require('./config/sequelize');
global.utils = require('./config/utils');

var seeds = require('./config/seeds');

var passport = require('./config/passport');
var app = express();


// load express configuration
require('./config/express')(app);
require('./config/routes').init(app);
require('./config/errors')(app);


app.set('port', process.env.PORT || global.cf.port);

global.db.sequelize.sync({force: true}).then(function () {
	seeds.start().then(function () {
      global.lift(app);
  });
});