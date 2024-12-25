'use client';

import { links } from '@/app/utils/navlinks';
import Link from 'next/link';
import React, { useState } from 'react';
import Btn from './Button';
import Image from 'next/image';
import logo from '../../public/assets/logo_black.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-red-500">
      {/* Logo */}
      <Link className="logo flex-shrink-0" href="/">
        <Image className="img" height={50} width={150} src={logo} alt="logo" />
      </Link>

      {/* Hamburger Icon */}
      <button
        className="text-2xl md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links (Mobile + Desktop) */}
      <div
        className={`fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto 
          bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-10
          md:flex md:items-center md:gap-6
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {links.map((link) => (
            <Link
              className="text-gray-700 hover:text-black px-4 py-2 md:px-0 md:py-0"
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
          <div className="mt-2 md:mt-0">
            <Btn text="Request a quote" path="/" className="border-black border-2 px-4 py-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;