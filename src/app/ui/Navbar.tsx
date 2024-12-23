"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuOptions = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ];

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center z-50 backdrop-blur-lg bg-white border-b border-gray-200">
      {/* Contenedor interno para centrar el contenido */}
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link
          href="/"
          className="w-10 px-2  flex justify-center items-center gap-4"
        >
          <motion.img
            src="/inartivalogo.svg"
            alt="logo"
            className="cursor-pointer w-full h-full"
          />
        </Link>

        {/* Grupo de botones: LET'S TALK y Menú de hamburguesa */}
        <motion.div
          className="flex items-center gap-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          {/* Botón LET'S TALK */}
          <motion.button
            className="navcta flex justify-center items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm sm:px-5 sm:py-3 sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            CONTÁCTANOS
            <FaLongArrowAltRight className="navcta_icon transition-all duration-300" />
          </motion.button>

          {/* Botón Menú de hamburguesa */}
          <div className="relative z-50" ref={languageDropdownRef}>
            <motion.button
              onClick={() => setShowLanguageDropdown((prev) => !prev)}
              className="navcta flex justify-center items-center gap-2 bg-colorPrimary text-white px-4 py-2 rounded-full text-sm sm:px-5 sm:py-3 sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <GiHamburgerMenu className="navcta_icon" />
            </motion.button>
            <motion.div
              className="absolute mt-5 right-0 flex flex-col bg-white border-2 shadow-xl rounded-2xl overflow-hidden p-4 space-y-2 w-48"
              initial="closed"
              animate={showLanguageDropdown ? "open" : "closed"}
              variants={dropdownVariants}
            >
              {menuOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  className="tracking-widest py-2 px-4 text-lg text-right font-normal uppercase w-full hover:bg-[#DDDBFF] transition-all duration-300 rounded-lg"
                >
                  {option.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
