"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="text-black bg-white fixed top-0 left-0 w-full z-50  body-font shadow-md">
      
  <div className="container max-w-7xl  flex items-center justify-between p-5">
    {/* Logo */}
    <Link href="/" className="text-white ml-0 lg:ml-18 hover:cursor-pointer text-4xl font-bold">
      <Image src="/logo-wavy.png" alt="MensXP Logo" width={163} height={100} />
    </Link>

    {/* Desktop Nav */}
    <div className="hidden lg:flex flex-1 justify-center space-x-8 text-base">
      <Link href="/etfs" className="font-bold hover:text-pink-700">ETFS</Link>
      <Link href="/finance" className="font-bold hover:text-pink-700">FINANCE</Link>
      <Link href="/stock" className="font-bold hover:text-pink-700">STOCK</Link>
      <Link href="/trading" className="font-bold hover:text-pink-700">TRADING</Link>
    </div>

    {/* Contact Button (Right Side) */}
    <div className="hidden lg:flex">
      <Link
        href="/contact"
        className="ml-4 px-8 py-2 font-bold rounded-lg mr-18 text-white transition-all duration-300 bg-gradient-to-r
   from-pink-500 to-orange-400 hover:cursor-pointer hover:from-orange-500 hover:to-pink-600 hover:scale-105 hover:shadow-lg"
      >
        Contact
      </Link>
    </div>

    {/* Hamburger Menu (Mobile) */}
    <div className="lg:hidden hover:cursor-pointer text-black text-2xl" onClick={toggleMenu}>
      {menuOpen ? <FiX /> : <FiMenu />}
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="lg:hidden px-5 pb-6 space-y-4 shadow-md">
      <nav>
        <ul className="flex flex-col items-center space-y-5 text-base">
          <li><Link href="/etfs" onClick={handleCloseMenu} className="font-bold hover:text-pink-700">ETFS</Link></li>
          <li><Link href="/finance" onClick={handleCloseMenu} className="font-bold hover:text-pink-700">FINANCE</Link></li>
          <li><Link href="/stock" onClick={handleCloseMenu} className="font-bold hover:text-pink-700">STOCK</Link></li>
          <li><Link href="/trading" onClick={handleCloseMenu} className="font-bold hover:text-pink-700">TRADING</Link></li>
        </ul>
      </nav>
      <div className="flex justify-center pt-2">
        <Link
          href="/contact"
          onClick={handleCloseMenu}
          className="ml-4 px-8 py-2 font-bold rounded-xl text-white bg-pink-500 shadow-md hover:bg-pink-600 hover:scale-105 hover:shadow-lg"
        >
          Contact
        </Link>
      </div>
    </div>
  )}
</header>

  );
};

export default Header;
