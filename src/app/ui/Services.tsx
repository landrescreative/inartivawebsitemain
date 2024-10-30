import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import ShineBorder from "@/components/magicui/shine-border";
import Marquee3D from "./Marquee3D";
import { GoArrowDownRight } from "react-icons/go";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-10 ">
      <div className="text-center mb-12 flex flex-col justify-center items-center">
        <div className="flex justify-around gap-2 items-center mb-5  px-5 py-2 border border-black rounded-full">
          <GoArrowDownRight />
          <h1 className="text-lg font-thin">SERVICES</h1>
        </div>
        <SparklesText
          className="text-4xl text-center font-normal text-gray-800 "
          text="We Can Help You"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-around items-center ">
        <div className="md:w-2/4">
          <div className="flex justify-around text-3xl lg:text-5xl py-20 hover:bg-purple-200 transition-all duration-300 serviceshover ">
            <h1 className="number">01</h1>
            <h1 className="service ml-10">Web Development</h1>
            <GoArrowUpRight className="servicesicon transition-all duration-300"></GoArrowUpRight>
            <div className="flex-grow"></div>
          </div>
          <div className=" separator w-full bg-slate-500 h-1 "></div>
          <div className="flex justify-around text-3xl lg:text-5xl py-20 hover:bg-purple-200 transition-all duration-300 serviceshover ">
            <h1 className="number">02</h1>
            <h1 className="service ml-10">UI/UX Design</h1>
            <GoArrowUpRight className="servicesicon transition-all duration-300"></GoArrowUpRight>
            <div className="flex-grow"></div>
          </div>
          <div className=" separator w-full bg-slate-500 h-1 "></div>
          <div className="flex justify-around text-3xl lg:text-5xl py-20 hover:bg-purple-200 transition-all duration-300 serviceshover ">
            <h1 className="number">03</h1>
            <h1 className="service ml-10">Branding</h1>
            <GoArrowUpRight className="servicesicon transition-all duration-300"></GoArrowUpRight>
            <div className="flex-grow"></div>
          </div>
          <div className=" separator bg-slate-500 h-1 "></div>
        </div>
        <div className="">
          <Marquee3D />
        </div>
      </div>
    </div>
  );
};

export default Services;
