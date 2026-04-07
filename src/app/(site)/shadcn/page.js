import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ShadcnPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Tabs con shadcn</h1>
        <p className="text-sm text-slate-500">
          Exemple de component instal·lat amb shadcn/ui.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full flex-col">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-2 text-sm text-slate-600">
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              You have 12 active projects and 3 pending tasks.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Analytics</h2>
            <p className="mt-2 text-sm text-slate-600">
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Page views are up 25% compared to last month.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reports">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Reports</h2>
            <p className="mt-2 text-sm text-slate-600">
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              You have 5 reports ready and available to export.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Settings</h2>
            <p className="mt-2 text-sm text-slate-600">
              Manage your account preferences and options. Customize your
              experience to fit your needs.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Configure notifications, security, and themes.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
