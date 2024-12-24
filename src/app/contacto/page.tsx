"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      return;
    }

    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000); // Ocultar mensaje después de 5 segundos
  };

  const entryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonHover = {
    hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
  };

  const iconHover = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-48 py-20 px-8 md:px-16">
      {/* Encabezado */}
      <motion.div
        className="text-center mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={entryVariants}
      >
        <p className="text-white uppercase tracking-wider mb-4 text-3xl">
          👋 Hola, pongámonos en contacto
        </p>
        <h1 className="text-5xl md:text-8xl font-medium">Contáctanos.</h1>
      </motion.div>

      {/* Información de Contacto */}

      {/* Formulario de Contacto */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={entryVariants}
      >
        <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
              variants={entryVariants}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo Electrónico"
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
              variants={entryVariants}
            />
          </div>
          <motion.div className="mt-12" variants={entryVariants}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Mensaje"
              rows={5}
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
            ></textarea>
          </motion.div>
          <motion.div className="mt-16 text-center" variants={entryVariants}>
            <motion.button
              type="submit"
              className="bg-transparent border border-white text-white py-4 px-12 rounded-full hover:bg-white hover:text-black transition"
              whileHover="hover"
              variants={buttonHover}
            >
              Hablemos
            </motion.button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {submitted && (
              <p className="text-green-500 mt-4">¡Mensaje enviado con éxito!</p>
            )}
          </motion.div>
        </form>
      </motion.div>

      {/* Iconos de Redes Sociales */}
      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={entryVariants}
      >
        <h2 className="text-gray-400 text-lg uppercase mb-6">Síguenos</h2>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-500 transition-colors"
            variants={iconHover}
            whileHover="hover"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-500 transition-colors"
            variants={iconHover}
            whileHover="hover"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors"
            variants={iconHover}
            whileHover="hover"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-700 transition-colors"
            variants={iconHover}
            whileHover="hover"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacto;
