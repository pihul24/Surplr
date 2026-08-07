import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
import GlassCard from '../Components/GlassCard'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../Canvas/Scene"
import {HashLink} from "react-router-hash-link";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Galaxy from "../assets/animations/Galaxy.jsx"

gsap.registerPlugin(ScrollTrigger);


function LandingPage() 

  {
    const navigate = useNavigate();
  
  useEffect(() => {
  gsap.fromTo(
  ".impact-left",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".impact-left",
      start: "top 80%",
      end: "top 40%",
      scrub:true
      
    },
  });

  // right animation 
    gsap.fromTo(".impact-right",
      {
      x:200,
      opacity:0,
    },
    {
      x:0,
      opacity:1,
      ease:"none",
      scrollTrigger:{
        trigger:".impact-right",
        start:"top 80%",
        end:"top 40%",
        scrub:true
      },
    });

      //footer
      gsap.fromTo(
    ".outer-boundary",
    {
      y: 250,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".outer-boundary",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        
      },
    }
  );
}, []);

  

  return (
    <>
        <div className="fixed inset-0 -z-10 bg-[#020617]">
          
        <Galaxy/>
        </div>
      <header className='fixed top-0 left-0 z-20 w-full flex items-center justify-between px-10 py-5'>
        <div className="logo text-4xl font-bold">Surplr</div>
        <Navbar className="text-2xl"/>
        <Link to="/auth">
            <Button text="Get Started "/>
        </Link>
      </header>

      <main className="relative z-10 ml-50 pt-32 mt-20">
  <div className="font-bold text-8xl">
    Surplr
  </div>

  <div className="mt-8 font-semibold text-5xl font-serif">
    Every Good Food Deserves
  </div>

  <div className="mt-5 font-semibold text-5xl font-serif">
    A Second Chance
  </div>
</main>

      {/* working section */}
      <section 
      id="how-it-works"
      className=" relative z-10 mt-80 overflow-hidden">

        <h3 className="text-center font-serif font-semibold text-4xl mb-10">
          How It Works
        </h3>

        <div className="cards flex items-center justify-between px-7 py-10 gap-7 ">
          <GlassCard className="w-90" image="/textures/Cooking-bro.svg "
            title="It Begins In The Kitchen"
            description="Restaurants, hotels, and cafés share fresh surplus meals, turning excess into opportunity."
          />

          <GlassCard className="w-90" image="/textures/Order ahead-rafiki.svg "
            title="A Perfect Match"
            description="Explore fresh surplus meals available around you and reserve them instantly."
          />

          <GlassCard className="w-90" image="/textures/Delivery-amico.svg "
            title="On Its Way"
            description="Once reserved, every meal is carefully prepared for pickup or delivery while maintaining its freshness."
          />

          <GlassCard className="w-90" image="/textures/foodDelivered.png "
            title="The Story Comes Full Circle"
            description="From kitchen to table , every meal finds its purpose "
          />
        </div>
      </section>

      {/* ORBIT SECTION */}
      <section className="relative z-10">
        <div className="Features-ui text-center font-serif font-semibold text-4xl mt-60 mb-4 ">
          WHY CHOOSE SURPLR
        </div>

        {/* ONLY THIS DIV ROTATES */}
        <div className="orbit relative w-[700px] h-[700px] mx-auto my-20">

          {/* CENTER */}
          <Features
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 "
            text="SURPLUR"
          />

          {/* FEATURES */}
          <Features className="absolute top-14 left-1/2 -translate-x-1/4 "
            image="/textures/Push notifications-amico.svg"
            title="Live Surplus Map "
            description="Find nearby surplus meals in real time. Browse live listings with smart filters for distance, price, cuisine, and food category."
            titleclassName="text-lg "
            descriptionclassName="text-sm "
          />

          <Features className="absolute bottom-14 left-1/2 -translate-x-1/2"
            image="/textures/Order ahead-rafiki.svg"
            title="Instant Reservation"
            description="Reserve before it's gone. Secure your meal instantly for a limited time while you complete your order."
            titleclassName="text-lg "
            descriptionclassName="text-sm "
          />

          <Features className="absolute top-40 left-15"
            image="/textures/Push notifications-amico.svg"
            title="Smart Deal Alerts"
            description="Never miss your favorite deals. Receive instant notifications only when meals matching your preferences become available nearby."
            titleclassName="text-lg "
            descriptionclassName="text-sm "
          />

          <Features className="absolute top-40 right-15"
            image="/textures/Wallet-amico.svg"
            title="Verified Fair Pricing"
            description="Real discounts you can trust. Restaurants set the price, while Suplr verifies every listing against the original menu price."
            titleclassName="text-lg "
            descriptionclassName="text-sm "
          />

          <Features className="absolute bottom-40 left-15"
            image="/textures/Online calendar-amico.svg"
            title="Flexible Surplus window"
            description="Fresh meals, whenever they're available. Restaurants choose their own surplus timings, and Suplr adapts to every kitchen's schedule."
            titleclassName="text-lg "
            descriptionclassName="text-sm "
          />

          <Features className="absolute bottom-40 right-15"
            image="/textures/Delivery-amico.svg"
            title="Discreet Delivery"
            description="Affordable food, delivered with privacy. Every order uses neutral packaging and a standard delivery experience."
            titleclassName="text-lg "
            descriptionclassName="text-sm "
          />

        </div>
      </section>

      {/* Impact */}

        <section className="impact flex justify-between items-center p-10  mt-20 h-screen">
              <div className="impact-card flex ml-55 h-90 w-160  ">
            <GlassCard  className="impact-left w-120 bg-white/10 " 
              title="Impact"
              description={
                <div className="w-full">
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-lg">
                      <span>Food Saved</span>
                      <span>70%</span>
                    </div>
                    <div className="w-full h-4 bg-white/10 rounded-full">
                      <div className="h-4 bg-green-400 rounded-full w-[70%]"></div>
                    </div>
                  </div>
            
                  <div className="mb-4">
                    <div className="flex justify-between text-lg">
                      <span>CO₂ Reduced</span>
                      <span>50%</span>
                    </div>
                    <div className="w-full h-4 bg-white/10 rounded-full">
                      <div className="h-4 bg-blue-400 rounded-full w-[50%]"></div>
                    </div>
                  </div>
            
                  <div className="mb-4">
                    <div className="flex justify-between text-lg">
                      <span>Restaurants</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full h-4 bg-white/10 rounded-full">
                      <div className="h-4 bg-purple-400 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                
                <div>
                  <div className="flex justify-between text-lg ">
                    <span>Meals delivered</span>
                    <span>80%</span>
                  </div>
                  <div>
                    <div className="w-full bg-white/10 rounded-full h-4">
                    <div className="h-4 rounded bg-pink-400 w-[80%]"></div>
                    </div>
                  </div>
                  </div>
                </div>
                

  }
  />



      </div>

      <div className="flex justify-center items-center mr-60 ml-10 ">
        <GlassCard className="impact-right w-120 bg-white/5 h-90 px-8 py-6"
          title="Did You Know ?"
           description={
            <div >
              <div className="text-lg mb-6 mt-8">
                  India wastes nearly ₹1.55 lakh crore worth of food every year—while millions still struggle to access a nutritious meal...nearly 12 million tonnes of food waste every year
              </div>
              <div className="h-1"></div>
              < div className="mt-3 flx justify-center items-center">
                     <Button
                     onClick={() => navigate("/about")}
                     text="Learn More"/>
                  </div>
            </div>
            
              
           }
        />
      </div>

      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default LandingPage