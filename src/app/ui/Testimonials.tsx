"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lista de testimonios reales
const testimonials = [
  {
    quote:
      "Trabajar con esta agencia ha sido una experiencia increíble. Transformaron nuestra visión en una página web atractiva y funcional que ha aumentado nuestras conversiones.",
    name: "Carlos Martínez",
    designation: "Gerente de Marketing, Empresa XYZ",
  },
  {
    quote:
      "El equipo demostró un nivel de creatividad excepcional y atención al detalle. Nos ayudaron a construir una marca sólida con un diseño moderno y único.",
    name: "Laura Gómez",
    designation: "CEO, Startup Creativa",
  },
  {
    quote:
      "Gracias a su experiencia en desarrollo web, nuestro sitio ahora es rápido, seguro y está optimizado para SEO. ¡El soporte fue excelente durante todo el proyecto!",
    name: "Miguel Torres",
    designation: "Director Técnico, Tech Solutions",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Lógica del carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  // Actualizar la posición del degradado en función del mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center  md:min-h-[60vh] overflow-hidden bg-black"
    >
      {/* Fondo con degradado sutil y desenfoque */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15), rgba(0, 0, 0, 0.95))`,
          filter: "blur(30px)",
          transition: "background 0.1s ease",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 text-white px-4">
        {/* Encabezado */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Testimonios
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative">
          {/* Lado izquierdo: Ícono de cita */}
          <div className="relative mb-6 md:mb-0">
            <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-full border-4 border-blue-600">
              <span className="text-6xl md:text-7xl font-bold text-white">
                “
              </span>
            </div>
          </div>

          {/* Lado derecho: Contenido del testimonio */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left"
              >
                {/* Testimonio */}
                <p className="text-lg md:text-2xl leading-relaxed mb-8">
                  {testimonials[current].quote}
                </p>

                {/* Barra separadora */}
                <motion.div
                  className="w-12 md:w-16 h-[2px] bg-white mx-auto md:mx-0 mb-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Autor */}
                <div className="mt-4">
                  <h4 className="text-lg md:text-2xl font-semibold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm md:text-lg text-gray-300">
                    {testimonials[current].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Paginación con puntos */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-transform ${
                current === index
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-500 scale-100"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
