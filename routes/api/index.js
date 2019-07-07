const router = require("express").Router();
const venues = require("./venues");
const authentication = require("./authentication");

// Book routes
router.use("/venues", venues);
router.use("/auth", authentication);

module.exports = router;
