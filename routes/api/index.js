const router = require("express").Router();
const venues = require("./venues.js");

// Book routes
router.use("/api/venues", venues);

module.exports = router;