const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    IceBrand: String,
    Iceflavor: String,
    IceCost: Number
})
module.exports = mongoose.model("icecream",
icecreamSchema)