import React from "react";

import topBg from '../../../assets/be-a-merchant-bg.png'
import rightBg from '../../../assets/location-merchant.png'

const Merchant = () => {
  return (
    <div className="w-[90%] mx-auto rounded-2xl bg-secondary my-20 relative p-20 text-white">
        <img src={topBg} className="absolute top-0 z-10 h-[35%]"/>
        <img src={rightBg} className="absolute right-5 lg:bottom-5 md:w-[40%] md:bottom-30 hidden md:block z-10 lg:w-[50%]"/>
      <div className="md:w-[60%] z-20">
        <h3 className="text-3xl font-bold mb-5">Merchant and Customer Satisfaction is Our First Priority</h3>
        <p className="text-sm font-light md:w-[80%]">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex flex-col md:flex-row gap-2 mt-8">
          <button className="bg-primary btn text-black font-bold px-4 py-5 rounded-4xl  hover:text-white">
            Become a Merchant
          </button>
          <button className="btn btn-outline border-primary border-4 px-4 py-4 rounded-4xl text-primary hover:bg-primary hover:text-black">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
