/**
 * Load dependencies
 * ====================================================
 */
var Sequelize = require('sequelize');

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

/**
 * Configuration connection database
 * ====================================================
 */
var sequelize;
if (process.env.NODE_ENV == 'production') {
    //TODO setup database for production
} else {
    sequelize = new Sequelize(
        global.cf.db.name,
        global.cf.db.username,
        global.cf.db.password,
        global.cf.db.options
    );
}