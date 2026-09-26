import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export default function HelpPage() {
  return (
    <GovernmentLayout title="Help" subtitle="Support resources for beneficiaries and applicants.">
      <div className="space-y-4">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-[#12305B]">Need assistance?</h3>
            <p className="mt-2 text-sm text-[#5B6573]">Call the PM-AJAY support desk at 1800-XXX-XXXX or contact your local district office.</p>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <h3 className="text-lg font-bold text-[#12305B]">Common topics</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#12305B]">
              <li>• Application status</li>
              <li>• Skill training enrollment</li>
              <li>• Benefits and eligibility</li>
              <li>• Accessibility support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </GovernmentLayout>
  );
}
