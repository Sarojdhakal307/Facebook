const express = require('express');
const loginrouter = express();
const UserDB = require('../models/UserinfoDB');

const render = require('ejs');
const path = require('path');

loginrouter.use(express.json());
loginrouter.use(express.urlencoded({ extended: false }));

loginrouter.set('view engine', 'ejs') ;
loginrouter.set('views', path.resolve('./views'));

loginrouter.get('/', (req, res) => {
    res.render('index');
});
loginrouter.post('/', (req, res) => {
    console.log(req.body);
    const {email , password} = req.body;
  
    // res.render('index');
    res.send('Data received');
  });

module.exports = loginrouter;