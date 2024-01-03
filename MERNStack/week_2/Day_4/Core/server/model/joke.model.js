const mongoose = require("mongoose");





const JokesSchema= new mongoose.Schema({
    setup:{
        type: String,
        required:[true , "{PATH} is required" ],
        minLength:[10 , "{PATH} musrt be at least 10"]
    },

    
    punchline:{
        type:String,
        required:[true , "{PATH} is required" ],
        minLength:[3 , "{PATH} musrt be at least 3"]
        
    }
},
{ timestamps: true }

)
const Joke = mongoose.model("Joke" ,JokesSchema)
module.exports= Joke