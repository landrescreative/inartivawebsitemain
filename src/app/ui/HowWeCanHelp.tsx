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
    icon: "/online-store.jpg",
  },
  {
    title: "Presencia en Redes Sociales",
    description:
      "Establecemos y mejoramos tu presencia en redes sociales con diseños atractivos y estrategias efectivas para aumentar tu alcance.",
    icon: "/social-media.jpg",
  },
  {
    title: "Conexión con Clientes",
    description:
      "Desarrollamos herramientas digitales para que te comuniques de manera eficiente con tus clientes, desde chats en vivo hasta sistemas de respuesta automatizados.",
    icon: "/customer-connection.jpg",
  },
  {
    title: "Soluciones para Negocios Locales",
    description:
      "Digitalizamos tu negocio local con estrategias adaptadas para aumentar tu visibilidad y atraer clientes cercanos.",
    icon: "/local-business.jpg",
  },
  {
    title: "Portafolios y Presentaciones Digitales",
    description:
      "Creamos portafolios y presentaciones digitales profesionales que destacan tu trabajo y logros.",
    icon: "/portfolio.jpg",
  },
  {
    title: "Posicionamiento en Línea",
    description:
      "Mejoramos tu visibilidad en buscadores con técnicas de SEO avanzadas, ayudando a que te encuentren más fácilmente.",
    icon: "/seo.jpg",
  },
  {
    title: "Branding y Diseño Visual",
    description:
      "Diseñamos identidades visuales que reflejan la esencia de tu marca, desde logos hasta paletas de colores únicas.",
    icon: "/branding.jpg",
  },
  {
    title: "Funcionalidades Interactivas",
    description:
      "Integramos funcionalidades interactivas como calculadoras, configuradores y más para enriquecer la experiencia del usuario.",
    icon: "/interactive-features.jpg",
  },
  {
    title: "Gestión de Inventarios para Negocios",
    description:
      "Desarrollamos sistemas personalizados para la gestión de inventarios, ayudándote a controlar existencias y pedidos.",
    icon: "/inventory-management.jpg",
  },
  {
    title: "Consultoría Digital",
    description:
      "Te asesoramos en la transformación digital de tu negocio, desde la planificación hasta la implementación.",
    icon: "/digital-consulting.jpg",
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
    <section className="relative py-28 px-6 md:px-12 bg-white">
      {/* Formas geométricas */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-40"></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <h2 className="text-center text-5xl font-black uppercase text-gray-800 mb-6">
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
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center mb-24`}
          >
            {/* Imagen */}
            <motion.div
              variants={imageVariants}
              className="w-full md:w-1/2 h-[450px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
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
              className="w-full md:w-1/2 mt-10 md:mt-0 p-8 md:p-16"
            >
              <h3 className="text-4xl font-semibold text-gray-800 mb-6">
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
