const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRegistrationSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'Email ID is required']
    },
    dob: {
        type: Number,
        required: [false]
    },
    username: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: Number,
        required:[true, 'password is required']
    } 
    
});

const UserR = mongoose.model('userR',UserRegistrationSchema);

module.exports = UserR;