const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tablesSchema = new Schema({
    tables: 
        { 
            type: Array,
            ref: "layout" 
        },
    venue: {type: String}
});

const Tables = mongoose.model("Tables", tablesSchema);

module.exports = Tables;