import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import WordRotate from "@/components/magicui/word-rotate";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AnimatedGridPatternDemo } from "./AnimatedGridPatternDemo";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-[100vh] gap-5 ">
      <AnimatedGradientText>
        👋 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span className="inline animate-gradient bg-gradient-to-r from-[#3744ff] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
          SOMOS INARTIVA
        </span>
      </AnimatedGradientText>
      <div className="text-4xl lg:text-8xl w-11/12 lg:w-8/12 text-center font-bold uppercase">
        <h1>CREAMOS</h1>
        <div className="bg-black rounded-full rotate-1">
          <WordRotate
            className="font-bold text-white"
            words={[
              "Tiendas en linea",
              "Sitios web",
              "Apps",
              "Dashboard's",
              "Landing Pages",
              "Experiencias",
              "Marcas",
              "Negocios",
            ]}
          />
        </div>
        <h1 className="mt-2">CON ÚNICA</h1>
        <SparklesText
          text="CREATIVIDAD"
          className="text-4xl lg:text-8xl text-colorPrimary"
        />
      </div>
      <div className="text-center  uppercase flex flex-col md:flex-row gap-3">
        <Link href="/contacto">
          <div className="navcta flex justify-center items-center gap-2 mr-4 bg-black text-white px-5 py-3 rounded-full hover:bg-colorPrimary transition-all duration-300 hover:text-white">
            CONTÁCTANOS
            <FaLongArrowAltRight className="navcta_icon transition-all duration-300" />
          </div>
        </Link>
        <button className="navcta flex justify-center items-center gap-2 mr-4 border-2 bg-white border-colorPrimary px-5 py-3 rounded-full hover:bg-colorPrimary hover:text-white  transition-all duration-300">
          NUESTROS SERVICIOS
          <FaLongArrowAltRight className="navcta_icon transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
