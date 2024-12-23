"use client";

import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const WhyToChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Quality Service",
      description:
        "We provide top-notch services that meet your needs and exceed your expectations.",
    },
    {
      title: "Expert Team",
      description:
        "Our team consists of experienced professionals who are experts in their fields.",
    },
    {
      title: "Customer Support",
      description:
        "We offer 24/7 customer support to assist you with any queries or issues.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
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
        Why To Choose Us
      </motion.h1>
      <motion.div
        className="w-16 h-1 bg-colorPrimary mx-auto mb-4"
        variants={titleVariants}
      ></motion.div>
      <motion.h2
        className="text-2xl text-center font-black mb-8 text-colorPrimary"
        variants={subtitleVariants}
      >
        Here are some reasons why you should choose us
      </motion.h2>
      <AnimatePresence>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-colorPrimary p-6 rounded-lg shadow-lg md:pr-32 flex flex-col justify-between"
              style={{
                backgroundImage: "url(/ondas.png)",
                backgroundSize: "cover",
              }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                translateY: -10,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-2 font-black uppercase text-2xl text-white">
                {reason.title}
              </h3>
              <p className="text-white">{reason.description}</p>
              <motion.div
                className="bg-white text-black p-2 w-fit mt-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <MdKeyboardDoubleArrowRight size={30} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default WhyToChooseUs;
