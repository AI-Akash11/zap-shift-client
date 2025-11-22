import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { key: "story", label: "Story" },
    { key: "mission", label: "Mission" },
    { key: "success", label: "Success" },
    { key: "team", label: "Team & Others" },
  ];

  const content = {
    story: (
  <>
    <p className="leading-7 text-gray-700 mb-4">
      Zap-Shift began with a simple but powerful promise — to make parcel delivery
      fast, reliable, transparent, and stress-free for everyone in Bangladesh.
      What started as a small idea to solve everyday delivery frustrations soon
      grew into a mission to transform the country’s logistics landscape.
      In the early days, our founders noticed that customers struggled with
      unpredictable delivery times, lack of tracking, and inconsistent service
      quality. This gap inspired us to build a platform powered by technology,
      efficiency, and a true customer-first mindset.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      Over the years, Zap-Shift has evolved into a trusted delivery partner for
      thousands of individuals, small businesses, and large merchants across the
      nation. Our real-time tracking tools, optimized delivery routes, and strict
      parcel-handling protocols have made us a go-to choice for anyone seeking
      peace of mind when sending or receiving a package. Whether it's a
      heartfelt personal gift, an essential document, or an urgent business
      shipment, customers rely on us to deliver it safely and on time — every
      single time.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      With every successful delivery, our vision expands. We continuously invest
      in advanced automation, improved rider operations, and smarter logistics
      systems to reduce delays and enhance the customer experience. Zap-Shift is
      more than just a courier service — we are a reliability partner, a support
      system for entrepreneurs, and a digital bridge that connects people,
      products, and possibilities.
    </p>

    <p className="leading-7 text-gray-700">
      Today, as we grow, we stay committed to our founding principles:
      innovation, honesty, safety, and dependability. The journey ahead is long,
      but together with our customers, riders, and partners, Zap-Shift is
      shaping the future of fast, secure, and tech-driven delivery across
      Bangladesh. This is our story — and we are just getting started.
    </p>
  </>
),

    mission: (
  <>
    <p className="leading-7 text-gray-700 mb-4">
      At Zap-Shift, our mission is to redefine what people expect from parcel
      delivery by placing convenience, transparency, and reliability at the
      heart of everything we do. We aim to empower individuals, online shops,
      and businesses of all sizes with a delivery experience that is not only
      fast and affordable but also truly stress-free. In a world where speed and
      accuracy matter more than ever, our goal is to ensure every parcel moves
      through a frictionless, technology-driven pipeline.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      We believe that great logistics should feel simple on the outside, even if
      it requires complex systems behind the scenes. That’s why we focus on
      real-time tracking, smart route planning, automated systems, and a
      responsive customer support network. Our mission is not just to deliver
      parcels — it is to deliver confidence, clarity, and comfort at every step
      of the journey.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      Every day, our team works to eliminate unnecessary delays, reduce lost
      parcels, and maintain world-class safety standards. We carefully monitor
      each package, ensuring that whether it’s fragile, urgent, or highly
      valuable, it receives the attention and protection it deserves. Our
      logistics specialists analyze data constantly to improve delivery
      accuracy, shorten transit times, and anticipate customer needs.
    </p>

    <p className="leading-7 text-gray-700">
      Ultimately, our mission is driven by the belief that people deserve a
      courier service they can trust without hesitation. Zap-Shift is committed
      to being that trustworthy companion — delivering happiness, supporting
      business growth, and making logistics smarter, faster, and more accessible
      for everyone in Bangladesh.
    </p>
  </>
),

    success: (
  <>
    <p className="leading-7 text-gray-700 mb-4">
      Zap-Shift’s journey has been marked by continuous growth, innovation, and
      customer trust. From a small team handling just a handful of deliveries
      each day, we have grown into one of Bangladesh’s most dependable delivery
      networks, completing millions of successful parcels with exceptional
      accuracy. Our 98% on-time delivery rate is a reflection of our dedication
      to excellence and consistent service quality.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      One of the key reasons behind our success is our relentless focus on
      technology. We operate using intelligent delivery routing, automated hub
      sorting, real-time tracking systems, and data-driven decision-making that
      help us reduce delays and predict high-traffic periods. With every new
      challenge, we refine our systems to ensure the fastest and safest possible
      delivery experience for our users.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      Our strong rider community is another pillar of our success. Each rider is
      trained in customer service, parcel handling, route optimization, and safe
      driving practices. Their dedication enables us to deliver even under
      difficult conditions — be it heavy rain, remote locations, or peak
      festive-season demand. Their commitment is the heartbeat of Zap-Shift’s
      operations.
    </p>

    <p className="leading-7 text-gray-700">
      Today, our achievements represent more than just numbers — they represent
      trust built with thousands of businesses, memories delivered to families,
      and critical products reaching their destinations on time. As we expand
      into more districts, partner with more merchants, and upgrade our
      infrastructure, Zap-Shift remains committed to achieving even greater
      success in the future.
    </p>
  </>
),

    team: (
  <>
    <p className="leading-7 text-gray-700 mb-4">
      Zap-Shift is powered by a diverse and passionate team of logistics experts,
      developers, delivery specialists, customer support agents, and management
      professionals — all working together with one unified purpose: to make
      delivery better, faster, and more reliable for everyone. Our team is built
      on values of transparency, dedication, and a constant desire to improve.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      Our riders form the backbone of our organization. They navigate crowded
      streets, extreme weather, and tight deadlines to ensure every parcel is
      delivered safely. We invest heavily in their training, safety gear, and
      operational tools, empowering them to work confidently and efficiently.
      Their determination is one of our greatest strengths.
    </p>

    <p className="leading-7 text-gray-700 mb-4">
      Behind the scenes, our technology and operations teams work tirelessly to
      maintain and improve Zap-Shift’s systems. They analyze delivery data,
      refine algorithms, introduce new features, and manage logistics hubs,
      ensuring our entire network runs as smoothly as possible. Every successful
      delivery is supported by countless hours of careful planning and teamwork.
    </p>

    <p className="leading-7 text-gray-700">
      Beyond our internal team, Zap-Shift builds strong relationships with
      merchants, e-commerce brands, and business partners. Together, we create
      an ecosystem where packages move effortlessly across cities and villages.
      Our collaborative spirit allows us to bring innovation to the logistics
      industry and offer meaningful value to our customers. With every partner
      we onboard and every customer we assist, our vision becomes even clearer:
      to make Zap-Shift the most trusted delivery name in Bangladesh.
    </p>
  </>
),
  };

  return (
    <div className="mb-20 bg-white rounded-3xl px-24 py-20 shadow-sm border border-gray-200">
      {/* Header */}
      <h2 className="text-4xl font-bold text-secondary mb-3">About Us</h2>
      <p className="text-gray-500 mb-8 w-[90%] md:w-[70%]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b pb-2 text-gray-600 font-medium">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`pb-2 transition-all ${
              activeTab === t.key
                ? "text-secondary font-black"
                : "hover:text-green-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-sm md:text-base">{content[activeTab]}</div>
    </div>
  );
};

export default AboutUs;
