import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

function OnboardingPage() {
  const [step, setStep] = useState(0);

  const prompts = [
    "Namaste! I’m Saksham. What kind of work are you interested in?",
    "What is your highest education?",
    "What work or skills do you already have?",
    "Where do you live?",
    "How far can you travel for work?",
    "How much time can you spend learning each week?",
  ];

  const options = [
    ["Government Job", "Private Job", "Self Employment", "Skill Training", "Not Sure"],
    ["Class 8", "Class 10", "Class 12", "ITI/Diploma", "Graduate"],
    ["Basic Wiring", "Electrical Repair", "Troubleshooting", "Machine Handling", "Digital Skills"],
    ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Maharashtra"],
    ["Up to 10 km", "Up to 25 km", "Up to 50 km", "Can travel for training"],
    ["2 hours/week", "4 hours/week", "6 hours/week", "Flexible"],
  ];

  const nextStep = () => {
    if (step < prompts.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    window.location.assign("/home");
  };

  return (
    <div className="min-h-screen bg-[#EEF5FC] p-4 py-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#D6DEE8] bg-white p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Onboarding</p>
            <h2 className="mt-1 text-2xl font-bold text-[#12305B]">Let’s get to know you</h2>
          </div>
          <Badge className="bg-[#EEF8F1] text-[#17854A]">Step {step + 1}/6</Badge>
        </div>

        <div className="rounded-xl bg-[#EEF5FC] p-5 text-lg font-semibold text-[#12305B]">{prompts[step]}</div>

        <div className="mt-6 grid gap-3">
          {options[step]?.map((item) => (
            <button
              key={item}
              className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]"
              onClick={nextStep}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setStep((current) => Math.max(current - 1, 0))}>Back</Button>
          <Link to="/home" className="rounded-xl bg-[#0B3A82] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12305B]">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
