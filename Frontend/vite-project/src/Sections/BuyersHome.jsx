import React,{useState,useEffect} from 'react'
import Navbar  from "../Components/Navbar"
import GlassCard from "../Components/GlassCard"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import SplitText from "../assets/animations/SplitText"
import TextType from "../assets/animations/TextType"
import "swiper/css";
import "swiper/css/autoplay";




import {useNavigate} from "react-router-dom";


import axios from "axios";



gsap.registerPlugin(ScrollTrigger);

import "swiper/css"

    function BuyersHome(){
        // const handleAnimationComplete = () => {
        // console.log("Split text animation finished");

          
            const navigate = useNavigate();

             const [food,setFood] = useState([])
             const [mealCategory,setMealCategory] = useState("all")
             const token = localStorage.getItem("token")

             const [searchTerm, setSearchTerm] = useState("");

             useEffect(() => {
    axios.get("http://surplr-backend.onrender.com/food/getAvailableFood",
            {
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }
        )

        .then((response) => {
            console.log(response.data);
            setFood(response.data.food);
            console.log(response.data.food);
        })
        .catch((error) => console.log(error));
}, []);

       const filteredFood = food.filter((item) => {
  const search = searchTerm.toLowerCase();

  return (
    (item.title || "").toLowerCase().includes(search) ||
    (item.location || "").toLowerCase().includes(search) ||
    (item.mealCategory || "").toLowerCase().includes(search)
  );
});

const searchResults =
  searchTerm.trim() === "" ? food : filteredFood;
//    if search not found

  
  return (
        <>
           
            <div
                className="background bg-black "
            >
            <header className="fixed top-0 left-0 z-20 w-full flex items-center justify-between px-10 py-5">
                <span className="text-4xl">Surplr</span>
                <Navbar className="text-2xl"/>
                
           </header>

            {/* main */}
            <section>
                <div className="flex flex-col justify-center items-center  gap-3 mb-8 ">
                    <SplitText
                        text="Surplr"
                        className="text-8xl font-bold mt-52"

                    />
                        <div className="flex items-center text-6xl font-bold mt-4 mb-8">
                                    <TextType
                                      text="Honestly"
                                      className="font-playfair italic text-purple-700"
                                    />
                                    <span className="mx-2"></span>
                                    <TextType
                                      text="priced"
                                      className="font-sans font-bold text-white"
                                    />
                        </div>
                        <p className="w-[900px] text-lg">Surplr is built on a simple promise—every meal you discover is an opportunity to create impact.
                             We collaborate with verified restaurant partners to bring you freshly prepared surplus meals that remain perfectly good to enjoy . 
                            Every listing is monitored in real time, displaying transparent pricing, pickup availability, and quality verification so you can make informed choices with complete confidence.
                             More than a marketplace, Surplr is a trusted ecosystem where technology, sustainability, 
                             and community come together—empowering you to save on quality food while helping build a future where good meals are shared, not discarded.</p>
                             
                </div>
            </section>
            
                
                    <section>
  <div className="filter relative w-[600px] h-16 ml-60 mt-55">
    <i className="absolute fa-solid fa-magnifying-glass top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>

    <input
    type="text"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    placeholder="Search food, restaurant"
    className="w-full h-12 rounded-xl bg-transparent border border-white/20 pl-12 outline-none"
/>

    <div className="flex justify-between gap-10 items-center mt-8">

      <div className="flex flex-col items-center">
        <i className="fa-solid fa-leaf text-green-500 text-2xl"></i>
        <span>Veg</span>
      </div>

      <div className="flex flex-col items-center">
        <i className="fa-solid fa-drumstick-bite text-red-500 text-2xl"></i>
        <span>Non-Veg</span>
      </div>

      <div className="flex flex-col items-center">
        <i className="fa-solid fa-seedling text-yellow-400 text-2xl"></i>
        <span>Both</span>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setMealCategory("snacks")}
      >
        <i className="fa-solid fa-burger text-orange-400 text-2xl"></i>
        <span>Snacks</span>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setMealCategory("dessert")}
      >
        <i className="fa-solid fa-ice-cream text-pink-400 text-2xl"></i>
        <span>Dessert</span>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setMealCategory("drink")}
      >
        <i className="fa-solid fa-mug-hot text-cyan-400 text-2xl"></i>
        <span>Drink</span>
      </div>

    </div>
  </div>
