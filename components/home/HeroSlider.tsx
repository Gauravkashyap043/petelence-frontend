"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    "/assets/home/image 30.png",
    "/assets/home/image 30.png",
    "/assets/home/image 30.png",
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                w-full 
                h-[151px] 
                sm:h-[220px] 
                md:h-[320px] 
                lg:h-[540px]
                mx-auto
              "
            >
              <img
                src={img}
                alt="slide"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}