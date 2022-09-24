const mongoose = require('mongoose');

// Schema
const profileSchema = new mongoose.Schema({

    name: {
        type: String,
        default: 'User',
        required: true,
        maxlength: 255,
        trim: true
    },

    phone : {
        type: String,
        // required: true,
        // unique: true,
        min: 10,
        max: 10
    },

    age: {
        type: String,
        required: true,
    },

    experience: {
        type: String,
        required: true,
    },



}, {timestamps : true});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;