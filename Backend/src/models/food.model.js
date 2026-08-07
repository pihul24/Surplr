const mongoose=require('mongoose')

const foodSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true,
        trim:true,
        },

        image:{
            type:String,
            default:"",
            trim:true
        },
    
        description:{
            type:String,
            trim:true
        },

    category:{
        type:String,
        required:true,
        enum:["veg","non-veg"],
        default:"veg",
        },

    mealCategory: {
    type: String,
    enum: [
        "meal",
        "snacks",
        "dessert",
        
    ],
    required: true
},
        
    location:{
        type:String,
        required:true,
        trim:true
    },

    status:{
        type:String,
        required:true,
        enum:["available","claimed","closed"],
        default:"available"
    },

    pricePerMeal:{
        type:Number,
        required:true,
        default:0 // For NGOs
    },

    originalPrice:{
        type:Number,
        required:true,
        default:0
    },


    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
        
    },

    rating:{
        type:Number,
        default:0,
        min:0,
        max:5
    },
    availableMeals:{
        type:Number,
        required:true,
        default:0,
    },

    distance:{
        type:Number,
        default:0,
        required:true,
        trim:true
    },
        
    surplusStartTime:String,
    surplusEndTime:String,
},

    {
        timestamps:true
    },
)
module.exports=mongoose.model("Food",foodSchema)