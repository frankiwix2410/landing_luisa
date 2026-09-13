import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empaqueta el servidor y solo las dependencias usadas en .next/standalone,
  // para que la imagen Docker no tenga que llevar node_modules completo.
  output: "standalone",
};

export default nextConfig;
