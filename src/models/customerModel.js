const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    DOB: {
        type: Date,
        required: true,
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    customerID: {
        type: String,
        required: true,
        unique: true,
        default  : uuidv4,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
    },
},{timestamps : true})



module.exports = mongoose.model('Customer', customerSchema)