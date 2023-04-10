const mongoose = require("mongoose");
const Person = new mongoose.Schema({
    name: {
        type:String,
        required:true

    },
    age: {
        type:Number,
        required:true
    },
    favoratefoods:[String]

})
module.exports=mongoose.model("person",Person)