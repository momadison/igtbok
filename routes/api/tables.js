const router = require("express").Router();
const tablesController = require("../../controllers/tablesController")

router.route("/")
    .post(tablesController.create)
    .get(tablesController.viewTables)
    .put(tablesController.update);

module.exports = router;