// const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// I'm not sure if we need one API for seat, & another to store table information. The logic is getting hairy.

const layoutSchema = new Schema({
  id: { type: String, required: true },
  x: { type: Number },
  y: { type: Number },
  seat: { type: Array },
  tableCheck: { type: Boolean },
  tablePrice: { type: Number },
  seatPrice: { type: Number },
  message: { type: String }
});

const Layout = mongoose.model("Layout", layoutSchema);

module.exports = Layout;