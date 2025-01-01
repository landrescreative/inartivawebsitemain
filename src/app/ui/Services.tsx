import { b } from "framer-motion/client";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Services = () => {
  const services = [
    {
      img: "/assets/img/icons/th-1-service-icon-1.svg",
      title: "Diseño Web - UI/UX",
      description:
        "Creamos interfaces intuitivas y experiencias optimizadas para aplicaciones móviles y sitios web, mejorando la interacción usuario-producto.",
      link: "/detalles-servicio",
    },

    {
      img: "/assets/img/icons/th-1-service-icon-3.svg",
      title: "Desarrollo Web",
      description:
        "Creamos sitios web, aplicaciones, tiendas en línea, y optimizamos su funcionalidad para garantizar una experiencia digital efectiva.",
      link: "/detalles-servicio",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-4.svg",
      title: "Marketing Digital",
      description:
        "Gestionamos campañas en redes sociales, email marketing y estrategias para potenciar la presencia de tu marca en el entorno digital.",
      link: "/detalles-servicio",
    },
    {
      img: "/assets/img/icons/th-1-service-icon-2.svg",
      title: "SEO",
      description:
        "Optimizamos sitios web para mejorar su posicionamiento en motores de búsqueda, aumentando la visibilidad y atrayendo más clientes.",
      link: "/detalles-servicio",
    },
  ];

  return (
    <section className="section-service bg-black py-20">
      {/* Fondo de la sección */}
      <div className="bg-colorIvory md:w-10/12 mx-auto">
        {/* Espacio de la sección */}
        <div className="section-space">
          {/* Contenedor de la sección */}
          <div className="container flex flex-col justify-center items-center">
            {/* Bloque de la sección */}
            <div className="flex justify-center gap-2 items-center px-5 py-2 mb-10 bg-white rounded-full">
              <GoArrowDownRight color="black" size={24} />
              <h1 className="text-lg font-normal uppercase text-black">
                Nuestros Servicios
              </h1>
            </div>
            {/* Bloque de la sección */}

            {/* Lista de Servicios */}
            <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`jos group/team-item`}
                  data-jos_delay={index * 0.3}
                >
                  <div className="services-cards group h-full">
                    <div
                      className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-white p-[30px] transition duration-300 group-hover:bg-colorPrimary"
                      style={{
                        backgroundImage: `url(/ondas.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <img
                        src={service.img}
                        alt={service.title}
                        width="64"
                        height="70"
                        className="h-[70px] w-auto"
                      />
                      <h4 className="mb-[15px] mt-[30px] text-3xl font-bold ">
                        {service.title}
                      </h4>
                      <p className="mb-7">{service.description}</p>
                      <a
                        href={service.link}
                        className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                      >
                        <MdKeyboardDoubleArrowRight
                          size={30}
                          className="services-icon text-black"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Lista de Servicios */}
          </div>
          {/* Contenedor de la sección */}
        </div>
        {/* Espacio de la sección */}
      </div>
      {/* Fondo de la sección */}
    </section>
  );
};

export default Services;
