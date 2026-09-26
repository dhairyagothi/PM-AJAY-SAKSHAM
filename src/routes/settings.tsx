import { createFileRoute } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <GovernmentLayout title="Settings" subtitle="Adjust language, alerts, and how the app works for you.">
      <div className="space-y-4">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#12305B]">Language</span>
              <span className="text-sm text-[#5B6573]">English</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#12305B]">SMS Alerts</span>
              <span className="text-sm text-[#17854A]">Enabled</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </GovernmentLayout>
  );
}
