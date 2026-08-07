const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true

    },
    email:
    {
        required:true,
        unique:true,
        type:String,
        lowercase:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
        trim:true
    },

    role:{
        type:String,
        required:true,
        enum:["restaurant","buyer","admin"],
        default:"buyer"
    },
    phone:{
        type:String,
        required:true
    },
    },
    {timestamps:true}
)

    module.exports= mongoose.model("User",userSchema )
