const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const {createFood,deleteFood,updateFood,getFood,getAllListingData , getAvailableFood}=require('../controllers/food.controller')
const upload = require('../middleware/multer')
const router = express.Router();

///routes calling
router.post(
  "/createFood",
  (req, res, next) => {
    console.log("Route reached");
    next();
  },
  upload.single("image"),
  (req, res, next) => {
    console.log("After multer");
    console.log(req.file);
    next();
  },
  createFood
);
router.delete('/deleteFood/:id',authMiddleware,deleteFood)
router.put('/updateFood/:id',authMiddleware,updateFood)
router.get('/getFood/:id',getFood)
router.get('/getAllListingData',getAllListingData)
router.get('/getAvailableFood' ,getAvailableFood)

module.exports=router
