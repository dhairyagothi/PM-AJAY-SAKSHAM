import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSakshamStore } from "@/store/useSakshamStore";

const prompts = [
  "What kind of work are you interested in?",
  "What is your highest education?",
  "What work or skills do you already have?",
  "Where do you live?",
  "How far can you travel for work?",
  "How much time can you spend learning each week?",
];

const options = [
  ["Government Job", "Private Job", "Self Employment", "Skill Training", "Not Sure"],
  ["Class 8", "Class 10", "Class 12", "ITI / Diploma", "Graduate"],
  ["Basic Wiring", "Electrical Repair", "Troubleshooting", "Machine Handling", "Digital Skills"],
  ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Maharashtra"],
  ["Up to 10 km", "Up to 25 km", "Up to 50 km", "Can travel for training"],
  ["2 hours/week", "4 hours/week", "6 hours/week", "Flexible"],
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const { guide } = useSakshamStore();
  const navigate = useNavigate();
  const nextStep = () => step < prompts.length - 1 ? setStep((current) => current + 1) : navigate("/home");

  return (
    <div className="patriotic-page min-h-screen px-4 py-5 text-[#14365f] md:py-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-5 flex items-center justify-between"><img src="/goi.png" alt="Government of India" className="h-12 w-auto md:h-16" /><span className="rounded-full bg-[#eaf5ff] px-3 py-1 text-xs font-bold text-[#0b55a2]">Prototype • PM-AJAY SAKSHAM</span></header>
        <div className="grid overflow-hidden rounded-3xl border border-[#cfe2f5] bg-white shadow-xl md:grid-cols-[0.75fr_1.25fr]">
          <aside className="bg-gradient-to-br from-[#eaf5ff] to-[#f7fbff] p-5 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0b55a2]">Your Saathi</p>
            <h1 className="mt-2 text-2xl font-black text-[#123d78]">Let’s understand your goals</h1>
            <div className="mt-5 flex items-end justify-center"><img src={guide === "sakhi" ? "/female-mascot.png" : "/male-mascot.png"} alt={guide === "sakhi" ? "Sakhi" : "Saksham"} className="h-52 w-auto object-contain motion-float md:h-64" /></div>
            <p className="text-center text-lg font-bold text-[#123d78]">{guide === "sakhi" ? "Sakhi" : "Saksham"}</p><p className="mt-1 text-center text-sm text-[#527092]">Your career and learning guide</p>
          </aside>
          <main className="p-5 md:p-8">
            <div className="flex items-center justify-between"><div><p className="text-sm font-bold text-[#0b55a2]">Step {step + 1} of {prompts.length}</p><h2 className="mt-1 text-xl font-black text-[#123d78] md:text-2xl">{prompts[step]}</h2></div><span className="text-sm font-bold text-[#527092]">{Math.round(((step + 1) / prompts.length) * 100)}%</span></div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e4eef8]"><div className="h-full rounded-full bg-gradient-to-r from-[#ef8d29] via-[#0b8d58] to-[#0b55a2] transition-all duration-500" style={{ width: ((step + 1) / prompts.length) * 100 + "%" }} /></div>
            <div className="mt-7 grid gap-3">{options[step].map((item) => <button key={item} type="button" onClick={nextStep} className="flex items-center justify-between rounded-2xl border border-[#dbe7f2] bg-white p-4 text-left font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-[#0b55a2] hover:bg-[#f5faff]">{item}<span className="grid h-6 w-6 place-items-center rounded-full border border-[#c7d9eb]"><Check className="h-3.5 w-3.5 text-transparent" /></span></button>)}</div>
            <div className="mt-7 flex items-center justify-between"><button type="button" onClick={() => setStep((current) => Math.max(current - 1, 0))} className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-bold text-[#527092]"><ArrowLeft className="h-4 w-4" /> Back</button><button type="button" onClick={nextStep} className="inline-flex items-center gap-2 rounded-xl bg-[#0b55a2] px-5 py-3 text-sm font-bold text-white shadow-md">Continue <ArrowRight className="h-4 w-4" /></button></div>
          </main>
        </div>
      </div>
    </div>
  );
}
