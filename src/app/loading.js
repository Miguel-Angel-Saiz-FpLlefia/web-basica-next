export default function Loading() {
  return (
    <main className="fixed inset-0 grid place-items-center overflow-hidden bg-slate-50 text-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_30%)]" />

      <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-slate-200/70 bg-white/80 px-8 py-10 shadow-2xl shadow-slate-200/60 backdrop-blur-md">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-4 border-sky-200" />
          <span className="absolute inset-0 rounded-full border-4 border-sky-600 border-t-transparent animate-spin" />
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Cargando
          </p>
          <p className="mt-2 text-lg font-medium text-slate-700">
            Preparando el contenido
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Un momento, estamos trayendo los datos.
          </p>
        </div>

        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-500 [animation-delay:-0.3s]" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-500 [animation-delay:-0.15s]" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-500" />
        </div>
      </div>
    </main>
  );
}
