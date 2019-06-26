const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// I'm not sure if we need one API for seat, & another to store table information. The logic is getting hairy.

const seatReservation = new Schema({
  guest: { type: String, required: true },
  paid: { type: Boolean, required: true },
  tableNumber: { type: Number, required: true },
  tableTier: { type: Number, required: true },
  seatNumber: { type: Number, required: true },
  uniqueID: { type: String, required: true },
  seatPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Seat = mongoose.model("Seat", seatReservation);

module.exports = Seat;
