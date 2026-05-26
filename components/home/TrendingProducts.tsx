"use client";

import Image from "next/image";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Intelligent Marble Knife", price: "$132.93", image: "/assets/home/image 14.png" },
  { id: 2, name: "Premium Dog Leash", price: "$45.00", image: "/assets/home/image 14.png" },
  { id: 3, name: "Organic Pet Shampoo", price: "$28.50", image: "/assets/home/image 14.png" },
  { id: 4, name: "Cozy Pet Blanket", price: "$67.20", image: "/assets/home/image 14.png" },
  { id: 5, name: "Stainless Steel Bowl", price: "$19.99", image: "/assets/home/image 14.png" },
  { id: 6, name: "Interactive Toy Ball", price: "$34.00", image: "/assets/home/image 14.png" },
  { id: 7, name: "Grooming Brush Set", price: "$52.80", image: "/assets/home/image 14.png" },
  { id: 8, name: "Vitamin Treat Pack", price: "$24.99", image: "/assets/home/image 14.png" },
];

const PER_PAGE_DESKTOP = 4;
const PER_PAGE_MOBILE = 2;

export default function TrendingProducts() {
  const [page, setPage] = useState(0);

  const totalPagesDesktop = Math.ceil(allProducts.length / PER_PAGE_DESKTOP);
  const totalPagesMobile = Math.ceil(allProducts.length / PER_PAGE_MOBILE);

  const visibleDesktopProducts = allProducts.slice(
    page * PER_PAGE_DESKTOP,
    page * PER_PAGE_DESKTOP + PER_PAGE_DESKTOP
  );

  const visibleMobileProducts = allProducts.slice(
    page * PER_PAGE_MOBILE,
    page * PER_PAGE_MOBILE + PER_PAGE_MOBILE
  );

  const navigate = (dir: number) => {
    setPage((prev) => {
      const total =
        typeof window !== "undefined" && window.innerWidth < 1024
          ? totalPagesMobile
          : totalPagesDesktop;

      return (prev + dir + total) % total;
    });
  };

  return (
    <section className="w-full py-10 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-xl md:text-[34px] font-semibold">
            Trending Products
          </h2>

          <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition whitespace-nowrap">
            View all →
          </button>
        </div>

        {/* DESKTOP UI SAME */}
        <div className="hidden lg:flex gap-10 items-center">

          {/* LEFT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
            {visibleDesktopProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm min-h-[170px]"
              >
                <div className="w-[141px] h-[141px] bg-gray-100 flex items-center justify-center rounded-xl shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={141}
                    height={141}
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm text-black">{item.name}</h3>

                  <p className="font-semibold text-[#474747] text-[20px] mt-1">
                    {item.price}
                  </p>

                  <button className="mt-3 border border-[#94694C] text-[#94694C] px-4 py-1 rounded-full text-[14px] font-semibold whitespace-nowrap hover:bg-[#94694C] hover:text-white transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center shrink-0">
            <Image
              src="/assets/home/image 13.png"
              alt="Dog"
              width={440}
              height={440}
              className="w-full max-w-[440px] h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* MOBILE UI */}
        <div className="lg:hidden">

          {/* 2 CARDS */}
          <div className="flex flex-col gap-5">
            {visibleMobileProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm"
              >
                <div className="w-[100px] h-[100px] bg-gray-100 flex items-center justify-center rounded-xl shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-sm text-black">
                    {item.name}
                  </h3>

                  <p className="font-semibold text-[#474747] text-[18px] mt-1">
                    {item.price}
                  </p>

                  <button className="mt-3 border border-[#94694C] text-[#94694C] px-4 py-1 rounded-full text-[13px] font-semibold hover:bg-[#94694C] hover:text-white transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center"
            >
              →
            </button>
          </div>

          {/* IMAGE BELOW BUTTON */}
          <div className="flex justify-center mt-8">
            <Image
              src="/assets/home/image 13.png"
              alt="Dog"
              width={320}
              height={320}
              className="w-full max-w-[320px] h-auto object-contain"
            />
          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition"
          >
            ←
          </button>

          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}