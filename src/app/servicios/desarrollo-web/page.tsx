// src/app/page.tsx

"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center w-full min-h-[70vh] bg-white px-6 text-center"
        style={{
          backgroundImage: "url('/73b5b86b-d19d-4704-9ff0-653b4c29ff78.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.h1
          className="relative text-5xl font-black tracking-tight leading-tight sm:text-6xl lg:text-7xl text-white uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Desarrollo Web
        </motion.h1>
        <motion.p
          className="relative mt-6 text-lg sm:text-xl lg:text-2xl text-white max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Creamos experiencias digitales excepcionales diseñadas para impactar.
        </motion.p>
      </section>

      {/* Nuestro Proceso */}
      <section id="process" className="py-32 bg-gray-50">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <motion.h2
            className="text-4xl font-black sm:text-5xl lg:text-6xl uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestro Proceso
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desde la idea inicial hasta el lanzamiento, seguimos una metodología
            ágil que garantiza resultados excepcionales.
          </motion.p>
          <div className="grid gap-5 mt-16 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "Descubrimiento",
                description: "Analizamos tus objetivos y necesidades.",
              },
              {
                title: "Diseño",
                description: "Creamos interfaces modernas y atractivas.",
              },
              {
                title: "Desarrollo",
                description: "Implementamos tecnología avanzada y funcional.",
              },
              {
                title: "Lanzamiento",
                description: "Publicamos y optimizamos tu proyecto.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="p-10 bg-white border-2 border-colorPrimary rounded-lg shadow hover:shadow-lg transition-shadow "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-4 text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section id="use-cases" className="py-32 bg-white">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold sm:text-5xl lg:text-6xl text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Casos de Uso
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubre cómo nuestros servicios ayudan a empresas a crecer y
            destacar en el mercado digital.
          </motion.p>
          <div className="grid gap-12 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tiendas Online",
                description: "Diseñadas para maximizar tus ventas.",
              },
              {
                title: "Sitios Corporativos",
                description: "Comunica tu identidad con un diseño profesional.",
              },
              {
                title: "Aplicaciones Internas",
                description:
                  "Optimiza tus procesos empresariales con herramientas personalizadas.",
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Qué Incluye? */}
      <section id="includes" className="py-32 bg-gray-50">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold sm:text-5xl lg:text-6xl text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ¿Qué Incluye?
          </motion.h2>
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nuestro servicio ofrece todo lo necesario para crear un proyecto
            digital exitoso.
          </motion.p>
          <div className="grid gap-12 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Diseño Responsivo",
              "SEO Avanzado",
              "Integración de Analíticas",
              "Rendimiento Optimizado",
              "Soporte Técnico",
              "Actualizaciones Regulares",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
