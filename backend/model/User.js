const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        minLength: 5,
        maxLength: 30,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        minLength: 5,
        maxLength: 30,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        minLength: 15,
    },
    confirmPassword: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);