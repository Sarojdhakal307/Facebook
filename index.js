const express = require('express');
const app = express();
const PORT = 2061;

const path = require('path');

const {connectMongoDB} = require('./server');

const loginrouter = require('./routes/login');
const signuprouter = require('./routes/signup');
const staticsrouter = require('./routes/staticsroutes');
const forgotpwrouter = require('./routes/forgotpw');
const logedoutrouter = require('./routes/logedout');
const logoutrouter = require('./routes/logout');

connectMongoDB("mongodb://127.0.0.1:27017/facebook").then(() => {
console.log("MongoDB connected");    
});

const cookieParser = require('cookie-parser');
const { resToLogUser , resToLogoutUser } = require('./middleware/auth');

const render = require('ejs');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', staticsrouter);
app.use('/login',resToLogoutUser, loginrouter);
app.use('/signup', signuprouter);
// app.use('/home', signuprouter);
app.get('/home', resToLogUser ,(req,res)=>{
    console.log('Home page');
    res.render('home');
});

//clear cookies
app.use('/logout', logoutrouter);

app.use('/logedout', logedoutrouter);

app.use('/forgotpassword', forgotpwrouter);

app.listen(2061,(req,res)=> {
    console.log('Server is running on port 2061');
});