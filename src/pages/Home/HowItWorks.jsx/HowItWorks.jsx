import React from "react";
import { FaBuilding, FaMoneyBillWave, FaTruckFast, FaWarehouse } from "react-icons/fa6";

const HowItWorks = () => {
  const data = [
    {
      title: "Booking Pick & Drop",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
      image: <FaTruckFast />,
    },
    {
      title: "Cash On Delivery",
      details:
        "Receive payments with ease as we deliver your product and collect payment from the customer safely.",
      image: <FaMoneyBillWave />,
    },
    {
      title: "Delivery Hub",
      details:
        "Your parcels are processed through our secure hubs ensuring quick sorting, safe handling, and timely dispatch.",
      image: <FaWarehouse />,
    },
    {
      title: "Booking SME & Corporate",
      details:
        "Specialized logistics solutions designed for SMEs and corporate clients with bulk handling and priority support.",
      image: <FaBuilding />,
    },
  ];
  return <div className="w-[90%] mx-auto mt-15 mb-20">
    <h2 className="font-semibold text-3xl text-secondary opacity-90 mb-5">How it Works</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((d, idx) => (
          <div
            key={idx}
            className="bg-white hover:bg-primary p-5 rounded-xl shadow hover:shadow-lg hover:scale-104 transition border border-gray-100 cardA"
          >
            <div className="mb-4 text-5xl">{d.image}</div>
            <h3 className="font-semibold text-xl mb-2">{d.title}</h3>
            <p className="text-sm opacity-80">{d.details}</p>
          </div>
        ))}
      </div>
  </div>;
};

export default HowItWorks;
