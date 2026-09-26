import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#EEF5FC] p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Admin</p>
            <h1 className="text-3xl font-bold text-[#12305B]">Dashboard Overview</h1>
          </div>
          <Link to="/home" className="rounded-xl bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12305B]">
            Back to app
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5"><p className="text-sm text-[#5B6573]">Beneficiaries</p><p className="mt-2 text-3xl font-bold text-[#12305B]">14,250</p></CardContent>
          </Card>
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5"><p className="text-sm text-[#5B6573]">Applications</p><p className="mt-2 text-3xl font-bold text-[#12305B]">2,311</p></CardContent>
          </Card>
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5"><p className="text-sm text-[#5B6573]">Training seats</p><p className="mt-2 text-3xl font-bold text-[#12305B]">1,902</p></CardContent>
          </Card>
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5"><p className="text-sm text-[#5B6573]">Placements</p><p className="mt-2 text-3xl font-bold text-[#12305B]">864</p></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
