import { notFound } from "next/navigation"; // Crear la pagina 404
import { posts } from "../data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

async function BlogPostPage({ params }) {
  const { slug } = await params; // Se pasan de manera asyncrona a partir de la versión 16
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="space-y-4">
      <p className="text-sm uppercase tracking-wide text-blue-600">Blog</p>
      <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
      <p className="text-slate-600">{post.content}</p>
    </article>
  );
}

export default BlogPostPage;
