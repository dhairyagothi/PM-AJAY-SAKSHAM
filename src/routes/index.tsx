import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  Home,
  MapPin,
  Mic,
  UserRound,
  Volume2,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PM-AJAY SAKSHAM — Ravi's Dashboard" },
      { name: "description", content: "Ravi's personalized PM-AJAY SAKSHAM dashboard for learning, skills, and local employment opportunities." },
      { property: "og:title", content: "PM-AJAY SAKSHAM — Ravi's Dashboard" },
      { property: "og:description", content: "A personalized PM-AJAY dashboard connecting learning progress to local employment opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navItems = ["Dashboard", "My Learning", "Opportunities", "Certificates", "Help"];
const mobileItems = [
  { label: "Home", icon: Home },
  { label: "Learn", icon: BookOpen },
  { label: "Jobs", icon: MapPin },
  { label: "Profile", icon: UserRound },
];
const reasons = [
  "Matches your Basic Wiring & Troubleshooting skills",
  "2 years appliance repair experience counts",
  "12 km from your home in Bhopal",
];
const newOpportunities = ["EV Charger Assistant", "Panel Wiring Helper", "AC Service Trainee"];

function Index() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [lessonProgress, setLessonProgress] = useState(80);

  const handleLesson = () => {
    setActiveSection("My Learning");
    setLessonProgress((current) => Math.min(current + 5, 100));
  };

  return (
    <div className="min-h-screen bg-light-blue font-civic text-ink">
      <header className="bg-gov-blue text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4">
          <div className="grid size-11 shrink-0 place-items-center rounded-md bg-primary-foreground/10 text-center text-[9px] font-bold leading-tight tracking-widest">GOI</div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/70">Government of India</p>
            <p className="truncate text-sm font-bold sm:text-base">Ministry of Social Justice &amp; Empowerment</p>
          </div>
          <div className="ml-auto hidden shrink-0 items-center gap-2 text-[11px] text-primary-foreground/80 sm:flex">
            <Button variant="ghost" size="sm" className="h-8 px-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">हिं</Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">EN</Button>
          </div>
        </div>
      </header>

      <div className="bg-deep-navy text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex">
          <div className="min-w-0">
            <p className="truncate text-lg font-bold tracking-tight">PM-AJAY <span className="text-saffron">SAKSHAM</span></p>
            <p className="hidden text-xs text-primary-foreground/60 sm:block">Skill, Safety &amp; Employment for Every Citizen</p>
          </div>
          <p className="shrink-0 text-xs text-primary-foreground/70">Ravi Kumar · Bhopal</p>
        </div>
      </div>

      <nav className="border-b border-border bg-card" aria-label="Main navigation">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
          {navItems.map((item) => (
            <Button key={item} variant="ghost" onClick={() => setActiveSection(item)} className={`shrink-0 rounded-none border-b-2 px-3 py-3 text-sm ${activeSection === item ? "border-saffron font-bold text-gov-blue" : "border-transparent text-ink/70 hover:border-border hover:text-gov-blue"}`}>
              {item}
            </Button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-6 pb-32">
        <div className="civic-rise mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.15em] text-civic-green">Welcome back</p>
            <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">Namaste, Ravi</h1>
          </div>
          <p className="hidden shrink-0 text-xs text-ink/60 sm:block">Tuesday, 14 May 2025</p>
        </div>

        <section className="civic-rise mb-5 rounded-lg bg-card p-5 shadow-sm ring-1 ring-foreground/5 sm:p-6" style={{ animationDelay: "60ms" }}>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-saffron">Your Next Best Step</span>
            <span className="ml-auto text-xs text-ink/50">Due in 2 days</span>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold tracking-tight">Electrical Safety — Lesson 3</h2>
              <p className="mt-1 text-sm text-ink/70">Grounding &amp; safe handling of live circuits. Complete to unlock your Electrical Safety certificate.</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-light-blue" aria-label={`Lesson progress ${lessonProgress}%`}>
                  <div className="civic-fill h-full rounded-full bg-civic-green" style={{ width: `${lessonProgress}%` }} />
                </div>
                <span className="text-sm font-bold text-civic-green">{lessonProgress}%</span>
              </div>
            </div>
            <Button onClick={handleLesson} className="shrink-0 bg-civic-green px-6 py-3 font-bold text-primary-foreground shadow-none hover:bg-deep-navy">Resume Lesson <ArrowRight /></Button>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <section className="civic-rise rounded-lg bg-card p-5 shadow-sm ring-1 ring-foreground/5 lg:col-span-2" style={{ animationDelay: "120ms" }}>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-gov-blue">Recommended Opportunity</span>
              <span className="ml-auto flex shrink-0 items-center gap-1 text-xs text-ink/50"><MapPin className="size-3" /> Bhopal, MP</span>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">Solar Technician</h3>
                    <p className="mt-1 text-sm text-ink/70">Field installation &amp; maintenance · Full-time · ₹18,000/mo</p>
                  </div>
                  <span className="shrink-0 rounded-md bg-light-green px-2 py-1 text-xs font-bold text-civic-green">Strong match</span>
                </div>
                <div className="mt-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-civic-green">Why this is for you</p>
                  <ul className="space-y-2 text-sm">{reasons.map((reason) => <li key={reason} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-civic-green" /> <span>{reason}</span></li>)}</ul>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:w-40">
                <Button onClick={() => setActiveSection("Opportunities")} className="bg-gov-blue px-4 py-3 text-sm font-bold shadow-none hover:bg-deep-navy">Apply Now</Button>
                <Button variant="outline" onClick={() => setActiveSection("Opportunities")} className="border-light-blue bg-light-blue px-4 py-3 text-sm font-bold text-gov-blue hover:bg-border">View Details</Button>
              </div>
            </div>
          </section>

          <section className="civic-rise rounded-lg bg-card p-5 shadow-sm ring-1 ring-foreground/5" style={{ animationDelay: "180ms" }}>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-gov-blue">Your Progress</span>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-light-green py-3"><p className="text-2xl font-bold text-civic-green">12</p><p className="text-[11px] text-ink/60">Lessons</p></div>
              <div className="rounded-md bg-light-blue py-3"><p className="text-2xl font-bold text-gov-blue">3</p><p className="text-[11px] text-ink/60">Certificates</p></div>
              <div className="rounded-md bg-light-green py-3"><p className="text-2xl font-bold text-civic-green">80%</p><p className="text-[11px] text-ink/60">Goal</p></div>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-ink/60">New Opportunities</p>
              <ul className="divide-y divide-border">{newOpportunities.map((item) => <li key={item} className="flex items-center justify-between py-2 text-sm"><span>{item}</span><span className="text-xs font-bold text-saffron">New</span></li>)}</ul>
            </div>
          </section>
        </div>

        <section className="mt-5 grid gap-4 sm:grid-cols-3">
          {[{ title: "My skills", detail: "3 verified skills", icon: Check }, { title: "Career Passport", detail: "Profile updated today", icon: UserRound }, { title: "Notifications", detail: "3 new opportunity alerts", icon: Bell }].map(({ title, detail, icon: Icon }) => (
            <Button key={title} variant="outline" onClick={() => setActiveSection(title)} className="h-auto justify-between rounded-lg bg-card px-4 py-4 text-left shadow-sm hover:bg-light-blue"><span><span className="block text-sm font-bold text-gov-blue">{title}</span><span className="mt-1 block text-xs text-ink/60">{detail}</span></span><ChevronRight className="text-civic-green" /></Button>
          ))}
        </section>
      </main>

      <div className="fixed bottom-24 left-1/2 z-20 -translate-x-1/2">
        <Button onClick={() => setAssistantOpen(true)} className="civic-pulse flex h-auto items-center gap-2 rounded-full bg-saffron px-6 py-4 text-sm font-bold text-primary-foreground shadow-sm hover:bg-deep-navy"><Mic className="size-4" /> Talk to Saksham</Button>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-card sm:hidden" aria-label="Mobile navigation">
        <div className="mx-auto grid max-w-6xl grid-cols-4">{mobileItems.map(({ label, icon: Icon }) => <Button key={label} variant="ghost" onClick={() => setActiveSection(label)} className={`h-auto flex-col gap-1 rounded-none py-3 text-[11px] ${activeSection === label || (label === "Home" && activeSection === "Dashboard") ? "border-t-2 border-saffron font-bold text-gov-blue" : "border-t-2 border-transparent text-ink/60"}`}><Icon className="size-4" />{label}</Button>)}</div>
      </nav>

      {assistantOpen && <div className="fixed inset-0 z-30 grid place-items-end bg-deep-navy/25 p-4 sm:place-items-center"><section className="w-full max-w-md rounded-lg bg-card p-5 shadow-xl ring-1 ring-foreground/10" role="dialog" aria-modal="true" aria-labelledby="assistant-title">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-saffron">Saksham Assistant</p><h2 id="assistant-title" className="mt-1 text-xl font-bold text-gov-blue">How can I help today?</h2></div><Button variant="ghost" size="icon" onClick={() => setAssistantOpen(false)} aria-label="Close Saksham assistant"><X /></Button></div>
        <p className="mt-3 text-sm text-ink/70">Ask about your next lesson, matched opportunities, or your Career Passport.</p>
        <div className="mt-4 grid gap-2">{["What should I do next?", "Find jobs near Bhopal", "Explain my skill gap"].map((prompt) => <Button key={prompt} variant="outline" onClick={() => setAssistantOpen(false)} className="justify-between border-border text-left text-gov-blue hover:bg-light-blue">{prompt}<ArrowRight /></Button>)}</div>
        <Button onClick={() => setAssistantOpen(false)} className="mt-4 w-full bg-gov-blue hover:bg-deep-navy"><Volume2 /> Start speaking</Button>
      </section></div>}
    </div>
  );
}
