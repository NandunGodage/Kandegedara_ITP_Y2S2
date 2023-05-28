const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    itemID: {type: String, required: true},
    itemName: {type: String, required: true},
    itemRate: {type: String, required: true},
    reduceAmountForWater: {type: String, required: true},
    reduceAmountForBag: {type: String, required: true},
    description: {type: String, required: true},
    itemImg: {type: String, required: true},
});

const Item = mongoose.model("Item",itemSchema);
module.exports = Item;
