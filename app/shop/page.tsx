"use client";

import { useState, useMemo } from "react";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/shop/ProductCard";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [search, category, sort]);

  return (
    <main className="min-h-screen bg-[#f9f8f6]">

      {/* PAGE HERO */}
      <div className="bg-gradient-to-br from-[#4C9E84] to-[#3a7f6a] py-10 sm:py-14 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/home/image 18.png')] bg-cover bg-center" />
        <div className="relative z-10">
          <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2">Pete&apos;llence Store</p>
          <h1 className="text-white text-[32px] sm:text-[42px] md:text-[52px] font-bold leading-tight">
            All Products
          </h1>
          <p className="text-white/80 mt-2 text-[15px] sm:text-[16px]">Premium care for your beloved pets</p>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-4 text-white/70 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white font-medium">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10 py-8">

        {/* SEARCH + SORT BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">

          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] outline-none focus:border-[#4C9E84] focus:ring-2 focus:ring-[#4C9E84]/10 transition-all"
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] outline-none focus:border-[#4C9E84] cursor-pointer text-gray-700 min-w-[160px]"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-[14px] font-medium text-gray-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Filter
          </button>
        </div>

        {/* CATEGORY FILTER — mobile collapsible, desktop always visible */}
        <div className={`${filterOpen ? "block" : "hidden"} sm:block mb-6`}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all duration-200 ${
                  category === cat
                    ? "bg-[#4C9E84] text-white border-[#4C9E84] shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#4C9E84] hover:text-[#4C9E84]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p className="text-[13px] text-gray-500 mb-5">
          Showing <span className="font-semibold text-gray-700">{filtered.length}</span> {filtered.length === 1 ? "product" : "products"}
          {category !== "All" && <> in <span className="font-semibold text-[#4C9E84]">{category}</span></>}
        </p>

        {/* PRODUCT GRID */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 60} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 text-sm">Try a different search or category</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="mt-5 px-6 py-2.5 bg-[#4C9E84] text-white rounded-full text-[14px] font-medium hover:bg-[#3d8a71] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
