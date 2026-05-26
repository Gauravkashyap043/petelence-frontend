"use client";

import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative w-full py-14 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/assets/home/image 21.png"
        alt="background"
        fill
        priority
        className="
        absolute
        inset-0
        object-cover
        object-center
        -z-10
        "
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/10 -z-10"></div>

      {/* Paw Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/paw.png')] bg-repeat"></div>

      {/* Common Container */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-white min-w-0">

            {/* DESKTOP SAME */}
            <h2 className="hidden md:block text-2xl md:text-[48px] font-semibold leading-tight">
              Subscribe to our <br />
              newsletter
            </h2>

            {/* MOBILE CENTER TEXT */}
            <h2 className="md:hidden text-[34px] font-semibold leading-[42px] text-center">
              Subscribe to our <br />
              newsletter
            </h2>

            {/* DESKTOP INPUT SAME */}
            <div className="hidden md:block mt-6 w-full max-w-md">

              <div
                className="
                flex
                w-full
                overflow-hidden
                rounded-full
                bg-white
                "
              >

                <input
                  type="email"
                  placeholder="Enter your email here.."
                  className="
                  flex-1
                  min-w-0
                  px-5
                  py-3
                  text-[20px]
                  outline-none
                  text-gray-700
                  "
                />

                <button
                  className="
                  bg-[#94694C]
                  text-white
                  px-6
                  text-[20px]
                  font-medium
                  whitespace-nowrap
                  hover:bg-[#6f472c]
                  transition
                  "
                >
                  subscribe
                </button>

              </div>
            </div>

            {/* MOBILE INPUT + BUTTON */}
            {/* MOBILE INPUT + BUTTON */}
<div className="md:hidden mt-6 w-full flex flex-col items-center">

  <input
    type="email"
    placeholder="Enter your email here.."
    className="
    w-full
    max-w-[340px]
    px-6
    py-4
    rounded-full
    bg-white
    text-gray-700
    text-[17px]
    outline-none
    "
  />

  <button
    className="
    mt-4
    w-full
    max-w-[340px]
    bg-[#94694C]
    text-white
    py-4
    rounded-full
    text-[18px]
    font-medium
    hover:bg-[#6f472c]
    transition
    "
  >
    subscribe
  </button>

</div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">

            <div
              className="
              bg-white
              rounded-[200px]
              p-5
              shrink-0
              "
            >

              <Image
                src="/assets/home/image 26.png"
                alt="Dog"
                width={250}
                height={250}
                className="
                w-[180px]
                md:w-[220px]
                lg:w-[250px]
                h-auto
                object-contain
                select-none
                "
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}