const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { json } = require('express');

const url = 'mongodb://username:password@3.84.36.77/thisOne?retryWrites=true&w=majority'; //



app.get('/', (req, res) => {
    //res.send("This is the homepage baby OOOH hhYEEAH");

    MongoClient.connect(url, (err, database) => {
        if (err) return console.log(err);
       var db = database.db("thisOne");
        db.collection("Test").findOne({
           _id: "1"
        },
        function(err, result){
            if(err) return console.log(err);
            res.send(result.name);
            console.log(result.name);             
    });
});
});
app.listen(PORT, () => {
    console.log("Server is running...");

});

