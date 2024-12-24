import Image from "next/image";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import Hero from "./ui/Hero";
import { TextRevealDemo } from "./ui/TextRevealDemo";
import { ScrollBasedVelocityDemo } from "./ui/ScrollBasedVelocityDemo";
import Slider from "./ui/Slider";
import VideoDemoReel from "./ui/VideoDemoReel";
import Services from "./ui/Services";
import Testimonials from "./ui/Testimonials";
import WhyToChooseUs from "./ui/WhyToChooseUs";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col  md:mt-24">
      <Hero />
      <Slider />
      <TextRevealDemo />
      <Services />
      <WhyToChooseUs />
      <Testimonials />
    </div>
  );
}
