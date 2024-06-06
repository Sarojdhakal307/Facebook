const express = require('express');
const app = express();
const PORT = 2061;

const path = require('path');

const {connectMongoDB} = require('./server');

connectMongoDB("mongodb://127.0.0.1:27017/facebook").then(() => {
console.log("MongoDB connected");    
});

const render = require('ejs');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

const loginrouter = require('./routes/login');
const signuprouter = require('./routes/signup');
const staticsrouter = require('./routes/staticsroutes');
const forgotpwrouter = require('./routes/forgotpw');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', staticsrouter);
app.use('/login', loginrouter);
app.use('/signup', signuprouter);
// app.use('/home', signuprouter);
app.get('/home',(req,res)=>{
    console.log('Home page');
    res.render('home');
});

app.use('/forgotpassword', forgotpwrouter);



app.listen(2061,(req,res)=> {
    console.log('Server is running on port 2061');
});