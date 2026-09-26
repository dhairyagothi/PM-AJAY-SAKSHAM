import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { opportunities } from "@/lib/mockData";

export default function OpportunitiesPage() {
  return (
    <GovernmentLayout title="Opportunities" subtitle="Recommended for you by PM-AJAY SAKSHAM.">
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          "For You",
          "Jobs",
          "Courses",
          "Schemes",
          "Training",
        ].map((tab) => (
          <button
            key={tab}
            className="rounded-full border border-[#D6DEE8] bg-white px-4 py-2 text-sm font-medium text-[#12305B] hover:border-[#0B3A82]"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {opportunities.map((item) => (
          <Card key={item.id} className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xl font-bold text-[#12305B]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#5B6573]">{item.location} • {item.state}</p>
                </div>
                <Badge className="bg-[#EEF8F1] text-[#17854A]">{item.match}</Badge>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-[#0B3A82]">{item.pay}</span>
                <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-[#0B3A82]">{item.type}</span>
                <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-[#0B3A82]">{item.seats} seats</span>
              </div>

              <p className="mt-4 text-sm text-[#5B6573]">{item.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-[#D6DEE8] px-2 py-1 text-xs text-[#12305B]">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Link
                  to={`/opportunities/${item.id}`}
                  className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12305B]"
                >
                  View
                </Link>
                <button className="inline-flex items-center justify-center rounded-xl border border-[#D6DEE8] bg-white px-4 py-2 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]">
                  Save
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </GovernmentLayout>
  );
}
