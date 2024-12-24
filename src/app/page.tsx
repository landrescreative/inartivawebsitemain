import Hero from "./ui/Hero";
import { TextRevealDemo } from "./ui/TextRevealDemo";
import Slider from "./ui/Slider";
import Services from "./ui/Services";
import Testimonials from "./ui/Testimonials";
import WhyToChooseUs from "./ui/WhyToChooseUs";

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
