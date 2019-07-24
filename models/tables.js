const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tablesSchema = new Schema({
    tables: 
        { 
            type: Array,
            ref: "layout" 
        },
    venue: {type: String, required: true},
    stageX: {type: Number, required: true},
    stageXRatio: {type: Number, required: true},
    stageY: {type: Number, required: true},
    stageYRatio: {type: Number, required: true},
    venueRef: {type: Object},
});

const Tables = mongoose.model("Tables", tablesSchema);

module.exports = Tables;