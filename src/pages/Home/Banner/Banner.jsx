import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { LuArrowUpRight, LuMoveUpRight } from "react-icons/lu";

const Banner = () => {
  return (
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    >
      <div className="relative">
        <img src={bannerImg1} />
        <div className="hidden md:block md:absolute bottom-10 left-10 w-[50%]">
          <div className="flex justify-start items-center gap-3">
            <button className="bg-primary btn text-black font-bold text-2xl px-6 py-7 rounded-4xl border-white border-2 hover:bg-secondary hover:text-primary">
              Track Your Parcel
            </button>
            <LuArrowUpRight className="bg-black rounded-full p-2 text-primary text-5xl hover:bg-secondary hover:text-white hidden lg:block" />
            <button className="btn btn-outline border-secondary border-4 text-2xl px-6 py-6 rounded-2xl text-secondary hover:bg-secondary hover:text-white">
              Be a Rider
            </button>
          </div>
        </div>
      </div>


      <div className="relative">
        <img src={bannerImg2} />
        <div className="hidden md:block md:absolute bottom-10 left-10 w-[50%]">
          <div className="flex justify-start items-center gap-3">
            <button className="bg-primary btn text-black font-bold text-2xl px-6 py-7 rounded-4xl border-white border-2 hover:bg-secondary hover:text-primary">
              Track Your Parcel
            </button>
            <LuArrowUpRight className="bg-black rounded-full p-2 text-primary text-5xl hover:bg-secondary hover:text-white hidden lg:block" />
            <button className="btn btn-outline border-secondary border-4 text-2xl px-6 py-6 rounded-2xl text-secondary hover:bg-secondary hover:text-white">
              Be a Rider
            </button>
          </div>
        </div>
      </div>


      <div className="relative">
        <img src={bannerImg3} />
        <div className="hidden md:block md:absolute bottom-10 left-10 w-[50%]">
          <div className="flex justify-start items-center gap-3">
            <button className="bg-primary btn text-black font-bold text-2xl px-6 py-7 rounded-4xl border-white border-2 hover:bg-secondary hover:text-primary">
              Track Your Parcel
            </button>
            <LuArrowUpRight className="bg-black rounded-full p-2 text-primary text-5xl hover:bg-secondary hover:text-white hidden lg:block" />
            <button className="btn btn-outline border-secondary border-4 text-2xl px-6 py-6 rounded-2xl text-secondary hover:bg-secondary hover:text-white">
              Be a Rider
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
