import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});

function QuizPage() {
  return (
    <GovernmentLayout title="Quiz" subtitle="Question 4 of 5">
      <Card className="border-[#D6DEE8] bg-white shadow-sm">
        <CardContent className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-[#12305B]">Which tool measures voltage?</h3>

          <div className="mt-5 space-y-3">
            <button className="w-full rounded-xl border border-[#D6DEE8] bg-white p-3 text-left text-[#12305B] hover:border-[#0B3A82]">A. Multimeter</button>
            <button className="w-full rounded-xl border border-[#D6DEE8] bg-white p-3 text-left text-[#12305B] hover:border-[#0B3A82]">B. Hammer</button>
            <button className="w-full rounded-xl border border-[#D6DEE8] bg-white p-3 text-left text-[#12305B] hover:border-[#0B3A82]">C. Screwdriver</button>
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="bg-[#17854A] hover:bg-[#12713d]">Submit</Button>
            <Link to="/learning" className="inline-flex items-center justify-center rounded-xl border border-[#D6DEE8] bg-white px-4 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]">
              Back to Learning
            </Link>
          </div>
        </CardContent>
      </Card>
    </GovernmentLayout>
  );
}
