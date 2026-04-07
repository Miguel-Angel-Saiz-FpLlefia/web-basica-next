import "./globals.css";
import { Manrope, Space_Grotesk } from "next/font/google";

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
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-[linear-gradient(180deg,rgba(248,250,252,1)_0%,rgba(241,245,249,1)_100%)] font-sans text-slate-900`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-indigo-300/15 blur-3xl" />
          <div className="absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-slate-300/20 blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}
