const express = require('express');
const router = express.Router();

const userR = require("../models/users")

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.get('/user', function(req,res){
    res.send({type: 'GET'});
    res.end();
})
router.post('/user', function(req,res, next){
    userR.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// userLogin
router.post('/userlogin', function(req,res,next){
  userR.findOne({username : req.body.username}).then(function(result){
      if(result != null){
        if(req.body.password == result.password){
            res.send(`WElcome ${result.name}`);
          }else{
              res.send("Wrong Password, Please try again!");
              res.end();
            }
      }else{
      res.send("Invalid user, Please Register first");
      res.end();
      }
      }).catch(next);
 });



module.exports = router;