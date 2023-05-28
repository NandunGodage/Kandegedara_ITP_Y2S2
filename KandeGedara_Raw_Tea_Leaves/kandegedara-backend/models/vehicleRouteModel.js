const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const routeSchema= new Schema({
  routeName: { type: String, 'default': '' },
  description: { type: String, 'default': '' },
  address: { type: String, 'default': '' },
  city: { type: String, 'default': '' },
  distance:{type:Number,'default':''},
  duration:{type:Number,'default':''},
  coordinate: {
    lat: { type: Number, 'default': 0 },
    lng: { type: Number, 'default': 0 }
  },
})

const route=mongoose.model("route",routeSchema);
module.exports=route;

