import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function FoodDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState(null);

  useEffect(() => {

    axios
      axios
  .get(`http://surplr-backend.onrender.com/food/getFood/${id}`)
      .then((res) => {
        setFood(res.data.food);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  if (!food) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}

      <header className="flex justify-between items-center px-12 py-6 border-b border-white/10">

        <div
          onClick={() => navigate("/buyer")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <i className="fa-solid fa-sparkles text-cyan-400 text-3xl"></i>

          <h1 className="text-3xl font-bold">
            Surplr
          </h1>
        </div>

        <div className="flex gap-10 text-lg">

          <span className="cursor-pointer hover:text-purple-400">
            Browse
          </span>

          <span className="cursor-pointer hover:text-purple-400">
            Orders
          </span>

          <span className="cursor-pointer hover:text-purple-400">
            Favourites
          </span>

        </div>

      </header>

      

      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-2 gap-14">

        

        <div>

          <imgsurplr-backend.onrender.com
            src={`http:///uploads/${food.image}`}
            alt={food.title}
            className="rounded-3xl w-full h-[520px] object-cover"
          />

        </div>

        

        <div className="flex flex-col gap-6">

          <span className="bg-green-600 w-fit px-4 py-2 rounded-full">
            Fresh Today
          </span>

          <h1 className="text-5xl font-bold">
            {food.title}
          </h1>

          <p className="text-gray-400 text-lg">
            {food.description}
          </p>

          <div className="flex gap-4 mt-3">

            <span className="bg-white/10 px-4 py-2 rounded-xl">
               {food.location}
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-xl">
               {food.mealCategory}
            </span>

          </div>

          <div className="flex gap-5 mt-6">

            <div className="bg-white/10 rounded-2xl p-6">

              <p className="text-gray-400">
                Surplr Price
              </p>

              <h2 className="text-4xl font-bold text-green-400">
                ₹{food.pricePerMeal}
              </h2>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <p className="text-gray-400">
                Meals Left
              </p>

              <h2 className="text-4xl font-bold">
                {food.availableMeals}
              </h2>

            </div>

          </div>

          <div className="mt-4">

            <h3 className="text-xl mb-2">
              Pickup Time
            </h3>

            <p className="text-gray-300">

              {food.surplusStartTime}
              {" - "}
              {food.surplusEndTime}

            </p>

          </div>

          <button
            className="mt-8 bg-purple-600 hover:bg-purple-700 rounded-xl py-4 text-xl font-semibold"
          >
            Reserve Meal
          </button>

          <button
            onClick={() => navigate(-1)}
            className="border border-white/20 rounded-xl py-4 hover:bg-white/10"
          >
            Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodDetails;