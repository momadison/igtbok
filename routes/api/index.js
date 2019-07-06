const router = require("express").Router();
const venues = require("./venues");
const tables = require("./tables");

// routes
router.use("/venues", venues);
router.use("/tables", tables);

module.exports = router;