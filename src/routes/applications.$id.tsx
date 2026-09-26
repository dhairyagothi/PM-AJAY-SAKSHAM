import { useParams } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export default function ApplicationDetailPage() {
  const { id = "unknown" } = useParams<{ id: string }>();

  return (
    <GovernmentLayout title="Application status" subtitle={`Review progress for ${id}`}>
      <Card className="border-[#D6DEE8] bg-white shadow-sm">
        <CardContent className="p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0B3A82]">Application</p>
          <h3 className="mt-3 text-2xl font-bold text-[#12305B]">Solar Technician</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#12305B]">
            <li>✓ Submitted on 10 July</li>
            <li>✓ Documents verified</li>
            <li>✓ Skill screening scheduled</li>
          </ul>
        </CardContent>
      </Card>
    </GovernmentLayout>
  );
}
