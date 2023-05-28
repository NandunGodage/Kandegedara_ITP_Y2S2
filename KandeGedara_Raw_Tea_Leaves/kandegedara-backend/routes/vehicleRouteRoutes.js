const express =require("express");
const router=express.Router();
const{
    addRoute,
    getAllRoutes,
    updateRoutes,
    deleteRoute,
    getRouteById
}=require("../controllers/vehicleRouteController")

router.post("/add",addRoute);
router.get("/",getAllRoutes);
router.put("/update/:id",updateRoutes);
router.delete("/delete/:id",deleteRoute);
router.get("/get/:id",getRouteById);

module.exports=router;