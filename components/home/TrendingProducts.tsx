"use client";

import Image from "next/image";
import { useState } from "react";

const allProducts = [
  { id: 1, name: "Intelligent Marble Knife", price: "$132.93", image: "/assets/home/image 14.png" },
  { id: 2, name: "Premium Dog Leash",        price: "$45.00",  image: "/assets/home/image 14.png" },
  { id: 3, name: "Organic Pet Shampoo",      price: "$28.50",  image: "/assets/home/image 14.png" },
  { id: 4, name: "Cozy Pet Blanket",         price: "$67.20",  image: "/assets/home/image 14.png" },
  { id: 5, name: "Stainless Steel Bowl",     price: "$19.99",  image: "/assets/home/image 14.png" },
  { id: 6, name: "Interactive Toy Ball",     price: "$34.00",  image: "/assets/home/image 14.png" },
  { id: 7, name: "Grooming Brush Set",       price: "$52.80",  image: "/assets/home/image 14.png" },
  { id: 8, name: "Vitamin Treat Pack",       price: "$24.99",  image: "/assets/home/image 14.png" },
];

const PER_PAGE = 4;

export default function TrendingProducts() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(allProducts.length / PER_PAGE);
  const visibleProducts = allProducts.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const navigate = (dir: number) => {
    setPage((prev) => (prev + dir + totalPages) % totalPages);
  };

  return (
    <section className="w-full py-10 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-xl md:text-[34px] font-semibold">Trending Products</h2>
          <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition whitespace-nowrap">
            View all →
          </button>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* LEFT: PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm min-h-[170px]"
              >
                {/* IMAGE */}
                <div className="w-[110px] md:w-[141px] h-[110px] md:h-[141px] bg-gray-100 flex items-center justify-center rounded-xl shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={141}
                    height={141}
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                {/* INFO */}
                <div className="min-w-0">
                  <h3 className="text-sm text-black">{item.name}</h3>
                  <p className="font-semibold text-[#474747] text-[20px] mt-1">{item.price}</p>
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

        {/* ARROWS */}
        <div className="flex justify-center gap-4 mt-8">
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

        {/* Optional page indicator */}
        <p className="text-center text-sm text-gray-400 mt-2">
          {page + 1} / {totalPages}
        </p>

      </div>
    </section>
  );
}