import Image from "next/image";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import WordRotate from "@/components/magicui/word-rotate";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatedGridPatternDemo } from "./AnimatedGridPatternDemo";
import SparklesText from "@/components/magicui/sparkles-text";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-[100vh] gap-5">
      <AnimatedGradientText>
        👋 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
          WE'RE INARTIVA
        </span>
      </AnimatedGradientText>
      <div className="text-4xl lg:text-8xl w-11/12 lg:w-8/12 text-center font-bold uppercase">
        <h1>We create</h1>
        <div className="bg-black rounded-full rotate-2">
          <WordRotate
            className="font-bold text-white"
            words={[
              "Online Stores",
              "Websites",
              "Apps",
              "Dashboard's",
              "Landing Pages",
              "Experiences",
            ]}
          />
        </div>
        <h1>WITH UNIQUE</h1>
        <SparklesText
          text="CREATIVITY"
          className="text-4xl lg:text-8xl text-colorPrimary"
        />
      </div>
      <div className="text-center uppercase flex">
        <button className="navcta flex justify-center items-center gap-2 mr-4 bg-black text-white px-5 py-3 rounded-full hover:bg-colorPrimary  transition-all duration-300">
          LET'S TALK
          <FaLongArrowAltRight className="navcta_icon transition-all duration-300" />
        </button>
        <button className="navcta flex justify-center items-center gap-2 mr-4 border-2 border-colorPrimary px-5 py-3 rounded-full hover:bg-colorPrimary hover:text-white  transition-all duration-300">
          OUR SERVICES
          <FaLongArrowAltRight className="navcta_icon transition-all duration-300" />
        </button>
      </div>
      <AnimatedGridPatternDemo />
    </div>
  );
}
