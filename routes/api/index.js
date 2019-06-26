const router = require("express").Router();
const reservations = require("./reservations");

// Book routes
router.use("/reservations", reservations);

router.get('/auth/google', passport.authenticate('google'));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/loggedin')
  }
)

module.exports = router;
