"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(true); // Mostrar popup
        setTimeout(() => setShowPopup(false), 5000); // Ocultar popup después de 5 segundos
      } else {
        const data = await res.json();
        setError(data.error || "Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setError("Error al enviar el mensaje.");
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "100%", transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-48 py-20 px-8 md:px-16">
      {/* Encabezado */}
      <motion.div
        className="text-center mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <p className="text-white uppercase tracking-wider mb-4 text-3xl">
          👋 Hola, pongámonos en contacto
        </p>
        <h1 className="text-5xl md:text-8xl font-medium">Contáctanos.</h1>
      </motion.div>

      {/* Formulario de Contacto */}
      <motion.div className="mb-16">
        <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo Electrónico"
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
            />
          </div>
          <div className="mt-12">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Mensaje"
              rows={5}
              className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
            ></textarea>
          </div>
          <div className="mt-16 text-center">
            <button
              type="submit"
              className="bg-transparent border border-white text-white py-4 px-12 rounded-full hover:bg-white hover:text-black transition"
            >
              Hablemos
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </form>
      </motion.div>

      {/* Popup de Confirmación */}
      {showPopup && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
          className="fixed bottom-4 right-4 bg-colorPrimary text-white py-3 px-6 rounded-lg shadow-lg z-50 flex items-center space-x-4"
        >
          <FaCheckCircle />
          <span>¡Mensaje enviado con éxito!</span>
        </motion.div>
      )}

      {/* Iconos de Redes Sociales */}
      <motion.div className="mt-16 text-center">
        <h2 className="text-gray-400 text-lg uppercase mb-6">Síguenos</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/inartivastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/525528055529"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571247848953"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacto;
