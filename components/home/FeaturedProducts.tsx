"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { products } from "@/lib/products";

import "swiper/css";
import "swiper/css/navigation";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const featured = products.slice(0, 6);

export default function FeaturedProducts() {
  return (
    <section className="w-full py-10 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-black">
            Featured Products
          </h2>
          <Link href="/shop" className="flex items-center gap-1 text-[#4C9E84] font-medium hover:gap-2 transition-all text-sm sm:text-base">
            View all →
          </Link>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".fp-next", prevEl: ".fp-prev" }}
            spaceBetween={16}
            breakpoints={{
              0:    { slidesPerView: 1.2 },
              480:  { slidesPerView: 2 },
              768:  { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {featured.map((item, index) => (
              <SwiperSlide key={item.id}>
                <Link href={`/shop/${item.id}`} className="block group">
                  <div className={`bg-white rounded-2xl p-4 relative mx-auto w-full shadow-[0px_0px_20px_rgba(0,0,0,0.07)] card-hover animate-fadeInUp delay-${(index % 4 + 1) * 100} h-full flex flex-col`}>

                    {/* BADGE */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#4C9E84] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
                        {item.badge}
                      </span>
                    )}

                    {/* DISCOUNT */}
                    {item.discount && (
                      <div className="absolute top-0 right-3 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-b-md font-semibold z-10">
                        {item.discount}
                      </div>
                    )}

                    {/* IMAGE */}
                    <div className="flex justify-center items-center h-[180px] sm:h-[200px] md:h-[220px] mb-3 overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* CATEGORY */}
                    <span className="text-[11px] font-medium text-[#4C9E84] uppercase tracking-wide">{item.category}</span>

                    {/* NAME */}
                    <h3 className="text-[14px] text-gray-800 font-medium mt-1 mb-2 leading-snug flex-1">{item.name}</h3>

                    {/* STARS */}
                    <Stars rating={item.rating} />

                    {/* PRICE */}
                    <div className="flex items-center gap-2 mt-2 mb-3">
                      <span className="text-[20px] font-bold text-[#474747]">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-[12px] text-gray-400 line-through">₹{item.originalPrice}</span>
                      )}
                    </div>

                    {/* BUTTON */}
                    <button
                      className="border border-[#94694C] text-[#94694C] px-4 py-2 rounded-full text-[13px] font-semibold hover:bg-[#94694C] hover:text-white transition-all duration-200 active:scale-95 w-full"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add to cart
                    </button>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PREV */}
          <button className="fp-prev absolute left-0 top-[40%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#94694C] shadow-lg flex items-center justify-center text-white hover:bg-[#7a5540] transition-colors">
            ←
          </button>
          {/* NEXT */}
          <button className="fp-next absolute right-0 top-[40%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#94694C] shadow-lg flex items-center justify-center text-white hover:bg-[#7a5540] transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
