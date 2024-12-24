"use client";

import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

// Memoized card component for better performance
const ReasonCard: React.FC<{
  title: string;
  description: string;
}> = React.memo(({ title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="bg-colorPrimary p-6 rounded-lg shadow-lg md:pr-32 flex flex-col justify-between"
      style={{
        backgroundImage: "url(/ondas.png)",
        backgroundSize: "cover",
      }}
      variants={cardVariants}
      whileHover={{
        scale: 1.1,
        rotate: 1,
        boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="mb-2 font-black uppercase text-2xl text-white">{title}</h3>
      <p className="text-white">{description}</p>
      <motion.div
        className="bg-white text-black p-2 w-fit mt-6"
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <MdKeyboardDoubleArrowRight size={30} />
      </motion.div>
    </motion.div>
  );
});

const WhyToChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Servicio de Calidad",
      description:
        "Ofrecemos servicios de primera calidad que satisfacen tus necesidades y superan tus expectativas.",
    },
    {
      title: "Equipo Experto",
      description:
        "Nuestro equipo está compuesto por profesionales experimentados y expertos en sus áreas.",
    },
    {
      title: "Soporte al Cliente",
      description:
        "Brindamos soporte al cliente 24/7 para ayudarte con cualquier consulta o problema.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -10, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="container mx-auto p-6 py-20 md:w-10/12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-black text-center mb-4 uppercase"
        variants={titleVariants}
      >
        ¿Por Qué Elegirnos?
      </motion.h1>
      <motion.div
        className="w-16 h-1 bg-colorPrimary mx-auto mb-4"
        variants={titleVariants}
      ></motion.div>
      <motion.h2
        className="text-2xl text-center font-black mb-8 text-colorPrimary"
        variants={subtitleVariants}
      >
        Estas son algunas razones para elegirnos
      </motion.h2>
      <AnimatePresence>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default WhyToChooseUs;
