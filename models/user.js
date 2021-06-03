const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
        unique: false
    },
    dateOfBirth: {
        type: Date,
        required: true,
        unique: false
    }
}, {
    timestamps: true
});


const User = mongoose.model('user', userSchema);

module.exports = User;