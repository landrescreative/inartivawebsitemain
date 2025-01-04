"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPencilRuler, FaLaptopCode, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import VideoSection from "../ui/VideoSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const Nosotros = () => {
  return (
    <div className="font-sans">
      {/* Hero Section (Black Background) */}
      <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center flex-col"
        >
          <h1 className="text-6xl md:text-[7rem] font-bold leading-tight tracking-tight">
            Diseñamos el futuro <br />
            <span className=" text-colorPrimary">digital</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl text-center text-gray-300">
            En Inartiva, combinamos diseño, tecnología y experiencia para crear
            productos que conecten e inspiren.
          </p>
        </motion.div>
      </section>

      {/* About Section (White Background) */}
      <section className="py-24 px-6 bg-white text-black">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            La simplicidad es poderosa
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nuestra filosofía se basa en simplificar lo complejo. Diseñamos con
            intención, eliminando lo innecesario y enfocándonos en lo esencial.
          </motion.p>
        </motion.div>
      </section>

      {/* Features Section (Black Background) */}
      <section className="py-24 px-6 bg-black text-white min-h-[600px] flex justify-center items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            Cómo lo hacemos
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              {
                icon: (
                  <FaPencilRuler size={40} className="mb-4 text-colorPrimary" />
                ),
                title: "Diseño Inmersivo",
                description:
                  "Creamos experiencias visuales que conectan emocionalmente con los usuarios.",
              },
              {
                icon: (
                  <FaLaptopCode size={40} className="mb-4 text-colorPrimary" />
                ),
                title: "Tecnología Moderna",
                description:
                  "Implementamos soluciones de última generación para garantizar calidad y escalabilidad.",
              },
              {
                icon: (
                  <FaChartLine size={40} className="mb-4 text-colorPrimary" />
                ),
                title: "Enfoque Estratégico",
                description:
                  "Cada decisión que tomamos está fundamentada en análisis y objetivos claros.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                {feature.icon}
                <h4 className="text-2xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-lg text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Video Showcase Section (White Background) */}
      <section className="py-24 md:px-6 bg-white text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Experimenta lo extraordinario
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Creamos soluciones digitales que no solo funcionan, sino que
            inspiran. Descubre cómo hacemos magia.
          </p>
          <VideoSection />
        </motion.div>
      </section>

      {/* Stats Section (Black Background) */}
      <section className="py-24 px-6 bg-black text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            Nuestros números hablan
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { number: "10+", label: "Años de experiencia" },
              { number: "50+", label: "Proyectos completados" },
              { number: "100%", label: "Clientes satisfechos" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <h4 className="text-6xl font-bold text-white mb-4">
                  {stat.number}
                </h4>
                <p className="text-lg text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section (White Background) */}
      <section className="py-24 px-6 bg-white text-black">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            El diseño correcto puede cambiar todo
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            ¿Listo para transformar tu marca? Vamos a trabajar juntos y a crear
            algo extraordinario.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
          >
            <Link href="/contacto">Contáctanos</Link>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Nosotros;
