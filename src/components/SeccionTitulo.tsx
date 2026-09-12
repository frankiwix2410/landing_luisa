type Props = {
  folio: string;
  rotulo: string;
  titulo: string;
  /** Texto de entrada opcional bajo el título. */
  entrada?: string;
  tono?: "papel" | "oscuro";
  id?: string;
};

/** Cabecera editorial de sección: folio numerado, rótulo, título y filete. */
export default function SeccionTitulo({
  folio,
  rotulo,
  titulo,
  entrada,
  tono = "papel",
  id,
}: Props) {
  const oscuro = tono === "oscuro";

  return (
    <header className="max-w-xl">
      <p className={`folio ${oscuro ? "text-gold" : "text-brass"}`}>
        <span aria-hidden="true">{folio}</span>
        <span className="sr-only">Sección {folio}.</span>
        <span aria-hidden="true" className="mx-2.5 opacity-60">
          —
        </span>
        {rotulo}
      </p>

      <h2
        id={id}
        className={`mt-5 font-serif text-3xl leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          oscuro ? "text-paper" : "text-ink"
        }`}
      >
        {titulo}
      </h2>

      <hr
        aria-hidden="true"
        className={`mt-7 w-16 border-0 border-t ${oscuro ? "border-gold/60" : "border-brass/60"}`}
      />

      {entrada && (
        <p
          className={`mt-7 font-serif text-xl leading-relaxed sm:text-[1.375rem] ${
            oscuro ? "text-paper/80" : "text-ink-soft"
          }`}
        >
          {entrada}
        </p>
      )}
    </header>
  );
}
