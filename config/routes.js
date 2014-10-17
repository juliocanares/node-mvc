/**
 * Load routers
 * ====================================================
 */
var pagesRouter = require(global.cf.routes + '/pages');
var userRouter = require(global.cf.routes + '/user');

/**
 * Setup routers
 * ====================================================
 */
exports.init = function (app) {
    app.use('/', pagesRouter);
    app.use('/users', userRouter);
};