const {getUser} = require('../service/auth');

async function resToLogUser(req, res, next) {
const userUid = req.cookies.sessionid;
console.log(req.cookies.sessionid);

if(!userUid) return res.redirect('/login');

const user = getUser(userUid);
if(!user) return res.redirect('/login');

req.user = user;
next();

}


module.exports = { resToLogUser };