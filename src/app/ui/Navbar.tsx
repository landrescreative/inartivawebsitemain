"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import HyperText from "@/components/magicui/hyper-text";

const Navbar: React.FC = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }
    }

    // Añadir event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full fixed h-20 flex items-center z-50 backdrop-blur-lg">
      <Link href="/" className="mx-4 w-7">
        <img src="/inartivalogo.svg" alt="logo" />
      </Link>
      <div className="flex flex-grow justify-center gap-10 uppercase font-regular tracking-widest	"></div>
      <button className="navcta flex justify-center items-center gap-2 mr-4 bg-black text-white px-5 py-3 rounded-full hover:bg-colorPrimary  transition-all duration-300">
        LET'S TALK
        <FaLongArrowAltRight className="navcta_icon transition-all duration-300" />
      </button>
      <div className="relative z-50" ref={languageDropdownRef}>
        <button
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          className="navcta flex justify-center items-center gap-2 mr-4 bg-colorPrimary text-white  px-5 py-3 rounded-full hover:bg-black  transition-all duration-300"
        >
          <GiHamburgerMenu className="navcta_icon transition-all duration-300" />
        </button>
        <div
          className={`absolute mt-5 right-4  flex flex-col justify-end items-end bg-white border-2 shadow-xl transition-transform duration-300 ease-in-out transform rounded-2xl ${
            showLanguageDropdown
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-x-10"
          }`}
        >
          <Link
            href="/"
            className="tracking-widest py-5 pl-20 pr-6 text-xl text-right font-normal uppercase w-full hover:bg-[#DDDBFF]  transition-all duration-300 "
          >
            Home
          </Link>
          <Link
            href="/about"
            className="tracking-widest py-5 pl-20 pr-6 text-xl text-right font-normal uppercase w-full hover:bg-[#DDDBFF]  transition-all duration-300 "
          >
            About
          </Link>
          <Link
            href="/services"
            className="tracking-widest py-5 pl-20 pr-6 text-xl text-right font-normal uppercase w-full hover:bg-[#DDDBFF]  transition-all duration-300 "
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
