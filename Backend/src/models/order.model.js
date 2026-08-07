const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food",
        required:true
    },

    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    quantity:{
        type:Number,
        required:true,
        default:1
    },
    status:{
        type:String,
        required:true,
        enum:["pending","claimed","cancelled","completed"]
    },
    totalPrice:{
        type:Number,
        required:true
    },
},
{timestamps:true}
)

module.exports=mongoose.model("Order",orderSchema)