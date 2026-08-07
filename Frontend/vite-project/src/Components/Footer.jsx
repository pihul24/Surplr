import React from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

import {useNavigate} from "react-router-dom"

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/*  TOP SECTION */}
    <div className="outer-boundary w-full bg-white/2 backdrop-blur-3xl px-8 py-8 m-10 rounded ">

            <div className="footer-top flex justify-between items-start gap-12">

        {/* Brand Section  */}

        <div className="closing-intro flex flex-col gap-5 w-[28%]">
          <div className="flex items-center gap-3">
            <img className="w-32"
              src="/textures/Lunch time-bro.svg" alt="fruit-basket" />

            <div>
              <p className="text-3xl font-bold"> FOOD <span className="text-violet-800">RESCUE</span></p>
              <h4 className="text-lime-400">Share more. Waste less.<br/> Feed hope.</h4>
            </div>
          </div>

        
          <p>
            We connect surplus food from restaurants to people and NGOs who
            need it — at affordable prices.
          </p>

          <button
            onClick={()=>navigate('/auth')}
            className="text-lime-400 bg-white/5 backdrop-blur bg-white/5 border border-cyan-400 px-6 py-3 rounded-full text-xl font-semibold hover:scale-105 transition duration-300">
              Let's Fight Food Waste Together
          </button>
            
          </div>
        

        {/* ---------- Navigation Section ---------- */}

        <div className="links w-[72%] grid grid-cols-4 gap-8">
          {/* Platform */}

          <GlassCard className="h-75"
            title={
              <div className="flex items-center gap-2">
                <i class="fa-solid fa-house-chimney test-2xl text-purple-800"></i>
                <span className="text-purple-700">PLATFORM</span>

              </div>
            }
            description={
              <ul className="list-[square] pl-5 space-y-2 marker:text-purple-500">
                <li><a href="#home" className="hover:text-cyan-400 m-2">Home</a></li>
                <li><a href="#about_us" className="hover:text-cyan-400 m-2">About Us</a></li>
                <li><a href="#how_it_works" className="hover:text-cyan-400 m-2">How It Works</a></li>
                <li><a href="#impact" className="hover:text-cyan-400 m-2">Impact</a></li>
                <li><a href="#FAQ" className="hover:text-cyan-400 m-2">FAQs</a></li>
                <li><a href="#contact_us" className="hover:text-cyan-400 m-2">Contact With Us</a></li>
              </ul>
            }
          />

          {/* Services */}

          <GlassCard className="h-75"
            title={
              <div className="flex items-center gap-4 ">
                    <i className="fa-solid fa-bell-concierge text-3xl text-purple-800"></i>
                    <span className="text-purple-700">SERVICES</span>
              </div>
            }
            description={
              <ul className="list-[square] pl-5 space-y-2 marker:text-purple-500">
                <li><a href="#affordability" className="hover:text-cyan-400 m-2">Buy Affordable  Meals</a></li>
                <li><a href="#restr_portal "className="hover:text-cyan-400 m-2">Restaurant Portal</a></li>
                <li><a href="#NGO_portal" className="hover:text-cyan-400 m-2">NGO Portal</a></li>
                <li><a href="#Torder_track" className="hover:text-cyan-400 m-2">Track Your Order</a></li>
                <li><a href="#nearby_meals" className="hover:text-cyan-400 m-2">Find Nearby Meals</a></li>
              </ul>
            }
          />

          {/* Community */}

          <GlassCard className="h-75"
            title={
                      <div className="flex items-center gap-3 ">
                        <i className="fa-solid fa-people-line text-3xl text-purple-800"></i>
                        <span className="text-purple-700">FOR OUR COMMUNITY</span>
                      </div>
            }
            description={
              <ul className="list-[square] pl-5 space-y-2 marker:text-purple-500">
                <li><a href="#restrau" className="hover:text-cyan-400 m-2">For Restaurants</a></li>
                <li><a href="#buyers" className="hover:text-cyan-400 m-2">For Buyers</a></li>
                <li><a href="#NGO" className="hover:text-cyan-400 m-2">For NGOs</a></li>
                <li><a href="#food_safety" className="hover:text-cyan-400 m-2">Food Safety</a></li>
              </ul>
            }
          />

          {/* Right Column */}

          <div className="flex flex-col gap-5">
            <GlassCard
              title={<div className="flex items-center gap-4">
                      <i className="fa-solid fa-paper-plane text-2xl text-purple-800"></i>
                      <span className="text-purple-700">STAY CONNECTED</span>
                      </div>
                    }
              description={
                <ul>
                  <li><i className="fa-solid fa-envelope text-lime-400 gap-2"></i> Email </li>
                  <li> <i className="fa-solid fa-phone text-lime-400 gap-2"></i> Phone </li>
                  <li><i className="fa-solid fa-map-pin text-lime-400 gap-2"></i> India </li>
                </ul>
              }
            />

            <GlassCard
              description={
                <div className="flex justify-center gap-6 text-4xl h-10 text-violet-900">
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-square-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              }
            />
            
          </div>

        
