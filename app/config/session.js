const session = require('express-session'); // for creating session
const MongoDBStore = require('connect-mongo'); // for storing session in db

require('dotenv').config()

const db = process.env.MONGO_CONNECTION_URL;

module.exports = function(app){
    
    app.use(session({
        secret: process.env.Cookie_Secret,
        resave: false,
        saveUninitialized: false,
    
        store: MongoDBStore.create({
            mongoUrl: db
        }),
    
        cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
    }));
}