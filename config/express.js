/**
 * Load dependencies
 * ====================================================
 */
var express = require('express');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var flash = require('connect-flash');
var swig = require('swig');

module.exports = function (app) {
    /**
     * View engine setup
     * ====================================================
     */
    app.engine('html', swig.renderFile);
    app.set('views', global.cf.views);
    app.set('view engine', 'html');
    app.set('view cache', false);

    swig.setDefaults({cache: false});

    /**
     * Setup express middlewares
     * ====================================================
     */
    app.use(morgan('dev'));
    app.use(cookieParser('sample'));
    app.use(expressSession({
        secret: '123',
        resave: false,
        saveUninitialized: false
    }));
    app.use(flash());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static(global.cf.public));
};
