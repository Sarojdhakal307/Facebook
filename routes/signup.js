const express = require('express');
const signuprouter = express();

const UserDB = require('../models/UserinfoDB');
const shortID = require('shortid');

const path = require('path');


signuprouter.get('/', (req, res) => {
    console.log("signup page")
    res.render('signup');
}
);
signuprouter.post('/', async (req, res) => {
    try {
        const shortid = shortID.generate();


        console.log(req.body);
        const body = req.body;
        const { firstName, lastName, email, password, DOB,gender } = req.body;
        console.log(firstName, lastName, email, password);
        const newUser = new UserDB({ 
            firstName : body.firstName, 
            lastName : body.lastName, 
            fullName : body.firstName + " "+ body.lastName,
            email : body.email,
            username : body.username, 
            password : body.password,
            username : shortid,
            DOB :  body.DOB, 
            gender: body.gender,
         });
         console.log("i am okay");

         newUser.save().then((req,res)=>{
                console.log('Data saved');
                
         });
        res.redirect('/login');
        }
     catch (error) {
        console.log(error);
        res.send('Error saving data');
    }
}
);

module.exports = signuprouter;