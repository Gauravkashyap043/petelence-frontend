"use client";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Waylan S.",
      role: "Cat Owner - Colorado",
      image: "/assets/home/Ellipse 1.png",
      text: "This is simply unbelievable! Pet shop did exactly what you said it does. I'm good to go. Pet shop is great. One cats horrid breath...gone! One cat from a bit 'toround' to almost perfect weight.",
    },
    {
      id: 2,
      name: "Waylan S.",
      role: "Cat Owner - Colorado",
      image: "/assets/home/Ellipse 1.png",
      text: "This is simply unbelievable! Pet shop did exactly what you said it does. I'm good to go. Pet shop is great. One cats horrid breath...gone! One cat from a bit 'toround' to almost perfect weight.",
    },
    {
      id: 3,
      name: "Waylan S.",
      role: "Cat Owner - Colorado",
      image: "/assets/home/Ellipse 1.png",
      text: "This is simply unbelievable! Pet shop did exactly what you said it does. I'm good to go. Pet shop is great. One cats horrid breath...gone! One cat from a bit 'toround' to almost perfect weight.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-[34px] font-semibold">
            Testimonials
          </h2>

          <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition">
            View all →
          </button>
        </div>

        {/* CARDS */}
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {data.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow-sm p-6 pt-20 text-center"
            >
              {/* PROFILE IMAGE */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[130px] h-[130px] rounded-full object-cover border-4 border-white shadow"
                />
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-[16px] font-[400] leading-relaxed">
                {item.text}
              </p>

              {/* NAME */}
              <h3 className="mt-6 font-semibold text-[20px] text-[#4C9E84]">
                {item.name}
              </h3>

              {/* ROLE */}
              <p className="mt-1 text-[18px] font-semibold text-[#4C9E84]">
                {item.role}
              </p>

            </div>
          ))}
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center">
            →
          </button>
        </div>

      </div>
    </section>
  );
}