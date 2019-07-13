const router = require('express').Router()
const userController = require('../../controllers/userController')
var passport = require('passport');

// matches with /api/users/[VALUE]
router.route('/getAllUsers')
  .get(userController.getAllUsers)
router.route('/updateUser')
  .post(userController.updateUser)

module.exports = router
