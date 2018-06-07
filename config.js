require('dotenv').config()

module.exports = {
    db: {
        connectionLimit : process.env.CONNECTION_LIMIT || 10,
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    auth: {
        secret: process.env.DB_SECRET
    }
};
