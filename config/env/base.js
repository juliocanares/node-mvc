var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3000,
    models: rootPath + '/app/models',
    views: rootPath + '/app/views',
    controllers: rootPath + '/app/controllers',
    middlewares: rootPath + '/config/middlewares',
    routes: rootPath + '/app/routes',
    public: rootPath + '/public'
};