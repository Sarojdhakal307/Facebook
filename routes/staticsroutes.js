const express = require('express');
const staticsrouter = express();

staticsrouter.get('/', (req, res) => {
    res.redirect('/login');
});




module.exports = staticsrouter;