const router = require("express").Router();
const venues = require("./venues.js");
const email = require("./email.js");

// Book routes
router.use("/venues", venues);
router.use("/email", email);

module.exports = router;