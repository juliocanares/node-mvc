var Chance = require('chance');
var chance = new Chance();

exports.start = function () {
    var seeds = [seedUser(3)];
    return global.db.Sequelize.Promise.all(seeds);
};

var seedUser = function (numOfUsers) {
    var i, email, promises = [];
    for (i = 0; i < numOfUsers; i++) {
        email = i === 0 ? 'juliocanares@gmail.com' : chance.email();
        
        promises.push(global.db.User.create({
            firstname: chance.name(),
            lastname: chance.last(),
            email: email
        }));
    }

    return global.db.Sequelize.Promise.all(promises);
};