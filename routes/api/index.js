const router = require("express").Router();
const venues = require("./venues");
const authentication = require("./authentication");
const email = require("./email.js");

// Book routes
router.use("/venues", venues);
router.use("/auth", authentication);
router.use("/email", email);

module.exports = router;
