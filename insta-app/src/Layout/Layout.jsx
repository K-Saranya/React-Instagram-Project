import React from "react";
import Content from "../components/Content/Content";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="main">

      <div className="sidebar">
            <Navbar />
      </div>
      <div className="maincontent">
            <Content />
      </div>

    </div>
  );
};

export default Layout;
