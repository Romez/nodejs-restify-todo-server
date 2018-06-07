module.exports = function (pool) {
    return {
        findOne: function (nickname, callback) {
            pool.query('SELECT * FROM users WHERE ?', {nickname}, function (err, user) {
                callback(err, user[0]);
            });
        },
        findAll: function (callback) {
            pool.query('SELECT * FROM users', callback);
        }
    };
};
