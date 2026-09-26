import { createFileRoute, Link } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export const Route = createFileRoute("/applications")({
  component: ApplicationsPage,
});

function ApplicationsPage() {
  const applications = [
    { id: "APP-1042", title: "Solar Technician", status: "Under review" },
    { id: "APP-2041", title: "Electrician Helper", status: "Shortlisted" },
  ];

  return (
    <GovernmentLayout title="Applications" subtitle="Your submitted and active applications.">
      <div className="space-y-4">
        {applications.map((item) => (
          <Card key={item.id} className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="flex items-center justify-between gap-3 p-5">
              <div>
                <p className="text-lg font-bold text-[#12305B]">{item.title}</p>
                <p className="text-sm text-[#5B6573]">Application ID: {item.id}</p>
              </div>
              <span className="rounded-full bg-[#EEF8F1] px-3 py-1 text-xs font-semibold text-[#17854A]">{item.status}</span>
            </CardContent>
          </Card>
        ))}

        <div className="pt-2">
          <Link to="/opportunities" className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12305B]">
            Explore more opportunities
          </Link>
        </div>
      </div>
    </GovernmentLayout>
  );
}
