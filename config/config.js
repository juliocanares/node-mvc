var _ = require('lodash');

module.exports = _.assign(
    require(__dirname + '/../config/env/base.js'),
    require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js') || {}
);