"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextRevealDemo } from "../ui/TextRevealDemo";

const Nosotros = () => {
  // Variantes de animación para blobs
  const blobVariants = {
    animate: {
      x: ["-30%", "30%", "-20%", "25%"], // Movimiento horizontal aleatorio
      y: ["-20%", "20%", "-25%", "30%"], // Movimiento vertical aleatorio
      transition: {
        duration: 15, // Ciclo completo de animación
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="text-black">
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen w-full bg-black text-white flex flex-col justify-center items-center relative overflow-hidden"
      >
        {/* Blobs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full blur-3xl opacity-20"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full blur-3xl opacity-20"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="text-center px-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            HEY, SOMOS INARTIVA STUDIO
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Una agencia de diseño web. Encantado de conocerte.
          </p>
        </motion.div>
      </section>

      <section
        id="mission"
        className="h-screen w-full bg-white flex flex-col justify-center items-center text-center px-8 relative overflow-hidden"
      >
        {/* Blobs */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-20"
          variants={blobVariants}
          animate="animate"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Empoderar a los negocios mediante soluciones digitales únicas y
            funcionales, diseñadas para ofrecer experiencias impactantes y
            conectar con los usuarios en un nivel más profundo.
          </p>
        </motion.div>
      </section>
      {/* Sobre Nosotros */}
      <section
        id="about"
        className="h-screen md:w-10/12 mx-auto  flex flex-col md:flex-row items-center px-8 relative overflow-hidden justify-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Somos un grupo de profesionales con talento y experiencia que ofrece
            soluciones creativas y funcionales a los negocios.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4">
            Gracias a nuestra experiencia, somos capaces de pensar creativamente
            y encontrar soluciones a los problemas, diseñando experiencias
            memorables que conectan con los usuarios.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <img
            src="/undraw_art-lover_orea.svg"
            alt="Sobre Nosotros"
            className="w-/12 h-auto rounded-lg"
          />
        </motion.div>
      </section>

      {/* Nuestra Misión */}

      {/* Newsletter Section */}
      <section
        id="newsletter"
        className="w-full bg-gray-950 py-12 px-8 flex justify-center"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 w-full max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Recibe correos electronicos con ofertas, paquetes y promociones!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            ¡Únete a nuestra comunidad para recibir correos electrónicos!
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="py-3 px-4 rounded-lg border border-gray-300 flex-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="py-3 px-6 bg-colorPrimary text-white rounded-lg hover:bg-blue-900 transition"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
