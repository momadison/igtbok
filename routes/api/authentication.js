const router = require('express').Router()
const userController = require('../../controllers/authController')
var passport = require('passport');

// This is attempting to use the other way of routing, but it doesn't agree with the way passport does things.
// matches with /api/auth/[VALUE]
router.route('/google')
  .get(userController.googleLogin)
router.route('/google/callback')
  .get(userController.googleCB, userController.googleRedirect)
router.route('/facebook')
  .get(userController.facebookLogin)
router.route('/facebook/callback')
  .get(userController.facebookCB, userController.facebookRedirect)
router.route('/checkAuth')
  .get(userController.checkAuth)
router.route('/logout')
  .get(userController.logout)

module.exports = router
