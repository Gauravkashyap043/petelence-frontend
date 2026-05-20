"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full py-10 px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <Image
            src="/assets/home/image 3.png"
            alt="Pet Food"
            width={450}
            height={450}
            className="w-[450px] h-[450px] object-contain"
          />
        </div>
        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-[50px] font-bold text-black leading-tight">
            Welcome <br />
            to <span className="text-[#4c9e84]">NaturalPet</span>
          </h1>

          <p className="text-black mt-3 text-sm md:text-[16px]">
            Your pet’s health and well-being are our top priority.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✂️</span>
              <div>
                <h3 className="text-[20px] font-bold">Pet Grooming</h3>
                <p className="text-gray-500 text-">
                  Dolor sit amet, dolor gravida, placerat libero lorem ipsum.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">🍖</span>
              <div>
                <h3 className="text-[20px] font-bold">Pet Food</h3>
                <p className="text-gray-500 font-400 text-[16px]">
                  Dolor sit amet, dolor gravida, placerat libero lorem ipsum.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">💉</span>
              <div>
                <h3 className="text-[20px] font-bold">Vaccination</h3>
                <p className="text-gray-500 font-400 text-[16px]">
                  Dolor sit amet, dolor gravida, placerat libero lorem ipsum.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">➕</span>
              <div>
                <h3 className="text-[20px] font-bold">Pet Care</h3>
                <p className="text-gray-500 font-400 text-[16px]">
                  Dolor sit amet, dolor gravida, placerat libero lorem ipsum.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}