const mongoose = require('mongoose')
require('dotenv').config()


const db = process.env.MONGO_CONNECTION_URL;
// const db = 'mongodb+srv://salil-admin:Vijayrajsur31@cluster0.8lvii.mongodb.net/pizza?retryWrites=true&w=majority';

module.exports = function () {
    mongoose.connect(db)
        .then(() => console.log(`Connected to ${db}...`))
        .catch((err) => console.log(err))
}