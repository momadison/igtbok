const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Venues
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    newVenue: function(req, res) {
        db.Venues
            .updateOne({_id: req.body.id}, 
              {
                    venueName: req.body.venueName,
                    venueWidth: req.body.venueWidth,
                    venueLength: req.body.venueLength,
                    venueDate:  req.body.venueDate,
                    stageWidth: req.body.stageWidth,
                    stageLength: req.body.stageLength,
                    tableCount: req.body.tableCount,
                    seatCount: req.body.seatCount,
                    active: true
                })
            .then(dbModel => console.log("dbModel: ", dbModel))
            .catch(err => res.status(422).json(err))
    },
    findOne: function(req, res) {
      db.Venues
        .findOne({ active: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json)
    },
    getVenues: function(req, res) {
        db.Venues
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    resetVenues: function(req, res) {
        db.Venues
            .updateMany({}, { $set: {active: "false"} })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}