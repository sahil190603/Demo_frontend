import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "../pages/Home";
import About from "../pages/About";


function MainRoute () {
  return (
    <div >
      <Routes  >
        <Route path="/" element={<Home />} />
        <Route path="/Contact_us" element={<About/>} />
      </Routes>
    </div>
  );
};

export default MainRoute;
