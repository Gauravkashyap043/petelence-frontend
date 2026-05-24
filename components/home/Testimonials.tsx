"use client";

import Image from "next/image";
import { useState } from "react";

const allTestimonials = [
  { id: 1, name: "Waylan S.",  role: "Cat Owner - Colorado",   image: "/assets/home/Ellipse 1.png", text: "This is simply unbelievable! Pet shop did exactly what you said it does. I'm good to go. One cat's horrid breath...gone! One cat from a bit 'too round' to almost perfect weight." },
  { id: 2, name: "Jessica M.", role: "Dog Owner - Texas",       image: "/assets/home/Ellipse 1.png", text: "I've tried so many pet stores but nothing compares. My dog's coat is shinier than ever and his energy levels are through the roof. Absolutely love this place!" },
  { id: 3, name: "Robert K.",  role: "Parrot Owner - New York", image: "/assets/home/Ellipse 1.png", text: "Amazing products and even better customer service. My parrot seems happier than ever. Delivery was fast and packaging was perfect. Will definitely order again!" },
  { id: 4, name: "Sophia L.",  role: "Rabbit Owner - Oregon",   image: "/assets/home/Ellipse 1.png", text: "Couldn't be happier with my purchase. My rabbit loves the new food and the toys kept her busy for hours. Great quality at a very fair price." },
  { id: 5, name: "Marcus T.",  role: "Fish Owner - Florida",    image: "/assets/home/Ellipse 1.png", text: "My aquarium has never looked so good. The water treatment products are top-notch and the fish are visibly more active and healthy. Highly recommend!" },
  { id: 6, name: "Priya N.",   role: "Dog Owner - California",  image: "/assets/home/Ellipse 1.png", text: "Fast shipping, quality products, and my pup absolutely adores the new treats. Will be a lifelong customer. The staff was also super helpful via chat." },
  { id: 7, name: "Lucas B.",   role: "Cat Owner - Illinois",    image: "/assets/home/Ellipse 1.png", text: "My cats are picky eaters but they devoured everything from this store. The organic cat food selection is fantastic. Really glad I found this pet shop!" },
  { id: 8, name: "Amira H.",   role: "Hamster Owner - Washington", image: "/assets/home/Ellipse 1.png", text: "Great selection of hamster supplies. My little furball is thriving with the new cage setup and the food quality is clearly superior. Very impressed!" },
  { id: 9, name: "David W.",   role: "Dog Owner - Georgia",     image: "/assets/home/Ellipse 1.png", text: "The grooming kit I ordered was beyond my expectations. My golden retriever looks like he just stepped out of a salon. Worth every penny!" },
];

const PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(allTestimonials.length / PER_PAGE);
  const visible = allTestimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const navigate = (dir: number) => {
    setPage((prev) => (prev + dir + totalPages) % totalPages);
  };

  return (
    <section className="w-full bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl md:text-[34px] font-semibold">Testimonials</h2>
          <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition whitespace-nowrap">
            View all →
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {visible.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-sm px-6 pb-6 pt-[85px] text-center"
            >
              {/* PROFILE IMAGE */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={130}
                  height={130}
                  className="w-[110px] md:w-[130px] h-[110px] md:h-[130px] rounded-full object-cover border-4 border-white shadow"
                />
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-[16px] leading-relaxed mt-2">{item.text}</p>

              {/* NAME */}
              <h3 className="mt-4 font-semibold text-[20px] text-[#4C9E84]">{item.name}</h3>

              {/* ROLE */}
              <p className="mt-1 text-[18px] font-semibold text-[#4C9E84]">{item.role}</p>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => navigate(-1)}
            className="w-11 h-11 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition"
          >
            ←
          </button>
          <button
            onClick={() => navigate(1)}
            className="w-11 h-11 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition"
          >
            →
          </button>
        </div>

        {/* PAGE INDICATOR */}
        <p className="text-center text-sm text-gray-400 mt-3">
          {page + 1} / {totalPages}
        </p>

      </div>
    </section>
  );
}