import React from "react";
import Navbar from "./component/Navbar";
import { useLocation } from "react-router-dom";

export const App = () => {
  const isOwnerPath = useLocation().pathname.includes("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>
  )
};
export default App;
