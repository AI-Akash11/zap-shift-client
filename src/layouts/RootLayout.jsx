import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1200px] mx-auto">
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default RootLayout;
