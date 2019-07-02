const router = require("express").Router();
const venues = require("./venues");

// Book routes
router.use("/venues", venues);

module.exports = router;