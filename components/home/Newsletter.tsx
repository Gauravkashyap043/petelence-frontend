"use client";

export default function Newsletter() {
  return (
    <section className="relative w-full bg-[#5FA38F] py-14 px-4 md:px-10 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/paw.png')] bg-repeat"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Subscribe to our <br /> newsletter
          </h2>

          {/* INPUT + BUTTON */}
          <div className="mt-6 flex w-full max-w-md overflow-hidden rounded-full bg-white">

            <input
              type="email"
              placeholder="Enter your email here.."
              className="flex-1 px-5 py-3 text-sm outline-none text-gray-700"
            />

            <button className="bg-[#8B5E3C] text-white px-6 text-sm font-medium hover:bg-[#6f472c] transition">
              subscribe
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-[50px] p-4">
            <img
              src="/images/news-dog.png" // <-- apni image
              alt="Dog"
              className="w-[180px] md:w-[220px] lg:w-[250px] object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}