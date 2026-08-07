const foodModel = require("../models/food.model");

// Create Food Listing
async function createFood(req, res) {
    try {
        const {
            title,
            description,
            pickupLocation,
            mealCategory,
            foodType,
            surplrPrice,
            pickupDate,
            pickupEndTime,
            availableMeals,
        } = req.body;

        // Validation
        if (
            !title ||
            !foodType ||
            !mealCategory||
            !pickupLocation ||
            surplrPrice == undefined ||
            !availableMeals ||
            !pickupDate ||
            !pickupEndTime
        ) {
            console.log("BODY:", req.body);
            console.log("FILE:", req.file);

            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const food = await foodModel.create({
            title,
            description,
            category: foodType,
            location: pickupLocation,
            mealCategory,
            availableMeals,
            pricePerMeal: surplrPrice,
            surplusStartTime: pickupDate,
            surplusEndTime: pickupEndTime,
            image: req.file ? req.file.filename : null,

            // Uncomment after authentication is completed
            // restaurant: req.user.id
        });

        return res.status(201).json({
            message: "Surplus listed successfully",
            food,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error while creating surplus listing",
        });
    }
}

// Delete Food Listing
async function deleteFood(req, res) {
    try {
        const delFood = await foodModel.deleteOne({
            restaurant: req.user.id,
            _id: req.params.id,
        });

        if (delFood.deletedCount === 0) {
            return res.status(404).json({
                message: "Surplus listing not found",
            });
        }

        return res.status(200).json({
            message: "Listing deleted successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error while deleting surplus listing",
        });
    }
}

// Update Food Listing
async function updateFood(req, res) {
    try {
        const {
            title,
            description,
            pickupLocation,
            foodType,
            surplrPrice,
            pickupDate,
            pickupEndTime,
            availableMeals,
        } = req.body;

        const updateFood = await foodModel.updateOne(
            {
                restaurant: req.user.id,
                _id: req.params.id,
            },
            {
                title,
                description,
                category: foodType,
                location: pickupLocation,
                availableMeals,
                pricePerMeal: surplrPrice,
                surplusStartTime: pickupDate,
                surplusEndTime: pickupEndTime,
            }
        );

        if (updateFood.matchedCount === 0) {
            return res.status(404).json({
                message: "No such listing found",
            });
        }

        return res.status(200).json({
            message: "Surplus listing updated successfully",
            updateFood,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error while updating surplus listing",
        });
    }
}

// Get Single Food Listing
async function getFood(req, res) {
    try {

        const getFoodById = await foodModel.findById(req.params.id);

        if (!getFoodById) {
            return res.status(404).json({
                message: "Food not found",
            });
        }

       return res.status(200).json({
    message: "Got your item listing",
    food: getFoodById,
});
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server error while getting listing",
        });
    }
}
// Get All Food Listings
async function getAllListingData(req, res) {
    try {
        const getAllFoodData = await foodModel.find({
            restaurant: req.user.id,
        });

        if (getAllFoodData.length === 0) {
            return res.status(200).json({
                message: "No listing data found",
            });
        }

        return res.status(200).json({
            message: "Your surplus listings fetched successfully",
            getAllFoodData,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error while fetching listings",
        });
    }
}

async function getAvailableFood(req, res) {
    try {

        const food = await foodModel.find({
            status: "available",
        });

        if (food.length === 0) {
            return res.status(200).json({
                message: "No food available",
                food: [],
            });
        }

        return res.status(200).json({
            message: "Available food fetched successfully",
            food,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server error while fetching food",
        });
    }
}

module.exports = {
    createFood,
    deleteFood,
    updateFood,
    getFood,
    getAllListingData,
    getAvailableFood
};