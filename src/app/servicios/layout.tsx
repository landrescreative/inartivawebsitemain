import React from "react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Servicios de Diseño Web, SEO y Marketing Digital | Inartiva Studio",
  description:
    "Inartiva Studio es tu agencia creativa para diseño web, SEO, marketing digital y branding. Creamos experiencias únicas para potenciar tu marca.",
};

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
