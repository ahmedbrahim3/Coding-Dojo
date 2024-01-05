const mongoose = require("mongoose");



const ProductSchema= new mongoose.Schema({
    title:{
        type: String,
        required:[true , "{PATH} is required" ],
        minLength:[3 , "{PATH} musrt be at least 3"]
    },

    
    price:{
        type:Number,
        required:[true , "{PATH} is required" ],
        
    },

    discription:{
        type: String,
        required:[true , "{PATH} is required" ],
        minLength:[10 , "{PATH} musrt be at least 10"]
    }
},
{ timestamps: true }

)
const Product = mongoose.model("Product" ,ProductSchema)
module.exports= Product