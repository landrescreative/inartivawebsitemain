"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const brandSupportData = [
  {
    title: "Tiendas en Línea",
    description:
      "Creamos tiendas en línea funcionales y personalizadas que conectan tu negocio con clientes globales, integrando pagos seguros y experiencias de usuario excepcionales.",
    icon: "/tiendasenlinea01.jpg",
  },
  {
    title: "Presencia en Redes Sociales",
    description:
      "Establecemos y mejoramos tu presencia en redes sociales con diseños atractivos y estrategias efectivas para aumentar tu alcance.",
    icon: "/socialmedia.png",
  },
  {
    title: "Menú Digital para Restaurantes",
    description:
      "Digitalizamos tu menú para restaurantes con diseños atractivos y fáciles de usar, mejorando la experiencia de tus clientes y aumentando tus ventas.",
    icon: "/menurestaurante01.jpg",
  },
  {
    title: "Soluciones para Negocios Locales",
    description:
      "Digitalizamos tu negocio local con estrategias adaptadas para aumentar tu visibilidad y atraer clientes cercanos.",
    icon: "/negocioslocales01.jpg",
  },
  {
    title: "Portafolios y Presentaciones Digitales",
    description:
      "Creamos portafolios y presentaciones digitales profesionales que destacan tu trabajo y logros.",
    icon: "/portafolioweb01.jpg",
  },
  {
    title: "Posicionamiento en Línea",
    description:
      "Mejoramos tu visibilidad en buscadores con técnicas de SEO avanzadas, ayudando a que te encuentren más fácilmente.",
    icon: "/seo01.jpg",
  },
];

const HowWeCanHelpSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brandSupportData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    setTimeout(() => setIsPaused(false), 5000); // Reactiva el scroll infinito después de 5 segundos
  };

  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) {
      // Swipe right
      setIsPaused(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? brandSupportData.length - 1 : prevIndex - 1
      );
    } else if (info.offset.x < -50) {
      // Swipe left
      setIsPaused(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brandSupportData.length);
    }
    setTimeout(() => setIsPaused(false), 5000); // Reactiva el scroll infinito después de 5 segundos
  };

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-20">
          ¿Cómo Podemos <span className="text-colorPrimary">Ayudar</span> a Tu
          Negocio?
        </h2>

        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {brandSupportData.map(
              (service, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    className="flex flex-col md:flex-row items-center md:items-start justify-center w-full"
                  >
                    {/* Imagen */}
                    <motion.div
                      className="w-full md:w-1/2 h-[400px] md:h-[450px] relative rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:rotate-3 hover:scale-105 hover:shadow-2xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.1, // Aumenta ligeramente el tamaño
                        rotate: 5, // Aplica rotación leve
                        y: -10, // Eleva ligeramente el contenedor
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500"
                      />
                    </motion.div>

                    {/* Contenido */}
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 p-6 md:p-12 text-center md:text-left flex flex-col md:items-start justify-center h-full">
                      <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
                        {service.title}
                      </h3>
                      <div className="w-16 md:w-28 h-1 bg-colorPrimary mx-auto md:mx-0 mb-4"></div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-colorPrimary text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-md hover:bg-blue-600 transition-transform transform"
                      >
                        <Link href="/contacto">Contáctanos</Link>
                      </motion.button>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {brandSupportData.map((_, index) => (
            <motion.button
              key={index}
              className="w-4 h-4 rounded-full bg-gray-300"
              animate={{
                scale: index === currentIndex ? 1.5 : 1,
                backgroundColor: index === currentIndex ? "#2518FF" : "#D1D5DB",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => handleDotClick(index)}
            ></motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelpSlider;
