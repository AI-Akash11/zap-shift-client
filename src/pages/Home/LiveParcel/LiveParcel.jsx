import React from 'react';
import image1 from '../../../assets/live-tracking.png';
import image2 from '../../../assets/safe-delivery.png';
import image3 from '../../../assets/safe-delivery.png'; 
const LiveParcel = () => {
  const data = [
    {
      image: image1,
      title: 'Live Parcel Tracking',
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: image2,
      title: '100% Safe Delivery',
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    },
    {
      image: image3,
      title: '24/7 Call Center Support',
      description:
        'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    },
  ];

  return (
    <div className="w-[90%] mx-auto md:w-[80%] space-y-8 py-15 border-t border-b my-20 border-dashed border-gray-400">
      {data.map((d, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 p-10 rounded-2xl shadow-xl bg-white"
        >
          <img src={d.image} alt={d.title} className="w-25 h-25 md:w-30 md:h-30 object-contain md:border-r md:border-gray-400 md:border-dashed md:pr-5" />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-5">{d.title}</h2>
            <p className="text-gray-600 leading-relaxed">{d.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveParcel;
