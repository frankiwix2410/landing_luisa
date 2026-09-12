import {
  Building2,
  Gavel,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ CONTACTO
   Canal único: WhatsApp. El correo facilitado por la titular NO se publica
   (decisión expresa); tampoco hay formularios en el sitio. */
export const WHATSAPP_NUMBER_E164 = "17867604449";
export const WHATSAPP_NUMBER_DISPLAY = "786-760-4449";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER_E164}`;
export const HORARIO = "Lunes a viernes, de 8:00 a. m. a 6:00 p. m.";

export function whatsappLink(mensaje?: string): string {
  if (!mensaje) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;
}

/* ---------------------------------------------------------------- NAVEGACIÓN */
export const NAV_LINKS = [
  { href: "#perfil", folio: "01", label: "Perfil" },
  { href: "#areas", folio: "03", label: "Áreas" },
  { href: "#asesoria", folio: "04", label: "Asesoría" },
  { href: "#preguntas", folio: "07", label: "Preguntas" },
  { href: "#contacto", folio: "08", label: "Contacto" },
] as const;

/* -------------------------------------------------------------------- PERFIL */
export const PERFIL_PARRAFOS = [
  "La Dra. Luisa Salazar Pérez es abogada con más de 20 años de experiencia profesional y formación especializada en diferentes áreas del Derecho.",
  "Es egresada de la Universidad Libre de Barranquilla, cuenta con diplomados en Derecho Administrativo, Derecho de Familia y Derecho Penal, y posee un Doctorado en Ciencias Políticas de la Universidad URBE de Venezuela.",
  "Su trayectoria profesional le ha permitido desarrollar experiencia en diferentes áreas jurídicas, brindando asesoría y acompañamiento a sus clientes con responsabilidad, compromiso y atención personalizada.",
  "Actualmente radicada en Estados Unidos, continúa atendiendo asuntos relacionados con el Derecho colombiano, ofreciendo atención virtual a clientes tanto en Colombia como en el exterior.",
];

export const FORMACION = [
  {
    titulo: "Abogada",
    detalle: "Universidad Libre de Barranquilla",
  },
  {
    titulo: "Doctorado en Ciencias Políticas",
    detalle: "Universidad URBE de Venezuela",
  },
  {
    titulo: "Diplomados en Derecho Administrativo, Derecho de Familia y Derecho Penal",
    detalle: "Universidad Libre de Barranquilla",
  },
  {
    titulo: "Conciliadora de Derecho",
    detalle: "De conformidad con la Ley 23 de 1991",
  },
];

/* ---------------------------------------------------------------- MANIFIESTO */
export const MANIFIESTO_CITA =
  "Detrás de cada proceso jurídico existe una persona, una familia, una decisión importante o una situación que necesita ser atendida con seriedad.";

export const MANIFIESTO_PARRAFOS = [
  "Por eso, mi ejercicio profesional parte de escuchar, comprender y analizar cada caso de manera individual, brindando una orientación clara sobre las posibilidades jurídicas existentes.",
  "Mi compromiso es ofrecer a cada cliente un acompañamiento profesional basado en la responsabilidad, la ética, la confidencialidad y el respeto.",
  "Actualmente vivo en Estados Unidos, pero continúo conectada con Colombia y con el ejercicio del Derecho colombiano, utilizando herramientas digitales que permiten mantener una comunicación cercana con mis clientes, incluso cuando se encuentran fuera del país.",
];

/* --------------------------------------------------------------------- ÁREAS */
export type Area = {
  id: string;
  folio: string;
  titulo: string;
  entrada: string;
  intro: string;
  servicios: string[];
  cierre: string;
  Icon: LucideIcon;
};

export const AREAS: Area[] = [
  {
    id: "derecho-de-familia",
    folio: "I",
    titulo: "Derecho de Familia",
    entrada:
      "Los asuntos relacionados con la familia requieren un manejo jurídico responsable y, al mismo tiempo, una atención especialmente cuidadosa por las implicaciones personales que pueden tener.",
    intro:
      "Brindo asesoría y acompañamiento en diferentes asuntos relacionados con el Derecho de Familia, entre ellos:",
    servicios: [
      "Divorcios",
      "Separación de cuerpos",
      "Separación de bienes",
      "Custodia y cuidado personal de hijos",
      "Regulación de alimentos",
      "Obligaciones alimentarias",
      "Régimen de visitas",
      "Liquidación de sociedad conyugal",
      "Sucesiones",
      "Unión marital de hecho",
      "Conflictos familiares",
      "Asesoría jurídica en procesos de familia",
      "Elaboración y revisión de documentos jurídicos",
      "Representación judicial, cuando corresponda",
    ],
    cierre:
      "Cada situación familiar es diferente, por lo que el primer paso consiste en conocer y analizar las circunstancias particulares del caso.",
    Icon: HeartHandshake,
  },
  {
    id: "derecho-administrativo",
    folio: "II",
    titulo: "Derecho Administrativo",
    entrada:
      "El Derecho Administrativo comprende las relaciones entre los ciudadanos y las entidades del Estado, así como los diferentes procedimientos y controversias que pueden surgir frente a la administración pública.",
    intro: "Brindo asesoría y acompañamiento en asuntos relacionados con:",
    servicios: [
      "Actuaciones administrativas",
      "Actos administrativos",
      "Derechos de petición",
      "Recursos administrativos",
      "Procesos administrativos",
      "Trámites ante entidades públicas",
      "Análisis de actuaciones u omisiones de entidades estatales",
      "Mecanismos jurídicos de defensa frente a actuaciones administrativas",
      "Procesos ante la jurisdicción de lo contencioso administrativo",
      "Demandas administrativas, cuando corresponda",
      "Revisión y elaboración de documentos jurídicos",
    ],
    cierre:
      "El objetivo es analizar cada situación y determinar cuáles son las alternativas jurídicas que pueden resultar aplicables.",
    Icon: Building2,
  },
  {
    id: "derecho-penal",
    folio: "III",
    titulo: "Derecho Penal",
    entrada:
      "Los asuntos penales requieren atención oportuna, análisis detallado y conocimiento de las diferentes etapas del proceso.",
    intro:
      "Brindo asesoría y acompañamiento jurídico en asuntos relacionados con el Derecho Penal colombiano, de acuerdo con las características particulares de cada caso. Entre los servicios se encuentran:",
    servicios: [
      "Asesoría jurídica en asuntos penales",
      "Acompañamiento durante procesos penales",
      "Defensa técnica, cuando corresponda",
      "Análisis de investigaciones penales",
      "Revisión de actuaciones procesales",
      "Orientación sobre derechos y alternativas jurídicas",
      "Acompañamiento a víctimas dentro del marco legal aplicable",
      "Elaboración y revisión de documentos jurídicos",
      "Acompañamiento durante las diferentes etapas del proceso",
    ],
    cierre:
      "Cada caso requiere un análisis individual para determinar la estrategia y las actuaciones jurídicas que correspondan.",
    Icon: Gavel,
  },
];

/* ----------------------------------------------------------------- ASESORÍA */
export const ASESORIA_ENTRADA =
  "No todos los problemas jurídicos comienzan con una demanda. En muchas ocasiones, recibir orientación profesional de manera oportuna permite comprender mejor una situación y tomar decisiones informadas.";

export const ASESORIA_INTRO =
  "La asesoría jurídica permite analizar los hechos, revisar la documentación disponible, identificar los aspectos legales relevantes y conocer las posibles alternativas. Durante una consulta se puede:";

export const ASESORIA_PUNTOS = [
  "Analizar una situación jurídica",
  "Revisar documentos",
  "Resolver inquietudes legales",
  "Identificar posibles alternativas",
  "Conocer los requisitos de un trámite",
  "Analizar la viabilidad de iniciar un proceso",
  "Prepararse para una actuación administrativa o judicial",
  "Recibir orientación sobre los pasos que podrían seguirse",
];

/* -------------------------------------------------------- ATENCIÓN EXTERIOR */
export const EXTERIOR_PARRAFOS = [
  "Si actualmente resides en Miami o en otra ciudad de Estados Unidos y tienes un asunto jurídico relacionado con Colombia, puedes solicitar una consulta virtual para explicar tu situación y determinar las alternativas disponibles.",
  "La distancia no tiene por qué impedir que recibas orientación profesional sobre un asunto jurídico en Colombia.",
  "La atención puede realizarse de manera virtual, permitiendo mantener comunicación y seguimiento sin importar dónde se encuentre el cliente.",
];

/* --------------------------------------------------------------- COMPROMISO */
export const COMPROMISO = [
  {
    titulo: "Atención personalizada",
    texto: "Cada caso es analizado de acuerdo con sus circunstancias particulares.",
  },
  {
    titulo: "Comunicación clara",
    texto:
      "La información jurídica debe ser comprensible. Por eso buscamos explicar cada situación de manera clara y directa.",
  },
  {
    titulo: "Responsabilidad profesional",
    texto: "Cada asunto es atendido con seriedad, ética y responsabilidad.",
  },
  {
    titulo: "Confidencialidad",
    texto:
      "La información proporcionada por los clientes es tratada con la reserva y confidencialidad correspondientes al ejercicio profesional.",
  },
  {
    titulo: "Acompañamiento",
    texto:
      "Buscamos que cada cliente conozca el estado de su situación y comprenda las alternativas jurídicas disponibles.",
  },
  {
    titulo: "Atención virtual",
    texto:
      "Facilitamos el acceso a orientación jurídica para personas que se encuentran tanto en Colombia como en el exterior.",
  },
];

/* ---------------------------------------------------------------- PREGUNTAS */
export const PREGUNTAS = [
  {
    pregunta: "¿Puedo consultar mi caso si vivo en Estados Unidos?",
    respuesta:
      "Sí. Las consultas pueden realizarse de manera virtual cuando el asunto esté relacionado con el Derecho colombiano.",
  },
  {
    pregunta: "¿Puedo ser atendido desde Miami?",
    respuesta:
      "Sí. Si resides en Miami y necesitas orientación sobre un asunto jurídico relacionado con Colombia, puedes solicitar una consulta virtual.",
  },
  {
    pregunta: "¿Atiendes asuntos jurídicos en Colombia?",
    respuesta:
      "Sí. La atención está dirigida a asuntos relacionados con el ordenamiento jurídico colombiano, de acuerdo con el área y las características de cada caso.",
  },
  {
    pregunta: "¿Puedo enviar documentos para revisar mi caso?",
    respuesta:
      "Cuando sea necesario, se podrá solicitar documentación relacionada con el asunto para realizar un análisis adecuado.",
  },
  {
    pregunta: "¿La consulta garantiza un resultado favorable?",
    respuesta:
      "No. Ningún proceso judicial o administrativo puede garantizar un resultado determinado. La finalidad de la consulta es analizar el caso y explicar las alternativas jurídicas disponibles.",
  },
  {
    pregunta: "¿La atención es presencial o virtual?",
    respuesta:
      "Actualmente se ofrece atención virtual para facilitar el acceso a los servicios jurídicos, especialmente para clientes que se encuentran fuera de Colombia.",
  },
];
