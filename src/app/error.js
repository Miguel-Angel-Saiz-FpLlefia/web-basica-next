"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="fixed inset-0 grid place-items-center overflow-hidden bg-slate-50 px-4 text-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)]" />

      <div className="relative w-full max-w-xl rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-md sm:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-2xl text-red-600">
            !
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Ha ocurrido un error
            </p>
            <h1 className="text-3xl font-black text-slate-900">
              No hemos podido cargar esta página
            </h1>
            <p className="text-sm leading-6 text-slate-600">
              El servidor o el cliente devolvieron un fallo. Puedes intentar de
              nuevo o volver al inicio para seguir navegando.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Detalle técnico
          </p>
          <p className="mt-2 wrap-break-word text-sm text-slate-700">
            {error?.message || "Error desconocido"}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Reintentar
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
