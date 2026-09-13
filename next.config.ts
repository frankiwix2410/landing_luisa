import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empaqueta el servidor y solo las dependencias usadas en .next/standalone,
  // para que la imagen Docker no tenga que llevar node_modules completo.
  output: "standalone",

  // La 404 global cubre las URL que no existen en ningún idioma: el layout
  // raíz vive dentro de app/[lang] y no hay uno común desde el cual componerla.
  experimental: {
    globalNotFound: true,
  },

  // Si el www y el dominio sin www responden los dos con 200, Google los lee
  // como contenido duplicado. Se unifica en el dominio sin www con un 301.
  async redirects() {
    return [
      // /es/... es la ruta interna del español; la URL pública no lleva
      // prefijo. Solo se redirige la petición del visitante (sin x-idioma):
      // en standalone la URL reescrita por el proxy vuelve a pasar por aquí
      // ya con esa cabecera, y redirigirla crearía un bucle.
      {
        source: "/es",
        missing: [{ type: "header", key: "x-idioma" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/es/:path*",
        missing: [{ type: "header", key: "x-idioma" }],
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.abogadaluizasalazar.com" }],
        destination: "https://abogadaluizasalazar.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
