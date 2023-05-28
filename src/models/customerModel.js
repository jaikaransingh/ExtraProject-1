const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    DOB: {
        type: Date,
        required: true
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: 'Please enter a valid email address'
        }
    },
    address: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    }
}, { timestamps: true });

module.exports = model('Customer', customerSchema);
