const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router()
const {claimOrder,cancelOrder,updateOrder,getAllOrders,getOrder}= require('../controllers/order.controller')

router.post('/claimOrder',authMiddleware,claimOrder)
router.delete('/cancelOrder/:id',authMiddleware,cancelOrder)
router.get('/getOrder/:id',authMiddleware,getOrder)
router.get('/getAllOrders',authMiddleware,getAllOrders)
router.put('/updateOrder/:id',authMiddleware,updateOrder)

module.exports=router