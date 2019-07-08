const db = require("../models");
const passport = require('passport');

var fbRedirect = process.env.NODE_ENV === 'production'
  ? 'https://heroku.com/loggedin'
  : 'http://localhost:3000/loggedin'

module.exports = {
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log("req query", req.query);
    db.User
      .findOne({ active: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json)
  },
  findOneOrCreate: function(req, res) {
    console.log(req.query)
    // db.User
    //   .findOneAndUpdate({})
  },
  checkAuth: function(req, res) {
    if(req.isAuthenticated()){
      res.send(true)
    } else {
      res.send(false)
    }
  },
  logout: function(req, res) {
    console.log('logging out...')
    req.logout()
    req.user = null
    res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
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
  }
}
