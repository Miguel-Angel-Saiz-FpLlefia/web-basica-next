import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";
import Providers from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Web amb Next.js", // Titulo de la pagina
  description: "Exercici App Router + Tailwind", // Descripción de la pagina
}; // Sirve para el SEO de la web

export default function RootLayout({ children }) {
  // Componente que sirve como layout, es un componente react que recibe un hijo
  return (
    <html lang="ca">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
