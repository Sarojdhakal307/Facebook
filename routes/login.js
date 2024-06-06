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
loginrouter.post('/', async(req, res) => {
  console.log('Inside login post');
    console.log(req.body);
    const {email , password} = req.body;
    const checkuser = await UserDB.findOne({'email': email});
    console.log(checkuser);
    if(!checkuser){
      res.send('Invalid credentials');
    }
    else if(checkuser.password === password){
      
      res.redirect('/home');
    }
    else{
      res.send('Invalid credentials');
    }
    
    // res.render('index');
    
  });

module.exports = loginrouter;