import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, FileText, MapPin, Mic, Search, ShieldCheck, Target, UserRound } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { GovernmentLayout } from "@/components/government-layout";
import LocationAccess from "@/components/location-access";
import { beneficiary, opportunities } from "@/lib/mockData";

const quickActions = [
  { label: "Find\nOpportunities", icon: Search, to: "/opportunities" },
  { label: "My\nLearning", icon: BookOpen, to: "/learning" },
  { label: "Career\nPassport", icon: FileText, to: "/career-passport" },
];

export default function HomePage() {
  const recommended = opportunities[0];
  return (
    <GovernmentLayout>
      <div className="space-y-5">
        <section className="relative flex min-h-[112px] items-center overflow-hidden rounded-xl border border-[#d4e4f5] bg-gradient-to-r from-[#eaf5ff] via-[#f5fbff] to-[#fff] px-5 py-4 shadow-sm md:px-7">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#d5eaff] text-[#0b3a82] md:h-20 md:w-20"><UserRound className="h-11 w-11" /></div>
          <div className="ml-4"><p className="text-xl font-bold text-[#12305b] md:text-2xl">Namaste, Ravi Kumar</p><p className="mt-1 text-sm text-[#41618b]">Welcome to your career journey!</p></div>
          <div className="absolute -bottom-10 right-0 h-20 w-40 rotate-[-8deg] border-t-4 border-[#ef8d29]" /><div className="absolute -bottom-12 right-[-15px] h-20 w-44 rotate-[-8deg] border-t-4 border-[#168c57]" />
        </section>

        <Link to="/voice" className="group relative flex min-h-[174px] flex-col items-center justify-center rounded-xl border border-[#c8dcf4] bg-white p-5 text-center shadow-sm transition hover:border-[#74a9dd] md:min-h-[190px]">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#1261c5] text-white shadow-[0_0_0_5px_#e0edff]"><Mic className="h-10 w-10" /></span>
          <span className="mt-4 text-2xl font-bold text-[#12305b]">Talk to Saksham</span><span className="mt-1 text-sm text-[#52677f]">Speak, Ask, Get Guidance</span>
          <span className="absolute bottom-6 right-6 grid h-7 w-7 place-items-center rounded-full bg-[#0b55b7] text-white"><ArrowRight className="h-4 w-4" /></span>
        </Link>

        <section className="rounded-xl border border-[#cde8d8] bg-[#f7fcf8] p-4 shadow-sm md:p-5">
          <div className="flex items-center gap-2 text-[#087748]"><Target className="h-5 w-5" /><h2 className="font-bold">Your Next Step</h2></div>
          <p className="mt-3 text-lg font-bold text-[#12305b]">Complete Solar Installation Lesson 2</p>
          <div className="mt-3 flex items-center gap-3"><Progress value={62} className="h-2.5 flex-1" /><span className="text-sm font-bold text-[#087748]">62%</span></div>
          <Link to="/learning/solar-path/lesson/lesson-3" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#0b3a82]">Continue learning <ArrowRight className="h-4 w-4" /></Link>
        </section>

        <section>
          <div className="mb-2 flex items-center justify-between"><h2 className="text-lg font-bold text-[#12305b]">Quick Actions</h2><Link to="/opportunities" className="text-sm font-semibold text-[#0b55b7]">View All</Link></div>
          <div className="grid grid-cols-3 gap-2.5">{quickActions.map(({ label, icon: Icon, to }) => <Link key={to} to={to} className="flex min-h-[104px] flex-col items-center justify-center gap-2 rounded-lg border border-[#c8dcf4] bg-white p-2 text-center text-sm font-semibold text-[#12305b] shadow-sm"><Icon className="h-7 w-7 text-[#0b55b7]" /><span className="whitespace-pre-line">{label}</span></Link>)}</div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Link to={recommended ? "/opportunities/" + recommended.id : "/opportunities"} className="rounded-xl border border-[#d6e2ef] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3"><div className="grid h-16 w-16 place-items-center rounded-lg bg-[#dcecff]"><Briefcase className="h-8 w-8 text-[#0b55b7]" /></div><div><p className="text-xs font-semibold uppercase tracking-wide text-[#087748]">Recommended for you</p><h3 className="text-lg font-bold text-[#12305b]">{recommended?.title ?? "Solar Technician"}</h3><p className="flex items-center gap-1 text-sm text-[#5b6573]"><MapPin className="h-4 w-4" /> Bhopal, Madhya Pradesh</p></div></div>
            <div className="mt-4 flex items-center justify-between"><span className="rounded-full bg-[#dff5e9] px-3 py-1 text-sm font-bold text-[#087748]">88% Match</span><span className="text-sm font-semibold text-[#0b3a82]">View details <ArrowRight className="inline h-4 w-4" /></span></div>
          </Link>
          <Link to="/learning" className="rounded-xl border border-[#d6e2ef] bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><BookOpen className="h-6 w-6 text-[#0b55b7]" /><h3 className="text-lg font-bold text-[#12305b]">Continue Learning</h3></div><span className="text-sm font-bold text-[#0b3a82]">62% Complete</span></div><p className="mt-4 font-bold text-[#12305b]">Solar Technician</p><Progress value={62} className="mt-3 h-2.5" /><p className="mt-3 text-sm text-[#5b6573]">3 of 5 lessons completed</p></Link>
        </section>

        <LocationAccess />

        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#eef6ff] to-white p-4 text-sm font-semibold text-[#0b3a82]"><ShieldCheck className="h-8 w-8 shrink-0" /> Your skills. Your opportunities. Your next step.</div>
        <p className="text-xs text-[#5b6573]">Profile location: {beneficiary.location}</p>
      </div>
    </GovernmentLayout>
  );
}
