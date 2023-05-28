const express = require("express");
const router = express.Router();
const {addPurchaseStock,getAllPurchaseStock,updatePurchaseStock,deletePurchaseStock,getPurchaseTeaLeavesID} = require("../controllers/PurchaseTeaLeavesController");

router.post("/add", addPurchaseStock );
router.get("/getAll", getAllPurchaseStock);
router.put("/", updatePurchaseStock);
router.delete("/:id",deletePurchaseStock);
router.get("/:id", getPurchaseTeaLeavesID);

module.exports = router;
