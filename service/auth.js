// const sessionidTousermap = new Map();
const jsonwebtoken = require('jsonwebtoken');
const secret = 'saroj';

function setUser(user){
    const payload = { 
        username: user.username,
        email: user.email,
        id: user._id
    }
    return jsonwebtoken.sign(payload, secret)
}

function getUser(token){
    if(!token) return null;
try{
    // console.log('token is  : ' + token);
    return jsonwebtoken.verify(token, secret);
}
catch(err){ console.error(err);}
}


module.exports = { setUser , getUser };