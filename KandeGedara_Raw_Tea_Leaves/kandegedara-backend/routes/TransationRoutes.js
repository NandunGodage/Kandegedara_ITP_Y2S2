
const express = require("express");
const router = express.Router();
const {
    addTransaction,
    getAllTransaction,
    updateTransaction,
    deleteTransaction,
    getTransactionByID
} = require("../controllers/TransactionController");

router.post("/", addTransaction);
router.get("/", getAllTransaction);
router.put("/", updateTransaction);
router.delete("/:id", deleteTransaction);
router.get("/:id", getTransactionByID);

module.exports = router;