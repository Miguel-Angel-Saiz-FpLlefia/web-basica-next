async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    next: { revalidate: 0 }, // Mira la cache, pero a partir de los segundos puestos se va a realizar otra vez la petición
  });
  if (!res.ok) throw new Error("Error carregant dades");
  return res.json();
}

async function ApiDemoPage() {
  const pokemon = await getData();
  const imageSrc =
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-2 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-slate-900">
          Dades des de l'API (servidor)
        </h1>
        <p className="text-sm text-slate-500">
          Aquest contingut s'ha obtingut amb{" "}
          <code className="rounded bg-slate-200 px-1">fetch</code> en un Server
          Component.
        </p>
      </div>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
        <div className="bg-linear-to-br from-sky-500 via-cyan-500 to-slate-900 p-6 text-white sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                # {String(pokemon.id).padStart(3, "0")}
              </p>
              <h2 className="mt-2 text-3xl font-black capitalize sm:text-4xl">
                {pokemon.name}
              </h2>
            </div>

            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium capitalize backdrop-blur-sm">
              {pokemon.types?.[0]?.type?.name}
            </span>
          </div>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-[220px_1fr] sm:p-8">
          <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-4">
            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageSrc}
                alt={pokemon.name}
                className="h-48 w-48 object-contain drop-shadow-xl"
              />
            ) : (
              <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-slate-200 text-sm text-slate-500">
                No image
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Type
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {pokemon.types?.map((item) => (
                  <span
                    key={item.type.name}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium capitalize text-slate-700"
                  >
                    {item.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Abilities
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {pokemon.abilities?.map((item) => (
                  <span
                    key={item.ability.name}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm capitalize text-slate-700"
                  >
                    {item.ability.name}
                    {item.is_hidden ? " (hidden)" : ""}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Base stats
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {pokemon.stats?.map((item) => (
                  <div
                    key={item.stat.name}
                    className="rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="capitalize text-slate-600">
                        {item.stat.name.replace("-", " ")}
                      </span>
                      <span className="font-semibold text-slate-900">
                        {item.base_stat}
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-sky-500 to-cyan-400"
                        style={{ width: `${Math.min(item.base_stat, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ApiDemoPage;
