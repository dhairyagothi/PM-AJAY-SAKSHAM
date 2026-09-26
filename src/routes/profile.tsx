import { BriefcaseBusiness, GraduationCap, MapPin, Pencil, Phone, Sparkles, UserRound } from "lucide-react";

import LocationAccess from "@/components/location-access";
import { GovernmentLayout } from "@/components/government-layout";
import { beneficiary } from "@/lib/mockData";

const skills = ["Basic Electrical", "Electrical Repair", "Troubleshooting", "Customer Handling"];
const interests = ["Renewable Energy", "Technical Work", "Government Opportunities"];

export default function ProfilePage() {
  return (
    <GovernmentLayout title="My Profile" subtitle="Your beneficiary details, preferences, and career readiness.">
      <div className="space-y-5">
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#073d80] to-[#0b69b7] p-5 text-white shadow-lg md:p-7"><div className="absolute -right-12 -top-16 h-40 w-40 rounded-full border-[18px] border-white/10" /><div className="relative flex items-center gap-4"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/15"><UserRound className="h-8 w-8" /></span><div><p className="text-xs uppercase tracking-[0.18em] text-white/70">Beneficiary profile</p><h2 className="mt-1 text-2xl font-black">{beneficiary.name} Kumar</h2><p className="mt-1 flex items-center gap-1 text-sm text-white/80"><MapPin className="h-4 w-4" /> {beneficiary.location}</p></div><button type="button" className="ml-auto rounded-lg bg-white/15 p-2" aria-label="Edit profile"><Pencil className="h-4 w-4" /></button></div></section>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <section className="rounded-2xl border border-[#dbe7f2] bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><h3 className="text-lg font-black text-[#123d78]">Personal details</h3><span className="rounded-full bg-[#e9f8f0] px-3 py-1 text-xs font-bold text-[#087748]">Verified demo</span></div><div className="mt-5 grid gap-4 sm:grid-cols-2"><div><p className="text-xs text-[#6c88a7]">Full name</p><p className="mt-1 font-bold text-[#123d78]">Ravi Kumar</p></div><div><p className="text-xs text-[#6c88a7]">Age</p><p className="mt-1 font-bold text-[#123d78]">{beneficiary.age} years</p></div><div><p className="text-xs text-[#6c88a7]">Education</p><p className="mt-1 font-bold text-[#123d78]">{beneficiary.education}</p></div><div><p className="text-xs text-[#6c88a7]">Experience</p><p className="mt-1 font-bold text-[#123d78]">{beneficiary.experience}</p></div><div><p className="text-xs text-[#6c88a7]">Mobile</p><p className="mt-1 flex items-center gap-1 font-bold text-[#123d78]"><Phone className="h-4 w-4 text-[#0b55a2]" /> +91 98765 43210</p></div><div><p className="text-xs text-[#6c88a7]">State / District</p><p className="mt-1 font-bold text-[#123d78]">{beneficiary.state} / {beneficiary.district}</p></div></div></section>
          <LocationAccess />
        </div>

        <div className="grid gap-5 md:grid-cols-2"><section className="rounded-2xl border border-[#dbe7f2] bg-white p-5 shadow-sm"><h3 className="flex items-center gap-2 text-lg font-black text-[#123d78]"><Sparkles className="h-5 w-5 text-[#ef8d29]" /> Skills</h3><div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full bg-[#eaf5ff] px-3 py-2 text-xs font-bold text-[#0b55a2]">{skill}</span>)}</div></section><section className="rounded-2xl border border-[#dbe7f2] bg-white p-5 shadow-sm"><h3 className="flex items-center gap-2 text-lg font-black text-[#123d78]"><BriefcaseBusiness className="h-5 w-5 text-[#0b55a2]" /> Career preferences</h3><p className="mt-4 text-sm text-[#6c88a7]">Preferred sector</p><p className="font-bold text-[#123d78]">{beneficiary.preferredSector}</p><div className="mt-3 flex flex-wrap gap-2">{interests.map((item) => <span key={item} className="rounded-full border border-[#cfe2f5] px-3 py-1.5 text-xs font-semibold text-[#527092]">{item}</span>)}</div></section></div>
        <section className="rounded-2xl border border-[#dbe7f2] bg-white p-5 shadow-sm"><h3 className="text-lg font-black text-[#123d78]">Past work</h3><div className="mt-4 border-l-2 border-[#b9d9f6] pl-4"><p className="font-bold text-[#123d78]">Electrical Assistant • Bhopal Electrical Works</p><p className="mt-1 text-xs font-semibold text-[#0b55a2]">2024 – 2026 • Bhopal</p><p className="mt-2 text-sm text-[#527092]">Supported wiring, repair, safety checks, and customer visits for residential installations.</p></div></section>
        <section className="rounded-2xl border border-[#cde8d8] bg-[#f4fbf6] p-5 shadow-sm"><h3 className="flex items-center gap-2 text-lg font-black text-[#087748]"><GraduationCap className="h-5 w-5" /> Career readiness</h3><div className="mt-4 flex items-center gap-3"><div className="h-3 flex-1 overflow-hidden rounded-full bg-[#d5eadb]"><div className="h-full w-[72%] rounded-full bg-[#168c57]" /></div><b className="text-[#087748]">72%</b></div><p className="mt-2 text-sm text-[#527092]">You are 2 skills away from 4 opportunities in your district.</p></section>
      </div>
    </GovernmentLayout>
  );
}
