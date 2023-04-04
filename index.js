require('dotenv');
const express = require('express');
const app = express(); 
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

app.post('ad-login',async function(req,res){
    var activeDirectory = require('activedirectory');
    var adConfig = require('./config/ad.config.js');
    var ad = new activeDirectory(adConfig);
    var username = process.env.AD_USERNAME;
    var password  = process.env.AD_PASSWORD;
    const PORT  =  process.env.PORT || 6000;

    var username = 'john.smith@domain.com';
    var password = 'password';
    
    ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }
    
    if (auth) {
        console.log('User Authenticated!');
        res.send('')
    }
    else {
        console.log('Authentication failed!');
    }
});


})

app.listen(PORT);