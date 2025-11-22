import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import image1 from '../../../assets/customer-top.png'

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div className="my-20 w-11/12 mx-auto">
      <div className="text-center flex flex-col justify-center items-center gap-2 w-4/5 md:w-3/5 mx-auto text-secondary mb-15">
        <img className="block" src={image1} alt="" />
        <h3 className="text-3xl text center font-bold">What our customers are sayings</h3>
        <p className="text-sm opacity-70">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

        <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: -30,
            stretch: 0,
            depth: 100,
            scale: 1 ,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map(review => <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>)
          }
        </Swiper>

    </div>
  );
};

export default Reviews;
