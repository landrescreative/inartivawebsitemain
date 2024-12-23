"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Juan Pérez",
    role: "CEO en EmpresaX",
    testimonial:
      "La experiencia fue increíble. Gracias al equipo, logramos alcanzar nuestras metas con resultados excepcionales.",
    image: "/assets/testimonials/juan.jpg",
  },
  {
    name: "María López",
    role: "CFO en NegocioY",
    testimonial:
      "Un servicio impecable y una atención al detalle que nos sorprendió gratamente. ¡Altamente recomendado!",
    image: "/assets/testimonials/maria.jpg",
  },
  {
    name: "Carlos Rivera",
    role: "CTO en StartupZ",
    testimonial:
      "Su enfoque innovador realmente nos ayudó a destacar en nuestro sector. No puedo estar más agradecido.",
    image: "/assets/testimonials/carlos.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <div className="relative">
          {/* Testimonial Content with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-gray-300"
              />
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "{testimonials[currentIndex].testimonial}"
              </p>
              <h4 className="mt-6 font-semibold text-gray-800 text-xl">
                {testimonials[currentIndex].name}
              </h4>
              <span className="text-sm text-gray-500">
                {testimonials[currentIndex].role}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-12 h-12 rounded-full shadow-md hover:bg-gray-700 flex justify-center items-center"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-12 h-12 rounded-full shadow-md hover:bg-gray-700 flex justify-center items-center"
          >
            {">"}
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition ${
                index === currentIndex
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
