"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // Obtener la ruta actual para el indicador

  // Detectar scroll hacia arriba/abajo para ocultar la barra
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMenuOpen) {
        // Solo ocultar la barra si el menú no está abierto
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false); // Ocultar barra de navegación al hacer scroll hacia abajo
        } else {
          setIsVisible(true); // Mostrar barra de navegación al hacer scroll hacia arriba
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  // Variantes para animaciones de Framer Motion
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.4 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="bg-white border-b border-black text-black flex items-center justify-between md:h-20 fixed top-0 left-0 w-full z-50"
    >
      {/* Logo clicable con fondo azul */}
      <div className="bg-blue-500 h-full w-16 md:w-20 flex items-center justify-center">
        <Link href="/">
          <Image
            src="/Logo-final.jpg"
            alt="Logo"
            width={512}
            height={512}
            objectFit="cover"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Menú principal (visible solo en escritorio) */}
      <ul className="hidden md:flex space-x-12 text-lg font-normal tracking-wider">
        {["/", "/servicios", "/nosotros", "/contacto"].map((path, index) => (
          <motion.li
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className={`hover:text-colorPrimary transition cursor-pointer ${
              pathname === path ? "border-b-2 border-colorPrimary" : ""
            }`}
          >
            <Link href={path}>
              {path === "/" ? "INICIO" : path.replace("/", "").toUpperCase()}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Botón CTA (visible solo en escritorio) */}
      <div className="hidden md:flex">
        <Link href="/contacto">
          <motion.button
            className="btn mr-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HABLEMOS
          </motion.button>
        </Link>
      </div>

      {/* Menú hamburguesa (visible solo en móvil) */}
      <div className="md:hidden flex items-center mx-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl z-50 text-black focus:outline-none"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Menú desplegable (con logo e indicadores) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-black text-white flex flex-col justify-start items-start px-8 py-12 z-40"
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl text-white focus:outline-none z-50"
            >
              <AiOutlineClose />
            </button>

            {/* Logo en la parte superior */}
            <div className="mb-8">
              <img
                src="/Logo-final.jpg"
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Enlaces del menú */}
            <div className="flex flex-col space-y-6 w-full">
              {["/", "/servicios", "/nosotros", "/contacto"].map(
                (path, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={navItemVariants}
                    className={`text-2xl font-semibold hover:text-gray-300 transition cursor-pointer flex items-center space-x-2 ${
                      pathname === path ? "border-l-4 border-blue-500 pl-4" : ""
                    }`}
                  >
                    <Link href={path} onClick={() => setIsMenuOpen(false)}>
                      {path === "/"
                        ? "INICIO"
                        : path.replace("/", "").toUpperCase()}
                    </Link>
                  </motion.div>
                )
              )}
            </div>

            {/* Información de contacto */}
            <div className="mt-12 text-lg space-y-4">
              <p className="flex items-center">
                <IoMdMail></IoMdMail>{" "}
                <span className="ml-2">contacto@inartiva.com</span>
              </p>
              <p className="flex items-center">
                <FaPhone /> <span className="ml-2">+52 55 2805 5529</span>
              </p>
            </div>

            {/* Redes sociales */}
            <div className="mt-12 flex space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61571247848953"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/inartivastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/525528055529"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Pie del menú */}
            <div className="mt-auto pt-12 text-center w-full">
              <p className="text-sm text-gray-500">
                © 2025 INARTIVA. Todos los derechos reservados.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
