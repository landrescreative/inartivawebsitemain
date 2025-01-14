import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Aplica a todos los motores de búsqueda.
        allow: "/", // Permite el acceso a todas las páginas.
      },
    ],
    sitemap: "https://inartiva.com/sitemap.xml", // URL de tu sitemap.
    host: "https://inartiva.com", // Dominio de tu sitio web.
  };
}
