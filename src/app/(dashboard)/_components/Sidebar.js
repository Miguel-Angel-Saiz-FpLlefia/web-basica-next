"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  const linkClass = (href) => {
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return `rounded-2xl px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-slate-900 text-white shadow-sm"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;
  };

  return (
    <aside className="sticky top-24 rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-xl shadow-slate-200/60 backdrop-blur-md">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Tauler
      </p>
      <nav className="flex flex-col gap-2">
        <Link className={linkClass("/dashboard")} href="/dashboard">
          Resum
        </Link>
        <Link
          className={linkClass("/dashboard/settings")}
          href="/dashboard/settings"
        >
          Configuració
        </Link>
        <Link
          className={linkClass("/dashboard/estadistiques")}
          href="/dashboard/estadistiques"
        >
          Estadístiques
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
