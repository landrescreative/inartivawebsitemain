import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="✦ UI/UX Design ✦ Web Development ✦ Branding ✦ SEO "
      default_velocity={2}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
