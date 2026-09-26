import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { GovernmentLayout } from "@/components/government-layout";

export default function LessonPage() {
  return (
    <GovernmentLayout title="Lesson 3 of 7" subtitle="Electrical Safety">
      <div className="rounded-3xl border border-[#D6DEE8] bg-white p-5 shadow-sm">
        <div className="mb-4 rounded-2xl bg-[#EEF5FC] p-6 text-center text-[#12305B]">
          <p className="text-lg font-bold">“Always switch off the power before working on the circuit.”</p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-[#5B6573]">Choose the safest first step:</p>
          <div className="grid gap-3">
            <button className="rounded-xl border border-[#D6DEE8] bg-white p-3 text-left text-[#12305B] hover:border-[#0B3A82]">Switch off power</button>
            <button className="rounded-xl border border-[#D6DEE8] bg-white p-3 text-left text-[#12305B] hover:border-[#0B3A82]">Start repair</button>
            <button className="rounded-xl border border-[#D6DEE8] bg-white p-3 text-left text-[#12305B] hover:border-[#0B3A82]">Test afterward</button>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button className="bg-[#0B3A82] hover:bg-[#12305B]">Check Answer</Button>
          <Link to="/learning" className="inline-flex items-center justify-center rounded-xl border border-[#D6DEE8] bg-white px-4 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]">
            Back to Modules
          </Link>
        </div>
      </div>
    </GovernmentLayout>
  );
}
