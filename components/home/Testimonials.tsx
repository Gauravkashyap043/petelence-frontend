"use client";

import Image from "next/image";
import { useState } from "react";

const allTestimonials = [
  {
    id: 1,
    name: "Waylan S.",
    role: "Cat Owner - Colorado",
    image: "/assets/home/Ellipse 1.png",
    text: "This is simply unbelievable! Pet shop did exactly what you said it does. I'm good to go. One cat's horrid breath...gone! One cat from a bit 'too round' to almost perfect weight.",
  },
  {
    id: 2,
    name: "Jessica M.",
    role: "Dog Owner - Texas",
    image: "/assets/home/Ellipse 1.png",
    text: "I've tried so many pet stores but nothing compares. My dog's coat is shinier than ever and his energy levels are through the roof. Absolutely love this place!",
  },
  {
    id: 3,
    name: "Robert K.",
    role: "Parrot Owner - New York",
    image: "/assets/home/Ellipse 1.png",
    text: "Amazing products and even better customer service. My parrot seems happier than ever.",
  },
  {
    id: 4,
    name: "Sophia L.",
    role: "Rabbit Owner - Oregon",
    image: "/assets/home/Ellipse 1.png",
    text: "Couldn't be happier with my purchase. My rabbit loves the new food and toys.",
  },
];

const PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);

  const totalPagesDesktop = Math.ceil(allTestimonials.length / PER_PAGE);
  const totalPagesMobile = allTestimonials.length;

  const visibleDesktop = allTestimonials.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE
  );

  const visibleMobile = [allTestimonials[page]];

  const navigate = (dir: number) => {
    setPage((prev) => {
      const total =
        typeof window !== "undefined" && window.innerWidth < 768
          ? totalPagesMobile
          : totalPagesDesktop;

      return (prev + dir + total) % total;
    });
  };

  return (
    <section className="w-full bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl md:text-[34px] font-semibold">
            Testimonials
          </h2>

          <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition whitespace-nowrap">
            View all →
          </button>
        </div>

        {/* DESKTOP UI SAME */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {visibleDesktop.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-sm px-6 pb-6 pt-[85px] text-center"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={130}
                  height={130}
                  className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] rounded-full object-cover border-4 border-white shadow"
                />
              </div>

              <p className="text-gray-600 text-[16px] leading-relaxed mt-2">
                {item.text}
              </p>

              <h3 className="mt-4 font-semibold text-[20px] text-[#4C9E84]">
                {item.name}
              </h3>

              <p className="mt-1 text-[18px] font-semibold text-[#4C9E84]">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE UI */}
        <div className="md:hidden mt-16">
          {visibleMobile.map((item) => (
            <div
              key={item.id}
              className="
                relative 
                bg-white 
                rounded-[28px]
                px-5 
                pb-7 
                pt-[85px]
                text-center
                border border-gray-200
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                mx-2
              "
            >
              {/* PROFILE IMAGE */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="
                    w-[110px] 
                    h-[110px]
                    rounded-full 
                    object-cover 
                    border-4 
                    border-white
                    shadow-md
                  "
                />
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-[15px] leading-7 mt-2 px-1">
                {item.text}
              </p>

              {/* NAME */}
              <h3 className="mt-5 font-semibold text-[22px] text-[#4C9E84]">
                {item.name}
              </h3>

              {/* ROLE */}
              <p className="mt-1 text-[16px] font-medium text-[#4C9E84]">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => navigate(-1)}
            className="w-11 h-11 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() => navigate(1)}
            className="w-11 h-11 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}