const express = require('express');
const forgotpwrouter = express();

const UserDB = require('../models/UserinfoDB');

const render = require('ejs');
const path = require('path');

forgotpwrouter.use(express.json());
forgotpwrouter.use(express.urlencoded({ extended: false }));

forgotpwrouter.set('view engine', 'ejs') ;
forgotpwrouter.set('views', path.resolve('./views'));

forgotpwrouter.get('/', (req, res) => {
    console.log('request for forget password page');
    res.render('forgot');
});

forgotpwrouter.post('/', async(req, res) => {
res.send('home')
});

module.exports = forgotpwrouter;