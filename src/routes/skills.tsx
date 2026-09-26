import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

function SkillsPage() {
  const skillRows = [
    ["Electrical Repair", 4],
    ["Basic Wiring", 4],
    ["Machine Handling", 2],
    ["Digital Skills", 1],
  ];

  return (
    <GovernmentLayout title="Your Skill Profile" subtitle="A simple view of your current skills and readiness.">
      <div className="space-y-6">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <h3 className="mb-4 text-xl font-bold text-[#12305B]">Skill Strength</h3>
            <div className="space-y-4"> 
              {skillRows.map(([label, score]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-sm font-medium text-[#12305B]">
                    <span>{label}</span>
                    <span>{score}/5</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-[#EEF5FC]">
                    <div
                      className="h-2.5 rounded-full bg-[#17854A]"
                      style={{ width: `${(Number(score) / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <h3 className="mb-3 text-xl font-bold text-[#12305B]">Skills You Already Have</h3>
              <ul className="space-y-2 text-sm text-[#12305B]">
                <li>✓ Electrical Repair</li>
                <li>✓ Basic Wiring</li>
                <li>✓ Troubleshooting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <h3 className="mb-3 text-xl font-bold text-[#12305B]">Skills You Could Develop</h3>
              <ul className="space-y-2 text-sm text-[#12305B]">
                <li>→ Solar Installation</li>
                <li>→ Solar Maintenance</li>
                <li>→ Digital Tools</li>
              </ul>
              <Link to="/skills/gap" className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12305B]">
                View Skill Gap
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </GovernmentLayout>
  );
}
