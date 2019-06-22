const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// I'm not sure if we need one API for seat, & another to store table information. The logic is getting hairy.

const seatReservation = new Schema({
  guest: { type: String, required: true },
  paid: { type: Boolean, required: true },
  tableNumber: { type: Integer, required: true },
  tableTier: { type: Integer, required: true },
  seatNumber: { type: Integer, required: true },
  uniqueID: { type: String, required: true },
  seatPrice: { type: Integer, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = seatReservation;
