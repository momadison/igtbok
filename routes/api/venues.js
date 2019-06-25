const router = require("express").Router();
const venuesController = require("../../controllers/venuesController")

router.route("/")
    .post(venuesController.create);

module.exports = router;