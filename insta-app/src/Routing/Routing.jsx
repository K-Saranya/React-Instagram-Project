import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "../components/Content/Content";
import Loginpage from "../components/Login/Loginpage";
import Signuppage from "../components/Signup/Signuppage";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../Layout/Layout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signuppage" element={<Signuppage />}/>
        <Route path="/maincontent" element={<Layout />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
