export default function EstadistiquesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-900">Estadístiques</h1>
      <p className="mt-2 text-slate-600">
        Anàlisi de dades i rendiment del lloc en temps real.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
          <p className="text-sm text-blue-600 font-medium">Visites</p>
          <p className="text-2xl font-bold">12.405</p>
        </div>
        <div className="rounded-lg bg-green-50 p-4 border border-green-100">
          <p className="text-sm text-green-600 font-medium">Conversió</p>
          <p className="text-2xl font-bold">3.2%</p>
        </div>
        <div className="rounded-lg bg-purple-50 p-4 border border-purple-100">
          <p className="text-sm text-purple-600 font-medium">Usuaris</p>
          <p className="text-2xl font-bold">1.240</p>
        </div>
      </div>
    </>
  );
}
