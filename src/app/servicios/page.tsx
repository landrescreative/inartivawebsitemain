"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import HowWeCanHelp from "../ui/HowWeCanHelp";
import FreeConsultationBanner from "../ui/FreeConsultationBanner";

const Servicios = () => {
  const services = [
    {
      img: "/assets/img/icons/th-1-service-icon-1.svg",
      title: "Diseño Web - Diseño UI/UX ",
      description:
        "Creamos interfaces intuitivas y experiencias optimizadas para aplicaciones móviles y sitios web, mejorando la interacción usuario-producto.",
      link: "/detalles-servicio",
    },

    {
      img: "/assets/img/icons/th-1-service-icon-3.svg",
      title: "Desarrollo Web",
      description:
        "Creamos sitios web, aplicaciones, tiendas en línea, y optimizamos su funcionalidad para garantizar una experiencia digital efectiva.",
      link: "/detalles-servicio",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-4.svg",
      title: "Marketing Digital",
      description:
        "Gestionamos campañas en redes sociales, email marketing y estrategias para potenciar la presencia de tu marca en el entorno digital.",
      link: "/detalles-servicio",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-2.svg",
      title: "SEO",
      description:
        "Optimizamos sitios web para mejorar su posicionamiento en motores de búsqueda, aumentando la visibilidad y atrayendo más clientes.",
      link: "/detalles-servicio",
    },
  ];

  const brandSupport = [
    {
      title: "Tiendas en Línea",
      description:
        "Llevamos tu negocio al mundo digital con soluciones de comercio electrónico efectivas.",
      icon: "/icons/ecommerce.svg",
    },
    {
      title: "Páginas Web Corporativas",
      description:
        "Creamos páginas web corporativas para mostrar profesionalismo y confianza.",
      icon: "/paginasweb01.jpg",
    },
    {
      title: "Diseño para Redes Sociales",
      description:
        "Diseñamos contenido visual para captar la atención en redes sociales.",
      icon: "/icons/social-design.svg",
    },
    {
      title: "Marketing Digital",
      description:
        "Estrategias de marketing para llegar a más clientes y aumentar tus ventas.",
      icon: "/icons/marketing.svg",
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

  return (
    <div className="mt-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br bg-black text-white text-center py-36 ">
        <h1 className="text-4xl md:text-6xl max-w-3xl mx-auto font-bold mb-6">
          EXPLORA NUESTRAS SOLUCIONES PARA TU NEGOCIO
        </h1>
      </section>

      {/* Services Section */}
      <section className=" py-20 px-6 md:px-12  md:w-10/12 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-black mb-4 text-black uppercase">
          Nuestros Servicios
        </h2>
        <motion.div
          className="w-36 h-1 bg-colorPrimary mx-auto mb-10"
          variants={titleVariants}
        ></motion.div>
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={index}
              className={`jos group/team-item`}
              data-jos_delay={index * 0.3}
            >
              <div className="services-cards group h-full">
                <div
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
                  <h4 className="mb-[15px] mt-[30px] text-3xl font-bold ">
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
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <HowWeCanHelp />
    </div>
  );
};

export default Servicios;
