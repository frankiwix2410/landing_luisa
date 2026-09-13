/**
 * Textos en español. Es la referencia: el tipo `Diccionario` sale de aquí y el
 * inglés debe tener exactamente la misma forma, así una clave olvidada no
 * compila en lugar de aparecer vacía en producción.
 *
 * Solo información confirmada por la titular. El correo facilitado NO se
 * publica (decisión expresa); el único canal de contacto es WhatsApp.
 */
export const es = {
  meta: {
    titulo:
      "Luisa Salazar Pérez | Abogada colombiana · Familia, Penal y Administrativo",
    descripcion:
      "Abogada colombiana con más de 20 años de experiencia en Derecho de Familia, Administrativo y Penal. Consulta virtual desde Colombia, Miami y Estados Unidos.",
    descripcionCompartir:
      "Tu tranquilidad legal, mi compromiso. Derecho de Familia, Administrativo y Penal. Atención virtual en Colombia y el exterior.",
    imagenAlt: "Logotipo de Luisa Salazar Pérez, abogada",
    keywords: [
      "abogada colombiana",
      "abogada colombiana en Miami",
      "abogado colombiano en Estados Unidos",
      "abogada de familia Colombia",
      "divorcio en Colombia desde el exterior",
      "sucesiones en Colombia",
      "custodia de hijos Colombia",
      "abogada derecho administrativo Colombia",
      "derecho de petición",
      "abogada penalista Colombia",
      "asesoría jurídica virtual",
      "Luisa Salazar Pérez",
    ],
  },

  comun: {
    nombre: "Dra. Luisa Salazar Pérez",
    profesion: "Abogada",
    tratamiento: "Dra.",
    lema: "Tu tranquilidad legal, mi compromiso",
    horario: "Lunes a viernes, de 8:00 a. m. a 6:00 p. m.",
    saltar: "Saltar al contenido",
    seccion: "Sección",
    irInicio: "Dra. Luisa Salazar Pérez, abogada — ir al inicio",
    volverInicio: "Volver al inicio",
    navPrincipal: "Navegación principal",
    navPie: "Navegación del pie de página",
    rutaNavegacion: "Ruta de navegación",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    consultar: "Consultar",
    consultarWhatsapp: "Consultar por WhatsApp",
    mensajeGeneral:
      "Hola, Dra. Luisa. Vi su página web y quisiera solicitar una consulta.",
    escribirAl: "Escribir por WhatsApp al",
    derechos: "Todos los derechos reservados.",
    /** Describe el OTRO idioma: es el destino del selector. */
    idioma: { etiqueta: "English", aria: "Read this page in English" },
  },

  nav: [
    { ancla: "perfil", folio: "01", label: "Perfil" },
    { ancla: "areas", folio: "03", label: "Áreas" },
    { ancla: "asesoria", folio: "04", label: "Asesoría" },
    { ancla: "preguntas", folio: "07", label: "Preguntas" },
    { ancla: "contacto", folio: "08", label: "Contacto" },
  ],

  portada: {
    rotulo: "Abogada · Derecho colombiano",
    nombre: ["Dra. Luisa", "Salazar Pérez"],
    bajada:
      "Asesoría y acompañamiento jurídico en Derecho de Familia, Derecho Administrativo y Derecho Penal, para clientes en Colombia y en el exterior.",
    cta: "Solicitar consulta",
    mensaje:
      "Hola, Dra. Luisa. Necesito asesoría jurídica sobre un asunto en Colombia.",
    ficha: [
      { rotulo: "Ejercicio", dato: "Más de 20 años" },
      { rotulo: "Formación", dato: "Abogada y Doctora en Ciencias Políticas" },
      { rotulo: "Ordenamiento", dato: "Derecho colombiano" },
      { rotulo: "Atención", dato: "Virtual, Colombia y exterior" },
    ],
  },

  franja: "Conectando distancias, defendiendo tus derechos",

  perfil: {
    rotulo: "Perfil profesional",
    titulo: "Más de veinte años de ejercicio del Derecho",
    parrafos: [
      "La Dra. Luisa Salazar Pérez es abogada con más de 20 años de experiencia profesional y formación especializada en diferentes áreas del Derecho.",
      "Es egresada de la Universidad Libre de Barranquilla, cuenta con diplomados en Derecho Administrativo, Derecho de Familia y Derecho Penal, y posee un Doctorado en Ciencias Políticas de la Universidad URBE de Venezuela.",
      "Su trayectoria profesional le ha permitido desarrollar experiencia en diferentes áreas jurídicas, brindando asesoría y acompañamiento a sus clientes con responsabilidad, compromiso y atención personalizada.",
      "Actualmente radicada en Estados Unidos, continúa atendiendo asuntos relacionados con el Derecho colombiano, ofreciendo atención virtual a clientes tanto en Colombia como en el exterior.",
    ],
    formacionTitulo: "Formación académica",
    formacion: [
      { titulo: "Abogada", detalle: "Universidad Libre de Barranquilla" },
      {
        titulo: "Doctorado en Ciencias Políticas",
        detalle: "Universidad URBE de Venezuela",
      },
      {
        titulo:
          "Diplomados en Derecho Administrativo, Derecho de Familia y Derecho Penal",
        detalle: "Universidad Libre de Barranquilla",
      },
      {
        titulo: "Conciliadora de Derecho",
        detalle: "De conformidad con la Ley 23 de 1991",
      },
    ],
  },

  manifiesto: {
    rotulo: "En primera persona",
    cita: "Detrás de cada proceso jurídico existe una persona, una familia, una decisión importante o una situación que necesita ser atendida con seriedad.",
    parrafos: [
      "Por eso, mi ejercicio profesional parte de escuchar, comprender y analizar cada caso de manera individual, brindando una orientación clara sobre las posibilidades jurídicas existentes.",
      "Mi compromiso es ofrecer a cada cliente un acompañamiento profesional basado en la responsabilidad, la ética, la confidencialidad y el respeto.",
      "Actualmente vivo en Estados Unidos, pero continúo conectada con Colombia y con el ejercicio del Derecho colombiano, utilizando herramientas digitales que permiten mantener una comunicación cercana con mis clientes, incluso cuando se encuentran fuera del país.",
    ],
  },

  areas: {
    rotulo: "Áreas de práctica",
    titulo: "Tres áreas del Derecho colombiano",
    entrada:
      "Cada asunto se analiza de forma individual para determinar las actuaciones jurídicas que correspondan.",
    consultar: "Consultar esta área",
    mensaje: (titulo: string) =>
      `Hola, Dra. Luisa. Quisiera una consulta sobre ${titulo}.`,
    lista: [
      {
        /** Empareja la misma área entre idiomas; el slug sí se traduce. */
        clave: "familia",
        slug: "derecho-de-familia",
        folio: "I",
        titulo: "Derecho de Familia",
        /** Título para Google: la búsqueda que atiende la página, sin la marca. */
        metaTitulo: "Abogada de Derecho de Familia en Colombia",
        /** Resultado de búsqueda y vista previa al compartir; ≤ 160 caracteres. */
        metaDescripcion:
          "Divorcios, custodia, alimentos, sucesiones y unión marital de hecho en Colombia. Consulta virtual, también desde Miami y Estados Unidos.",
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
      },
      {
        clave: "administrativo",
        slug: "derecho-administrativo",
        folio: "II",
        titulo: "Derecho Administrativo",
        metaTitulo: "Abogada de Derecho Administrativo en Colombia",
        metaDescripcion:
          "Derechos de petición, recursos, actos administrativos y demandas ante lo contencioso administrativo en Colombia. Consulta virtual desde cualquier país.",
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
      },
      {
        clave: "penal",
        slug: "derecho-penal",
        folio: "III",
        titulo: "Derecho Penal",
        metaTitulo: "Abogada Penalista en Colombia",
        metaDescripcion:
          "Asesoría y defensa técnica en procesos penales en Colombia, análisis de investigaciones y acompañamiento a víctimas. Consulta virtual desde el exterior.",
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
      },
    ],
  },

  paginaArea: {
    inicio: "Inicio",
    areas: "Áreas",
    enPais: "en Colombia",
    cta: "Consultar mi caso",
    serviciosRotulo: "Servicios",
    serviciosTitulo: (titulo: string) => `Asuntos de ${titulo}`,
    exteriorRotulo: "Clientes en el exterior",
    exteriorTitulo: "Consulta virtual desde Miami y Estados Unidos",
    exteriorCta: "Solicitar consulta virtual",
    mensajeExterior: (titulo: string) =>
      `Hola, Dra. Luisa. Vivo fuera de Colombia y necesito una consulta virtual sobre ${titulo}.`,
    otrasRotulo: "Otras áreas de práctica",
    otrasTitulo: "También puedo acompañarte en",
    verArea: "Ver área",
  },

  asesoria: {
    rotulo: "Asesoría jurídica",
    titulo: "No todo empieza con una demanda",
    entrada:
      "No todos los problemas jurídicos comienzan con una demanda. En muchas ocasiones, recibir orientación profesional de manera oportuna permite comprender mejor una situación y tomar decisiones informadas.",
    intro:
      "La asesoría jurídica permite analizar los hechos, revisar la documentación disponible, identificar los aspectos legales relevantes y conocer las posibles alternativas. Durante una consulta se puede:",
    puntos: [
      "Analizar una situación jurídica",
      "Revisar documentos",
      "Resolver inquietudes legales",
      "Identificar posibles alternativas",
      "Conocer los requisitos de un trámite",
      "Analizar la viabilidad de iniciar un proceso",
      "Prepararse para una actuación administrativa o judicial",
      "Recibir orientación sobre los pasos que podrían seguirse",
    ],
    cta: "Solicitar una asesoría",
    mensaje: "Hola, Dra. Luisa. Quisiera solicitar una asesoría jurídica.",
  },

  exterior: {
    rotulo: "Clientes en el exterior",
    titulo: "Atención para clientes en Miami",
    parrafos: [
      "Si actualmente resides en Miami o en otra ciudad de Estados Unidos y tienes un asunto jurídico relacionado con Colombia, puedes solicitar una consulta virtual para explicar tu situación y determinar las alternativas disponibles.",
      "La distancia no tiene por qué impedir que recibas orientación profesional sobre un asunto jurídico en Colombia.",
      "La atención puede realizarse de manera virtual, permitiendo mantener comunicación y seguimiento sin importar dónde se encuentre el cliente.",
    ],
    cta: "Solicitar consulta virtual",
    mensaje:
      "Hola, Dra. Luisa. Vivo en Estados Unidos y necesito una consulta virtual sobre un asunto en Colombia.",
  },

  compromiso: {
    rotulo: "Nuestro compromiso",
    titulo: "Cómo se atiende cada asunto",
    items: [
      {
        titulo: "Atención personalizada",
        texto:
          "Cada caso es analizado de acuerdo con sus circunstancias particulares.",
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
    ],
  },

  preguntas: {
    rotulo: "Preguntas frecuentes",
    titulo: "Antes de escribir",
    noEsta: "Mi pregunta no está aquí",
    mensaje: "Hola, Dra. Luisa. Tengo una pregunta que no aparece en la página.",
    lista: [
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
    ],
  },

  contacto: {
    rotulo: "Contacto",
    titulo: "Escríbeme por WhatsApp",
    entrada:
      "La atención se coordina únicamente por WhatsApp. No se emplean formularios en este sitio.",
    abrir: "Abrir WhatsApp",
    mensaje: "Hola, Dra. Luisa. Quisiera solicitar una consulta jurídica.",
    areasRotulo: "Áreas de práctica",
    areasDato: "Derecho de Familia · Derecho Administrativo · Derecho Penal",
    atencionRotulo: "Atención",
    atencionDato: "Colombia y clientes en el exterior",
    horarioRotulo: "Horario de atención",
    cierre: "Experiencia, compromiso y resultados — a tu lado, siempre",
  },

  jsonLd: {
    contacto: "Consultas jurídicas",
    catalogo: "Áreas de práctica",
    colombia: "Colombia",
    estadosUnidos: "Estados Unidos",
    saberes: ["Ciencias Políticas", "Conciliación"],
  },

  menu: {
    submenuAreas: "Áreas de práctica",
    todasAreas: "Ver todas las áreas",
    mostrarAreas: "Mostrar áreas de práctica",
    ocultarAreas: "Ocultar áreas de práctica",
    /** Línea breve bajo cada área en el submenú, indexada por clave de área. */
    resumenes: {
      familia: "Divorcios, custodia, alimentos y sucesiones",
      administrativo: "Derechos de petición, recursos y demandas",
      penal: "Defensa técnica y acompañamiento a víctimas",
    } as Record<string, string>,
  },

  noEncontrada: {
    metaTitulo: "Página no encontrada",
    rotulo: "Error 404",
    titulo: "Esta página no existe",
    texto:
      "Es posible que el enlace esté mal escrito o que la página haya cambiado de dirección.",
    volver: "Volver al inicio",
    areas: "Áreas de práctica",
  },
};

export type Diccionario = typeof es;
