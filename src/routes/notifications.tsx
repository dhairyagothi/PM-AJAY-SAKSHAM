import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { notifications } from "@/lib/mockData";

export default function NotificationsPage() {
  return (
    <GovernmentLayout title="Notifications" subtitle="Updates from PM-AJAY SAKSHAM and your training partners.">
      <div className="space-y-4">
        {notifications.map((item) => (
          <Card key={item.title} className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <p className="text-lg font-bold text-[#12305B]">{item.title}</p>
              <p className="mt-2 text-sm text-[#5B6573]">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </GovernmentLayout>
  );
}
