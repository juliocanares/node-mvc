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

/**
 * Load all files in models folder
 * ====================================================
 */
var db = {};
fs.readdirSync(global.cf.models)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(global.cf.models, file));
        db[model.name] = model;
    });
