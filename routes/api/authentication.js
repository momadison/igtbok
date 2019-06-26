var passport = require('passport');

module.exports = function(app, accessProtectionMiddleware) {
  // Google Authenticaion Routing
  app.get('/auth/google', passport.authenticate('google'));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/loggedin')
    }
  )

  // Facebook Authenticaion Routing
  app.get('/auth/facebook', passport.authenticate('facebook'))

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/loggedin')
    }
  )

  // Test authentication route
  app.get('/isAuth', accessProtectionMiddleware, function(req,res){
    res.json({
      message: 'You have accessed the protected endpoint!',
      yourUserInfo: req.user,
    })
  })

}
