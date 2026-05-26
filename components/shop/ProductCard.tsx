"use client";

import Link from "next/link";
import { Product } from "@/lib/products";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[11px] text-gray-500 ml-1">({rating})</span>
    </div>
  );
}

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Link href={`/shop/${product.id}`} className="block group">
      <div
        className="bg-white rounded-2xl p-4 relative card-hover animate-fadeInUp h-full flex flex-col shadow-[0px_0px_20px_rgba(0,0,0,0.07)]"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* BADGE */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#4C9E84] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
            {product.badge}
          </span>
        )}

        {/* DISCOUNT */}
        {product.discount && (
          <div className="absolute top-0 right-3 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-b-md font-semibold z-10">
            {product.discount}
          </div>
        )}

        {/* IMAGE */}
        <div className="flex justify-center items-center h-[200px] sm:h-[220px] mb-3 overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* CATEGORY */}
        <span className="text-[11px] font-medium text-[#4C9E84] uppercase tracking-wide">
          {product.category}
        </span>

        {/* NAME */}
        <h3 className="text-[14px] sm:text-[15px] text-gray-800 font-medium mt-1 mb-2 leading-snug flex-1">
          {product.name}
        </h3>

        {/* STARS */}
        <Stars rating={product.rating} />

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-2 mb-3">
          <span className="text-[20px] font-bold text-[#474747]">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {/* BUTTON */}
        <button
          className="w-full border border-[#94694C] text-[#94694C] py-2 rounded-full text-[13px] font-semibold hover:bg-[#94694C] hover:text-white transition-all duration-200 active:scale-95"
          onClick={(e) => { e.preventDefault(); }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}
