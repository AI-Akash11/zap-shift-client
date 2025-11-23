import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import Logo from "../components/Logo/Logo";
import Footer from "../pages/Shared/Footer/Footer";

const AuthLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex bg-white">
        <div className="md:mt-5 md:ml-6">
          <Logo />
        </div>
        <div className="flex-1 p-15 lg:p-24">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 justify-center items-center bg-[#fafdf0] hidden md:flex">
          <img src={authImage} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
