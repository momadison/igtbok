const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    
    header: {type: String},
    message: {type: String},
    title: {type: String}
});

const Banners = mongoose.model("Banners", bannerSchema);

module.exports = Banners;