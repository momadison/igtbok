var passport = require('passport');

module.exports = function(app, accessProtectionMiddleware) {
  // Google Authenticaion Routing
  app.get('/api/auth/google', passport.authenticate('google'));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
    }
  )

  // Facebook Authenticaion Routing
  app.get('/api/auth/facebook', passport.authenticate('facebook'))

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/loggedin', failureRedirect: '/' })
    // function(req, res) {
    //   res.redirect(`${process.env.PUBLIC_URL}/loggedin`)
    // }
  )

  // Test authentication route
  app.get('/api/isAuth', accessProtectionMiddleware, function(req,res){
    res.json({
      message: 'You have accessed the protected endpoint!',
      yourUserInfo: req.user,
    })
  })

  app.get('/api/checkAuth', accessProtectionMiddleware, function(req,res){
    res.send(true)
  })
}
