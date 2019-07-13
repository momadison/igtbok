const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Tables
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    viewTables: function(req, res) {
        db.Tables
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    update: function(req, res) {
        console.log(req.body, "req")
        db.Tables
            .update({_id: req.body._id}, {tables: req.body.tables})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    }
}