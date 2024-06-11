const express = require('express');
const logedoutrouter = express();

const cookieParser = require('cookie-parser');
logedoutrouter.use(cookieParser());

const render = require('ejs');
const path = require('path');


logedoutrouter.get('/', (req, res) => {
  res.render('logedout')
});
logedoutrouter.post('/', (req, res) => {
    res.redirect('/login');
});

module.exports = logedoutrouter;