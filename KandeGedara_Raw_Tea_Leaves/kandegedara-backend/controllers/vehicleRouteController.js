const RouteModel=require("../models/vehicleRouteModel");


//add route

const addRoute=(req, res) => {
    const {
        routeName,
        description,
        address,
        city,
        duration,
        distance,
        coordinate }=req.body;
    
    const newRoute=new RouteModel({
        routeName,
        description,
        address,
        city,
        duration,
        distance,
        coordinate
    })
    newRoute.save().then(()=>{
        res.json("route is added");
        res.status(200);
    }).catch((err)=>{
       
        console.log(err);
        res.status(400);
        console.log("error while adding vehicle details");
    })}

   
//get all routes   

const getAllRoutes=(req,res)=>{

    RouteModel.find().then((RouteModel)=>{
        res.json(RouteModel);
        res.status(200);
    }).catch((err)=>{
        console.log(err);
        res.status(400);
    })
}

//update route details
const updateRoutes=(async(req,res)=>{
    let routeID=req.params.id; //the id came from link is fetching here
    const{ routeName,
        description,
        address,
        city,
        duration,
        distance,
        coordinate }=req.body;
      
    const updateRoute={  
        routeName,
        description,
        address,
        city,
        duration,
        distance,
        coordinate
    }


    const update=await RouteModel.findByIdAndUpdate(routeID,
        updateRoute).then(()=>{
        res.status(200).send({status:"route updated",})
    }).catch(()=>{
        console.log(err);
        res.status(500).send({status:"error with updated data"});
        
    })
   
   
})

//delete route details
const deleteRoute=(async(req,res)=>{
    let routeID=req.params.id;

    await RouteModel.findByIdAndDelete(routeID).then(()=>{
        res.status(200).send({status:"route deleted"});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with delete route",error:err.message});
    })
})

//get rote by id
const getRouteById= (async(req,res)=>{
    let routeID=req.params.id;
   const user= await RouteModel.findById(routeID).then((RouteModel)=>{
        res.status(200).send({status:"route fetched",RouteModel:RouteModel});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error withe the fetching data"})
    })
})



module.exports={
    addRoute,
    getAllRoutes,
    updateRoutes,
    deleteRoute,
    getRouteById

}