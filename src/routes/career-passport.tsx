import { Award, BriefcaseBusiness, CheckCircle2, Download, GraduationCap, MapPin, Share2, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

import { GovernmentLayout } from "@/components/government-layout";
import { beneficiary, learningLessons } from "@/lib/mockData";

const completed = learningLessons.filter((lesson) => lesson.completed).length;
const progress = 72;

export default function CareerPassportPage() {
  return (
    <GovernmentLayout title="Career Passport" subtitle="A portable record of Ravi’s skills, learning, and applications.">
      <div className="space-y-5">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#073d80] via-[#0b55a2] to-[#168c57] p-5 text-white shadow-xl md:p-8"><div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border-[22px] border-white/10" /><div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">PM-AJAY SAKSHAM • Career Passport</p><h2 className="mt-2 text-3xl font-black">Ravi Kumar</h2><p className="mt-2 flex items-center gap-1 text-sm text-white/80"><MapPin className="h-4 w-4" /> {beneficiary.location}</p></div><div className="rounded-xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm"><p className="text-xs text-white/70">Unique Passport ID</p><p className="mt-1 text-xl font-black tracking-widest">PMAJ-RK-2026-4821</p><p className="mt-1 text-xs text-white/70">Prototype identity record</p></div></div></section>

        <div className="flex flex-wrap gap-3"><button type="button" className="inline-flex items-center gap-2 rounded-xl bg-[#0b55a2] px-4 py-3 text-sm font-bold text-white"><Download className="h-4 w-4" /> Download</button><button type="button" className="inline-flex items-center gap-2 rounded-xl border border-[#cfe2f5] bg-white px-4 py-3 text-sm font-bold text-[#0b55a2]"><Share2 className="h-4 w-4" /> Share passport</button></div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Profile progress", progress + "%", UserRound], ["Learning completed", completed + " / " + learningLessons.length, GraduationCap], ["Certificates", "03", Award], ["Applications", "02", BriefcaseBusiness]].map(([label, value, Icon]) => <div key={label as string} className="rounded-2xl border border-[#dbe7f2] bg-white p-4 shadow-sm"><Icon className="h-5 w-5 text-[#0b55a2]" /><p className="mt-3 text-xs text-[#6c88a7]">{label as string}</p><p className="mt-1 text-2xl font-black text-[#123d78]">{value as string}</p></div>)}</section>

        <div className="grid gap-5 lg:grid-cols-2"><section className="rounded-2xl border border-[#dbe7f2] bg-white p-5 shadow-sm"><h3 className="text-lg font-black text-[#123d78]">Education & skills</h3><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><p className="text-xs text-[#6c88a7]">Highest education</p><p className="mt-1 font-bold text-[#123d78]">{beneficiary.education}</p></div><div><p className="text-xs text-[#6c88a7]">Experience</p><p className="mt-1 font-bold text-[#123d78]">{beneficiary.experience}</p></div></div><div className="mt-5 flex flex-wrap gap-2">{["Basic Electrical", "Electrical Repair", "Troubleshooting", "Customer Handling"].map((skill) => <span key={skill} className="rounded-full bg-[#eaf5ff] px-3 py-2 text-xs font-bold text-[#0b55a2]">{skill}</span>)}</div></section><section className="rounded-2xl border border-[#dbe7f2] bg-white p-5 shadow-sm"><h3 className="text-lg font-black text-[#123d78]">Training & certificates</h3><div className="mt-4 space-y-3 text-sm">{["Electrical Safety • Completed", "Solar Basics • Completed", "Solar Technician • In progress"].map((item, index) => <div key={item} className="flex items-center gap-3"><CheckCircle2 className={"h-5 w-5 " + (index === 2 ? "text-[#0b55a2]" : "text-[#168c57]")} /><span className="font-semibold text-[#123d78]">{item}</span></div>)}</div><p className="mt-5 rounded-xl bg-[#f4fbf6] p-3 text-sm font-semibold text-[#087748]">Career progress: {progress}% complete</p></section></div>

        <section className="rounded-2xl border border-[#f2d4b0] bg-[#fff9f1] p-5 shadow-sm"><h3 className="text-lg font-black text-[#123d78]">Application history</h3><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-white p-4"><p className="font-bold text-[#123d78]">Solar Technician</p><p className="mt-1 text-xs text-[#087748]">Application submitted • Under review</p></div><div className="rounded-xl bg-white p-4"><p className="font-bold text-[#123d78]">Electrical Technician</p><p className="mt-1 text-xs text-[#ef8d29]">Documents pending</p></div></div></section>
        <Link to="/learning" className="inline-flex items-center justify-center rounded-xl bg-[#0b55a2] px-5 py-3 text-sm font-bold text-white">Continue building your passport</Link>
      </div>
    </GovernmentLayout>
  );
}

