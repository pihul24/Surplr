import LandingPage from "./Sections/LandingPage";
import RegisterLogin from "./Sections/RegisterLogin";
import Profile from "./Sections/Profile"
import BuyersHome from "./Sections/BuyersHome"
import FoodDetails from "./Sections/FoodDetails"
import AboutUs from "./Sections/AboutUs";
import AddFood from "./Sections/AddFood"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative w-screen min-h-screen text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<RegisterLogin />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route  path="/explore" element={<BuyersHome/>}/>
        <Route path="/food/:id" element={<FoodDetails/>}/>
        <Route path="/add" element={<AddFood/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;