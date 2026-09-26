import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { opportunities } from "@/lib/mockData";

export default function OpportunityDetailPage() {
  const { opportunityId = "" } = useParams<{ opportunityId: string }>();
  const opportunity = opportunities.find((item) => item.id === opportunityId) ?? opportunities[0];

  if (!opportunity) {
    return (
      <GovernmentLayout title="Opportunity not found" subtitle="This opportunity may no longer be available.">
        <Link to="/opportunities" className="text-sm font-semibold text-[#0B3A82]">Back to opportunities</Link>
      </GovernmentLayout>
    );
  }

  return (
    <GovernmentLayout title={opportunity.title} subtitle="Opportunity details and recommendation insight.">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/opportunities" className="text-sm font-semibold text-[#0B3A82]">← Back</Link>
          <Badge className="bg-[#EEF8F1] text-[#17854A]">{opportunity.match}</Badge>
        </div>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5 sm:p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#5B6573]">Opportunity</p>
                <h2 className="mt-2 text-3xl font-bold text-[#12305B]">{opportunity.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-[#0B3A82]">{opportunity.location}</span>
                  <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-[#0B3A82]">{opportunity.pay}</span>
                  <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-[#0B3A82]">{opportunity.seats} seats</span>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F8FAFC] p-4">
                <p className="text-sm text-[#5B6573]">Why Saksham recommends this</p>
                <ul className="mt-3 space-y-2 text-sm text-[#12305B]">
                  <li>✓ Matches your electrical experience</li>
                  <li>✓ Available in your district</li>
                  <li>✓ Fits your education level</li>
                  <li>✓ Only 2 skills need improvement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <h3 className="mb-3 text-xl font-bold text-[#12305B]">Your Skill Gap</h3>
              <div className="space-y-3 text-sm">
                <div className="rounded-xl bg-[#EEF8F1] p-3 text-[#17854A]">✓ Basic Wiring</div>
                <div className="rounded-xl bg-[#EEF8F1] p-3 text-[#17854A]">✓ Electrical Repair</div>
                <div className="rounded-xl bg-[#F8FAFC] p-3 text-[#5B6573]">✕ Solar Installation</div>
                <div className="rounded-xl bg-[#F8FAFC] p-3 text-[#5B6573]">✕ Solar Maintenance</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <h3 className="mb-3 text-xl font-bold text-[#12305B]">Recommended Learning</h3>
              <ul className="space-y-2 text-sm text-[#12305B]">
                <li>1. Electrical Safety</li>
                <li>2. Solar Basics</li>
                <li>3. Installation</li>
              </ul>

              <div className="mt-5 space-y-2">
                <Link to="/learning" className="inline-flex w-full items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12305B]">
                  Start Learning
                </Link>
                <a href={opportunity.applicationUrl} className="inline-flex w-full items-center justify-center rounded-xl border border-[#D6DEE8] bg-white px-4 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]">
                  View Official Application
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </GovernmentLayout>
  );
}
