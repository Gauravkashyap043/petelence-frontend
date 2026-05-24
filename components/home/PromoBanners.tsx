"use client";

import Image from "next/image";

export default function PromoBanners() {
  return (
    <section className="w-full py-10 overflow-hidden">

      {/* Common Container */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT BANNER */}
          <div className="
          relative
          overflow-hidden
          rounded-[24px]
          group
          aspect-[16/7]
          min-h-[220px]
          md:min-h-[250px]
          ">

            <Image
              src="/assets/home/image 11.png"
              alt="Dog Food"
              fill
              sizes="(max-width:768px)100vw,50vw"
              className="
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-105
              select-none
              "
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 flex items-end p-6 md:p-8">

              <button className="
              text-white
              text-sm
              font-semibold
              border-b
              border-white
              pb-1
              hover:tracking-wider
              transition-all
              whitespace-nowrap
              ">
                SHOW MORE →
              </button>

            </div>
          </div>


          {/* RIGHT BANNER */}
          <div className="
          relative
          overflow-hidden
          rounded-[24px]
          group
          aspect-[16/7]
          min-h-[220px]
          md:min-h-[250px]
          ">

            <Image
              src="/assets/home/image 12.png"
              alt="Big Sale"
              fill
              sizes="(max-width:768px)100vw,50vw"
              className="
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-105
              select-none
              "
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 flex items-end p-6 md:p-8">

              <button className="
              text-white
              text-sm
              font-semibold
              border-b
              border-white
              pb-1
              hover:tracking-wider
              transition-all
              whitespace-nowrap
              ">
                SHOW MORE →
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}