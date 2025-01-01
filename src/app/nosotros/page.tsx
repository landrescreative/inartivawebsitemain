"use client";

import React from "react";
import { motion } from "framer-motion";

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              digital
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl text-center text-gray-400">
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
      <section className="py-24 px-6 bg-black text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Cómo lo hacemos
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              {
                title: "Diseño Inmersivo",
                description:
                  "Creamos experiencias visuales que conectan emocionalmente con los usuarios.",
              },
              {
                title: "Tecnología Moderna",
                description:
                  "Implementamos soluciones de última generación para garantizar calidad y escalabilidad.",
              },
              {
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
                <h4 className="text-2xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-lg text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Video Showcase Section (White Background) */}
      <section className="py-24 px-6 bg-white text-black">
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <video
              id="introVideo"
              src="/IntroInartivaoptimizado.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => {
                const video = document.getElementById(
                  "introVideo"
                ) as HTMLVideoElement;
                if (video) {
                  video.muted = !video.muted;
                }
              }}
              className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Toggle Audio
            </button>
          </motion.div>
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
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Nosotros;
