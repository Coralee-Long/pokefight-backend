const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    first_name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    last_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        match: /.+\@.+\..+/,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        // no maxLength used because encryption makes it super long
    },
    score: {
        type: Number,
    }

})

module.exports = mongoose.model('User', User)