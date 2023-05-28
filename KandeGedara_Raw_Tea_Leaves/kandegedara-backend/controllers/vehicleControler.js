const VehicleModel=require("../models/vehicleModel");

//add vehicle
const addVehicle=(req,res)=>{
    const{vID,
        vModel,
        vType,
        vRegNo,
        fuType,
        maxWeight,
        ownerFName,
        ownerLName,
        ownerMobile,
        ownerNIC,
        date} =req.body;
   
const newVehicle=new VehicleModel({
        vID,
        vModel,
        vType,
        vRegNo,
        fuType,
        maxWeight,
        ownerFName,
        ownerLName,
        ownerMobile,
        ownerNIC,
        date
    })

    newVehicle.save().then(()=>{
        res.json("vehicle is added");
        res.status(200);
    }).catch((err)=>{
        console.log(err);
        res.status(400);
        console.log("error while adding vehicle details");
    })}


//get vehicle details(read)
const getAllVehicles=(req,res)=>{

    VehicleModel.find().then((VehicleModel)=>{
        res.json(VehicleModel);
        res.status(200);
    }).catch((err)=>{
        console.log(err);
        res.status(400);

    })
    
    }

//update vehicle details
const updateVehicles=(async(req,res)=>{
    let vehicleID=req.params.id; //the id came from link is fetching here
    const{vID,vModel,
        vType,vRegNo,fuType,maxWeight,
        ownerFName,ownerLName,ownerMobile,
        ownerNIC,Date }=req.body;
    
    
    
    const updateVehicle={
    vID,
    vModel,
    vType,
    vRegNo,
    fuType,
    maxWeight,
    ownerFName,
    ownerLName,
    ownerMobile,
    ownerNIC,
    Date   
    }


    const update=await VehicleModel.findByIdAndUpdate(vehicleID,
        updateVehicle).then(()=>{
        res.status(200).send({status:"user updated",})
    }).catch(()=>{
        console.log(err);
        res.status(500).send({status:"error withe updated data"});
        
    })
   
   
})

//delete vehicle details

const deleteVehicle=(async(req,res)=>{
    let vehicleID=req.params.id;

    await VehicleModel.findByIdAndDelete(vehicleID).then(()=>{
        res.status(200).send({status:"user deleted"});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with delete user",error:err.message});
    })
})

//get vehicle details by ID(search function)

const getVehicleById= (async(req,res)=>{
    let vehicleID=req.params.id;
   const user= await VehicleModel.findById(vehicleID).then((VehicleModel)=>{
        res.status(200).send({status:"user fetched",VehicleModel:VehicleModel});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error withe the fetching data"})
    })
})





module.exports={
    getVehicleById,
    deleteVehicle,
    updateVehicles,
    addVehicle,
getAllVehicles};