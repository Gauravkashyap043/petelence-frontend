"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full py-10 overflow-hidden">

      {/* Common Container */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="
          w-full
          lg:w-1/2
          flex
          justify-center lg:justify-start
          shrink-0
          ">

            <Image
              src="/assets/home/image 3.png"
              alt="Pet Food"
              width={450}
              height={450}
              className="
              w-full
              max-w-[450px]
              h-auto
              object-contain
              select-none
              "
              priority
            />

          </div>


          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 min-w-0">

            <h1 className="
            text-3xl
            md:text-[50px]
            font-bold
            text-black
            leading-tight
            ">
              Welcome
              <br />
              to{" "}
              <span className="text-[#4c9e84]">
                NaturalPet
              </span>
            </h1>

            <p className="text-black mt-3 text-sm md:text-base">
              Your pet’s health and well-being are our top priority.
            </p>


            <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-6
            mt-8
            ">

              {/* ITEM */}

              <div className="flex items-start gap-3">

  {/* ICON */}
  <div className="w-6 h-6 relative shrink-0">

    <Image
      src="/assets/home/grooming-icon.svg"
      alt="grooming"
      fill
      className="object-contain"
    />

  </div>

  <div>
    <h3 className="text-[20px] font-bold">
      Pet Grooming
    </h3>

    <p className="text-gray-500 text-[16px]">
      Dolor sit amet, dolor gravida,
      placerat libero lorem ipsum.
    </p>
  </div>

</div>


<div className="flex items-start gap-3">

  {/* ICON */}
  <div className="w-6 h-6 relative shrink-0">

    <Image
      src="/assets/home/food-icon.svg"
      alt="food"
      fill
      className="object-contain"
    />

  </div>

  <div>
    <h3 className="text-[20px] font-bold">
      Pet Food
    </h3>

    <p className="text-gray-500 text-[16px]">
      Dolor sit amet, dolor gravida,
      placerat libero lorem ipsum.
    </p>
  </div>

</div>


<div className="flex items-start gap-3">

  {/* ICON */}
  <div className="w-6 h-6 relative shrink-0">

    <Image
      src="/assets/home/vaccination-icon.svg"
      alt="vaccination"
      fill
      className="object-contain"
    />

  </div>

  <div>
    <h3 className="text-[20px] font-bold">
      Vaccination
    </h3>

    <p className="text-gray-500 text-[16px]">
      Dolor sit amet, dolor gravida,
      placerat libero lorem ipsum.
    </p>
  </div>

</div>


<div className="flex items-start gap-3">

  {/* ICON */}
  <div className="w-6 h-6 relative shrink-0">

    <Image
      src="/assets/home/petcare-icon.svg"
      alt="pet care"
      fill
      className="object-contain"
    />

  </div>

  <div>
    <h3 className="text-[20px] font-bold">
      Pet Care
    </h3>

    <p className="text-gray-500 text-[16px]">
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