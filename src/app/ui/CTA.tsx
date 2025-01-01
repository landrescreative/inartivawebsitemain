"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const CTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contacto@inartiva.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const phrases = ["CONTACTANOS", "ENVIAR MENSAJE", "HABLEMOS"];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      },
    },
  };

  const tooltipVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const entryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative bg-black text-white py-20">
      {/* Slider Infinito */}
      <div className="overflow-hidden relative z-10">
        <motion.div
          className="flex whitespace-nowrap text-8xl font-semibold uppercase items-center"
          variants={marqueeVariants}
          animate="animate"
        >
          {phrases.map((phrase, i) => (
            <a
              href="/contacto"
              key={i}
              className="flex items-center mx-12 space-x-6 shadow-lg hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 md:h-12 md:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span>{phrase}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Información de Contacto */}
      <div className="text-center mt-16 relative z-10">
        <motion.p
          className="text-sm text-gray-400 uppercase tracking-wide"
          variants={entryVariants}
          initial="hidden"
          animate="visible"
        >
          Nos encantaría saber de ti
        </motion.p>
        <motion.div
          className="text-3xl md:text-5xl font-semibold underline hover:no-underline cursor-pointer"
          onClick={handleCopyEmail}
          variants={entryVariants}
          initial="hidden"
          animate="visible"
        >
          contacto@inartiva.com
        </motion.div>
        {copied && (
          <p className="text-green-400 mt-2">
            ¡Correo copiado al portapapeles!
          </p>
        )}

        {/* Teléfono */}
        <motion.div
          className="mt-4 text-xl md:text-2xl text-gray-400"
          variants={entryVariants}
          initial="hidden"
          animate="visible"
        >
          +52 55 2805 5529
        </motion.div>

        {/* Iconos de Redes Sociales */}
        <div className="flex justify-center space-x-8 mt-8">
          <motion.a
            href="https://www.instagram.com/inartivastudio"
            target="_blank"
            rel="noopener noreferrer"
            variants={tooltipVariants}
            whileHover="hover"
            className="text-4xl hover:text-pink-500 transition-colors"
          >
            <FaInstagram title="Instagram" />
          </motion.a>
          <motion.a
            href="https://wa.me/525528055529"
            target="_blank"
            rel="noopener noreferrer"
            variants={tooltipVariants}
            whileHover="hover"
            className="text-4xl hover:text-green-500 transition-colors"
          >
            <FaWhatsapp title="WhatsApp" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=61571247848953"
            target="_blank"
            rel="noopener noreferrer"
            variants={tooltipVariants}
            whileHover="hover"
            className="text-4xl hover:text-blue-500 transition-colors"
          >
            <FaFacebook title="Facebook" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={tooltipVariants}
            whileHover="hover"
            className="text-4xl hover:text-blue-700 transition-colors"
          >
            <FaLinkedin title="LinkedIn" />
          </motion.a>
        </div>
      </div>

      {/* Botón de Scroll hacia Arriba */}
      <div className="absolute bottom-8 right-8">
        <motion.a
          href="#top"
          className="w-12 h-12 flex items-center justify-center border-2 border-colorPrimary rounded-full hover:bg-colorPrimary hover:text-white transition"
          variants={buttonVariants}
          animate="animate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default CTA;
