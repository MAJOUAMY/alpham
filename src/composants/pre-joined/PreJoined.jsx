import React from "react";
import "./prejoined.css";
import Animation from "./animation/Animation";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Services from "./services/Services"
import Contact from "./Contact/Contact"
import AboutUs from "./Aboutus/AboutUs"
import Signup from "./signup/Signup"
import { Routes, Route } from "react-router-dom";
function PreJoined() {
  return (
    <div className="container">
      <div className="top-layer">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element= {<Services/>}/>
          <Route path="about" element= {<AboutUs/>}/>
          <Route path="contact" element= {<Contact/>}/>
          <Route path="signup" element= {<Signup/>}/>
        </Routes>
      </div>
      <div className="bottom-layer">
        <Animation />
      </div>
    </div>
  );
}

export default PreJoined;
