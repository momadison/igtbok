const router = require('express').Router()
const userController = require('../../controllers/userController')
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
// router.route('/facebook/callback')
//   .get(function(req,res,next){
//     console.log('first')
//     next()
//   },
//   function(req,res){
//     console.log('second')
//   })

module.exports = router

// module.exports = function(app, accessProtectionMiddleware) {
//   // Google Authenticaion Routing
//   app.get('/api/auth/google', passport.authenticate('google'));
//
//   app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     function(req, res) {
//       res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
//     }
//   )
//
//   // Facebook Authenticaion Routing
//   app.get('/api/auth/facebook', passport.authenticate('facebook'))
//
//   app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', { successRedirect: '/loggedin', failureRedirect: '/' })
//     // function(req, res) {
//     //   res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
//     // }
//   )
//
//   // Test authentication route
//   app.get('/api/isAuth', accessProtectionMiddleware, function(req,res){
//     res.json({
//       message: 'You have accessed the protected endpoint!',
//       yourUserInfo: req.user,
//     })
//   })
//
//   app.get('/api/checkAuth', accessProtectionMiddleware, function(req,res){
//     res.send(true)
//   })
// }
