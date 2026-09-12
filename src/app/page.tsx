import AreasPractica from "@/components/AreasPractica";
import Asesoria from "@/components/Asesoria";
import AtencionExterior from "@/components/AtencionExterior";
import BotonWhatsAppFlotante from "@/components/BotonWhatsAppFlotante";
import Compromiso from "@/components/Compromiso";
import Contacto from "@/components/Contacto";
import FranjaDistancias from "@/components/FranjaDistancias";
import Manifiesto from "@/components/Manifiesto";
import Navbar from "@/components/Navbar";
import Perfil from "@/components/Perfil";
import PieDePagina from "@/components/PieDePagina";
import Portada from "@/components/Portada";
import Preguntas from "@/components/Preguntas";

export default function Home() {
  return (
    <>
      <a
        href="#perfil"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main className="flex-1">
        <Portada />
        <FranjaDistancias />
        <Perfil />
        <Manifiesto />
        <AreasPractica />
        <Asesoria />
        <AtencionExterior />
        <Compromiso />
        <Preguntas />
        <Contacto />
      </main>

      <PieDePagina />
      <BotonWhatsAppFlotante />
    </>
  );
}
