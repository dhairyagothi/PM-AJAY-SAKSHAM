import { Link, createFileRoute } from "@tanstack/react-router";
import { Mic } from "lucide-react";

export const Route = createFileRoute("/")({
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#EEF5FC] text-[#1F2937]">
      <header className="bg-[#0B3A82] text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-[10px] font-bold tracking-[0.2em]">
            GOI
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Government of India</p>
            <p className="text-sm font-semibold">Ministry of Social Justice & Empowerment</p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12 text-center">
        <img
          src="/logo.png"
          alt="PM-AJAY Saksham: AI Career and Learning Assistant"
          className="mb-6 h-auto w-full max-w-[22rem] rounded-md bg-white"
        />
        <p className="max-w-2xl text-lg text-[#5B6573]">
          India’s Beneficiaries’ Saathi, Turning Aspirations into Opportunities.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/language" className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-6 py-4 text-base font-semibold text-white hover:bg-[#12305B]">
            Start My Journey
          </Link>
          <Link to="/login" className="inline-flex items-center justify-center rounded-xl border border-[#D6DEE8] bg-white px-6 py-4 text-base font-semibold text-[#12305B] hover:bg-[#EEF5FC]">
            I already have a profile
          </Link>
        </div>

        <Link to="/voice" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D6DEE8] bg-white px-6 py-4 text-base font-semibold text-[#0B3A82] hover:bg-[#EEF5FC]">
          <Mic className="h-4 w-4" /> Talk to Saksham
        </Link>

        <div className="mt-8 text-sm text-[#5B6573]">Available in: English | हिन्दी</div>
      </main>
    </div>
  );
}
