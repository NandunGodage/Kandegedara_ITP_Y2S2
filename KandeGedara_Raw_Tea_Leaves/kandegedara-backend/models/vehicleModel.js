const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const vehicleSchema=new Schema({
    vID:{type:String,'default': ''},
    vModel:{type:String,'default': ''},
    vType:{type:String,'default': ''},
    vRegNo:{type:String,'default': ''},
    fuType:{type:String,'default': ''},
    maxWeight:{type:String,'default': ''},
    ownerFName:{type:String,'default': ''},
    ownerLName:{type:String,'default': ''},
    ownerMobile:{type:String,'default': ''},
    ownerNIC:{type:String,'default': ''},
    date:{ type:Date,default: Date.now(),}

})
const vehicle=mongoose.model("vehicle",vehicleSchema);
module.exports=vehicle;