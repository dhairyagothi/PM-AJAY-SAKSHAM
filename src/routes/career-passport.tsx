import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export const Route = createFileRoute("/career-passport")({
  component: CareerPassportPage,
});

function CareerPassportPage() {
  return (
    <GovernmentLayout title="Career Passport" subtitle="Your skill, learning, and opportunity record.">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0B3A82]">Profile Score</p>
            <p className="mt-3 text-3xl font-bold text-[#12305B]">82%</p>
            <p className="mt-2 text-sm text-[#5B6573]">Ready for skilled work</p>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0B3A82]">Certificates</p>
            <p className="mt-3 text-3xl font-bold text-[#12305B]">03</p>
            <p className="mt-2 text-sm text-[#5B6573]">Verified learning records</p>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0B3A82]">Applications</p>
            <p className="mt-3 text-3xl font-bold text-[#12305B]">02</p>
            <p className="mt-2 text-sm text-[#5B6573]">Submitted this quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 border-[#D6DEE8] bg-white shadow-sm">
        <CardContent className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-[#12305B]">Milestones</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#12305B]">
            <li>✓ Completed Electrical Safety</li>
            <li>✓ Completed Basic Wiring</li>
            <li>✓ Selected for skill assessment</li>
            <li>→ Next milestone: Solar Installation course</li>
          </ul>
          <div className="mt-5">
            <Link to="/learning" className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12305B]">
              Continue Learning
            </Link>
          </div>
        </CardContent>
      </Card>
    </GovernmentLayout>
  );
}
