const express = require("express");
const router = express.Router();
const {addSell,getAllSoldTeaLeaves,updateSoldTealeaves,deleteSell,getSellingById} = require("../controllers/SellController");

router.post("/add",addSell);
router.get("/all",getAllSoldTeaLeaves);
router.put("/", updateSoldTealeaves);
router.delete("/:id",deleteSell);
router.get("/:id", getSellingById);

module.exports = router;
