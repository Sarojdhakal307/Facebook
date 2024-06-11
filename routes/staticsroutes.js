const express = require('express');
const staticsrouter = express();
 const {resToLogUser} = require('../middleware/auth');
const cookieParser = require('cookie-parser');

staticsrouter.use(cookieParser());
const { getUser} = require('../service/auth');

staticsrouter.get('/', (req, res) => {
    const userUid = req.cookies.uid;
    
    if(!userUid) {
        console.log('I have no userUid');
        res.redirect('/login');
    }
    console.log(userUid);
    const user = getUser(userUid);
    if(user){
        console.log('I have a userUid');
        res.redirect('/home');
    }
    else{
        console.log('getuser id not matched');
        console.log(getUser(userUid));
        res.redirect('/login');
    }
});




module.exports = staticsrouter;