</section> 

  {searchTerm.trim() !== "" && searchResults.length === 0 ? (
  <div className="flex justify-center items-center mt-24 mb-24">
    <div className="bg-white/10 border border-red-500 rounded-2xl p-8 text-center">
      <h2 className="text-3xl font-bold text-red-400">
        Item Not Found
      </h2>

      <p className="text-gray-300 mt-3">
        "{searchTerm}" is not listed today.
      </p>

      <p className="text-gray-500 mt-2">
        Try another food name or check back later.
      </p>
    </div>
  </div>
) : null}
{searchResults.length > 0 && (
  <>

<section className="mealRow mt-32 mb-15">
    <span className="m-20 font-bold font-serif text-4xl ">MEALS</span>
    <div className="meals w-full overflow-hidden px-6">
    <Swiper 
    className="w-full py-9 px-10"
        modules={[Autoplay]}
    slidesPerView={"auto"}
    spaceBetween={20}
    loop={true}
    speed={2000}
    allowTouchMove={false}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    >
        {searchResults
  .filter((item) => item.mealCategory === "meal")
  .map((item) => (
    <SwiperSlide key={item._id} style={{ width: "350px" }}>
      <GlassCard className="w-[340px]">
        <img
          src={`http://surplr-backend.onrender.com/uploads/${item.image}`}
          alt={item.title}
          className="w-full h-52 object-cover rounded-xl"
        />

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold m-4">{item.title}</h2>

          <div>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <span className="ml-2">{item.rating}</span>
          </div>
        </div>

        <div
          className="w-full h-1.5 rounded-xl border border-white/30"
          style={{ width: `${item.availableMeals * 10}%` }}
        ></div>

        <div className="flex justify-between items-center p-4">
          <span>₹{item.pricePerMeal}</span>

          <i className="fa-solid fa-circle text-green-600"></i>
        </div>

        <button
            onClick={() => navigate(`/food/${item._id}`)}
            className="m-4 p-3 w-[90%] rounded-xl bg-purple-600"
        >
                View Details
        </button>
      </GlassCard>
    </SwiperSlide>
))}
    </Swiper>
    </div>
</section>

    {/* snacks row */}

    <section className="snacksRow mt-32 mb-32">
    <span className="m-20 font-bold font-serif text-4xl ">SNACKS</span>
    <div className="snacks w-full overflow-hidden px-6">
    <Swiper 
    className="w-full py-9 px-10"
        modules={[Autoplay]}
    slidesPerView={"auto"}
    spaceBetween={20}
    loop={true}
    speed={2000}
    allowTouchMove={false}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    >
        {searchResults
  .filter((item) => item.mealCategory === "snacks")
  .map((item) => (
    <SwiperSlide key={item._id} style={{ width: "350px" }}>
      <GlassCard className="w-[340px]">
        <img
          src={`http://surplr-backend.onrender.com/uploads/${item.image}`}
          alt={item.title}
          className="w-full h-52 object-cover rounded-xl"
        />

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold m-4">{item.title}</h2>

          <div>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <span className="ml-2">{item.rating}</span>
          </div>
        </div>

        <div
          className="w-full h-1.5 rounded-xl border border-white/30"
          style={{ width: `${item.availableMeals * 10}%` }}
        ></div>

        <div className="flex justify-between items-center p-4">
          <span>₹{item.pricePerMeal}</span>

          <i className="fa-solid fa-circle text-green-600"></i>
        </div>

       <button
          onClick={() => navigate(`/food/${item._id}`)}
          className="m-4 p-3 w-[90%] rounded-xl bg-purple-600"
       >
               View Details
        </button>
      </GlassCard>
    </SwiperSlide>
))}
    </Swiper>
    </div>
</section>

{/* desert row  */}

    
    

    <section className="dessertRow mt-32 mb-32">
    <span className="m-20 font-bold font-serif text-4xl ">DESSERTS & SWEETS</span>
    <div className="dessert w-full overflow-hidden px-6">
    <Swiper 
    className="w-full py-9 px-10"
        modules={[Autoplay]}
    slidesPerView={"auto"}
    spaceBetween={20}
    loop={true}
    speed={2000}
    allowTouchMove={false}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
    }}
    >
        {searchResults
  .filter((item) => item.mealCategory === "dessert")
  .map((item) => (
    <SwiperSlide key={item._id} style={{ width: "350px" }}>
      <GlassCard className="w-[340px]">
        <img
          src={`http://surplr-backend.onrender.com/uploads/${item.image}`}
          alt={item.title}
          className="w-full h-52 object-cover rounded-xl"
        />

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold m-4">{item.title}</h2>

          <div>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <span className="ml-2">{item.rating}</span>
          </div>
        </div>

        <div
          className="w-full h-1.5 rounded-xl border border-white/30"
          style={{ width: `${item.availableMeals * 10}%` }}
        ></div>

        <div className="flex justify-between items-center p-4">
          <span>₹{item.pricePerMeal}</span>

          <i className="fa-solid fa-circle text-green-600"></i>
        </div>

       <button
         onClick={() => navigate(`/food/${item._id}`)}
        className="m-4 p-3 w-[90%] rounded-xl bg-purple-600"
        >
         View Details
       </button>
      </GlassCard>
    </SwiperSlide>
))}
    </Swiper>
    
    </div>
</section>
</>
  )}
      </div>                    
          
    </>
  );

}

export default BuyersHome;