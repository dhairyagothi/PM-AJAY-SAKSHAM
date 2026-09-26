import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export const Route = createFileRoute("/skills/gap")({
  component: SkillGapPage,
});

function SkillGapPage() {
  return (
    <GovernmentLayout title="Skill Gap" subtitle="Your readiness for the Solar Technician role.">
      <Card className="border-[#D6DEE8] bg-white shadow-sm">
        <CardContent className="p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#17854A]">Target Role</p>
          <h3 className="mt-2 text-2xl font-bold text-[#12305B]">Solar Technician</h3>

          <div className="mt-6 space-y-3 text-sm text-[#12305B]">
            <div className="rounded-xl bg-[#EEF8F1] p-3 text-[#17854A]">✓ Basic Wiring</div>
            <div className="rounded-xl bg-[#EEF8F1] p-3 text-[#17854A]">✓ Electrical Safety</div>
            <div className="rounded-xl bg-[#F8FAFC] p-3 text-[#5B6573]">✕ Solar Installation</div>
            <div className="rounded-xl bg-[#F8FAFC] p-3 text-[#5B6573]">✕ Solar Maintenance</div>
          </div>

          <p className="mt-6 text-sm text-[#5B6573]">2 skills remaining before you can apply confidently.</p>

          <div className="mt-5">
            <Link to="/learning" className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12305B]">
              Build My Learning Path
            </Link>
          </div>
        </CardContent>
      </Card>
    </GovernmentLayout>
  );
}
