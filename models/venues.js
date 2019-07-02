const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venuesSchema = new Schema({
    venueName: { type: String, required: true },
    venueWidth: { type: Number, required: true },
    venueLength: { type: Number, required: true},
    stageType: { type: String },
    stageShape: { type: String },
    stageWidth: { type: Number },
    stageHeight: { type: Number },
    stageLength: { type: Number },
    stageLocation: { type: String },
    tableCount: { type: Number, required: true },
    tableWidth: { type: Number, required: true },
    tableLength: { type: Number, required: true },
    seatCount: {type: Number},
    active: {type: Boolean, required: true}
});

const Venues = mongoose.model("Venues", venuesSchema);

module.exports = Venues;