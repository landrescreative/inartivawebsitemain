import TextReveal from "@/components/magicui/text-reveal";
import { GoArrowDownRight } from "react-icons/go";

export async function TextRevealDemo() {
  return (
    <div className="relative z-10 flex flex-col min-h-[16rem] items-center justify-center">
      <div className="flex justify-around gap-2 items-center absolute top-40  px-5 py-2 border border-black rounded-full">
        <GoArrowDownRight />
        <h1 className="text-lg font-thin">ABOUT US</h1>
      </div>
      <TextReveal
        className="text-center"
        text="We are Inartiva, a creative agency that helps brands enter the digital world. We love to mantain a good and transparent comunication with our clients."
      />
    </div>
  );
}
