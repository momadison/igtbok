const router = require("express").Router();
const venues = require("./venues.js");
const email = require("./email.js");
const blog = require("./blog.js");

// Book routes
router.use("/venues", venues);
router.use("/email", email);
router.use("/blog", blog);

module.exports = router;