"use client";

import Image from "next/image";

export default function PetHealthBanner() {
  return (
    <section className="relative w-full h-[546px] mx-auto overflow-hidden bg-[#4c9e84] py-16 px-20">

      {/* Paw Pattern Overlay */}
      <Image
        src="/assets/home/image 18.png"
        alt="paw-pattern"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-100 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full">

        {/* LEFT DOG IMAGE */}
        <Image
          src="/assets/home/image 19.png"
          alt="Dog"
          width={350}
          height={300}
          className="hidden md:block absolute left-[-20px] bottom-[-65px] w-[350px] h-[300px] object-contain"
        />

        {/* RIGHT FOOD IMAGE */}
        <Image
          src="/assets/home/image 20.png"
          alt="Food"
          width={302}
          height={314}
          className="hidden md:block absolute right-[-20px] top-[-70px] w-[302px] h-[314px] object-contain"
        />

        {/* CENTER CONTENT */}
        <div className="text-center text-white max-w-xl">
          <h2 className="text-2xl md:text-[56px] font-semibold leading-tight">
            Take control of your <br /> pet’s health
          </h2>

          <p className="text-sm md:text-[16px] mt-4 text-white opacity-90">
            The process of cooking at lower temperatures & at slower
            rates leads to an increase in nutrient retention.
          </p>

          <button className="mt-6 bg-[#8B5E3C] hover:bg-[#6f472c] text-white px-6 py-2 rounded-full text-sm transition">
            Shop all food
          </button>
        </div>

      </div>
    </section>
  );
}