const express = require('express');
const signuprouter = express.Router();

const UserDB = require('../models/UserinfoDB');

signuprouter.get('/', (req, res) => {
    res.render('signup');
}
);
signuprouter.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName, email, password, DOB,gender } = req.body;
        console.log(firstName, lastName, email, password);
        const newUser = new UserDB({ 
            firstName : body.firstName, 
            lastName : body.lastName, 
            email : body.email,
            username : body.username, 
            password : body.password,
            DOB :  body.DOB, 
            gender: body.gender,
         });
         newUser.save().then((req,res)=>{
                console.log('Data saved');
         });
        }
     catch (error) {
        res.send('Error saving data');
    }
}
);

module.exports = signuprouter;