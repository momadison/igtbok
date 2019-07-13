const router = require("express").Router();
const db = require("../../models");

router.route("/")
    .post(function (req, res) {
        db.NewBlog.create (
            req.body
        )
        .then (
            data => {
                console.log(data);
                res.json(data);
            }
        )
    })
    .get(function (req, res) {
        db.NewBlog.find({}).then(
            data => {
                console.log(data);
                res.json(data);
            }
        )
    });

module.exports = router;