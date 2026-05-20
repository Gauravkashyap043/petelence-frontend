"use client";

export default function FooterCTA() {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden pt-16">

      {/* GREEN SHAPE / IMAGE (BOTTOM) */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src="/images/footer-shape.png" // <-- green curved image
          alt="shape"
          className="w-full object-cover"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT DOG IMAGE */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src="/images/footer-dog.png"
            alt="Dog"
            className="w-[220px] md:w-[260px] object-contain"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="w-full lg:w-2/3 text-center lg:text-left pb-20">

          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Say hi to us !
          </h2>

          {/* EMAIL */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-gray-700">
            <span className="text-xl">✉️</span>
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

      {/* COPYRIGHT */}
      <div className="relative z-10 text-center text-xs text-gray-600 pb-6">
        © 1996–2022 NaturalPet. All Rights Reserved.
      </div>
    </section>
  );
}