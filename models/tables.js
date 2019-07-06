const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tablesSchema = new Schema({
    tables: { type: Array, required: true }
});

const Tables = mongoose.model("Tables", tablesSchema);

module.exports = Tables;