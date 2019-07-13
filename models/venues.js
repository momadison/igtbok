const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venuesSchema = new Schema({
    venueName: { type: String, required: true },
    venueWidth: { type: Number, required: true },
    venueLength: { type: Number, required: true},
    venueDate: { type: Date, required: true },
    stageWidth: { type: Number },
    stageLength: { type: Number },
    tableWidth: { type: Number, required: true },
    tableCount: { type: Number, required: true },
    seatCount: { type: Number },
    active: {type: Boolean, required: true}
});

const Venues = mongoose.model("Venues", venuesSchema);

module.exports = Venues;