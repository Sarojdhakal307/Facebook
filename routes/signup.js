const express = require('express');
const signuprouter = express.Router();

const UserDB = require('../models/UserinfoDB');

signuprouter.get('/', (req, res) => {
    res.render('signup');
}
);
signuprouter.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password, DOB,gender } = req.body;
        const newUser = new UserDB({ firstName, lastName, email, username, password, DOB, gender });
        await newUser.save();
        res.send('Data saved');
    } catch (error) {
        res.send('Error saving data');
    }
}
);

module.exports = signuprouter;