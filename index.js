const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//connect to mongoDB
mongoose.connect("mongodb://localhost/test");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//const routes = require('./routes/api');
app.use('/api',require('./routes/api'));

//error handling
app.use(function(err, req, res, next){
    res.send({error: err.message});
});



app.listen(5000, function(req,res){
    console.log("Listening to port 5000");
});