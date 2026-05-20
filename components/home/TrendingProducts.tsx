"use client";

import Image from "next/image";
export default function TrendingProducts() {
  const products = [
    {
      id: 1,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/image 14.png",
    },
    {
      id: 2,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/image 14.png",
    },
    {
      id: 3,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/image 14.png",
    },
    {
      id: 4,
      name: "Intelligent Marble Knife",
      price: "$132.93",
      image: "/assets/home/image 14.png",
    },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-[34px] font-semibold">
            Trending Products
          </h2>

          <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition">
            View all →
          </button>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* LEFT PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">

            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm"
              >
                {/* IMAGE */}
                <div className="w-[141px] h-[141px] bg-gray-100 flex items-center justify-center rounded shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={141}
                    height={141}
                    className="w-[141px] h-[141px] object-contain"
                  />
                </div>

                {/* INFO */}
                <div>
                  <h3 className="text-sm text-black font-[400]">
                    {item.name}
                  </h3>

                  <p className="font-semibold text-[#474747] text-[20px]">
                    {item.price}
                  </p>

                  <button className="mt-1 border border-[#94694C] text-[#94694C] px-4 py-1 rounded-full text-[14px] font-[600] hover:bg-[#94694C] hover:text-white transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/home/image 13.png"
              alt="Dog"
              width={440}
              height={440}
              className="w-[440px] h-[440px] object-contain"
            />
          </div>
        </div>

        {/* BOTTOM ARROWS */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-10 h-10 rounded-full bg-brown-400 bg-[#8B5E3C] text-white flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center">
            →
          </button>
        </div>

      </div>
    </section>
  );
}