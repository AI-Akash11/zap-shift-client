import React from "react";
import {
  FaTruckFast,
  FaLocationDot,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaArrowRotateLeft,
} from "react-icons/fa6";

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      details:
        "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and Rajshahi. Express delivery in Dhaka within 4–6 hours.",
      image: <FaTruckFast className="text-4xl text-secondary" />,
    },
    {
      title: "Nationwide Delivery",
      details:
        "We deliver parcels nationwide with home delivery in every district; ensuring your products reach customers within 48–72 hours.",
      image: <FaLocationDot className="text-4xl text-secondary" />,
    },
    {
      title: "Fulfillment Solution",
      details:
        "We offer customized service with inventory management, online order processing, packaging, and after-sales support.",
      image: <FaWarehouse className="text-4xl text-secondary" />,
    },
    {
      title: "Cash on Home Delivery",
      details:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      image: <FaMoneyBillWave className="text-4xl text-secondary" />,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      details:
        "Customized corporate services including warehouse & inventory management support.",
      image: <FaBuilding className="text-4xl text-secondary" />,
    },
    {
      title: "Parcel Return",
      details:
        "We allow customers to return or exchange their products through our reverse logistics facility with ease.",
      image: <FaArrowRotateLeft className="text-4xl text-secondary" />,
    },
  ];

  return (
    <div className="mx-auto my-20 bg-[#003B36] text-white p-10 rounded-3xl">
      <h2 className="text-center text-3xl font-semibold mb-4">Our Services</h2>
      <p className="text-center opacity-80 max-w-2xl mx-auto mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl shadow-md bg-white hover:bg-primary hover:scale-104 transition text-black cardA`}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              {s.image}
            </div>

            <h3 className="font-semibold text-lg text-center mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-center opacity-80">{s.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
