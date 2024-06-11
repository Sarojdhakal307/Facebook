const express = require('express');
const logoutrouter = express();

const cookieParser = require('cookie-parser');
logoutrouter.use(cookieParser());

const render = require('ejs');
const path = require('path');


logoutrouter.get('/', (req, res) => {
  res.render('logout')
});
logoutrouter.post('/', (req, res) => {
    console.log(res.cookies);
    try{
        res.clearCookie('uid');
    }catch(err){
        console.error(err);
        res.send('error in clear cookie')
    }
    // res.clearCookies();
    res.redirect('/logedout');
});

module.exports = logoutrouter;