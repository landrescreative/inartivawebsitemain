"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FreeConsultationBanner: React.FC = () => {
  return (
    <section className="relative text-white w-full overflow-hidden">
      <div
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center bg-gray-800 px-8 md:px-16 py-16 mb-10 gap-6 shadow-lg"
        style={{
          backgroundImage: `url(/ondas.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Obtén una <span className="text-white">Consulta Gratuita</span> para
            tu Negocio
          </h2>
          <p className="text-base md:text-xl font-light">
            Nuestro equipo está listo para ayudarte a transformar tus ideas en
            resultados digitales.
          </p>
        </motion.div>

        {/* Botón */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Link href="/contacto" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-white text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-md hover:bg-blue-100 transition-transform text-center cursor-pointer"
            >
              Contáctanos Ahora
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Decoraciones */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl opacity-30"></div>
    </section>
  );
};

export default FreeConsultationBanner;
