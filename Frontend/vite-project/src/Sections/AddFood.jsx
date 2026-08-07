import React,{useState,useEffect} from 'react'
import Navbar from "../Components/Navbar"
import GlassCard from "../Components/GlassCard"
import Button from "../Components/Button"
import gsap from "gsap";
import axios from "axios";


function AddFood() {

    const [formData , setFormData] = useState({
        title: "",
        description: "",
        pickupLocation: "",
        mealCategory:"",
        foodType: "",
        originalPrice: "",
        surplrPrice: "",
        pickupDate: "",
        pickupEndTime: "",
        availableMeals: 1,
        image:null,
    })
    const handleSubmit=async (e)=>{
        alert("Form submitted successfully")
        e.preventDefault();
        console.log("Form Submitted");
        console.log(formData)

    

               try {
                 const token = localStorage.getItem("token");
                    console.log("Sending:", formData);


                    const data = new FormData();

                     data.append("title", formData.title);
                     data.append("description", formData.description);
                     data.append("pickupLocation", formData.pickupLocation);
                     data.append("mealCategory", formData.mealCategory);
                     data.append("foodType", formData.foodType);
                     data.append("originalPrice", formData.originalPrice);
                     data.append("surplrPrice", formData.surplrPrice);
                     data.append("pickupDate", formData.pickupDate);
                     data.append("pickupEndTime", formData.pickupEndTime);
                     data.append("availableMeals", formData.availableMeals);
                     
                     
                     data.append("image", formData.image);

                    console.log(formData);
                  const response = await axios.post(
                  "http://surplr-backend.onrender.com/food/createFood",
                   data,
                {
                  headers: {
                  Authorization: `Bearer ${token}`,
                },
           }
    );

    console.log(response.data);
} 
    catch (error) {
    console.log(error.response?.data);
    console.log(error.response?.status);
    console.log(error.response?.data?.message);
}
    };

    

    useEffect(() => {
    gsap.to(".healthyBowl", {
      rotationY: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });
  }, []);


   
    
  return (
    <>
        
    
       <div className="relative z-50">
            <Navbar />
        </div>

        <main className="bg-[#07070b] min-h-screen pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-lg ml-12 ">New Listing </p>
                
                <div className="h-[350px]">
                    <img src="/textures/healthy food-amico.svg" alt="food bowl" className="healthyBowl w-90  mb-12 " />
                </div>

                <h1 className="text-5xl font-bold text-white mt-3">
                    Create a Surplus Listing
                </h1>

                <p className="text-gray-400 mt-4 max-w-xl leading-7">
                     Add your food, upload photos and publish it instantly for nearby buyers.
                </p>

                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-7">
                        <div className="sticky top-28">
                            <div className="rounded-2xl border border-white/10 bg-[#0d0e15] p-6">
                                <div className="flex justify-between items-center mb-8">

                                    <h3 className="text-cyan-400 tracking-[3px] text-xs uppercase">
                                                Add Food
                                    </h3>
                                 
                                     <span className="text-violet-400 text-xs">
                                         #SR-0482
                                     </span>

                                </div>
                                <p className="text-xl mb-2 font-bold font-serif">Item Details</p>
                                <form onSubmit={handleSubmit}
                                    className="space-y-6 "
                                >
                                     {/* food name */}
                                    <GlassCard>
                                        <label className="block mb-2">
                                            Food Name 
                                        </label>
                                        <input  
                                            type="text"
                                            placeholder="eg paneer-tikka trays 6"
                                            className="p-4 rounded-xl w-full"
                                            value={formData.title}
                                            onChange={(e)=>
                                                setFormData({
                                                    ...formData,
                                                    title: e.target.value,
                                                })
                                            }
                                        />
                                    </GlassCard >


                                     <GlassCard className="flex flex-wrap gap-1 ">
                                            <GlassCard className="flex items-center p-2">
                                       <div
                                            className="flex items-center gap-2"
                                            onClick={() => {
                                              setFormData({
                                                ...formData,
                                                mealCategory: "meal",
                                              });
                                            }}
                                        >
                              <i className="fa-solid fa-bowl-food text-cyan-400"></i>
                              <span>Meals</span>
                          </div>
                                     </GlassCard>

                                     <GlassCard className="flex items-center p-2 ">
                                        <div className="flex items-center gap-2"
                                            onClick={()=>
                                                setFormData({
                                                    ...formData,
                                                    mealCategory:"snacks"
                                                })
                                                
                                            }
                                        >
                                          <i className="fa-solid fa-bread-slice text-amber-400"></i>
                                          <span>Snacks</span>
                                        </div>
                                     </GlassCard>

                                     <GlassCard className="flex items-center p-2 ">
                                        <div className="flex items-center gap-2"
                                            onClick={()=>
                                                setFormData({
                                                    ...formData,
                                                    mealCategory:"drinks"
                                                })
                                            }
                                        >
                                          <i className="fa-solid fa-carrot text-orange-400"></i>
                                          <span>Drinks</span>
                                        </div>
                                     </GlassCard>

                                     <GlassCard className="flex items-center p-2">
                                        <div className="flex items-center gap-2"
                                            onClick={()=>
                                                setFormData({
                                                    ...formData,
                                                    mealCategory:"dessert"
                                                })
                                            }
                                        >
                                          <i className ="fa-solid fa-cookie-bite text-yellow-300"></i>
                                          <span>Dessert</span>
                                        </div>
                                     </GlassCard>
                                    
                                    
                                     
                                     </GlassCard>

                                            {/* description */}

                                     <GlassCard>
                                        <label className="block mb-2">Description</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Brief , honest description -- about how it was "
                                            className="m-3 p-2 w-full rounded-xl resize-none"
                                            value={formData.description}
                                            onChange={(e)=>
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value
                                                })
                                            }
                                            
                                        
                                        ></textarea>
                                    </GlassCard>

                                    <div>
                                        <div className="flex justify-between items-center ">
                                            <div>
                                                <label className="block mb-2">
                                                                Original Price
                                                </label>
                                               <input
                                                type="number"
                                                placeholder="Original price " 
                                               className=" p-3 rounded-xl"
                                               value={formData.originalPrice}
                                               onChange={(e)=>
                                                setFormData({
                                                    ...formData,
                                                    originalPrice:e.target.value
                                                })

                                               }/>
                                            </div>
                                            
                                            <div>
                                                <label className="block mb-2">
                                                    Surplr Price
                                                </label>
                                               <input
                                                type="number"
                                                placeholder="Surplr price " 
                                               className="p-3 rounded-xl"
                                               value={formData.surplrPrice}
                                               onChange={(e)=>
                                                setFormData({
                                                    ...formData,
                                                    surplrPrice:e.target.value
                                                })
                                               }/>
                                            </div>


                                        </div>
                                        <div>
                                             <span className="block mb-2">Pickup Date</span>
                                           
                                             <GlassCard>
                                               <input
                                                 type="date"
                                                 className="w-full p-3 rounded-xl"
                                                 value={formData.pickupDate}
                                                 onChange={(e)=>
                                                    setFormData({
                                                        ...formData,
                                                        pickupDate:e.target.value
                                                    })
                                                 }
                                               />
                                             </GlassCard>

                                        </div>

                                        <div>
                                            <span className="block mb-2">Pickup End time </span>

                                            <GlassCard>
                                                <input 
                                                    type="time"
                                                    className="w-full p-3 rounded-xl"
                                                    value={formData.pickupEndTime}
                                                    onChange={(e)=>
                                                        setFormData({
                                                            ...formData,
                                                            pickupEndTime:e.target.value
                                                        })
                                                    }
                                                />
                                            </GlassCard>
                                        </div>


                                    </div>

                                    {/* location */}
                                    <div>
                                        <span className="block mb-2">Pickup Location </span>
                                        <GlassCard>
                                            <input
                                                type="text"
                                                placeholder="Enter your pickup location"
                                                className="w-full p-3 rounded-xl"
                                                value={formData.pickupLocation}
                                                onChange={(e)=>
                                                    setFormData({
                                                        ...formData,
                                                        pickupLocation:e.target.value
                                                    })
                                                }
                                            />
                                        </GlassCard>

                                        <span className="block mb-2">Food Type  </span>
                                        <GlassCard>
                                            <label className="flex items-center gap-6 p-3">
                                                <input
                                                    type="radio"
                                                    name="Food Type"
                                                    value="veg"
                                                    checked={formData.foodType==="veg"}
                                                    onChange={(e)=>
                                                        setFormData({
                                                            ...formData,
                                                            foodType: e.target.value
                                                        })
                                            
                                                    }
                                                />
                                                Veg
                                            </label>

                                            <label className="flex items-center gap-6 p-3">
                                                <input
                                                    type="radio"
                                                    name="Food Type"
                                                    value="non-veg"
                                                    checked={formData.foodType=="non-veg"}
                                                    onChange={(e)=>
                                                        setFormData({
                                                            ...formData,
                                                            foodType:e.target.value
                                                        })
                                                    }

                                                />
                                                Non-Veg
                                            </label>

                                            <label className="flex items-center gap-6 p-3">
                                                <input
                                                    type="radio"
                                                    name="Food Type"
                                                    value="both"
                                                    checked={formData.foodType=="both"}
                                                    onChange={(e)=>
                                                        setFormData({
                                                            ...formData,
                                                            foodType:e.target.value
                                                        })
                                                    }
                                                    
                                                />
                                                both
                                            </label>
                                        </GlassCard>



                                    </div>
                                    {/* image */}
                                   <label className="border-2 border-dashed border-cyan-500 h-56 flex flex-col items-center justify-center cursor-pointer rounded-2xl">
                                           <i className="fa-solid fa-cloud-arrow-up text-4xl"></i>
                                       
                                           <div className="text-center">
                                               <h2>Upload food image</h2>
                                               <p>Drag & Drop Image</p>
                                               <span>or Click to Upload</span>
                                           </div>
                                       
                                           <input
                                             type="file"
                                             accept="image/*"
                                             className="hidden"
                                             onChange={(e) =>
                                                 setFormData({
                                                     ...formData,
                                                     image: e.target.files[0]
                                                 })
                                             }
                                          />
                                        </label>
                                    <div>
                                        <GlassCard className="flex flex-col items-center gap-4">
                                            <span className="font-serif text-lg text-center"> Available Meals </span>
                                            <div className="flex items-center ">
                                                <button 
                                                type="button"
                                                className="bg-white/5  rounded-xl p-4 m-4 hover:text-lg hover:bg-cyan-500 "
                                                onClick={()=>
                                                    setFormData({
                                                        ...formData,
                                                        availableMeals: Math.max(1,formData.availableMeals-1)
                                                    })
                                                   
                                                }
                                            > - </button>
                                            <span>{formData.availableMeals}</span>

                                            <button
                                                type="button"
                                                className="'bg-white/5 rounded-xl p-4 m-4 hover:text-lg hover:bg-cyan-500"
                                                onClick={()=>
                                                    setFormData({
                                                        ...formData,
                                                        availableMeals:formData.availableMeals+1
                                                    })
                                                    
                                                }
                                            > + </button>
                      
                                            </div>
                                            </GlassCard>
                                    </div>

                                    <GlassCard
                                        className="p-2">
                                            <button type="submit"
                                            onClick={()=>console.log("Button clicked ")}
                                             className="p-3 m-4 w-full py-4 bg-cyan-800 rounded-3xl">Publish Listing </button>
                                    </GlassCard>
                                        
                                    

                                </form>

                            </div>

                        </div>
                    </div>
                    <div className="col-span-5">
                        <div>

                        </div>
                    </div>
                </div>



            </div>

        </main>
    </>
  )
}

export default AddFood