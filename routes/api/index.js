const router = require("express").Router();
const venues = require("./venues.js");

// Book routes
router.use("/venues", venues);

module.exports = router;