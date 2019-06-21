const router = require("express").Router();
const reservecontroller = require("../../controllers/reservecontroller");

// Matches with "/api/reservecontroller"
router.route("/")
  .get(reservecontroller.findAll)
  .post(reservecontroller.create);

// Matches with "/api/reservecontroller/:id"
router
  .route("/:id")
  .get(reservecontroller.findById)
  .put(reservecontroller.update)
  .delete(reservecontroller.remove);

module.exports = router;