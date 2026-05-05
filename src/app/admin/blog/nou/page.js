"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

async function uploadBlogImage(file) {
  // Reutilitza la mateixa estrategia del helper anterior
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/admin/upload", {
    method: "POST",
    body: fd,
    credentials: "include",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Error en pujar la imatge");
  return data.url;
}

export default function NouArticlePage() {
  // Estat del formulari de creacio
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    // Flux: validar -> (opcional) pujar imatge -> crear post
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      let imageUrl = null;
      if (file) imageUrl = await uploadBlogImage(file);

      const res = await fetch("/api/admin/posts", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: slug.trim(),
          title: title.trim(),
          excerpt: excerpt.trim() || null,
          content,
          imageUrl,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        // Missatge d'error funcional per a l'alumne/usuari
        setError(data.error || "No s’ha pogut crear l’article");
        setSaving(false);
        return;
      }
      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err.message || "Error");
      setSaving(false);
    }
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/blog"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Tornar a la llista
        </Link>
      </div>
      <h1 className="text-2xl font-bold">Nou article</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border bg-white p-4 shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium">Slug (URL)</label>
          <input
            className="mt-1 w-full rounded border px-2 py-1"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            placeholder="exemple-de-post"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Títol</label>
          <input
            className="mt-1 w-full rounded border px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Resum (opcional)</label>
          <input
            className="mt-1 w-full rounded border px-2 py-1"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contingut</label>
          <textarea
            className="mt-1 min-h-[160px] w-full rounded border px-2 py-1 font-mono text-sm"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Imatge de capçalera (opcional)
          </label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="mt-1 w-full text-sm"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={saving}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {saving ? "Desant…" : "Crear article"}
        </button>
      </form>
    </section>
  );
}
