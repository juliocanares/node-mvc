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

var app = express();

// load express configuration
require('./config/express')(app);