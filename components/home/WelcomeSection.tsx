"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full py-10 overflow-hidden">
      
      {/* Common Container */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-4">

        {/* MAIN FLEX */}
<div
  className="
    flex
    flex-col-reverse
    lg:flex-row
    items-center
    gap-8
    lg:gap-8
  "
>

          {/* LEFT IMAGE */}
          <div
            className="
              w-full
              lg:w-1/2
              flex
              justify-center
              lg:justify-start
              shrink-0
              animate-slideInLeft
            "
          >
            <Image
              src="/assets/home/image 3.png"
              alt="Pet Food"
              width={450}
              height={450}
              className="
                w-full
                max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[380px]
                lg:max-w-[450px]
                h-auto
                object-contain
                select-none
                animate-float
              "
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
<div
  className="
    w-full
    lg:w-[60%]
    min-w-0
    text-left
    lg:pl-0
    animate-slideInRight
  "
>
            <h1
              className="
                text-[32px]
                sm:text-[42px]
                md:text-[52px]
                lg:text-[58px]
                font-bold
                text-black
                leading-tight
              "
            >
              Welcome
              <br />
              to{" "}
              <span className="logo-shimmer">
                Pete&apos;llence
              </span>
            </h1>

            <p
              className="
                text-black
                mt-4
                text-[16px]
                sm:text-[18px]
                md:text-[20px]
                max-w-[650px]
              "
            >
              Your pet’s health and well-being are our top priority.
            </p>

            {/* GRID */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
                sm:gap-8
                mt-6
              "
            >

              {/* ITEM */}
              <div className="flex items-start gap-3">

                <div className="w-7 h-7 relative shrink-0 mt-1">
                  <Image
                    src="/assets/home/pet-comb.svg"
                    alt="grooming"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold">
                    Pet Grooming
                  </h3>

                  <p className="text-gray-500 text-[16px] sm:text-[18px]">
                    Dolor sit amet, dolor gravida,
                    placerat libero lorem ipsum.
                  </p>
                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-start gap-3">

                <div className="w-7 h-7 relative shrink-0 mt-1">
                  <Image
                    src="/assets/home/hotel.svg"
                    alt="food"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold">
                    Pet Food
                  </h3>

                  <p className="text-gray-500 text-[16px] sm:text-[18px]">
                    Dolor sit amet, dolor gravida,
                    placerat libero lorem ipsum.
                  </p>
                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-start gap-3">

                <div className="w-7 h-7 relative shrink-0 mt-1">
                  <Image
                    src="/assets/home/syringe_1_.svg"
                    alt="vaccination"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold">
                    Vaccination
                  </h3>

                  <p className="text-gray-500 text-[16px] sm:text-[18px]">
                    Dolor sit amet, dolor gravida,
                    placerat libero lorem ipsum.
                  </p>
                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-start gap-3">

                <div className="w-7 h-7 relative shrink-0 mt-1">
                  <Image
                    src="/assets/home/first-aid-kit.svg"
                    alt="pet care"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold">
                    Pet Care
                  </h3>

                  <p className="text-gray-500 text-[16px] sm:text-[18px]">
                    Dolor sit amet, dolor gravida,
                    placerat libero lorem ipsum.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}