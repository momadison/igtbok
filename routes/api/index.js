const router = require("express").Router();
const venues = require("./venues.js");

// Book routes
router.use("/venues", venues);

router.get('/auth/google', passport.authenticate('google'));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/loggedin')
  }
)

module.exports = router;
