"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`${sz} ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const mockReviews = [
  { name: "Riya M.", date: "April 2026", rating: 5, text: "Absolutely love this! My dog's coat is shinier than ever. Will definitely order again." },
  { name: "Arjun S.", date: "March 2026", rating: 4, text: "Good quality product, fast delivery. My pet took a few days to get used to it but loves it now." },
  { name: "Priya K.", date: "February 2026", rating: 5, text: "Vet recommended and my pet seems so much healthier. Great value for money." },
];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((p) => p.id === id);

  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState<"description" | "features" | "reviews">("description");

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <div className="text-6xl">🐾</div>
        <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
        <Link href="/shop" className="px-6 py-2.5 bg-[#4C9E84] text-white rounded-full font-medium hover:bg-[#3d8a71] transition-colors">
          Back to Shop
        </Link>
      </main>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <main className="min-h-screen bg-[#f9f8f6]">

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 text-[13px] text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-[#4C9E84] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#4C9E84] transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* LEFT — IMAGE */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 flex items-center justify-center aspect-square shadow-sm relative overflow-hidden group">
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#4C9E84] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </span>
              )}
              {product.discount && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.discount}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`bg-white rounded-2xl p-3 aspect-square flex items-center justify-center cursor-pointer border-2 transition-all duration-200 ${i === 0 ? "border-[#4C9E84] shadow-sm" : "border-transparent hover:border-gray-300"}`}>
                  <img src={product.image} alt="" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="flex flex-col">

            {/* Category */}
            <span className="inline-flex items-center gap-1.5 text-[#4C9E84] text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-4 h-[2px] bg-[#4C9E84] rounded" />
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <Stars rating={product.rating} />
              <span className="text-[15px] font-semibold text-amber-500">{product.rating}</span>
              <span className="text-gray-400">|</span>
              <span className="text-[14px] text-gray-500">{product.reviews} reviews</span>
              <span className="text-gray-400">|</span>
              <span className={`text-[13px] font-semibold ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                {product.inStock ? "✓ In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-2">
              <span className="text-[36px] sm:text-[42px] font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-[20px] text-gray-400 line-through mb-1">₹{product.originalPrice}</span>
              )}
            </div>
            {savings > 0 && (
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-green-50 text-green-700 text-[13px] font-semibold px-3 py-1 rounded-full border border-green-200">
                  You save ₹{savings} ({product.discount})
                </span>
              </div>
            )}

            {/* Weight */}
            {product.weight && (
              <div className="flex items-center gap-2 mb-5 text-[14px] text-gray-600">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7M19.08 19.08l.7.7M1 12h1M22 12h1M4.22 19.78l.7-.7M19.08 4.92l.7-.7" />
                </svg>
                <span>Size / Weight: <strong>{product.weight}</strong></span>
              </div>
            )}

            <div className="h-[1px] bg-gray-100 my-4" />

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[14px] font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium"
                >
                  −
                </button>
                <span className="w-10 text-center text-[15px] font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-[#94694C] text-white hover:bg-[#7a5540] shadow-md hover:shadow-lg"
                }`}
              >
                {added ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </button>
              <button className="flex-1 sm:flex-none py-3.5 px-6 rounded-full font-semibold text-[15px] border-2 border-[#4C9E84] text-[#4C9E84] hover:bg-[#4C9E84] hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Wishlist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: "🚚", label: "Free Delivery", sub: "On orders over ₹999" },
                { icon: "↩", label: "Easy Returns", sub: "30-day return policy" },
                { icon: "✓", label: "Vet Approved", sub: "Certified safe products" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
                  <span className="text-xl">{b.icon}</span>
                  <div>
                    <p className="text-[12px] font-semibold text-gray-800">{b.label}</p>
                    <p className="text-[11px] text-gray-500">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* TABS */}
        <div className="mt-12 sm:mt-16">
          <div className="flex border-b border-gray-200 gap-0 overflow-x-auto">
            {(["description", "features", "reviews"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 sm:px-8 py-3.5 text-[14px] sm:text-[15px] font-semibold capitalize whitespace-nowrap border-b-2 transition-all duration-200 ${
                  tab === t ? "border-[#4C9E84] text-[#4C9E84]" : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {t === "reviews" ? `Reviews (${product.reviews})` : t}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 mt-4 shadow-sm animate-fadeInUp">
            {tab === "description" && (
              <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl">
                {product.description}
              </p>
            )}
            {tab === "features" && (
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4C9E84]/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#4C9E84]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
            {tab === "reviews" && (
              <div className="space-y-5 max-w-2xl">
                {mockReviews.map((r, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-800 text-[15px]">{r.name}</p>
                        <p className="text-[12px] text-gray-400">{r.date}</p>
                      </div>
                      <Stars rating={r.rating} size="sm" />
                    </div>
                    <p className="text-gray-600 text-[14px] leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <div className="mt-14 sm:mt-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[22px] sm:text-[28px] font-bold text-gray-900">Related Products</h2>
              <Link href="/shop" className="text-[#4C9E84] font-medium text-[14px] hover:underline">View all →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p, i) => (
                <Link key={p.id} href={`/shop/${p.id}`} className="block group">
                  <div className="bg-white rounded-2xl p-4 card-hover shadow-sm h-full flex flex-col" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="h-[140px] sm:h-[160px] flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                      <img src={p.image} alt={p.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-[13px] sm:text-[14px] font-medium text-gray-800 mb-1.5 leading-snug flex-1">{p.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] sm:text-[18px] font-bold text-gray-900">₹{p.price}</span>
                      {p.originalPrice && <span className="text-[12px] text-gray-400 line-through">₹{p.originalPrice}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
