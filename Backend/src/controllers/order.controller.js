const orderModel = require('../models/order.model')
const foodModel = require('../models/food.model');
// Claim order
async function claimOrder(req,res){
    try{
        const {food,quantity,status } = req.body
        // checking empty fields for basic validation 
        if(!food||!quantity||!status)
        {
            return res.status(400).json({
                message:"All fields are require to claim order "
            })
        }
        // checking food listing 
        const foodItem = await foodModel.findById(food);
        if(!foodItem)
        {
            return res.status(404).json({
                message:"listing not found "
            })
        }
        
        //if found then  create order
        const claimOrder = await orderModel.create({
                food:foodItem._id,
                buyer:req.user.id,
                restaurant:foodItem.restaurant,
                quantity,
                status,
                totalPrice : quantity*foodItem.pricePerMeal
        })
        return res.status(200).json({
        message:"Order created successfully",
        claimOrder
        })
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).json({
            message:"Error in claiming order "
        })
    }
}

// cancel order 
async function cancelOrder(req,res){
    try{
        
        // delete order 
        const cancelOrder = await orderModel.deleteOne({
        buyer:req.user.id,
        _id:req.params.id
    })
    // check 
    if(cancelOrder.deletedCount===0)
    {
        return res.status(404).json({
        message:"No such order exsists"})

    }

        return res.status(200).json({
            message:"order cancelled successfully"
        })
    }
    catch(error)
    {
        return res.status(500).json({
            message:"Server error in canceling order "
        })
    }
}

//update order 
async function updateOrder(req,res){
    try{
        const{food,quantity,status}=req.body
        // find order which is to be updated 
        const foodItem = await foodModel.findById(food);
        // update oeder
        const updateOrder = await orderModel.updateOne(
            {
            buyer:req.user.id,
            _id:req.params.id
            },
        {
            food:foodItem._id,
            restaurant:foodItem.restaurant,
            quantity,
            status,
            
            totalPrice:foodItem.pricePerMeal*quantity
        }
    )

    // check
    if(updateOrder.matchedCount===0)
        {
            return res.status(404).json({
                message:"error in updation of record "
            })
        }

        return res.status(200).json({
            message:"Order updated successfully "
        })
    }catch(err)
    {
        return res.status(500).json({
            message:"Server error in updation of order "
        })
    }
}

// fetch all orders
async function getAllOrders(req,res){
    try{
        const getAllOrders=await orderModel.find({
            buyer:req.user.id
        })
        if(getAllOrders.length===0)
        {
            return res.status(200).json({
                message:"No order found "
            })
        }
        // success response 
        return res.status(200).json({
            message:"ALL orders fetched  successfully",
            getAllOrders
        })

    }catch(error)
    {
        return res.status(500).json({
            message:"Server error in fetching all orders "
        })
    }
}

// get a particular order
    async function getOrder(req,res){
    try{
        const getOrder=await orderModel.findOne({
            buyer:req.user.id,
            _id:req.params.id
        })
        if(!getOrder)
    {
        return res.status(404).json({
            message:"Order not found "
        })
    }

    // success response 
    return res.status(200).json({
        message:"Order fetched successfully",
        getOrder
    })
    }catch(error)
    {
        console.log(error)
        return res.status(500).json({
            message:"Server error in getting order"
        })
    }
    
}

module.exports={claimOrder,cancelOrder,updateOrder,getAllOrders,getOrder}