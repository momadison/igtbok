const router = require("express").Router();
const venuesController = require("../../controllers/venuesController")

router.route("/")
    .post(venuesController.create)
    .get(venuesController.findOne)
    .put(venuesController.resetVenues)

module.exports = router;