const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Tables
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}