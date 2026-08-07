import React,{useEffect} from 'react'
import Button from "../Components/Button"
import GlassCard from "../Components/GlassCard"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { UtensilsCrossed } from "lucide-react";
import {Store} from "lucide-react";
import {UsersRound} from "lucide-react";
import Lottie from "lottie-react"
import avtarAnimation from "../assets/animations/Little power robot.json"
import CountUp from "react-countup"
import Navbar from "../Components/Navbar"


gsap.registerPlugin(ScrollTrigger);

function Profile() {
        useEffect(() => {
            gsap.to(".network",{
                
                rotate:360,
                repeat:-1,
                duration:5,
                transformOrigin: "center center",
                ease:"none",


            });
        },[])
  return (
    <>
    <Navbar className=" flex gap-45 fixed top-5 left-10 right-5 w-full z-1 text-xl" />
    <div
    className=" bg-no-repeat bg-cover flex w-[1800px] h-[900px] "
  style={{
    perspective: "1000px",
    backgroundImage: "url('/textures/profileBackground.png')"
  }}
>
        <div 
            className="relative w-[1200px] h-[600px] mx-auto mt-32 bg-white/10 rounded-[35px]  "
            style={{
            transform: "rotateY(-5deg) rotateX(7deg)",
                
            }}>

               
        <div className="absolute  left-1/2 -translate-x-1/2 -top-12 z-10 w-[700px] h-[185px] bg-white/5 rounded-[30px] border border-white/20">
                <div className="h-full flex flex-col  pt-20 items-center border border-violet-700/50">
                        <h1 className="text-3xl font-bold mt-2">
                            Pihul Jain
                        </h1>
                        
                        <p className="text-gray-300 text-base mt-1">
                            pihul123@gmail.com
                        </p>
                        <p className="text-gray-300 text-base ">
                            Role : Buyer
                        </p>
                        <Button className="mt-5 px-5 py-2"> Edit Profile</Button>
                </div>
        </div>

            {/* Avatar */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-44 z-20 w-56 h-56 rounded-full border-4 border border-violet-900/80 bg-white/20 backdrop-blur  ">
            <Lottie
                animationData={avtarAnimation}
                loop={true}
                className="w-full h-full"
            />
        </div>

        <div className=" container flex justify-between absolute top-[180px] left-0 w-full px-8 ">
            <div className="w-[250px] h-[380px] rounded-[25px] bg-white/10 backdrop-blur border border-violet-700/50 ">
                <h2 className="text-xl font-bold mb-1 text-center text-white mt-3 ">MY ORDERS</h2>
                    <h3 className="text-sm  mb-6 text-center text-gray-400">Track your food orders</h3>
                     <div className="flex flex-col ml-4 mb-3 justify-between px-3">

                        <GlassCard className="flex justify-between px-4 py-3 mb-3 items-center w-full">
                        <div className="flex items-center gap-3 flex-1">
                            <i className="fa-regular fa-clock text-yellow-500 drop-shadow-[0_0_10px_#eba123] text-xl"></i>
                            <span> Pending </span>
                        </div>
                            <span className="text-yellow-400 font-bold text-lg">04 </span>
                        </GlassCard>

                        <GlassCard className="flex justify-between items-center px-4 py-3 mb-3 ">
                            <div className="flex items-center gap-3 flex-1">
                               <i className="fa-regular fa-circle-check text-green-600 drop-shadow-[0_0_10px_#7ed916] text-xl"></i>
                               <span>Completed</span>     
                            </div>
                            <span className="font-bold text-green-500 text-lg">32</span>
                        </GlassCard>
                        <GlassCard className="flex justify-between px-4 py-3 items-center mb-3">
                            <div className="flex items-center gap-3 flex-1 ">
                                <i className="fa-regular fa-circle-xmark text-red-600 drop-shadow-[0_0_5px_#d10d2a] text-xl"></i>
                                <span>Cancelled</span>
                            </div>
                            <span className="text-red-500 font-bold text-lg">02</span>
                        </GlassCard>

                    </div>
                    <div className="flex justify-center">
                        <button className=" bg-white/10 text-cyan-400 font-semibold text-center px-6 py-4 rounded-2xl border border-indigo-700/50 hover:bg-cyan-500/30 transition-all dutation-300"> View All Orders</button>
                    </div>
            </div>
                        {/* middle card */}
            <div className="w-[850px] h-[400px] rounded-[25px] bg-white/5  border border-violet-700/50">
                
                    <div className="flex justify-between gap-3 mt-20 m-2 p-4  ">
                            
                            <div className=" w-[1200px] h-[250px] rounded-[35px] " >

                    <GlassCard className="w-[250px] h-[220px] mb-2 shrink-0">
                        <div className="flex flex-col items-center justify-center h-full gap-4 ">

                        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                        <UtensilsCrossed size={32} className="text-cyan-400" />
                        </div>

                         <h1 className="text-5xl font-bold text-white">
                            <CountUp
                                start={0}
                                end={5000}
                                duration={21600}
                                seperator=","
                            />
                         </h1>

                         <p className="text-gray-400 uppercase tracking-widest">
                             Meals Rescued
                         </p>

                        </div>
                    </GlassCard>
                
                    </div>

            
                    

                    <GlassCard className="w-[270px] h-[220px] mb-2 shrink-0">
                        <div className="flex flex-col items-center justify-center h-full gap-4 ">

                        <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center">
                        <Store size={32} className="text-pink-500" />
                        </div>

                         <h1 className="text-5xl font-bold text-white">
                             <CountUp
                                start={0}
                                end={8000}
                                duration={25000}
                                seperator=","
                             />
                         </h1>

                         <p className="text-gray-400 uppercase tracking-widest">
                             Hotels 
                         </p>

                        </div>
                    </GlassCard>
                
                    <GlassCard className="w-[250px] h-[220px] mb-2 shrink-0">
                        <div className="flex flex-col items-center justify-center h-full gap-4 ">

                        <div className="w-16 h-16 rounded-full bg-fuchsia-700/20 border border-fuchsia-400/30 flex items-center justify-center">
                        <UsersRound size={32} className="text-fuchsia-500" />
                        </div>

                         <h1 className="text-5xl font-bold text-white">
                            <CountUp
                                start={210}
                                end={7000}
                                duration={20000}
                                seperator={","}
                            />
                         </h1>

                         <p className="text-gray-400 uppercase tracking-widest">
                             Buyers helped
                         </p>

                        </div>
                    </GlassCard>
            

                    </div>
            </div>

                
        

                        {/* right card */}
                <div className="w-[270px] h-[380px] rounded-[25px] bg-white/10 backdrop-blur border border-violet-700/50 ">

                        <h2 className="text-xl font-bold mb-1 text-center text-white mt-3 mb-3 "> Account Overview</h2>
                        <div className="flex flex-col ml-4 mb-3 justify-between px-3">

                        <GlassCard className="flex justify-between px-4 py-3 mb-3 items-center w-full">
                        <div className="flex items-center gap-3 flex-1">
                            <i className="fa-regular fa-calendar-days text-purple-600 drop-shadow-[0_0_30px_#ad13eb] text-xl"></i>
                            <span> Member since  </span>
                        </div>
                            <span className="text-purple-500 font-semibold text-sm">15/7/2026 </span>
                        </GlassCard>

                        <GlassCard className="flex justify-between items-center px-4 py-3 mb-3 ">
                            <div className="flex items-center gap-3 flex-1">
                               <i className="fa-solid fa-user-pen text-lime-600 drop-shadow-[0_0_10px_#de099e] text-xl"></i>
                               <span>Account status </span>     
                            </div>
                            <span className="font-semibold text-lime-500 text-base">Active</span>
                        </GlassCard>
                        <GlassCard className="flex justify-between px-4 py-3 items-center mb-3">
                            <div className="flex items-center gap-3 flex-1 ">
                                <i className="fa-solid fa-utensils text-amber-500 drop-shadow-[0_0_10px_#cf7f0e] text-xl"></i>
                                <span> Total Orders</span>
                            </div>
                            <span className="text-amber-400 font-bold text-lg">12</span>
                        </GlassCard>

                        <GlassCard className="flex justify-between px-4 py-3 items-center mb-3">
                            <div className="flex items-center gap-3 flex-1 ">
                                <i className="fa-regular fa-clipboard user text-sky-500 drop-shadow-[0_0_10px_#0dabdb] text-xl"></i>
                                <span>Last login</span>
                            </div>
                            <span className="text-sky-400 font-semibold text-sm">Today <br/> 10:54 AM</span>
                        </GlassCard>

                </div>
                    

            </div>

        </div>
                
               

        </div>
        </div>
        
    </>
    
  )
}

export default Profile