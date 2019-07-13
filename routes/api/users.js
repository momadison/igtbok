const router = require('express').Router()
const userController = require('../../controllers/userController')
var passport = require('passport');

// This is attempting to use the other way of routing, but it doesn't agree with the way passport does things.
// matches with /api/users/[VALUE]
router.route('/getAllUsers')
  .get(userController.getAllUsers)

module.exports = router
