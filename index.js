// server

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = new express();
const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(db.url, (err, database) => {
    if (err)
        return console.log(err);
    
    
    database = database.db("example")
    require('./app/routes')(app, {});


    app.listen(port, () => {
        console.log('Listening on port: ' + port);
    })
})
