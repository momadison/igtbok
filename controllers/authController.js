const db = require("../models");
const passport = require('passport');

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
  fuckoff: function(req, res){
    console.log('fuck this project')
  },
  logout: function(req, res) {
    console.log('should be logging out..')
    req.logout()
    req.user = null
    res.redirect(`${process.env.PUBLIC_URL}/Loggedout`)
  }
}
