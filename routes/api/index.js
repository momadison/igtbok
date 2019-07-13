const router = require("express").Router();
const venues = require("./venues");
const authentication = require("./authentication");
const users = require("./users");
const email = require("./email.js");
<<<<<<< HEAD
const tables = require("./tables");
=======
const blog = require("./blog.js");
>>>>>>> 732d85f377b5d4795a4671d66e2d7e7600116f55

// routes
router.use("/venues", venues);
router.use("/tables", tables);
router.use("/auth", authentication);
router.use("/users", users)
router.use("/email", email);
router.use("/blog", blog);

module.exports = router;
