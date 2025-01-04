"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

const HowWeCanHelp: React.FC = () => {
  const imageVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-28 md:px-12 bg-white">
      <div className="container lg:w-10/12 mx-auto relative z-10">
        <h2 className="text-center text-3xl md:text-5xl font-black uppercase text-black mb-6">
          ¿Cómo Podemos <span className="text-colorPrimary ">Ayudar</span> a Tu
          Negocio?
        </h2>
        <motion.div
          className="w-28 h-1 bg-colorPrimary mx-auto mb-20"
          variants={titleVariants}
        ></motion.div>

        {brandSupportData.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center mb-24`}
          >
            {/* Imagen */}
            <motion.div
              variants={imageVariants}
              className="w-full lg:w-1/2 h-[450px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <Image
                src={service.icon}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:rotate-2"
              />
            </motion.div>

            {/* Contenido */}
            <motion.div
              variants={textVariants}
              className="w-full lg:w-1/2 mt-10 md:mt-0  md:p-16"
            >
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                {service.title}
              </h3>
              <motion.div
                className="w-28 h-1 bg-colorPrimary mb-4"
                variants={titleVariants}
              ></motion.div>
              <p className="text-gray-600 text-xl leading-relaxed mb-6">
                {service.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-colorPrimary text-white px-8 py-4 text-lg rounded-full shadow-md hover:bg-blue-600 transition-transform transform"
              >
                <Link href="/contacto">Contáctanos</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeCanHelp;
