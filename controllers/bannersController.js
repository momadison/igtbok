const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Banners
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getBanners: function(req, res) {
        console.log(req.query);
        db.Banners
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}