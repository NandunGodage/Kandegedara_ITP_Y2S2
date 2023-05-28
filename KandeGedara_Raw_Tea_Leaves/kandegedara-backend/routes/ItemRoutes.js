const express = require("express");
const router = express.Router();
const {addItem, getAllItems, updateItem, deleteItem, getItemByID} = require("../controllers/ItemController");

router.post("/", addItem);
router.get("/", getAllItems);
router.put("/", updateItem);
router.delete("/:id", deleteItem);
router.get("/:id", getItemByID);

module.exports = router;

