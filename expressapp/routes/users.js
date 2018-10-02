var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', function(req, res, next){
  addToDb(req, res);
});

function addToDb(req, res){
  //console.log(req.body.username,req.body.email,req.body.password);
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password: User.hashPassword(req.body.password),
    typeOfUser: req.body.typeOfUser
  });

  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
    //console.log(e.errmsg);
  });

}

router.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(501).json(err);
    }
    if (!user) {
      return res.status(501).json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(501).json(err);
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

// router.get('/user', isValidUser, function(req, res, next){
//   return res.status(200).json(req.user);
// });

router.get('/logout', function(req, res, next){
  console.log('logout');
  req.logOut();
  return res.status(200).json({message:'logout successsful'});
});

router.get('/checkauth', (req, res) => {
  if(req.isAuthenticated()) {
    console.log(req.isAuthenticated(), "hello");
    return res.send({
      status: true
    });
  }
  return res.send({
    status: false
  })
});

// function isValidUser(req, res, next){
//   if(req.isAuthenticated()) next();
//   else return res.status(401).json({message:'Unauthorized request'});
// }


module.exports = router;
