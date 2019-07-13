const db = require("../models");
const passport = require('passport');

var fbRedirect = process.env.NODE_ENV === 'production'
  ? 'https://heroku.com/loggedin'
  : 'http://localhost:3000/loggedin'

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
  googleLogin: passport.authenticate('google'),
  googleCB: passport.authenticate('google', {
    failureRedirect: '/'
  }),
  googleRedirect: function(req, res) {
    res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
  },
  facebookLogin: passport.authenticate('facebook'),
  facebookCB: passport.authenticate('facebook', {
    failureRedirect: '/'
  }),
  facebookRedirect: function(req, res) {
    res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
  },
  logout: function(req, res) {
    req.logout()
    req.user = null
    res.redirect(`${process.env.PUBLIC_URL}/loggedout`)
  }
}