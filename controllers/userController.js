const db = require("../models");
const passport = require('passport');

var fbRedirect = process.env.NODE_ENV === 'production'
  ? 'https://heroku.com/loggedin'
  : 'http://localhost:3000/loggedin'

module.exports = {
  getAllUsers: function(req, res) {
    db.User.find({}).then((users)=>{
      res.send({users: users})
    })
  }
}
