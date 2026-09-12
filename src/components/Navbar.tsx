"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HORARIO, NAV_LINKS } from "@/lib/site";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-paper transition-colors duration-300 ${
        scrolled || abierto ? "border-rule" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          href="#portada"
          onClick={() => setAbierto(false)}
          className="min-w-0 py-2"
          aria-label="Dra. Luisa Salazar Pérez, abogada — ir al inicio"
        >
          <span className="block truncate font-serif text-lg leading-none tracking-tight text-ink sm:text-xl">
            Luisa Salazar Pérez
          </span>
          <span className="folio mt-1.5 block text-[10px] text-brass">
            Abogada
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group inline-flex items-baseline gap-2 py-2 text-[13px] tracking-wide text-ink-soft transition-colors duration-200 hover:text-ink"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[10px] font-bold tracking-[0.2em] text-brass"
                >
                  {link.folio}
                </span>
                <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover:border-brass">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          {/* El contenedor controla la visibilidad: `hidden` dentro del propio
              botón perdería contra su clase base `inline-flex`. */}
          <span className="hidden sm:block">
            <WhatsAppCTA
              mensaje="Hola, Dra. Luisa. Vi su página web y quisiera solicitar una consulta."
              className="!px-5 !text-[11px]"
            >
              Consultar
            </WhatsAppCTA>
          </span>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 cursor-pointer place-items-center border border-rule text-ink transition-colors duration-200 hover:border-brass hover:text-brass lg:hidden"
          >
            {abierto ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!abierto}
        className="border-t border-rule bg-paper px-5 pt-4 pb-10 sm:px-8 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-rule">
              <Link
                href={link.href}
                onClick={() => setAbierto(false)}
                className="flex items-baseline gap-4 py-4 transition-colors duration-200 hover:text-brass"
              >
                <span
                  aria-hidden="true"
                  className="font-sans text-[11px] font-bold tracking-[0.2em] text-brass"
                >
                  {link.folio}
                </span>
                <span className="font-serif text-2xl text-ink">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-7 text-sm text-ink-soft">{HORARIO}</p>

        <WhatsAppCTA
          mensaje="Hola, Dra. Luisa. Vi su página web y quisiera solicitar una consulta."
          className="mt-5 w-full"
        >
          Consultar por WhatsApp
        </WhatsAppCTA>
      </div>
    </header>
  );
}
