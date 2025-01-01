import Hero from "./ui/Hero";
import { TextRevealDemo } from "./ui/TextRevealDemo";
import Slider from "./ui/Slider";
import Services from "./ui/Services";
import Testimonials from "./ui/Testimonials";
import WhyToChooseUs from "./ui/WhyToChooseUs";
import HowWeCanHelpSlider from "./ui/HowWeCanHelpSlider";
import VideoSection from "./ui/VideoSection";

export default function Home() {
  return (
    <div className="flex flex-col mt-14">
      <Hero />
      <VideoSection />
      <Slider />
      <TextRevealDemo />
      <Services />
      <HowWeCanHelpSlider />
      <WhyToChooseUs />
      <Testimonials />
    </div>
  );
}
