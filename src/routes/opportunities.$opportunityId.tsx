import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Clock3, GraduationCap, MapPin, Sun } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { opportunities } from "@/lib/mockData";

export default function OpportunityDetailPage() {
  const { opportunityId = "" } = useParams<{ opportunityId: string }>();
  const opportunity = opportunities.find((item) => item.id === opportunityId) ?? opportunities[0];

  if (!opportunity) {
    return (
      <GovernmentLayout
        title="Opportunity not found"
        subtitle="This opportunity may no longer be available."
      >
        <Link to="/opportunities" className="text-sm font-semibold text-[#0B3A82]">
          Back to opportunities
        </Link>
      </GovernmentLayout>
    );
  }

  return (
    <GovernmentLayout>
      <div className="space-y-3">
        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3A82]"
        >
          <ArrowLeft className="h-4 w-4" /> Opportunities
        </Link>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="flex gap-3 p-3 sm:p-4">
            <span className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-md bg-gradient-to-br from-[#8FC6F5] to-[#0B3A82] text-white">
              <Sun className="h-9 w-9" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h1 className="text-lg font-bold text-[#12305B]">{opportunity.title}</h1>
                <Badge className="bg-[#EEF8F1] text-[#17854A]">Prototype listing</Badge>
              </div>
              <div className="mt-2 space-y-1 text-sm text-[#52677F]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#0B3A82]" /> {opportunity.location}, Madhya
                  Pradesh
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#0B3A82]" /> {opportunity.type} ·{" "}
                  {opportunity.seats} seats
                </p>
                <p className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[#0B3A82]" /> {opportunity.pay}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full border-[7px] border-[#19A56B] text-xl font-bold text-[#12305B]">
              {opportunity.match.match(/\d+/)?.[0]}%
            </div>
            <div>
              <h2 className="font-bold text-[#17854A]">Your profile match</h2>
              <p className="mt-1 text-sm text-[#52677F]">
                Based on your skills, education, location and preferences.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#CDE8E4] bg-[#F6FCFB] shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <h2 className="font-bold text-[#12305B]">Your Profile Match</h2>
            <div className="mt-2 divide-y divide-[#DCEAE8] text-sm">
              <p className="flex items-center justify-between py-2">
                <span className="flex items-center gap-2 text-[#52677F]">
                  <Check className="h-4 w-4 text-[#17854A]" /> Skills match
                </span>
                <strong className="text-[#17854A]">3 / 5</strong>
              </p>
              <p className="flex items-center justify-between py-2">
                <span className="flex items-center gap-2 text-[#52677F]">
                  <Check className="h-4 w-4 text-[#17854A]" /> Education match
                </span>
                <strong className="text-[#17854A]">Yes</strong>
              </p>
              <p className="flex items-center justify-between py-2">
                <span className="flex items-center gap-2 text-[#52677F]">
                  <Check className="h-4 w-4 text-[#17854A]" /> Location match
                </span>
                <strong className="text-[#17854A]">{opportunity.location}</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F2D6D6] bg-[#FFF9F8] shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <h2 className="font-bold text-[#A33B32]">Skills to Develop</h2>
            <ul className="mt-2 space-y-2 text-sm text-[#5B6573]">
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full border-2 border-[#E57859]" /> Solar
                Installation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full border-2 border-[#E57859]" /> Solar
                Maintenance
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#C9DDF6] bg-[#F4F9FF] shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <h2 className="font-bold text-[#12305B]">Why Saksham recommends this</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-[#294968]">
              <li>✓ Matches your electrical experience</li>
              <li>✓ Available in your district</li>
              <li>✓ Matches your education</li>
              <li>△ 2 skills still need improvement</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#dbe7f2] bg-white shadow-sm">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3"><div><h2 className="font-bold text-[#12305B]">Application process</h2><p className="mt-1 text-sm text-[#52677F]">Follow these steps to apply for this prototype listing.</p></div><Badge className={opportunity.applicationMode === "online" ? "bg-[#EAF5FF] text-[#0B55A2]" : "bg-[#FFF4E6] text-[#A85B10]"}>{opportunity.applicationMode === "online" ? "Online process" : "Offline registration"}</Badge></div>
            <ol className="mt-4 space-y-3">{opportunity.applicationSteps.map((step, index) => <li key={step} className="flex gap-3 text-sm text-[#294968]"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0B55A2] text-xs font-bold text-white">{index + 1}</span><span>{step}</span></li>)}</ol>
            {opportunity.applicationMode === "offline" ? <div className="mt-4 rounded-xl bg-[#FFF9F1] p-3 text-sm text-[#7a4a16]"><strong>Where to go:</strong> {opportunity.applicationPlace}</div> : <div className="mt-4 rounded-xl bg-[#F4FBF6] p-3 text-sm text-[#087748]"><strong>Online link:</strong> Verify the official government URL before submitting documents.</div>}
          </CardContent>
        </Card>
        <p className="px-1 text-xs text-[#5B6573]">Prototype government data. Saksham explains the process, but does not submit an application or verify live government availability.</p>
        <div className="grid gap-2 sm:grid-cols-2">
          <Link
            to="/learning"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white"
          >
            Start Learning Path <ArrowRight className="h-4 w-4" />
          </Link>
          {opportunity.applicationMode === "online" ? <a href={opportunity.applicationUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-md border border-[#D6DEE8] bg-white px-4 py-3 text-sm font-semibold text-[#12305B]">Open official process</a> : <Link to="/profile" className="inline-flex w-full items-center justify-center rounded-md border border-[#D6DEE8] bg-white px-4 py-3 text-sm font-semibold text-[#12305B]">View registration location</Link>}
        </div>
      </div>
    </GovernmentLayout>
  );
}
