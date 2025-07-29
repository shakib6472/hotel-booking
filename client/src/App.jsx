import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import AllRooms from "./pages/AllRooms";

export const App = () => {
  const isOwnerPath = useLocation().pathname.includes("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className={`min-h-[70vh]`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          {/* Add other routes here as needed */}
        </Routes> 
      </div>
      <Footer />
    </div>
  )
};
export default App;
