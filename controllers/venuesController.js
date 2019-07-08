const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Venues
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        console.log("req query", req.query);
      db.Venues
        .findOne({ active: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json)
    }
}