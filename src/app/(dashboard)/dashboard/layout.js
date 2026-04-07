import Sidebar from "../_components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-[260px_1fr]">
      <Sidebar />
      <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur-md md:p-8">
        {children}
      </div>
    </section>
  );
}

export default DashboardLayout;
