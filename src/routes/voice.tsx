import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/voice")({
  component: VoicePage,
});

function VoicePage() {
  return (
    <div className="min-h-screen bg-[#EEF5FC] p-4 py-8">
      <div className="mx-auto max-w-md rounded-2xl border border-[#D6DEE8] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#D6DEE8] pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Incoming call</p>
            <h2 className="mt-1 text-xl font-bold text-[#12305B]">PM-AJAY SAKSHAM</h2>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF8F1] text-[#17854A]">
            <Mic className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/home" className="inline-flex w-full items-center justify-center rounded-xl bg-[#17854A] px-4 py-3 text-base font-semibold text-white hover:bg-[#12713d]">
            Accept Call
          </Link>
        </div>

        <div className="mt-8 rounded-xl bg-[#EEF5FC] p-4 text-center text-[#12305B]">
          “Namaste. I am Saksham...”
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
          {[
            "1 Government Job",
            "2 Training",
            "3 Self Employment",
            "4 Speak to Saksham",
          ].map((item) => (
            <button key={item} className="rounded-lg border border-[#D6DEE8] bg-white p-3 text-left hover:border-[#0B3A82]">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
