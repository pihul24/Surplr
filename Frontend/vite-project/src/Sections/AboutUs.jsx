import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "../Components/GlassCard";
import {Link} from 'react-router-dom';
import Navbar from "../Components/Navbar";

export default function AboutUs() {
  useEffect(() => {
    gsap.from(".hero", {
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(".fade", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      delay: 0.3,
    });
  }, []);

  const values = [
    {
      title: "Reduce Food Waste",
      desc: "We help restaurants prevent perfectly good food from ending up in landfills.",
    },
    {
      title: "Feed More People",
      desc: "Affordable meals reach buyers while unclaimed food is redirected to NGOs.",
    },
    {
      title: "Build Sustainability",
      desc: "Every rescued meal contributes to a cleaner environment and a better future.",
    },
  ];

  const steps = [
    "Restaurant lists surplus food",
    "Nearby buyers discover meals",
    "Buyer claims the food",
    "If unclaimed, NGO receives it",
  ];

  return (
    
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 blur-[130px] rounded-full"></div>
      <Navbar className="absolute top-0 left-0 w-full z-50 px-10 py-6" />

      {/* Hero Section */}
      <section className="hero relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">

        <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
          ABOUT SURPLR
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          World doesn't have a shortage of food
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            It has a routing problem
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-8">
          Surplr connects restaurants, buyers and NGOs through one smart
          platform. Instead of letting surplus food go to waste, we make it
          available to people who need it at affordable prices while helping
          restaurants reduce waste and build a sustainable future.
        </p>

        <Link to="/explore"
          className="mt-10 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:scale-105 transition duration-300">
            explore Listing
        </Link>

      </section>

      {/* Mission */}
      <section className="fade relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
              OUR MISSION
            </p>

            <h2 className="text-4xl font-bold mt-5 leading-snug">
              Fighting Food Waste Through Technology.
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Every day, thousands of meals are thrown away while many people
              struggle to find affordable food. Surplr bridges this gap by
              creating a platform where restaurants can easily list surplus
              meals and nearby buyers or NGOs can claim them before they go to
              waste.
            </p>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-6">
                Why Surplr?
              </h3>

              <ul className="space-y-5 text-gray-300">

                <li>✅ Reduce food wastage</li>

                <li>✅ Affordable meals for buyers</li>

                <li>✅ Automatic NGO support</li>

                <li>✅ Sustainable and eco-friendly</li>

                <li>✅ Smart food redistribution</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

            {/* Impact Section */}
      <section className="fade relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            OUR IMPACT
          </p>
          <h2 className="text-4xl font-bold mt-5">
    Dignity is a design requirement, not an afterthought.
  </h2>

</div> 

          <div className="grid md:grid-cols-3 gap-8 mt-16">

  <GlassCard>

    <h3 className="text-2xl font-bold text-cyan-300 mb-4">
      No Charity Language
    </h3>

    <p className="text-gray-300 leading-8">
      Surplr is a marketplace, not a donation drive. Every listing is framed
      as a purchase or a claim—never a handout.
    </p>

  </GlassCard>

  <GlassCard>

    <h3 className="text-2xl font-bold text-cyan-300 mb-4">
      Neutral Packaging
    </h3>

    <p className="text-gray-300 leading-8">
      Every order arrives looking exactly the same, regardless of who ordered
      it or why. No labels. No unnecessary attention.
    </p>

  </GlassCard>

  <GlassCard>

    <h3 className="text-2xl font-bold text-cyan-300 mb-4">
      All-Day Availability
    </h3>

    <p className="text-gray-300 leading-8">
      Surplus goes live the moment it exists, not just at closing time. Food
      rescue shouldn't depend on a clock.
    </p>

  </GlassCard>

</div>
      </section>

      {/* Statistics */}

      <section className="fade relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-cyan-400">
              1B+
            </h2>

            <p className="mt-3 text-gray-300">
              Meals Wasted Daily
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-400">
              19%
            </h2>

            <p className="mt-3 text-gray-300">
              Global Food Wasted
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-cyan-400">
              24/7
            </h2>

            <p className="mt-3 text-gray-300">
              Smart Food Rescue
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-400">
              Eco
            </h2>

            <p className="mt-3 text-gray-300">
              Sustainable Future
            </p>

          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="fade relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
            HOW SURPLR WORKS
          </p>

          <h2 className="text-4xl font-bold mt-5">
            Four Simple Steps
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative text-center"
            >

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center mx-auto text-black font-bold text-xl">

                {index + 1}

              </div>

              <h3 className="mt-6 text-xl font-semibold">

                {step}

              </h3>

            </div>

          ))}

        </div>

      </section>
            {/* Call To Action */}

      <section className="fade relative z-10 max-w-7xl mx-auto px-6 py-28">

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">

          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-500/20 blur-[120px] rounded-full pointer-events-none"></div>      
          <div className="relative">

            <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
              JOIN THE MOVEMENT
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">

              Most surplus platforms make people choose between affordability and anonymity.
              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
               Suplr was built on the idea that nobody should have to.
              </span>

            </h2>

           

            <div className="flex justify-center gap-6 mt-12 flex-wrap">

             <Link
               to="/explore"
               className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:scale-105 transition duration-300"
             >
               Explore Food
             </Link>
              

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">

              SURPLR

            </h2>

            <p className="text-gray-400 mt-2">

              Saving food. Serving humanity.

            </p>

          </div>

          
        </div>

      </footer>

    </div>
  );
}