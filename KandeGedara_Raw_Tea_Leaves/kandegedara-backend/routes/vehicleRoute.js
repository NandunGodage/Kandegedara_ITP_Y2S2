const express=require("express");
const router=express.Router();
const{
    addVehicle, getAllVehicles, updateVehicles, deleteVehicle, getVehicleById
}=require("../controllers/vehicleControler");

router.post("/add",addVehicle);
router.get("/",getAllVehicles);
router.put("/update/:id",updateVehicles);
router.delete("/delete/:id",deleteVehicle);
router.get("/get/:id",getVehicleById);

module.exports=router;