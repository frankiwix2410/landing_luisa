import { Globe2 } from "lucide-react";

export default function FranjaDistancias() {
  return (
    <section
      aria-labelledby="franja-distancias"
      className="bg-forest py-16 sm:py-20"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 px-5 text-center sm:px-8">
        <Globe2 className="size-8 text-gold" aria-hidden="true" />
        <h2
          id="franja-distancias"
          className="font-serif text-[1.75rem] leading-snug text-paper italic sm:text-4xl lg:text-[2.75rem]"
        >
          Conectando distancias, defendiendo tus derechos
        </h2>
      </div>
    </section>
  );
}
