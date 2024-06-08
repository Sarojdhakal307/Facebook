const express = require('express');
const loginrouter = express();
const UserDB = require('../models/UserinfoDB');

const { v4: uuidv4 } = require('uuid');
const {setUser , getUser } = require('../service/auth');

const render = require('ejs');
const path = require('path');
const { error } = require('console');

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
      res.redirect('/login', { err: "invalid User"});
      }
    else if(checkuser.password === password){
      const sessionid = uuidv4();
      setUser(sessionid , checkuser);
      res.cookie('sessionid', sessionid);
      res.redirect('/home');
    }
    else{
      res.redirect('/login', { err: "invalid Password"}
      );
    }
    
    // res.render('index');
    
  });

module.exports = loginrouter;