"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProducts() {

  const products = [
    {
      id: 1,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/b864c257c5e547b7253db8423a01aa9abcd763bc.png",
      discount: "35% OFF",
    },
    {
      id: 2,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/6e34515863fd697cfad58413f8aed3f7cd4dba33.png",
      discount: "30% OFF",
    },
    {
      id: 3,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/4f1fff75ec15ef25279505ae40351a3f55e95fe5.png",
      discount: "15% OFF",
    },
    {
      id: 4,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/0e77bcc6a3cc3a632c8f5618ba1fcb7e92d9f6c9.png",
      discount: "35% OFF",
    },
  ];

  return (
    <section className="w-full py-10 overflow-hidden">

      {/* Common Container */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <h2 className="text-[26px] md:text-[32px] font-semibold text-black">
            Featured Product
          </h2>

          <button className="flex items-center gap-2 text-green-600 font-medium hover:gap-3 transition-all">
            View all →
          </button>

        </div>

        {/* SLIDER */}
        <div className="relative">

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >

            {products.map((item) => (
              <SwiperSlide key={item.id}>

                {/* PRODUCT CARD */}
                <div
                  className="
                    bg-white
                    rounded-2xl
                    p-4
                    relative
                    transition
                    mx-auto
                    w-full
                    max-w-[260px]
                    sm:max-w-full
                    shadow-[0px_0px_20px_rgba(0,0,0,0.08)]
                    hover:shadow-[0px_0px_25px_rgba(0,0,0,0.12)]
                  "
                >

                  {/* DISCOUNT */}
                  <div className="absolute top-0 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-b-md font-semibold">
                    {item.discount}
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      flex
                      justify-center
                      items-center
                      h-[260px]
                      sm:h-[240px]
                      md:h-[250px]
                      mb-4
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[17px] text-gray-700 text-center mb-2">
                    {item.name}
                  </h3>

                  {/* PRICE */}
                  <p className="text-center text-[22px] font-semibold text-[#474747] mb-4">
                    {item.price}
                  </p>

                  {/* BUTTON */}
                  <div className="flex justify-center">
                    <button className="border border-[#94694C] text-[#94694C] px-5 py-2 rounded-full text-[15px] font-semibold hover:bg-[#94694C] hover:text-white transition">
                      Add to cart
                    </button>
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

          {/* LEFT BUTTON */}
          <button
            className="
              custom-prev
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-[#94694C]
              shadow-lg
              flex
              items-center
              justify-center
              text-xl
              text-white
            "
          >
            ←
          </button>

          {/* RIGHT BUTTON */}
          <button
            className="
              custom-next
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-10
              w-10
              h-10
              rounded-full
              bg-[#94694C]
              shadow-lg
              flex
              items-center
              justify-center
              text-xl
              text-white
            "
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}