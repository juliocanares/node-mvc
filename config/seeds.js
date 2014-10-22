var Chance = require('chance');
var chance = new Chance();

exports.start = function () {
    var seeds = [seedUser(20)];
    return global.db.Sequelize.Promise.all(seeds);
};

var seedUser = function (numOfUsers) {
    var i, promises = [];
    for (i = 0; i < numOfUsers; i++) {
        promises.push(global.db.User.create({
            username: chance.hashtag().replace('#', ''),
            firstname: chance.name(),
            lastname: chance.last(),
            photo: 'http://lorempixel.com/200/200/'
        }));
    }

    return global.db.Sequelize.Promise.all(promises);
};