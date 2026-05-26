"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";

const PER_PAGE_DESKTOP = 4;
const PER_PAGE_MOBILE = 2;

export default function TrendingProducts() {
  const [page, setPage] = useState(0);

  const totalPagesDesktop = Math.ceil(products.length / PER_PAGE_DESKTOP);
  const totalPagesMobile = Math.ceil(products.length / PER_PAGE_MOBILE);

  const visibleDesktop = products.slice(page * PER_PAGE_DESKTOP, page * PER_PAGE_DESKTOP + PER_PAGE_DESKTOP);
  const visibleMobile = products.slice(page * PER_PAGE_MOBILE, page * PER_PAGE_MOBILE + PER_PAGE_MOBILE);

  const navigate = (dir: number) => {
    setPage((prev) => {
      const total = typeof window !== "undefined" && window.innerWidth < 1024 ? totalPagesMobile : totalPagesDesktop;
      return (prev + dir + total) % total;
    });
  };

  const ProductRow = ({ item }: { item: typeof products[0] }) => (
    <Link href={`/shop/${item.id}`} className="block group">
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm card-hover min-h-[140px] sm:min-h-[160px]">
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[130px] lg:h-[130px] bg-gray-100 flex items-center justify-center rounded-xl shrink-0 overflow-hidden group-hover:bg-gray-200 transition-colors">
          <Image
            src={item.image}
            alt={item.name}
            width={130}
            height={130}
            className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-semibold text-[#4C9E84] uppercase tracking-wide">{item.category}</span>
          <h3 className="text-[13px] sm:text-[14px] text-gray-800 font-medium leading-snug mt-0.5">{item.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-[#474747] text-[18px] sm:text-[20px]">₹{item.price}</span>
            {item.originalPrice && (
              <span className="text-[12px] text-gray-400 line-through">₹{item.originalPrice}</span>
            )}
          </div>
          <button
            className="mt-2.5 border border-[#94694C] text-[#94694C] px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold whitespace-nowrap hover:bg-[#94694C] hover:text-white transition-all duration-200 active:scale-95"
            onClick={(e) => e.preventDefault()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="w-full py-10 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-4">

        {/* HEADER */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-semibold">Trending Products</h2>
          <Link href="/shop" className="text-[#4C9E84] font-medium flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap text-sm sm:text-base">
            View all →
          </Link>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex gap-10 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-1/2">
            {visibleDesktop.map((item) => <ProductRow key={item.id} item={item} />)}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center shrink-0">
            <Image src="/assets/home/image 13.png" alt="Dog" width={440} height={440} className="w-full max-w-[440px] h-auto object-contain select-none animate-float" />
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-4">
            {visibleMobile.map((item) => <ProductRow key={item.id} item={item} />)}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition-colors active:scale-95">←</button>
            <button onClick={() => navigate(1)} className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition-colors active:scale-95">→</button>
          </div>
          <div className="flex justify-center mt-8">
            <Image src="/assets/home/image 13.png" alt="Dog" width={300} height={300} className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain" />
          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex justify-center gap-4 mt-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition-colors active:scale-95">←</button>
          <button onClick={() => navigate(1)} className="w-10 h-10 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center hover:bg-[#6d4a2f] transition-colors active:scale-95">→</button>
        </div>
      </div>
    </section>
  );
}
