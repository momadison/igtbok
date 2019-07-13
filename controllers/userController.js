const db = require("../models");
const passport = require('passport');

module.exports = {
  getAllUsers: function(req, res) {
    db.User.find({}).then((users)=>{
      res.send({users: users})
    })
  },
  updateUser: function(req, res) {
    console.log(req.body)
    let userData = req.body
    db.User.findOneAndUpdate({username: userData.username, provider: userData.provider}, {authorization: userData.authorization}, {useFindAndModify: false, new: true}, function(err, result){
      res.send('Success!')
    })
    // db.User.findOneAndUpdate({username: req.})
  }
}
