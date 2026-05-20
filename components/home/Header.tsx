"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function Header() {
    return (
        <header className="w-full">

            {/* Top Bar */}
            <div className="bg-[#9c6b4f] text-white text-sm">

                <div className=" mx-auto px-20 py-4 flex justify-between items-center">

                    {/* Left */}
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            📅 <span>ONLINE BOOKING</span>
                        </span>

                        <span className="flex items-center gap-2">
                            📞 <span>+91-9999999999</span>
                        </span>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:block">FOLLOW US</span>

                        <FaFacebookF className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white shadow-sm">

                <div className="mx-auto px-20 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center py-2">
                        

                        <Image
                            src="/assets/home/image 2.svg"
                            alt="NaturalPet Logo"
                            width={200}
                            height={55}
                            className="object-contain"
                        />
                    </div>

                    {/* Menu */}
                    <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                        <Link href="#">ABOUT US</Link>
                        <Link href="#">SERVICE</Link>
                        <Link href="#">SHOP</Link>
                        <Link href="#">SIGN IN</Link>
                    </nav>

                    {/* Right */}
                    <div className="flex items-center gap-4">

                        <button className="bg-green-600 text-white px-5 py-2 rounded-full">
                            SIGN UP
                        </button>

                        <ShoppingCart className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    );
}