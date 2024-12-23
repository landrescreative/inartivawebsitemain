import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="✦ Diseño Web ✦ Desarrollo Web ✦ Branding ✦ SEO ✦ Marketing Digital ✦ Diseño UI/UX"
      default_velocity={1}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem]"
    />
  );
}
