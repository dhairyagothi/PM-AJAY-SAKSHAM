import { createFileRoute } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { beneficiary } from "@/lib/mockData";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <GovernmentLayout title="Profile" subtitle="Your beneficiary information and preferences.">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0B3A82]">Personal</p>
            <h3 className="mt-3 text-2xl font-bold text-[#12305B]">{beneficiary.name}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#12305B]">
              <li>Education: {beneficiary.education}</li>
              <li>Location: {beneficiary.location}</li>
              <li>Experience: {beneficiary.experience}</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0B3A82]">Preferences</p>
            <ul className="mt-4 space-y-2 text-sm text-[#12305B]">
              <li>Preferred sector: {beneficiary.preferredSector}</li>
              <li>State: {beneficiary.state}</li>
              <li>District: {beneficiary.district}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </GovernmentLayout>
  );
}
