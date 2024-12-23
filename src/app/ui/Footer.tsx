"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Formulario enviado correctamente.");
  };

  return (
    <>
      {/* Espacio entre el contenido principal y el footer */}
      <div className="h-20"></div>

      <footer className="relative bg-black text-white">
        {/* Tarjeta Sobresaliente con Animación */}
        <motion.div
          className="absolute -top-24 w-11/12 mx-auto left-0 right-0 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-between p-6 md:p-10 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          {/* Texto: Contáctanos */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-black">Contáctanos</h2>
            <p className="text-gray-700">
              Si tienes preguntas o necesitas ayuda, completa el formulario y te
              responderemos lo antes posible.
            </p>
          </div>
          {/* Formulario de Contacto */}
          <form
            className="md:w-1/2 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nombre"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <motion.button
              type="submit"
              className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </motion.button>
          </form>
        </motion.div>

        {/* Parte Inferior del Footer */}
        <motion.div
          className="pt-48"
          style={{ marginTop: "7rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerVariants}
        >
          <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700">
            {/* Información de Contacto */}
            <motion.div className="space-y-4" variants={childVariants}>
              <h3 className="text-lg font-bold">Datos de Contacto</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> Teléfono: +1 234 567 890
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> Email: contacto@empresa.com
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Dirección: Calle Ejemplo 123, Ciudad
                </li>
              </ul>
            </motion.div>
            {/* Links del Sitio Web */}
            <motion.div className="space-y-4" variants={childVariants}>
              <h3 className="text-lg font-bold">Enlaces</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>
            {/* Formulario de Newsletter */}
            <motion.div className="space-y-4" variants={childVariants}>
              <h3 className="text-lg font-bold">Suscríbete al Newsletter</h3>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Tu Correo Electrónico"
                  required
                  className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <motion.button
                  type="submit"
                  className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirse
                </motion.button>
              </form>
            </motion.div>
          </div>
          <div className="text-center text-gray-600 mt-10">
            © 2024 Tu Empresa. Todos los derechos reservados.
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
