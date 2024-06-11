const {getUser} = require('../service/auth');

async function resToLogUser(req, res, next) {
const userUid = req.cookies.uid;
console.log(req.cookies.uid);

if(!userUid) return res.redirect('/login');

const user = getUser(userUid);
if(!user) return res.redirect('/login');

req.user = user;
next();
}

async function resToLogoutUser(req, res, next) {
    const userUid = req.cookies.uid;
    console.log(req.cookies.uid);
    
    // if(!userUid) return res.redirect('/login');
    
    const user = getUser(userUid);
    if(user) {
        console.log('You are login, please logout');
        return res.redirect('/home');
    req.user = user;
    }
    next();
    
    }


module.exports = { resToLogUser ,resToLogoutUser};