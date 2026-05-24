"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full overflow-hidden sticky top-0 z-[9999]">

      {/* TOP BAR - DESKTOP ONLY */}
      <div className="hidden lg:block bg-[#94694c] text-white text-sm">

        <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Left */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">

              {/* ONLINE BOOKING */}
              <span className="flex items-center gap-2 whitespace-nowrap">

                <div className="w-5 h-5 relative shrink-0">

                  <Image
                    src="/assets/home/calendar-with-spring-binder-and-date-blocks.svg"
                    alt="calendar"
                    fill
                    className="object-contain"
                  />

                </div>

                <span>ONLINE BOOKING</span>

              </span>

              {/* PHONE */}
              <span className="flex items-center gap-2 whitespace-nowrap">

                <div className="w-5 h-5 relative shrink-0">

                  <Image
                    src="/assets/home/old-typical-phone.svg"
                    alt="phone"
                    fill
                    className="object-contain"
                  />

                </div>

                <span>+91-9999999999</span>

              </span>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4 shrink-0">

              <span className="hidden sm:block">
                FOLLOW US
              </span>

              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />

            </div>

          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-white shadow-sm relative">

        <div className="max-w-[1450px] mx-auto px-5 md:px-6 lg:px-10 py-4">

          <div className="flex items-center justify-between gap-6">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">

              {/* HAMBURGER */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
              >

                {menuOpen ? (
                  <X size={30} color="#94694C" />
                ) : (
                  <>
                    <span className="w-7 h-[3px] bg-[#94694C] rounded mb-1"></span>
                    <span className="w-7 h-[3px] bg-[#94694C] rounded mb-1"></span>
                    <span className="w-7 h-[3px] bg-[#94694C] rounded"></span>
                  </>
                )}

              </button>

              {/* LOGO - DESKTOP ONLY */}
              <div className="hidden lg:block shrink-0">

                <Image
                  src="/assets/home/image 2.svg"
                  alt="NaturalPet Logo"
                  width={180}
                  height={50}
                  priority
                  className="w-auto h-auto object-contain"
                />

              </div>

            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700 min-w-0">

              <Link href="#">ABOUT US</Link>
              <Link href="#">SERVICE</Link>
              <Link href="#">SHOP</Link>
              <Link href="#">SIGN IN</Link>

            </nav>

            {/* DESKTOP RIGHT */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">

              <button className="bg-[#4C9E84] text-white px-5 py-2 rounded-full whitespace-nowrap">
                SIGN UP
              </button>

              {/* CART */}
              <div className="w-6 h-6 relative cursor-pointer">

                <Image
                  src="/assets/home/shopping-cart.svg"
                  alt="cart"
                  fill
                  className="object-contain"
                />

              </div>

            </div>

            {/* MOBILE RIGHT ICONS */}
            <div className="flex lg:hidden items-center gap-3">

              {/* ACCOUNT ICON */}
              <div className="w-[34px] h-[34px] rounded-full bg-[#4C9E84] flex items-center justify-center relative cursor-pointer">

                <Image
                  src="/assets/home/Vector (2).svg"
                  alt="account"
                  width={16}
                  height={16}
                  className="object-contain"
                />

              </div>

              {/* CART ICON */}
              <div className="w-[34px] h-[34px] rounded-full bg-[#4C9E84] flex items-center justify-center relative cursor-pointer">

                <Image
                  src="/assets/home/shopping-cart (1).svg"
                  alt="cart"
                  width={16}
                  height={16}
                  className="object-contain"
                />

              </div>

            </div>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden z-50 ${
            menuOpen ? "max-h-[400px] py-6" : "max-h-0"
          }`}
        >

          <nav className="flex flex-col items-start gap-5 px-5 font-medium text-gray-700">

            <Link href="#">ABOUT US</Link>
            <Link href="#">SERVICE</Link>
            <Link href="#">SHOP</Link>
            <Link href="#">SIGN IN</Link>

          </nav>

        </div>

      </div>

    </header>
  );
}