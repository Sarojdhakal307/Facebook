const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,

    },
    password:{
        type: String,
        required: true
    },
    DOB:{
        type: Date,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },



}, {timestamps: true} );

userSchema.pre('save', function(next) {
    this.fullName = `${this.firstName} ${this.lastName}`;
    next();
});

const UserDB = mongoose.model('UserDB', userSchema);

module.exports = UserDB;