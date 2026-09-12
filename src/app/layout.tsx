import type { Metadata, Viewport } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";
import {
  HORARIO,
  PREGUNTAS,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luisa Salazar Pérez | Abogada",
  description:
    "Dra. Luisa Salazar Pérez, abogada con más de 20 años de experiencia. Derecho de Familia, Derecho Administrativo y Derecho Penal en Colombia. Atención virtual para clientes en Colombia y en el exterior.",
  keywords: [
    "abogada",
    "abogada colombiana",
    "derecho de familia",
    "derecho administrativo",
    "derecho penal",
    "asesoría jurídica",
    "consulta virtual",
    "Colombia",
    "Miami",
  ],
  authors: [{ name: "Luisa Salazar Pérez" }],
  openGraph: {
    title: "Luisa Salazar Pérez | Abogada",
    description:
      "Tu tranquilidad legal, mi compromiso. Derecho de Familia, Administrativo y Penal. Atención virtual desde Colombia y el exterior.",
    locale: "es_CO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#12281f",
};

/** Datos estructurados: solo información confirmada por la titular. */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Dra. Luisa Salazar Pérez",
    jobTitle: "Abogada",
    slogan: "Tu tranquilidad legal, mi compromiso",
    telephone: `+${WHATSAPP_NUMBER_DISPLAY.replaceAll("-", "")}`,
    sameAs: [WHATSAPP_URL],
    areaServed: "CO",
    knowsLanguage: "es",
    openingHours: "Mo-Fr 08:00-18:00",
    description: HORARIO,
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidad Libre de Barranquilla" },
      { "@type": "CollegeOrUniversity", name: "Universidad URBE de Venezuela" },
    ],
    knowsAbout: [
      "Derecho de Familia",
      "Derecho Administrativo",
      "Derecho Penal",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PREGUNTAS.map(({ pregunta, respuesta }) => ({
      "@type": "Question",
      name: pregunta,
      acceptedAnswer: { "@type": "Answer", text: respuesta },
    })),
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${garamond.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
