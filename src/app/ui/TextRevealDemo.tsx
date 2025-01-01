import TextReveal from "@/components/magicui/text-reveal";
import { GoArrowDownRight } from "react-icons/go";

export function TextRevealDemo() {
  return (
    <div className="relative z-10 flex flex-col min-h-[16rem] items-center justify-center">
      <div className="flex justify-around gap-2 items-center absolute top-20  px-5 py-2 border border-black rounded-full">
        <GoArrowDownRight />
        <h1 className="text-lg font-normal">ACERCA DE NOSOTROS</h1>
      </div>
      <TextReveal
        className="text-center"
        text="Somos Inartiva, una agencia creativa especializada en ayudar a las marcas a abrirse camino en el mundo digital. Nos apasiona construir relaciones basadas en una comunicación clara, honesta y transparente con nuestros clientes."
      />
    </div>
  );
}
