"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "ABOUT US", href: "#" },
  { label: "SERVICE", href: "#" },
  { label: "SHOP", href: "/shop" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* close drawer on desktop resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* prevent body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const CartIcon = ({ stroke = "white", size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke={stroke} width={size} height={size}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );

  return (
    <>
      {/* ─── STICKY HEADER ─── */}
      <header className="w-full sticky top-0 z-[9990] animate-fadeInUp">

        {/* TOP BAR — desktop only */}
        <div className="hidden lg:block bg-[#94694c] text-white text-sm">
          <div className="max-w-[1450px] mx-auto px-10 py-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <Image src="/assets/home/calendar-with-spring-binder-and-date-blocks.svg" alt="calendar" width={18} height={18} className="object-contain" />
                  ONLINE BOOKING
                </span>
                <span className="flex items-center gap-2">
                  <Image src="/assets/home/old-typical-phone.svg" alt="phone" width={18} height={18} className="object-contain" />
                  +91-9999999999
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>FOLLOW US</span>
                <FaFacebookF className="cursor-pointer hover:text-gray-300 transition-colors" />
                <FaInstagram className="cursor-pointer hover:text-gray-300 transition-colors" />
                <FaTwitter className="cursor-pointer hover:text-gray-300 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="bg-white shadow-sm">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">

            {/* ─ MOBILE: 3-col grid ─ DESKTOP: flex row ─ */}
            <div className="grid grid-cols-[auto_1fr_auto] lg:flex lg:items-center lg:justify-between gap-x-4 h-[60px] lg:h-auto lg:py-4">

              {/* COL-1 ─ Hamburger (mobile) | Logo (desktop) */}
              <div className="flex items-center">
                {/* HAMBURGER BUTTON — no border, pure icon */}
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={menuOpen}
                  className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -ml-1 focus:outline-none"
                >
                  <span className={`block h-[2.5px] w-6 bg-[#94694C] rounded-full transition-all duration-300 origin-left ${menuOpen ? "rotate-45 translate-x-[2px] w-[22px]" : ""}`} />
                  <span className={`block h-[2.5px] w-6 bg-[#94694C] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-[2.5px] w-6 bg-[#94694C] rounded-full transition-all duration-300 origin-left ${menuOpen ? "-rotate-45 translate-x-[2px] w-[22px]" : ""}`} />
                </button>

                {/* LOGO — desktop */}
                <Link href="/" className="hidden lg:block">
                  <span className="logo-shimmer text-[28px] font-bold tracking-tight cursor-pointer">
                    Pete&apos;llence
                  </span>
                </Link>
              </div>

              {/* COL-2 ─ Logo centered (mobile) */}
              <div className="flex items-center justify-center lg:hidden">
                <Link href="/">
                  <span className="logo-shimmer text-[22px] font-bold tracking-tight cursor-pointer">
                    Pete&apos;llence
                  </span>
                </Link>
              </div>

              {/* COL-3 ─ Desktop nav + cart | Mobile cart */}
              <div className="flex items-center justify-end gap-6">

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
                  {navLinks.map((l) => (
                    <Link key={l.label} href={l.href} className="hover:text-[#4C9E84] transition-colors duration-200 text-sm tracking-wide">
                      {l.label}
                    </Link>
                  ))}
                </nav>

                {/* CART — both mobile & desktop */}
                <button className="w-10 h-10 rounded-full bg-[#4C9E84] flex items-center justify-center shrink-0 hover:bg-[#3d8a71] transition-colors duration-200 active:scale-95">
                  <CartIcon stroke="white" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── OVERLAY ─── */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-[9991] transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ─── SLIDE-IN DRAWER ─── */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-[78%] max-w-[310px] bg-white z-[9992] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="logo-shimmer text-[22px] font-bold tracking-tight">Pete&apos;llence</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#94694C" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col py-2 flex-1 overflow-y-auto">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-5 py-4 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#4C9E84] border-b border-gray-50 transition-colors active:bg-gray-100"
            >
              {l.label}
              <svg className="ml-auto w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Social + contact in drawer */}
        <div className="px-5 py-5 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-3 font-semibold">Follow Us</p>
          <div className="flex gap-4 text-[#94694C] mb-4">
            <FaFacebookF className="cursor-pointer hover:text-[#4C9E84] transition-colors" size={20} />
            <FaInstagram className="cursor-pointer hover:text-[#4C9E84] transition-colors" size={20} />
            <FaTwitter className="cursor-pointer hover:text-[#4C9E84] transition-colors" size={20} />
          </div>
          <p className="text-[13px] text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +91-9999999999
          </p>
        </div>
      </aside>
    </>
  );
}
