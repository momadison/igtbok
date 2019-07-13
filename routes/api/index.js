const router = require("express").Router();
const venues = require("./venues");
const authentication = require("./authentication");
const users = require("./users");
const email = require("./email.js");

// Book routes
router.use("/venues", venues);
router.use("/auth", authentication);
router.use("/users", users)
router.use("/email", email);

module.exports = router;
