import Link from "next/link";
import ActiveNavLink from "./_components/ActiveNavLink";

function SiteLayout({ children }) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white shadow-lg shadow-slate-900/15">
              N
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Web basica
              </p>
              <p className="text-sm font-medium text-slate-900">Next.js demo</p>
            </div>
          </Link>

          <nav className="flex flex-wrap gap-2">
            <ActiveNavLink href="/">Inici</ActiveNavLink>
            <ActiveNavLink href="/sobre">Sobre</ActiveNavLink>
            <ActiveNavLink href="/serveis">Serveis</ActiveNavLink>
            <ActiveNavLink href="/contacte">Contacte</ActiveNavLink>
            <ActiveNavLink href="/blog">Blog</ActiveNavLink>
            <ActiveNavLink href="/api-demo">API demo</ActiveNavLink>
            <ActiveNavLink href="/dashboard">Dashboard</ActiveNavLink>
            <ActiveNavLink href="/shadcn">ShadCN</ActiveNavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
    </>
  );
}

export default SiteLayout;