<div className="middle relative flex items-center justify-between w-full gap-10">

  {/*  ICONS  */}

  <div className="relative flex-1 flex justify-between items-center  z-10 gap-32 -ml-70 -mt-12">

    <div
      className="middle-icon w-32 h-32 rounded-full border-2 border-lime-400
                 bg-white/5 backdrop-blur-md
                 flex justify-center items-center
                 shadow-[0_0_12px_#84cc16,0_0_25px_#84cc16]"
    >
      <i className="fa-solid fa-bowl-rice text-5xl text-lime-400"></i>
    </div>

    <div
      className="middle-icon w-32 h-32 rounded-full border-2 border-lime-400
                 bg-white/5 backdrop-blur-md
                 flex justify-center items-center
                 shadow-[0_0_12px_#84cc16,0_0_25px_#84cc16]"
    >
      <i className="fa-solid fa-store text-5xl text-lime-400"></i>
    </div>

    <div
      className="middle-icon w-32 h-32 rounded-full border-2 border-lime-400
                 bg-white/5 backdrop-blur-md
                 flex justify-center items-center
                 shadow-[0_0_12px_#84cc16,0_0_25px_#84cc16]"
    >
      <i className="fa-regular fa-heart text-5xl text-lime-400"></i>
    </div>

    <div
      className="middle-icon w-32 h-32 rounded-full border-2 border-lime-400
                 bg-white/5 backdrop-blur-md
                 flex justify-center items-center
                 shadow-[0_0_12px_#84cc16,0_0_25px_#84cc16]"
    >
      <i className="fa-solid fa-house text-5xl text-lime-400"></i>
    </div>

  </div>

  {/* ================= CTA CARD ================= */}

  <GlassCard
    className="w-[320px] flex-none"
    image="/textures/Contact us-amico.svg"
    title="Find affordable meals near you"
    description={
      <Button
        onClick={()=> navigate('/about')}
        className="explore-button rounded-3xl bg-white/5 text-lime-400 text-2xl font-semibold"
        text="Explore Now →"
      />
    }
  />

</div>
            
          </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}

      <div className="footer-bottom grid grid-cols-5 gap-8 mt-16 items-center">
        <div className="flex items-center gap-4">
          <i className="fa-regular fa-heart text-indigo-800 text-4xl "></i>
          <h3>Every meal deserves <br/> a plate ,<br/>Not a Landfill</h3>
          
        </div>

        <div>
          <h3>© 2026 Food Rescue</h3>
          <p>
            Privacy Policy || Terms & Conditions  Refund Policy
          </p>
        </div>

        <div>
          <img className="w-20" src="/textures/Security On-rafiki.svg" alt="security"/>
          <h3>100% Safe</h3>
          <p>Secure Payments</p>
        </div>

        <div>
          <img className="w-20"
            src="/textures/sustainable.svg"
            alt="logo"
          />
          <h3>Sustainable</h3>
          <p>Better Tomorrow</p>
        </div>

        <div>
          <img className="w-20" src="/textures/Community-rafiki.svg" alt="community"/>
          <h3>Trusted</h3>
          <p>By Communities</p>
        </div>
      </div>

    </div>
      
    </>
  );
}

export default Footer;