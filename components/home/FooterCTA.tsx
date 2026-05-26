"use client";

import Image from "next/image";

export default function FooterCTA() {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden pt-10">

      {/* GREEN SHAPE / IMAGE */}
      <div className="absolute bottom-0 left-0 w-full z-0">

        {/* DESKTOP SHAPE SAME */}
        <Image
          src="/assets/home/Vector 1.svg"
          alt="shape"
          width={1920}
          height={500}
          className="hidden lg:block w-full object-cover"
        />

        {/* MOBILE SHAPE */}
        <Image
          src="/assets/home/mobile-shape.svg"
          alt="mobile-shape"
          width={800}
          height={500}
          className="lg:hidden w-full object-cover"
        />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* DESKTOP UI SAME */}
        <div className="hidden lg:flex items-center justify-between">

          {/* LEFT DOG IMAGE */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/assets/home/image 25.png"
              alt="Dog"
              width={260}
              height={260}
              className="w-[220px] md:w-[260px] object-contain"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="w-full lg:w-[48%] lg:ml-auto text-center lg:text-left pb-20">

            <h2 className="text-[70px] leading-none font-semibold text-black">
              Say hi to us !
            </h2>

            {/* EMAIL */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6 text-gray-700">

              <Image
                src="/assets/home/Vector (1).svg"
                alt="email"
                width={28}
                height={28}
                className="object-contain"
              />

              <span className="text-base md:text-lg">
                hello@example.com
              </span>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6 text-sm text-gray-700">
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Shop</a>
              <a href="#">Privacy Policy</a>
            </div>

          </div>
        </div>

        {/* MOBILE UI */}
        <div className="lg:hidden flex items-start justify-between gap-2 min-h-[420px] relative pt-4">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-start relative z-10">

            {/* DOG IMAGE */}
            <Image
              src="/assets/home/image 25.png"
              alt="Dog"
              width={170}
              height={170}
              className="w-[170px] object-contain"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col relative z-10 pt-4 pr-0">

            {/* TEXT */}
            <h2 className="text-[32px] leading-none font-semibold text-black">
              Say hi to us !
            </h2>

            {/* EMAIL */}
            <div className="flex items-center gap-3 mt-5 text-gray-700">

              <Image
                src="/assets/home/Vector 2.png"
                alt="email"
                width={20}
                height={20}
                className="object-contain"
              />

              <span className="text-[15px]">
                hello@example.com
              </span>

            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-5 text-[16px] font-medium text-black mt-12 pl-20">

              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Shop</a>
              <a href="#">Privacy Policy</a>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 flex justify-center pb-8 pt-5 text-[14px] text-gray-700 text-center px-4 italic">
        © 1996–2022 NaturalPet. All Rights Reserved.
      </div>

    </section>
  );
}