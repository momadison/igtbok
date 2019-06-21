const router = require("express").Router();
const reservations = require("./reservations");

// Book routes
router.use("/reservations", reservations);

module.exports = router;