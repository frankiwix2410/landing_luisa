import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

type Variant = "solido" | "contorno" | "contornoClaro" | "enlace";

const VARIANTS: Record<Variant, string> = {
  solido:
    "bg-forest text-paper hover:bg-forest-mid border border-transparent",
  contorno:
    "border border-brass/50 text-brass hover:border-brass hover:bg-brass hover:text-paper",
  contornoClaro:
    "border border-gold/55 text-gold hover:bg-gold hover:text-forest",
  enlace:
    "border-0 !px-0 !py-1 text-brass underline decoration-brass/40 decoration-1 underline-offset-[6px] hover:decoration-brass",
};

type Props = {
  mensaje?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

export default function WhatsAppCTA({
  mensaje,
  children,
  variant = "solido",
  className = "",
  ariaLabel = "Escribir por WhatsApp al 786-760-4449 (se abre en una pestaña nueva)",
}: Props) {
  return (
    <Link
      href={whatsappLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2.5 px-7 py-3 text-[13px] font-bold tracking-[0.16em] uppercase transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-4 shrink-0" />
      <span>{children}</span>
    </Link>
  );
}
