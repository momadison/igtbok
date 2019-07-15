const router = require("express").Router();
const bannersController = require("../../controllers/bannersController")

router.route("/")
    .post(bannersController.create)
    .get(bannersController.getBanners)
    
module.exports = router;