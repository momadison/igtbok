const router = require("express").Router();
const venues = require("./venues");
const authentication = require("./authentication");
const users = require("./users");
const email = require("./email.js");
const blog = require("./blog.js");

// Book routes
router.use("/venues", venues);
router.use("/auth", authentication);
router.use("/users", users)
router.use("/email", email);
router.use("/blog", blog);

module.exports = router;
