const router = require("express").Router();
const tablesController = require("../../controllers/tablesController")

router.route("/")
    .post(tablesController.create);

module.exports = router;