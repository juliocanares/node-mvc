var Chance = require('chance');
var chance = new Chance();

exports.start = function () {
    var seeds = [seedUser(3)];
    return global.db.Sequelize.Promise.all(seeds);
};

var seedUser = function (numOfUsers) {
    var i, username, email, promises = [];
    for (i = 0; i < numOfUsers; i++) {
        if (i == 0) {
            username = 'juliocanares';
            email = 'juliocanares@gmail.com';
        } 
        else {
            username = chance.hashtag().replace('#', '');
            email = chance.email();
        }

        promises.push(global.db.User.create({
            username: username,
            firstname: chance.name(),
            lastname: chance.last(),
            email: email,
            photo: 'http://lorempixel.com/200/200/'
        }));
    }

    return global.db.Sequelize.Promise.all(promises);
};