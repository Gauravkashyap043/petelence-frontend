"use client";

import Image from "next/image";

export default function PromoBanners() {
  return (
    <section className="w-full py-10 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT BANNER */}
        <div className="relative overflow-hidden h-[250px] group">

          <Image
            src="/assets/home/image 11.png"
            alt="Dog Food"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute inset-0 flex items-end p-8">

            <button className="text-white text-sm font-semibold border-b border-white pb-1 hover:tracking-wider transition-all">
              SHOW MORE →
            </button>

          </div>
        </div>


        {/* RIGHT BANNER */}
        <div className="relative overflow-hidden h-[250px] group">

          <Image
            src="/assets/home/image 12.png"
            alt="Big Sale"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="absolute inset-0 flex items-end p-8">

            <button className="text-white text-sm font-semibold border-b border-white pb-1 hover:tracking-wider transition-all">
              SHOW MORE →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}