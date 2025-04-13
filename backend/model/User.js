const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    confirmPassword:{
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);