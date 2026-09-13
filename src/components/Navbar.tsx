"use client";

import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import type { EnlaceArea } from "@/i18n";
import { rutaLocal, type Locale, type RutasAlternas } from "@/i18n/config";
import type { Diccionario } from "@/i18n/es";
import { AREA_ICONOS } from "@/lib/site";
import WhatsAppCTA from "./WhatsAppCTA";

type Props = {
  lang: Locale;
  /* Solo datos planos: un componente de cliente no puede recibir las
     funciones que contiene el diccionario completo. */
  comun: Diccionario["comun"];
  nav: Diccionario["nav"];
  menu: Diccionario["menu"];
  areas: EnlaceArea[];
  /** Esta misma página en cada idioma, para el selector. */
  alternas: RutasAlternas;
};

const ENFOCABLES = "a[href], button:not([disabled])";

/** Curva de entrada y salida del menú móvil: arranca y frena con suavidad. */
const CURVA = "ease-[cubic-bezier(0.76,0,0.24,1)]";

export default function Navbar({ lang, comun, nav, menu, areas, alternas }: Props) {
  const [scrolled, setScrolled] = useState(false);
  /** Menú móvil a pantalla completa. */
  const [abierto, setAbierto] = useState(false);
  /** Submenú de áreas en escritorio. */
  const [submenu, setSubmenu] = useState(false);
  /** Áreas desplegadas dentro del menú móvil. */
  const [areasMovil, setAreasMovil] = useState(false);

  const idSubmenu = useId();
  const idAreasMovil = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const abrirRef = useRef<HTMLButtonElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const seAbrio = useRef(false);

  const inicio = rutaLocal(lang);
  const otro: Locale = lang === "es" ? "en" : "es";

  const cerrar = () => {
    setAbierto(false);
    setAreasMovil(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El menú cubre la vista: la página de atrás no debe desplazarse.
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  // Foco: al abrir pasa al botón de cerrar; al cerrar vuelve al que abrió.
  // El panel se oculta con clip-path e `inert`, no con visibility: así el
  // botón es enfocable en el mismo commit en que `inert` se retira.
  useEffect(() => {
    if (abierto) {
      seAbrio.current = true;
      cerrarRef.current?.focus({ preventScroll: true });
    } else if (seAbrio.current) {
      abrirRef.current?.focus({ preventScroll: true });
    }
  }, [abierto]);

  // Escape cierra lo que esté abierto; Tab no se escapa del menú móvil.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSubmenu(false);
        setAbierto(false);
        setAreasMovil(false);
        return;
      }
      if (e.key !== "Tab" || !abierto || !panelRef.current) return;

      const enfocables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(ENFOCABLES),
      ).filter((el) => !el.closest("[inert]"));
      const primero = enfocables[0];
      const ultimo = enfocables.at(-1);
      if (!primero || !ultimo) return;

      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  // Si la ventana crece hasta escritorio con el menú abierto, se cierra solo.
  useEffect(() => {
    const escritorio = window.matchMedia("(min-width: 64rem)");
    const onCambio = () => {
      if (escritorio.matches) {
        setAbierto(false);
        setAreasMovil(false);
      }
    };
    escritorio.addEventListener("change", onCambio);
    return () => escritorio.removeEventListener("change", onCambio);
  }, []);

  /* Hover solo con ratón: en pantallas táctiles el toque dispara también
     pointerenter y el submenú taparía la navegación hacia la sección. */
  const alPasarRaton = (valor: boolean) => (e: PointerEvent) => {
    if (e.pointerType === "mouse") setSubmenu(valor);
  };

  /** Retraso escalonado de los ítems del menú móvil al abrir. */
  const escalon = (i: number) => ({
    transitionDelay: abierto ? `${220 + i * 60}ms` : "0ms",
  });
  const aparicion = `transition-[opacity,translate] duration-500 ease-out ${
    abierto ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-paper transition-colors duration-300 ${
        scrolled ? "border-rule" : "border-transparent"
      }`}
    >
      <nav
        aria-label={comun.navPrincipal}
        className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link href={inicio} className="min-w-0 py-2" aria-label={comun.irInicio}>
          <span className="block truncate font-serif text-lg leading-none tracking-tight text-ink sm:text-xl">
            Luisa Salazar Pérez
          </span>
          <span className="folio mt-1.5 block text-[10px] text-brass">
            {comun.profesion}
          </span>
        </Link>

        {/* ---------------------------------------------------- Escritorio */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((link) =>
            link.ancla === "areas" ? (
              /* "Áreas" lleva a su sección con un clic; el submenú se abre al
                 pasar el ratón o al llegar con el teclado (foco). */
              <li
                key={link.ancla}
                className="relative"
                onPointerEnter={alPasarRaton(true)}
                onPointerLeave={alPasarRaton(false)}
                onFocus={() => setSubmenu(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setSubmenu(false);
                  }
                }}
              >
                <Link
                  href={`${inicio}#areas`}
                  onClick={() => setSubmenu(false)}
                  aria-expanded={submenu}
                  aria-controls={idSubmenu}
                  className="group inline-flex items-baseline gap-2 py-2 text-[13px] tracking-wide text-ink-soft transition-colors duration-200 hover:text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="font-sans text-[10px] font-bold tracking-[0.2em] text-brass"
                  >
                    {link.folio}
                  </span>
                  <span
                    className={`border-b pb-0.5 transition-colors duration-200 group-hover:border-brass ${
                      submenu ? "border-brass text-ink" : "border-transparent"
                    }`}
                  >
                    {link.label}
                  </span>
                  <ChevronDown
                    className={`size-3.5 self-center text-brass transition-transform duration-300 ${
                      submenu ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </Link>

                {/* El relleno superior une enlace y panel: el cursor puede bajar
                    sin salir del <li> y cerrar el submenú por el camino. */}
                <div
                  id={idSubmenu}
                  inert={!submenu}
                  className={`absolute top-full left-1/2 w-[23rem] -translate-x-1/2 pt-4 transition-[opacity,translate,visibility] duration-300 ease-out ${
                    submenu
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="border border-rule border-t-2 border-t-brass bg-paper shadow-[0_28px_60px_-28px_rgba(18,40,31,0.45)]">
                    <p className="folio border-b border-rule px-6 py-3.5 text-[10px] text-brass">
                      {menu.submenuAreas}
                    </p>
                    <ul>
                      {areas.map((area) => {
                        const Icon = AREA_ICONOS[area.clave];
                        return (
                          <li key={area.clave} className="border-b border-rule">
                            <Link
                              href={area.href}
                              onClick={() => setSubmenu(false)}
                              className="group/area flex items-start gap-4 px-6 py-4 transition-colors duration-200 hover:bg-paper-alt"
                            >
                              <Icon
                                className="mt-1 size-5 shrink-0 text-brass"
                                aria-hidden="true"
                              />
                              <span className="flex-1">
                                <span className="block font-serif text-xl leading-tight text-ink transition-colors duration-200 group-hover/area:text-brass">
                                  {area.titulo}
                                </span>
                                <span className="mt-1 block text-[13px] leading-snug text-ink-soft">
                                  {menu.resumenes[area.clave]}
                                </span>
                              </span>
                              <ArrowRight
                                className="mt-1.5 size-4 shrink-0 -translate-x-1 text-brass opacity-0 transition-[opacity,translate] duration-200 group-hover/area:translate-x-0 group-hover/area:opacity-100"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      href={`${inicio}#areas`}
                      onClick={() => setSubmenu(false)}
                      className="flex min-h-12 items-center justify-between px-6 text-[11px] font-bold tracking-[0.16em] text-ink uppercase transition-colors duration-200 hover:text-brass"
                    >
                      {menu.todasAreas}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.ancla}>
                <Link
                  href={`${inicio}#${link.ancla}`}
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
            ),
          )}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          {/* Selector de idioma: enlaza a la versión equivalente de ESTA página,
              no a la portada del otro idioma. */}
          <Link
            href={alternas[otro]}
            hrefLang={otro}
            className="grid h-11 min-w-11 place-items-center border border-rule px-2.5 font-sans text-[11px] font-bold tracking-[0.2em] text-ink-soft transition-colors duration-200 hover:border-brass hover:text-brass"
          >
            <span aria-hidden="true">{otro.toUpperCase()}</span>
            <span lang={otro} className="sr-only">
              {comun.idioma.aria}
            </span>
          </Link>

          {/* El contenedor controla la visibilidad: `hidden` dentro del propio
              botón perdería contra su clase base `inline-flex`. */}
          <span className="hidden sm:block">
            <WhatsAppCTA
              lang={lang}
              mensaje={comun.mensajeGeneral}
              className="!px-5 !text-[11px]"
            >
              {comun.consultar}
            </WhatsAppCTA>
          </span>

          <button
            ref={abrirRef}
            type="button"
            onClick={() => setAbierto(true)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={comun.abrirMenu}
            className="grid size-11 cursor-pointer place-items-center border border-rule text-ink transition-colors duration-200 hover:border-brass hover:text-brass lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------- Móvil
          Cubre toda la vista y se revela en círculo desde el botón de menú.
          Cerrado sigue montado (para poder animar la salida), pero `inert` lo
          saca del foco y de los lectores de pantalla. */}
      <div
        id="menu-movil"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={comun.navPrincipal}
        inert={!abierto}
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-forest text-paper transition-[clip-path] lg:hidden ${CURVA} ${
          abierto
            ? "duration-700 [clip-path:circle(150%_at_calc(100%_-_3rem)_2.5rem)]"
            : "duration-500 [clip-path:circle(0%_at_calc(100%_-_3rem)_2.5rem)]"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl shrink-0 items-center justify-between gap-4 border-b border-rule-dark px-5 sm:px-8">
          <Link
            href={inicio}
            onClick={cerrar}
            className="min-w-0 py-2"
            aria-label={comun.irInicio}
          >
            <span className="block truncate font-serif text-lg leading-none tracking-tight text-paper sm:text-xl">
              Luisa Salazar Pérez
            </span>
            <span className="folio mt-1.5 block text-[10px] text-gold">
              {comun.profesion}
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={alternas[otro]}
              hrefLang={otro}
              onClick={cerrar}
              className="grid h-11 min-w-11 place-items-center border border-rule-dark px-2.5 font-sans text-[11px] font-bold tracking-[0.2em] text-paper/75 transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              <span aria-hidden="true">{otro.toUpperCase()}</span>
              <span lang={otro} className="sr-only">
                {comun.idioma.aria}
              </span>
            </Link>

            <button
              ref={cerrarRef}
              type="button"
              onClick={cerrar}
              aria-label={comun.cerrarMenu}
              className="grid size-11 cursor-pointer place-items-center border border-rule-dark text-paper transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              <X
                className={`size-5 transition-transform duration-500 ${
                  abierto ? "rotate-0" : "-rotate-90"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-4 pb-10 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((link, i) => (
              <li
                key={link.ancla}
                style={escalon(i)}
                className={`border-b border-rule-dark ${aparicion}`}
              >
                {link.ancla === "areas" ? (
                  <>
                    {/* El nombre lleva a la sección; la flecha solo despliega. */}
                    <div className="flex items-center gap-3">
                      <Link
                        href={`${inicio}#areas`}
                        onClick={cerrar}
                        className="flex flex-1 items-baseline gap-4 py-4 transition-colors duration-200 hover:text-gold"
                      >
                        <span
                          aria-hidden="true"
                          className="font-sans text-[11px] font-bold tracking-[0.2em] text-gold"
                        >
                          {link.folio}
                        </span>
                        <span className="font-serif text-3xl sm:text-4xl">
                          {link.label}
                        </span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => setAreasMovil((v) => !v)}
                        aria-expanded={areasMovil}
                        aria-controls={idAreasMovil}
                        aria-label={areasMovil ? menu.ocultarAreas : menu.mostrarAreas}
                        className={`grid size-12 shrink-0 cursor-pointer place-items-center border transition-colors duration-200 hover:border-gold hover:text-paper ${
                          areasMovil
                            ? "border-gold text-paper"
                            : "border-rule-dark text-gold"
                        }`}
                      >
                        <ChevronDown
                          className={`size-6 transition-transform duration-300 ${
                            areasMovil ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {/* grid-rows 0fr → 1fr anima la altura real del contenido */}
                    <div
                      id={idAreasMovil}
                      inert={!areasMovil}
                      className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                        areasMovil ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="pb-5 pl-9">
                          {areas.map((area) => {
                            const Icon = AREA_ICONOS[area.clave];
                            return (
                              <li key={area.clave}>
                                <Link
                                  href={area.href}
                                  onClick={cerrar}
                                  className="flex items-start gap-3.5 py-3 transition-colors duration-200 hover:text-gold"
                                >
                                  <Icon
                                    className="mt-1 size-5 shrink-0 text-gold"
                                    aria-hidden="true"
                                  />
                                  <span>
                                    <span className="block font-serif text-xl leading-tight">
                                      {area.titulo}
                                    </span>
                                    <span className="mt-1 block text-sm text-paper/60">
                                      {menu.resumenes[area.clave]}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={`${inicio}#${link.ancla}`}
                    onClick={cerrar}
                    className="flex items-baseline gap-4 py-4 transition-colors duration-200 hover:text-gold"
                  >
                    <span
                      aria-hidden="true"
                      className="font-sans text-[11px] font-bold tracking-[0.2em] text-gold"
                    >
                      {link.folio}
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl">
                      {link.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div style={escalon(nav.length)} className={`mt-auto pt-10 ${aparicion}`}>
            <p className="text-sm text-paper/60">{comun.horario}</p>
            <WhatsAppCTA
              lang={lang}
              variant="contornoClaro"
              mensaje={comun.mensajeGeneral}
              className="mt-5 w-full"
            >
              {comun.consultarWhatsapp}
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </header>
  );
}
