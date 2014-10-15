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

module.exports = function (app, passport) {
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
