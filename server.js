const express = require('express');

const server = express();

const mongoose = require('mongoose');

const userController = require('./controllers/userController')

server.use(express.json());

mongo_db_url = 'mongodb://localhost:8080';

server.listen(8080, function () {

    console.log('server is running...');

    mongoose.connect(mongo_db_url).then(function () {

        console.log("DB  is up and running");

        server.get('/users', userController.getAllInfo);

        server.post('/users', userController.postInfo);

       

    }

    ).catch(function (error) {

        console.log('Cant Connect to DB: ' + error.message);

    });

});