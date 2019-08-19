const db = require("../models");
const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const URL = process.env.NODE_ENV === 'production' ? 'https://igtbok-org.herokuapp.com' : 'http://localhost:3000'

module.exports = {
  checkAuth: function(req, res) {
    if(req.isAuthenticated()){
      db.User.findOne({_id: req.user}).then((user)=>{
        console.log(user)
        res.send({status: true, security: user.authorization})
      })
    } else {
      res.send(false)
    }
  },
  getProductionStatus: function(req, res) {
    if(process.env.NODE_ENV === 'production'){
      res.send(true)
    } else {
      res.send(false)
    }
  },
  googleLogin: passport.authenticate('google'),
  googleCB: passport.authenticate('google', {
    failureRedirect: '/'
  }),
  googleRedirect: function(req, res) {
    res.redirect(`${URL}/Loggedin`)
  },
  facebookLogin: passport.authenticate('facebook'),
  facebookCB: passport.authenticate('facebook', {
    failureRedirect: '/'
  }),
  facebookRedirect: function(req, res) {
    res.redirect(`${URL}/Loggedin`)
  },
  localLogin: function(req, res, next){
    passport.authenticate('local', function(err, user, info){
      if(err) { return next(err) }
      if(!user) { res.json({'result': false}) }
      console.log(info)
      req.logIn(user, function(err){
        if(err) { return next(err) }
        res.json({'result': true})
      })
    })(req, res, next)
  },
  createLocalAccount: function(req,res){
    console.log(req.body)
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
      console.log(hash)
      db.User.findOne({username: req.body.username})
        .then(function(data){
          console.log(data)
          if(!data){
            db.User.create({
              username: req.body.username,
              password: hash,
              provider: 'local'
            }).then(function(){
              console.log('test before success')
              res.json({result: 'Success'})
            }).catch(function(err){
              console.log(err)
            })
          } else {
            console.log('test before failure')
            res.json({result: 'Username already exists'})
          }
        })
        .catch(function(err){
          console.log(err)
        })
    })
  },
  logout: function(req, res) {
    console.log('should be logging out..')
    req.logout()
    req.user = null
    res.redirect(`${process.env.PUBLIC_URL}/Loggedout`) //Should test why I left this instead of using URL.
  }
}
