const router = require("express").Router();
const venuesController = require("../../controllers/venuesController")

router.route("/")
    .get(venuesController.getVenues)

module.exports = router;