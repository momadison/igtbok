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
  },
  updateUser: function(req, res) {
    console.log(req.body)
    let userData = req.body
    db.User.findOneAndUpdate({username: userData.username, provider: userData.provider}, {authorization: userData.authorization}, {useFindAndModify: false}, function(err, result){
      console.log('After update')
      console.log(result)
      res.send('Success!')
    })
    // db.User.findOneAndUpdate({username: req.})
  }
}
