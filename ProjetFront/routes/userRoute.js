const express = require('express');
const { logUser } = require('../controleurs/userCtrlFront');
const route = express.Router();
const userCtrlFront = require('../controleurs/userCtrlFront');

//LOGIN
route.get("/login", (req,res) => {res.render('../views/connexion')});
route.post('/login', userCtrlFront.logUser);
//RIGISTER
route.get('/register',(req,res) => {
    res.render('../views/register')
});
route.post('/register', userCtrlFront.addUser);

module.exports = route;