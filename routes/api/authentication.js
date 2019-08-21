const router = require('express').Router()
const authController = require('../../controllers/authController')
var passport = require('passport');

// This is attempting to use the other way of routing, but it doesn't agree with the way passport does things.
// matches with /api/auth/[VALUE]
router.route('/google')
  .get(authController.googleLogin)
router.route('/google/callback')
  .get(authController.googleCB, authController.googleRedirect)
router.route('/facebook')
  .get(authController.facebookLogin)
router.route('/facebook/callback')
  .get(authController.facebookCB, authController.facebookRedirect)
router.route('/local')
  .post(authController.localLogin)
router.route('/createLocalAccount')
  .post(authController.createLocalAccount)
router.route('/checkAuth')
  .get(authController.checkAuth)
router.route('/logout')
  .get(authController.logout)
router.route('/getProductionStatus')
  .get(authController.getProductionStatus)

module.exports = router
