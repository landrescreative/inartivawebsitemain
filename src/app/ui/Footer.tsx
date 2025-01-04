"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Enviando...");

    try {
      const res = await fetch("/api/suscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("¡Gracias por suscribirte!");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // Ocultar el mensaje después de 3 segundos
        setEmail("");
      } else {
        const data = await res.json();
        setStatus(data.error || "Error al suscribirse.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error al suscribirse.");
    }
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Contenido principal */}
      <motion.div
        className="max-w-screen-xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Columna 1: Logo e introducción */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">INARTIVA</h3>
          <p className="text-gray-300">
            Creamos soluciones digitales que impulsan tu negocio. Contáctanos
            para transformar tus ideas en realidad.
          </p>
        </div>

        {/* Columna 2: Información de contacto */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Contáctanos</h3>
          <ul className="text-gray-300 space-y-4">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-400" />
              <span className="notranslate">+52 55 2805 5529 </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-400" /> {"contacto@inartiva.com"}
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-400" />{" "}
              {"Ciudad de México, México"}
            </li>
          </ul>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Enlaces Rápidos</h3>
          <ul className="text-gray-300 space-y-4">
            <li>
              <Link href="/" className="hover:text-gray-200 transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="hover:text-gray-200 transition"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-gray-200 transition">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-gray-200 transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4: Suscripción al Newsletter */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white">Suscríbete</h3>
          <p className="text-gray-300">
            Recibe ofertas y actualizaciones directamente en tu correo
            electrónico.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gray-600 transition"
            >
              Suscribirse
            </button>
          </form>

          {/* Animación de mensaje de éxito */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="text-green-400 text-center mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                ¡Gracias por suscribirte! 🎉
              </motion.div>
            )}
          </AnimatePresence>

          {/* Estado general */}
          {status && !showSuccess && <p className="text-gray-400">{status}</p>}
        </div>
      </motion.div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700"></div>

      {/* Derechos reservados */}
      <div className="py-6 text-center text-gray-400 text-sm">
        © 2025 INARTIVA. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
