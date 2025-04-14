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
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("enter the correct email");
            }
        }
    },
    password: {
        type: String,
        minLength: 15,
        validate(value){
            if (!validator.isStrongPassword(value)){
                throw new Error("enter the correct password");
            }
        }
    },
    confirmPassword: {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);