const express = require('express');
const router = express.Router();

const userR = require("../models/users")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.get('/user', function(req,res){
    res.send({type: 'GET'});
    res.end();
})
router.post('/user', function(req,res){
    userR.create(req.body).then(function(user){
        res.send(user);
    });
});

// userLogin
router.post('/userlogin', function(req,res){
    //res.send(req.body.username);

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("userrs").findOne({username : req.body.username}, function(err, result) {
          if (err) throw err;
          if(result != null){
            if(req.body.password == result.password){
                console.log(`WElcome ${result.name}`);
              }else{
                  console.log("Wrong Password, Please try again!")
        }
          }else 
          console.log("Invalid user, Please Register first");
              
        
          db.close();
        });
      });
    res.end();
 });



module.exports = router;