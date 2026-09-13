import type { Diccionario } from "./es";

/**
 * English copy. Same shape as the Spanish dictionary (enforced by the type).
 * The practice covers Colombian law only, so the copy says "Colombian lawyer"
 * and never implies a U.S. law license.
 */
export const en: Diccionario = {
  meta: {
    titulo:
      "Luisa Salazar Pérez | Colombian Lawyer · Family, Criminal & Administrative Law",
    descripcion:
      "Colombian lawyer with 20+ years of experience in Family, Administrative and Criminal Law. Virtual consultations from Miami, the United States and Colombia.",
    descripcionCompartir:
      "Your legal peace of mind, my commitment. Family, Administrative and Criminal Law. Virtual consultations in Colombia and abroad.",
    imagenAlt: "Logo of Luisa Salazar Pérez, lawyer",
    keywords: [
      "Colombian lawyer in Miami",
      "Colombian lawyer in the United States",
      "Colombian family law lawyer",
      "divorce in Colombia from the US",
      "inheritance in Colombia",
      "child custody in Colombia",
      "Colombian administrative law",
      "Colombian criminal lawyer",
      "virtual legal consultation Colombia",
      "Luisa Salazar Pérez",
    ],
  },

  comun: {
    nombre: "Dr. Luisa Salazar Pérez",
    profesion: "Lawyer",
    tratamiento: "Dr.",
    lema: "Your legal peace of mind, my commitment",
    horario: "Monday to Friday, 8:00 a.m. to 6:00 p.m.",
    saltar: "Skip to content",
    seccion: "Section",
    irInicio: "Dr. Luisa Salazar Pérez, lawyer — go to home page",
    volverInicio: "Back to home page",
    navPrincipal: "Main navigation",
    navPie: "Footer navigation",
    rutaNavegacion: "Breadcrumb",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    consultar: "Consult",
    consultarWhatsapp: "Consult on WhatsApp",
    mensajeGeneral:
      "Hello, Dr. Luisa. I saw your website and would like to request a consultation.",
    escribirAl: "Message on WhatsApp at",
    derechos: "All rights reserved.",
    idioma: { etiqueta: "Español", aria: "Ver esta página en español" },
  },

  nav: [
    { ancla: "perfil", folio: "01", label: "Profile" },
    { ancla: "areas", folio: "03", label: "Practice areas" },
    { ancla: "asesoria", folio: "04", label: "Legal advice" },
    { ancla: "preguntas", folio: "07", label: "FAQ" },
    { ancla: "contacto", folio: "08", label: "Contact" },
  ],

  portada: {
    rotulo: "Lawyer · Colombian law",
    nombre: ["Dr. Luisa", "Salazar Pérez"],
    bajada:
      "Legal advice and representation in Family Law, Administrative Law and Criminal Law for clients in Colombia and abroad.",
    cta: "Request a consultation",
    mensaje:
      "Hello, Dr. Luisa. I need legal advice about a matter in Colombia.",
    ficha: [
      { rotulo: "Practice", dato: "More than 20 years" },
      { rotulo: "Education", dato: "Lawyer and Doctor of Political Science" },
      { rotulo: "Legal system", dato: "Colombian law" },
      { rotulo: "Consultations", dato: "Virtual, Colombia and abroad" },
    ],
  },

  franja: "Bridging distances, defending your rights",

  perfil: {
    rotulo: "Professional profile",
    titulo: "More than twenty years practicing law",
    parrafos: [
      "Dr. Luisa Salazar Pérez is a lawyer with more than 20 years of professional experience and specialized training in several areas of law.",
      "She graduated from Universidad Libre de Barranquilla, holds diplomas in Administrative Law, Family Law and Criminal Law, and earned a Doctorate in Political Science from Universidad URBE in Venezuela.",
      "Her career has given her experience across different legal fields, advising and supporting her clients with responsibility, commitment and personalized attention.",
      "Now based in the United States, she continues to handle matters under Colombian law, offering virtual consultations to clients both in Colombia and abroad.",
    ],
    formacionTitulo: "Education",
    formacion: [
      { titulo: "Lawyer", detalle: "Universidad Libre de Barranquilla" },
      {
        titulo: "Doctorate in Political Science",
        detalle: "Universidad URBE, Venezuela",
      },
      {
        titulo:
          "Diplomas in Administrative Law, Family Law and Criminal Law",
        detalle: "Universidad Libre de Barranquilla",
      },
      {
        titulo: "Certified Conciliator",
        detalle: "Under Colombian Law 23 of 1991",
      },
    ],
  },

  manifiesto: {
    rotulo: "In my own words",
    cita: "Behind every legal matter there is a person, a family, an important decision or a situation that deserves to be handled with care and seriousness.",
    parrafos: [
      "That is why my practice starts by listening, understanding and analyzing each case individually, giving clear guidance on the legal options available.",
      "My commitment is to offer every client professional support grounded in responsibility, ethics, confidentiality and respect.",
      "I currently live in the United States, but I remain connected to Colombia and to the practice of Colombian law, using digital tools that keep communication close with my clients, even when they are outside the country.",
    ],
  },

  areas: {
    rotulo: "Practice areas",
    titulo: "Three areas of Colombian law",
    entrada:
      "Every matter is analyzed individually to determine the appropriate legal actions.",
    consultar: "Ask about this area",
    mensaje: (titulo: string) =>
      `Hello, Dr. Luisa. I would like a consultation about ${titulo}.`,
    lista: [
      {
        clave: "familia",
        slug: "family-law",
        folio: "I",
        titulo: "Family Law",
        metaTitulo: "Colombian Family Law Lawyer",
        metaDescripcion:
          "Divorce, child custody, support, inheritance and de facto unions in Colombia. Virtual consultations from Miami and anywhere in the United States.",
        entrada:
          "Family matters call for responsible legal handling and, at the same time, especially careful attention because of the personal impact they can have.",
        intro:
          "I provide advice and support on a range of Family Law matters, including:",
        servicios: [
          "Divorce",
          "Legal separation",
          "Separation of property",
          "Child custody and personal care",
          "Child and spousal support",
          "Support obligations",
          "Visitation arrangements",
          "Liquidation of marital property",
          "Estates and inheritance",
          "De facto marital unions",
          "Family disputes",
          "Legal advice in family proceedings",
          "Drafting and review of legal documents",
          "Court representation, where applicable",
        ],
        cierre:
          "Every family situation is different, so the first step is to understand and analyze the specific circumstances of the case.",
      },
      {
        clave: "administrativo",
        slug: "administrative-law",
        folio: "II",
        titulo: "Administrative Law",
        metaTitulo: "Colombian Administrative Law Lawyer",
        metaDescripcion:
          "Petitions, administrative appeals, government procedures and lawsuits before Colombia's administrative courts. Virtual consultations from abroad.",
        entrada:
          "Administrative Law governs the relationship between citizens and government entities, along with the procedures and disputes that can arise with the public administration.",
        intro: "I provide advice and support on matters involving:",
        servicios: [
          "Administrative proceedings",
          "Administrative acts and decisions",
          "Petitions to public authorities (derecho de petición)",
          "Administrative appeals",
          "Administrative processes",
          "Procedures before public entities",
          "Review of actions or omissions by government entities",
          "Legal remedies against administrative actions",
          "Cases before the administrative courts (contencioso administrativo)",
          "Administrative lawsuits, where applicable",
          "Review and drafting of legal documents",
        ],
        cierre:
          "The goal is to analyze each situation and determine which legal options may apply.",
      },
      {
        clave: "penal",
        slug: "criminal-law",
        folio: "III",
        titulo: "Criminal Law",
        metaTitulo: "Colombian Criminal Law Lawyer",
        metaDescripcion:
          "Advice and defense in Colombian criminal proceedings, review of investigations and support for victims. Virtual consultations from the United States.",
        entrada:
          "Criminal matters require timely attention, detailed analysis and knowledge of every stage of the process.",
        intro:
          "I provide legal advice and support on matters under Colombian Criminal Law, according to the particular features of each case. Services include:",
        servicios: [
          "Legal advice on criminal matters",
          "Support throughout criminal proceedings",
          "Criminal defense, where applicable",
          "Analysis of criminal investigations",
          "Review of procedural actions",
          "Guidance on rights and legal options",
          "Support for victims within the applicable legal framework",
          "Drafting and review of legal documents",
          "Support at every stage of the process",
        ],
        cierre:
          "Every case requires individual analysis to determine the appropriate strategy and legal actions.",
      },
    ],
  },

  paginaArea: {
    inicio: "Home",
    areas: "Practice areas",
    enPais: "in Colombia",
    cta: "Discuss my case",
    serviciosRotulo: "Services",
    serviciosTitulo: (titulo: string) => `${titulo} matters`,
    exteriorRotulo: "Clients abroad",
    exteriorTitulo: "Virtual consultations from Miami and the United States",
    exteriorCta: "Request a virtual consultation",
    mensajeExterior: (titulo: string) =>
      `Hello, Dr. Luisa. I live outside Colombia and need a virtual consultation about ${titulo}.`,
    otrasRotulo: "Other practice areas",
    otrasTitulo: "I can also help you with",
    verArea: "View area",
  },

  asesoria: {
    rotulo: "Legal advice",
    titulo: "Not everything starts with a lawsuit",
    entrada:
      "Not every legal problem begins with a lawsuit. Often, getting timely professional guidance makes it easier to understand a situation and make informed decisions.",
    intro:
      "Legal advice lets you analyze the facts, review the available documents, identify the relevant legal issues and learn about the possible options. During a consultation you can:",
    puntos: [
      "Analyze a legal situation",
      "Review documents",
      "Resolve legal questions",
      "Identify possible options",
      "Learn the requirements for a procedure",
      "Assess whether to start legal proceedings",
      "Prepare for an administrative or court proceeding",
      "Get guidance on the next steps to take",
    ],
    cta: "Request legal advice",
    mensaje: "Hello, Dr. Luisa. I would like to request legal advice.",
  },

  exterior: {
    rotulo: "Clients abroad",
    titulo: "Legal help for clients in Miami",
    parrafos: [
      "If you live in Miami or anywhere else in the United States and have a legal matter related to Colombia, you can request a virtual consultation to explain your situation and learn about your options.",
      "Distance should not keep you from getting professional guidance on a legal matter in Colombia.",
      "Consultations can take place virtually, keeping communication and follow-up going wherever the client is.",
    ],
    cta: "Request a virtual consultation",
    mensaje:
      "Hello, Dr. Luisa. I live in the United States and need a virtual consultation about a matter in Colombia.",
  },

  compromiso: {
    rotulo: "Our commitment",
    titulo: "How every matter is handled",
    items: [
      {
        titulo: "Personalized attention",
        texto:
          "Each case is analyzed according to its particular circumstances.",
      },
      {
        titulo: "Clear communication",
        texto:
          "Legal information should be easy to understand. That is why we explain every situation clearly and directly.",
      },
      {
        titulo: "Professional responsibility",
        texto: "Every matter is handled with seriousness, ethics and responsibility.",
      },
      {
        titulo: "Confidentiality",
        texto:
          "Information provided by clients is treated with the discretion and confidentiality that professional practice requires.",
      },
      {
        titulo: "Ongoing support",
        texto:
          "We make sure each client knows where their matter stands and understands the legal options available.",
      },
      {
        titulo: "Virtual consultations",
        texto:
          "We make legal guidance accessible to people both in Colombia and abroad.",
      },
    ],
  },

  preguntas: {
    rotulo: "Frequently asked questions",
    titulo: "Before you write",
    noEsta: "My question isn't here",
    mensaje:
      "Hello, Dr. Luisa. I have a question that isn't answered on the website.",
    lista: [
      {
        pregunta: "Can I get a consultation if I live in the United States?",
        respuesta:
          "Yes. Consultations can be held virtually when the matter involves Colombian law.",
      },
      {
        pregunta: "Can I get help from Miami?",
        respuesta:
          "Yes. If you live in Miami and need guidance on a legal matter related to Colombia, you can request a virtual consultation.",
      },
      {
        pregunta: "Do you handle legal matters in Colombia?",
        respuesta:
          "Yes. The practice focuses on matters governed by Colombian law, depending on the area and the specifics of each case.",
      },
      {
        pregunta: "Can I send documents so my case can be reviewed?",
        respuesta:
          "When necessary, documents related to the matter may be requested for a proper analysis.",
      },
      {
        pregunta: "Does a consultation guarantee a favorable outcome?",
        respuesta:
          "No. No court or administrative proceeding can guarantee a specific result. The purpose of the consultation is to analyze the case and explain the available legal options.",
      },
      {
        pregunta: "Are consultations in person or virtual?",
        respuesta:
          "Consultations are currently virtual, making legal services easier to access, especially for clients outside Colombia.",
      },
    ],
  },

  contacto: {
    rotulo: "Contact",
    titulo: "Message me on WhatsApp",
    entrada:
      "Consultations are arranged only through WhatsApp. This site does not use contact forms.",
    abrir: "Open WhatsApp",
    mensaje: "Hello, Dr. Luisa. I would like to request a legal consultation.",
    areasRotulo: "Practice areas",
    areasDato: "Family Law · Administrative Law · Criminal Law",
    atencionRotulo: "Consultations",
    atencionDato: "Colombia and clients abroad",
    horarioRotulo: "Office hours",
    cierre: "Experience, commitment and results — by your side, always",
  },

  jsonLd: {
    contacto: "Legal consultations",
    catalogo: "Practice areas",
    colombia: "Colombia",
    estadosUnidos: "United States",
    saberes: ["Political Science", "Conciliation"],
  },

  menu: {
    submenuAreas: "Practice areas",
    todasAreas: "See all practice areas",
    mostrarAreas: "Show practice areas",
    ocultarAreas: "Hide practice areas",
    resumenes: {
      familia: "Divorce, custody, support and inheritance",
      administrativo: "Petitions, appeals and lawsuits",
      penal: "Criminal defense and victim support",
    },
  },

  noEncontrada: {
    metaTitulo: "Page not found",
    rotulo: "Error 404",
    titulo: "This page doesn't exist",
    texto:
      "The link may be mistyped, or the page may have moved to a new address.",
    volver: "Back to home page",
    areas: "Practice areas",
  },
};
