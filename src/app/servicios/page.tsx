"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import HowWeCanHelp from "../ui/HowWeCanHelp";

const Servicios = () => {
  const services = [
    {
      img: "/assets/img/icons/th-1-service-icon-1.svg",
      title: "Diseño Web - Diseño UI/UX ",
      description:
        "Creamos interfaces intuitivas y experiencias optimizadas para aplicaciones móviles y sitios web, mejorando la interacción usuario-producto.",
      link: "/servicios",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-3.svg",
      title: "Desarrollo Web",
      description:
        "Creamos sitios web, aplicaciones, tiendas en línea, y optimizamos su funcionalidad para garantizar una experiencia digital efectiva.",
      link: "/servicios",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-4.svg",
      title: "Marketing Digital",
      description:
        "Gestionamos campañas en redes sociales, email marketing y estrategias para potenciar la presencia de tu marca en el entorno digital.",
      link: "/servicios",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-2.svg",
      title: "SEO",
      description:
        "Optimizamos sitios web para mejorar su posicionamiento en motores de búsqueda, aumentando la visibilidad y atrayendo más clientes.",
      link: "/servicios",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="mt-10">
      {/* Hero Section */}
      <motion.section
        className="px-4 relative bg-gradient-to-br bg-black text-white text-center py-36"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h1 className="text-4xl md:text-6xl max-w-3xl mx-auto font-bold mb-6">
          EXPLORA NUESTRAS SOLUCIONES PARA TU NEGOCIO
        </h1>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 px-6 md:px-12 md:w-10/12 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h2
          className="text-center text-3xl md:text-5xl font-black mb-4 text-black uppercase"
          variants={titleVariants}
        >
          Nuestros Servicios
        </motion.h2>
        <motion.div
          className="w-36 h-1 bg-colorPrimary mx-auto mb-10"
          variants={titleVariants}
        ></motion.div>
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="jos group/team-item"
              data-jos_delay={index * 0.3}
              variants={itemVariants}
            >
              <div className="services-cards group h-full">
                <motion.div
                  className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-white p-[30px] transition duration-300 group-hover:bg-colorPrimary"
                  style={{
                    backgroundImage: `url(/ondas.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    width="64"
                    height="70"
                    className="h-[70px] w-auto"
                  />
                  <h4 className="mb-[15px] mt-[30px] text-3xl font-bold">
                    {service.title}
                  </h4>
                  <p className="mb-7">{service.description}</p>
                  <a
                    href={service.link}
                    className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                  >
                    <MdKeyboardDoubleArrowRight
                      size={30}
                      className="services-icon text-black"
                    />
                  </a>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* HowWeCanHelp Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } },
        }}
      >
        <HowWeCanHelp />
      </motion.div>
    </div>
  );
};

export default Servicios;
