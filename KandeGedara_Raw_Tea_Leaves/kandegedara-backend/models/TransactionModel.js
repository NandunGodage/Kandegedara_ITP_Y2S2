const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    transactionID: {type: String, required: true},
    transactionType: {type: String, required: true},
    transactionDate: {type: String, required: true},
    transactionAmount: {type: String, required: true},
    transactionDescription: {type: String, required: true},
})

const Transaction = mongoose.model("Transaction",transactionSchema);
module.exports = Transaction;
