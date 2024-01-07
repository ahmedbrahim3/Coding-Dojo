const mongoose = require("mongoose");



const AuthorShema= new mongoose.Schema({
    name:{
        type: String,
        required:[true , "{PATH} is required" ],
        minLength:[3 , "{PATH} musrt be at least 3"]
    },

},
{ timestamps: true }

)
const Author = mongoose.model("Author" ,AuthorShema)
module.exports= Author