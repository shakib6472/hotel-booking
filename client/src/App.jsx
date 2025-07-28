import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

export const App = () => {
  const isOwnerPath = useLocation().pathname.includes("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className={`min-h-[70vh]`}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here as needed */}
        </Routes> 
      </div>
    </div>
  )
};
export default App;
