"use client";

import { SessionProvider } from "next-auth/react"; //Componente construido con children

export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
