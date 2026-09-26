import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  Home,
  MapPin,
  Mic,
  Settings,
  ShieldCheck,
  Star,
  User,
  Volume2,
  Wallet,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

type Screen =
  | "welcome"
  | "language"
  | "login"
  | "onboarding"
  | "home"
  | "voice"
  | "opportunities"
  | "opportunity-detail"
  | "skills"
  | "skill-gap"
  | "learning"
  | "lesson"
  | "quiz"
  | "applications"
  | "application-detail"
  | "passport"
  | "notifications"
  | "settings"
  | "admin";

.type Opportunity = {
  id: string;
  title: string;
  location: string;
  eligibility: string;
  pay: string;
  type: "job" | "course" | "training" | "scheme";
  skills: string[];
  match: string;
  description: string;
  source: string;
  seats: number;
};

const opportunities: Opportunity[] = [
  {
    id: "opp-1",
    title: "Solar Technician",
    location: "Bhopal",
    eligibility: "Class 10+",
    pay: "₹12,000–18,000",
    type: "job",
    skills: ["Electrical Repair", "Basic Wiring"],
    match: "Strong Match",
    description: "Install and maintain rooftop solar systems in urban communities.",
    source: "Prototype Government Data",
    seats: 28,
  },
  {
    id: "opp-2",
    title: "Electrician Assistant",
    location: "Indore",
    eligibility: "Class 10+",
    pay: "₹14,000–20,000",
    type: "job",
    skills: ["Electrical Repair", "Troubleshooting"],
    match: "Good Match",
    description: "Support electrical maintenance and safety checks for housing projects.",
    source: "Prototype Government Data",
    seats: 36,
  },
  {
    id: "opp-3",
    title: "Solar Installation Course",
    location: "Bhopal",
    eligibility: "Open to all",
    pay: "3 Months",
    type: "course",
    skills: ["Solar Basics", "Installation"],
    match: "High Relevance",
    description: "Hands-on training in rooftop solar system installation and safety.",
    source: "Prototype Government Data",
    seats: 40,
  },
  {
    id: "opp-4",
    title: "Skill Training - Electrical Safety",
    location: "Jabalpur",
    eligibility: "Class 8+",
    pay: "2 Months",
    type: "training",
    skills: ["Safety", "Circuit Basics"],
    match: "Recommended",
    description: "Government-backed training in electrical safety and on-site handling.",
    source: "Prototype Government Data",
    seats: 22,
  },
];

const notifications = [
  {
    title: "New training opportunity",
    body: "Solar training available in Bhopal.",
  },
  {
    title: "Application deadline",
    body: "Electrician Assistant application closes soon.",
  },
  {
    title: "Learning reminder",
    body: "Complete Lesson 3 to continue your path.",
  },
  {
    title: "New match",
    body: "A new opportunity matches your skills.",
  },
];

const courseProgress = [
  { title: "Basic Electrical Safety", done: true },
  { title: "Solar Basics", done: true },
  { title: "Equipment", done: true },
  { title: "Solar Installation", done: false },
  { title: "Maintenance", done: false },
  { title: "Assessment", done: false },
  { title: "Certification", done: false },
];

const quizQuestions = [
  {
    question: "Which tool measures voltage?",
    options: ["Multimeter", "Hammer", "Screwdriver"],
    answer: "Multimeter",
  },
  {
    question: "What should come first before working on a circuit?",
    options: ["Switch off power", "Start repair", "Test afterward"],
    answer: "Switch off power",
  },
];

const translations = {
  en: {
    home: "Home",
    opportunities: "Opportunities",
    learning: "Learning",
    passport: "Career Passport",
  },
  hi: {
    home: "होम",
    opportunities: "अवसर",
    learning: "सीखना",
    passport: "करियर पासपोर्ट",
  },
};

const departmentInfo = {
  en: {
    gov: "Government of India",
    ministry: "Ministry of Social Justice & Empowerment",
    subheading: "India’s Beneficiaries’ Saathi, Turning Aspirations into Opportunities.",
  },
  hi: {
    gov: "भारत सरकार",
    ministry: "सामाजिक न्याय और अधिकारिता मंत्रालय",
    subheading: "देश के लाभार्थियों का साथी, आकांक्षाओं को अवसरों में बदलना।",
  },
};

function Index() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [otp, setOtp] = useState("123456");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [voiceState, setVoiceState] = useState<"idle" | "listening" | "processing" | "speaking" | "error">("idle");
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity>(opportunities[0]);
  const [selectedTab, setSelectedTab] = useState("For You");
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("pm-ajay-language");
    if (storedLanguage === "hi" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pm-ajay-language", language);
  }, [language]);

  const t = (key: keyof typeof translations.en) => translations[language][key];

  const handleVoiceAction = () => {
    const SpeechRecognition =
      (window as typeof window & {
        SpeechRecognition?: new () => any;
        webkitSpeechRecognition?: new () => any;
      }).SpeechRecognition ||
      (window as typeof window & {
        webkitSpeechRecognition?: new () => any;
      }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoiceState("error");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === "hi" ? "hi-IN" : "en-IN";
    recognition.onstart = () => setVoiceState("listening");
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      if (transcript.toLowerCase().includes("technical")) {
        setScreen("home");
      }
      setVoiceState("processing");
      setTimeout(() => setVoiceState("speaking"), 500);
    };
    recognition.onerror = () => setVoiceState("error");
    recognition.onend = () => setVoiceState("idle");
    recognition.start();
  };

  const mobileNavItems = [
    { label: "Home", icon: Home },
    { label: "Opportunities", icon: Briefcase },
    { label: "Learning", icon: BookOpen },
    { label: "Passport", icon: ShieldCheck },
    { label: "Profile", icon: User },
  ];

  const navItems = [
    { label: "Home", screen: "home" },
    { label: "Opportunities", screen: "opportunities" },
    { label: "My Skills", screen: "skills" },
    { label: "Learning", screen: "learning" },
    { label: "Applications", screen: "applications" },
    { label: "Career Passport", screen: "passport" },
    { label: "Notifications", screen: "notifications" },
    { label: "Profile", screen: "settings" },
  ] as const;

  const opportunitiesFiltered = useMemo(() => {
    if (selectedTab === "For You") return opportunities;
    return opportunities.filter((item) => item.type === selectedTab.toLowerCase().slice(0, -1) || selectedTab === "Jobs");
  }, [selectedTab]);

  const screenView = (() => {
    switch (screen) {
      case "welcome":
        return (
          <div className="min-h-screen bg-[#EEF5FC] text-[#1F2937]">
            <header className="bg-[#0B3A82] text-white">
              <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-[10px] font-bold tracking-[0.2em]">GOI</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">{departmentInfo[language].gov}</p>
                  <p className="text-sm font-semibold">{departmentInfo[language].ministry}</p>
                </div>
              </div>
            </header>
            <main className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12 text-center">
              <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-[#0B3A82] bg-white text-2xl font-bold text-[#0B3A82] shadow-sm">
                PM
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#12305B] sm:text-5xl">PM-AJAY SAKSHAM</h1>
              <p className="max-w-2xl text-lg text-[#5B6573]">{departmentInfo[language].subheading}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-[#0B3A82] px-6 py-5 text-base font-semibold hover:bg-[#12305B]" onClick={() => setScreen("language")}>
                  Start My Journey
                </Button>
                <Button variant="outline" className="border-[#D6DEE8] px-6 py-5 text-base font-semibold" onClick={() => setScreen("login")}>
                  I already have a profile
                </Button>
              </div>
              <Button variant="secondary" className="mt-5 gap-2 border border-[#D6DEE8] bg-white px-6 py-4 text-base font-semibold text-[#0B3A82] hover:bg-[#EEF5FC]" onClick={handleVoiceAction}>
                <Mic className="h-4 w-4" /> Talk to Saksham
              </Button>
              <div className="mt-8 text-sm text-[#5B6573]">Available in: English | हिन्दी</div>
            </main>
          </div>
        );
      case "language":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-8 text-[#1F2937]">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Select language</p>
                <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Choose your language</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <button onClick={() => { setLanguage("en"); setScreen("login"); }} className="rounded-2xl border border-[#D6DEE8] bg-white p-8 text-left shadow-sm transition hover:border-[#0B3A82] hover:shadow-md">
                  <p className="text-2xl font-bold text-[#0B3A82]">English</p>
                  <p className="mt-2 text-sm text-[#5B6573]">Continue in English</p>
                </button>
                <button onClick={() => { setLanguage("hi"); setScreen("login"); }} className="rounded-2xl border border-[#D6DEE8] bg-white p-8 text-left shadow-sm transition hover:border-[#0B3A82] hover:shadow-md">
                  <p className="text-2xl font-bold text-[#0B3A82]">हिन्दी</p>
                  <p className="mt-2 text-sm text-[#5B6573]">हिंदी में जारी रखें</p>
                </button>
              </div>
            </div>
          </div>
        );
      case "login":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-8">
            <div className="mx-auto max-w-md rounded-2xl border border-[#D6DEE8] bg-white p-6 shadow-sm">
              <div className="mb-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Login</p>
                <h2 className="mt-2 text-3xl font-bold text-[#12305B]">PM-AJAY SAKSHAM</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12305B]">Mobile Number</label>
                  <input className="w-full rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3 text-base outline-none ring-0" defaultValue="9876543210" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12305B]">OTP</label>
                  <input className="w-full rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3 text-base outline-none ring-0" value={otp} onChange={(e) => setOtp(e.target.value)} />
                </div>
                <Button className="w-full bg-[#0B3A82] text-base font-semibold hover:bg-[#12305B]" onClick={() => setScreen("onboarding")}>
                  Continue
                </Button>
                <div className="pt-2 text-center text-xs text-[#5B6573]">Demo Mode • Prefilling sample beneficiary</div>
              </div>
            </div>
          </div>
        );
      case "onboarding":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#D6DEE8] bg-white p-5 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Onboarding</p>
                  <h2 className="mt-1 text-2xl font-bold text-[#12305B]">Let’s get to know you</h2>
                </div>
                <Badge className="bg-[#EEF8F1] text-[#17854A]">Step {onboardingStep + 1}/6</Badge>
              </div>

              <div className="rounded-xl bg-[#EEF5FC] p-5 text-lg font-semibold text-[#12305B]">
                {onboardingStep === 0 && "Namaste! I’m Saksham. What kind of work are you interested in?"}
                {onboardingStep === 1 && "What is your highest education?"}
                {onboardingStep === 2 && "What work or skills do you already have?"}
                {onboardingStep === 3 && "Where do you live?"}
                {onboardingStep === 4 && "How far can you travel for work?"}
                {onboardingStep === 5 && "How much time can you spend learning each week?"}
              </div>

              <div className="mt-6 grid gap-3">
                {onboardingStep === 0 && ["Government Job", "Private Job", "Self Employment", "Skill Training", "Not Sure"].map((item) => (
                  <button key={item} className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]" onClick={() => setOnboardingStep((s) => Math.min(s + 1, 5))}>
                    {item}
                  </button>
                ))}
                {onboardingStep === 1 && ["Class 8", "Class 10", "Class 12", "ITI/Diploma", "Graduate"].map((item) => (
                  <button key={item} className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]" onClick={() => setOnboardingStep((s) => Math.min(s + 1, 5))}>
                    {item}
                  </button>
                ))}
                {onboardingStep === 2 && ["Basic Wiring", "Electrical Repair", "Troubleshooting", "Machine Handling", "Digital Skills"].map((item) => (
                  <button key={item} className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]" onClick={() => setOnboardingStep((s) => Math.min(s + 1, 5))}>
                    {item}
                  </button>
                ))}
                {onboardingStep === 3 && ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Maharashtra"].map((item) => (
                  <button key={item} className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]" onClick={() => setOnboardingStep((s) => Math.min(s + 1, 5))}>
                    {item}
                  </button>
                ))}
                {onboardingStep === 4 && ["Up to 10 km", "Up to 25 km", "Up to 50 km", "Can travel for training"].map((item) => (
                  <button key={item} className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]" onClick={() => setOnboardingStep((s) => Math.min(s + 1, 5))}>
                    {item}
                  </button>
                ))}
                {onboardingStep === 5 && ["2 hours/week", "4 hours/week", "6 hours/week", "Flexible"].map((item) => (
                  <button key={item} className="rounded-xl border border-[#D6DEE8] bg-white p-4 text-left font-medium hover:border-[#0B3A82]" onClick={() => setScreen("home")}>
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Button variant="ghost" onClick={() => setOnboardingStep((s) => Math.max(s - 1, 0))}>
                  Back
                </Button>
                <Button onClick={() => setScreen("home")} className="bg-[#0B3A82] hover:bg-[#12305B]">Continue</Button>
              </div>
            </div>
          </div>
        );
      case "voice":
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
                <Button className="w-full bg-[#17854A] text-base font-semibold hover:bg-[#12713d]" onClick={() => setVoiceState("speaking")}>
                  Accept Call
                </Button>
              </div>
              <div className="mt-8 rounded-xl bg-[#EEF5FC] p-4 text-center text-[#12305B]">
                {voiceState === "idle" && <div>“Namaste. I am Saksham...”</div>}
                {voiceState === "speaking" && <div>“What kind of work are you looking for?”</div>}
                {voiceState === "listening" && <div>Listening...</div>}
                {voiceState === "processing" && <div>Understanding...</div>}
                {voiceState === "error" && <div>Voice unavailable. You can type instead.</div>}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {["1 Government Job", "2 Training", "3 Self Employment", "4 Speak to Saksham"].map((item) => (
                  <button key={item} className="rounded-lg border border-[#D6DEE8] bg-white p-3 text-left hover:border-[#0B3A82]" onClick={() => setVoiceState("speaking")}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case "home":
        return (
          <div className="min-h-screen bg-[#EEF5FC] pb-24 text-[#1F2937]">
            <header className="bg-[#0B3A82] text-white">
              <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-[9px] font-bold tracking-[0.2em]">GOI</div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">{departmentInfo[language].gov}</p>
                  <p className="truncate text-sm font-semibold">{departmentInfo[language].ministry}</p>
                </div>
                <div className="ml-auto hidden items-center gap-2 sm:flex">
                  <Button variant="ghost" className="h-8 px-2 text-white hover:bg-white/10">हिं</Button>
                  <Button variant="ghost" className="h-8 px-2 text-white hover:bg-white/10">EN</Button>
                </div>
              </div>
            </header>
            <div className="bg-[#12305B] text-white">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <div>
                  <p className="text-lg font-bold">PM-AJAY SAKSHAM</p>
                </div>
                <p className="hidden text-sm text-white/70 sm:block">Dhairya · Bhopal</p>
              </div>
            </div>
            <nav className="border-b border-[#D6DEE8] bg-white">
              <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
                {navItems.map(({ label, screen: target }) => (
                  <button key={label} onClick={() => setScreen(target)} className={`rounded-md px-3 py-2 text-sm font-medium ${screen === target ? "bg-[#EEF5FC] text-[#0B3A82]" : "text-[#5B6573]"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </nav>
            <main className="mx-auto max-w-6xl px-4 py-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#17854A]">Welcome back</p>
                  <h1 className="text-3xl font-bold text-[#12305B]">Namaste, Dhairya</h1>
                </div>
                <button onClick={() => setScreen("voice")} className="flex items-center gap-2 rounded-full bg-[#F28C28] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  <Mic className="h-4 w-4" /> Talk to Saksham
                </button>
              </div>

              <Card className="mb-6 border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">Your Next Best Step</span>
                    <span className="text-xs text-[#5B6573]">Due in 2 days</span>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-[#12305B]">Complete Electrical Safety – Lesson 3</h2>
                      <p className="mt-2 text-sm text-[#5B6573]">This will unlock 3 new opportunities matching your profile.</p>
                      <div className="mt-4 flex items-center gap-3">
                        <Progress value={80} className="h-3 flex-1" />
                        <span className="text-sm font-bold text-[#17854A]">80%</span>
                      </div>
                    </div>
                    <Button className="bg-[#17854A] hover:bg-[#12713d]" onClick={() => setScreen("lesson")}>Continue</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardContent className="p-5 sm:p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Recommended for You</span>
                      <span className="text-sm text-[#5B6573]">Bhopal</span>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-[#12305B]">Solar Technician</h3>
                          <Badge className="bg-[#EEF8F1] text-[#17854A]">Strong Match</Badge>
                        </div>
                        <p className="mt-2 text-sm text-[#5B6573]">3 Month Training • Class 10+</p>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Matches your electrical experience</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Available in your district</li>
                          <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Only 2 skills need improvement</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2 sm:w-40">
                        <Button className="bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => { setSelectedOpportunity(opportunities[0]); setScreen("opportunity-detail"); }}>View Opportunity</Button>
                        <Button variant="outline" className="border-[#D6DEE8] bg-[#EEF5FC] text-[#0B3A82]">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-[#12305B]">Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#EEF8F1] p-3 text-center">
                        <div className="text-2xl font-bold text-[#17854A]">6</div>
                        <div className="text-xs text-[#5B6573]">Skills</div>
                      </div>
                      <div className="rounded-xl bg-[#EEF5FC] p-3 text-center">
                        <div className="text-2xl font-bold text-[#0B3A82]">2</div>
                        <div className="text-xs text-[#5B6573]">Courses</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#EEF8F1] p-3 text-center">
                      <div className="text-2xl font-bold text-[#17854A]">1</div>
                      <div className="text-xs text-[#5B6573]">Certificate</div>
                    </div>
                    <div className="rounded-xl bg-[#EEF5FC] p-3 text-center">
                      <div className="text-2xl font-bold text-[#0B3A82]">2</div>
                      <div className="text-xs text-[#5B6573]">Applications</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </main>

            <div className="fixed bottom-20 left-1/2 z-20 -translate-x-1/2">
              <Button onClick={() => setScreen("voice")} className="flex items-center gap-2 rounded-full bg-[#F28C28] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#d77417]">
                <Mic className="h-4 w-4" /> Talk to Saksham
              </Button>
            </div>

            <nav className="fixed inset-x-0 bottom-0 border-t border-[#D6DEE8] bg-white sm:hidden">
              <div className="mx-auto grid max-w-6xl grid-cols-5">
                {mobileNavItems.map(({ label, icon: Icon }) => (
                  <button key={label} onClick={() => setScreen(label === "Home" ? "home" : label === "Opportunities" ? "opportunities" : label === "Learning" ? "learning" : label === "Passport" ? "passport" : "settings")} className="flex flex-col items-center gap-1 px-2 py-3 text-[11px] text-[#5B6573]">
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        );
      case "opportunities":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Opportunities</p>
                  <h2 className="text-3xl font-bold text-[#12305B]">Find what fits you</h2>
                </div>
                <Button variant="outline" className="border-[#D6DEE8] bg-white" onClick={() => setScreen("home")}>Back</Button>
              </div>
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
                <TabsList className="grid w-full grid-cols-5 bg-white">
                  <TabsTrigger value="For You">For You</TabsTrigger>
                  <TabsTrigger value="Jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="Courses">Courses</TabsTrigger>
                  <TabsTrigger value="Schemes">Schemes</TabsTrigger>
                  <TabsTrigger value="Training">Training</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {opportunitiesFiltered.map((opp) => (
                  <Card key={opp.id} className="border-[#D6DEE8] bg-white shadow-sm">
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[#12305B]">{opp.title}</h3>
                        <Badge className="bg-[#EEF8F1] text-[#17854A]">{opp.match}</Badge>
                      </div>
                      <div className="space-y-2 text-sm text-[#5B6573]">
                        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {opp.location}</p>
                        <p className="flex items-center gap-2"><Star className="h-4 w-4" /> {opp.eligibility}</p>
                        <p className="flex items-center gap-2"><Wallet className="h-4 w-4" /> {opp.pay}</p>
                      </div>
                      <div className="mt-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0B3A82]">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {opp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-[#EEF5FC] text-[#0B3A82]">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button className="flex-1 bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => { setSelectedOpportunity(opp); setScreen("opportunity-detail"); }}>View</Button>
                        <Button variant="outline" className="border-[#D6DEE8] bg-[#EEF5FC] text-[#0B3A82]">Apply</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );
      case "opportunity-detail":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center gap-2 text-[#0B3A82]">
                <button onClick={() => setScreen("opportunities")} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-sm"><ChevronLeft className="h-4 w-4" /> Back</button>
              </div>
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-[#12305B]">{selectedOpportunity.title}</h2>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#5B6573]">
                        <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {selectedOpportunity.location}</span>
                        <span className="flex items-center gap-2"><Star className="h-4 w-4" /> {selectedOpportunity.eligibility}</span>
                        <span className="flex items-center gap-2"><Wallet className="h-4 w-4" /> {selectedOpportunity.pay}</span>
                      </div>
                    </div>
                    <Badge className="bg-[#EEF8F1] text-[#17854A]">Strong Match</Badge>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0B3A82]">Why Saksham recommends this</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Matches your electrical experience</li>
                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Available in your district</li>
                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Fits your education</li>
                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[#17854A]" /> Only 2 skills need improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0B3A82]">Your Skill Gap</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Basic Wiring</p>
                        <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Electrical Repair</p>
                        <p className="flex items-center gap-2"><X className="h-4 w-4 text-[#F28C28]" /> Solar Installation</p>
                        <p className="flex items-center gap-2"><X className="h-4 w-4 text-[#F28C28]" /> Solar Maintenance</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-[#EEF5FC] p-4">
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0B3A82]">Recommended Learning</h3>
                    <ol className="list-decimal space-y-2 pl-5 text-sm text-[#12305B]">
                      <li>Electrical Safety</li>
                      <li>Solar Basics</li>
                      <li>Installation</li>
                    </ol>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button className="bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => setScreen("learning")}>Start Learning</Button>
                    <Button variant="outline" className="border-[#D6DEE8] bg-white text-[#0B3A82]">View Official Application</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Your Skill Profile</p>
                <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Electrical & technical readiness</h2>
              </div>
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="space-y-5">
                    {[
                      ["Electrical Repair", 4],
                      ["Basic Wiring", 3],
                      ["Machine Handling", 2],
                      ["Digital Skills", 1],
                    ].map(([skill, value]) => (
                      <div key={skill as string}>
                        <div className="mb-2 flex items-center justify-between text-sm font-medium text-[#12305B]">
                          <span>{skill as string}</span>
                          <span>{value}/5</span>
                        </div>
                        <Progress value={Number(value) * 20} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#12305B]">Skills You Already Have</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Electrical Repair</p>
                    <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Basic Wiring</p>
                    <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Troubleshooting</p>
                  </CardContent>
                </Card>
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#12305B]">Skills You Could Develop</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F28C28]" /> Solar Installation</p>
                    <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F28C28]" /> Solar Maintenance</p>
                    <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F28C28]" /> Digital Safety</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case "skill-gap":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-3xl">
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Target</p>
                  <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Solar Technician</h2>
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#12305B]">Required Skills</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Basic Wiring</p>
                      <p className="flex items-center gap-2"><Check className="h-4 w-4 text-[#17854A]" /> Electrical Safety</p>
                      <p className="flex items-center gap-2"><X className="h-4 w-4 text-[#F28C28]" /> Solar Installation</p>
                      <p className="flex items-center gap-2"><X className="h-4 w-4 text-[#F28C28]" /> Solar Maintenance</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-xl bg-[#EEF8F1] p-4 text-center text-[#17854A]">
                    <p className="text-lg font-bold">2 skills remaining</p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button className="bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => setScreen("learning")}>Build My Learning Path</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "learning":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">My Learning Journey</p>
                  <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Solar Technician Path</h2>
                </div>
                <Button variant="outline" className="border-[#D6DEE8] bg-white" onClick={() => setScreen("home")}>Home</Button>
              </div>
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#5B6573]">Skill Gap: 2</p>
                      <p className="text-sm text-[#5B6573]">Progress: 62%</p>
                    </div>
                    <Badge className="bg-[#EEF8F1] text-[#17854A]">4 of 7 modules completed</Badge>
                  </div>
                  <Progress value={62} className="h-3" />
                  <div className="mt-6 space-y-3 text-sm">
                    {courseProgress.map((lesson) => (
                      <div key={lesson.title} className="flex items-center justify-between rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3">
                        <span className="flex items-center gap-2"><span className={lesson.done ? "text-[#17854A]" : "text-[#F28C28]"}>{lesson.done ? <Check className="h-4 w-4" /> : <CircleHelp className="h-4 w-4" />}</span> {lesson.title}</span>
                        {lesson.done ? <Badge className="bg-[#EEF8F1] text-[#17854A]">Done</Badge> : <Badge variant="secondary">Next</Badge>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button className="bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => setScreen("lesson")}>Continue Learning</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "lesson":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-3xl">
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Lesson 3 of 7</p>
                  <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Electrical Safety</h2>
                  <div className="mt-5 rounded-xl bg-[#EEF5FC] p-6 text-center text-lg font-medium text-[#12305B]">
                    “Always switch off the power before working on the circuit.”
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="secondary" className="gap-2 bg-[#EEF5FC] text-[#0B3A82]"><Volume2 className="h-4 w-4" /> Listen</Button>
                  </div>
                  <div className="mt-6 rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-4">
                    <p className="mb-3 font-semibold text-[#12305B]">Which step should come first?</p>
                    <div className="space-y-2">
                      {quizQuestions[1].options.map((option) => (
                        <button key={option} className="flex w-full items-center justify-between rounded-lg border border-[#D6DEE8] bg-white p-3 text-left hover:border-[#0B3A82]" onClick={() => setScreen("quiz")}>
                          <span>{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button className="bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => setScreen("quiz")}>Check Answer</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "quiz":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-3xl">
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Question {quizIndex + 1} / {quizQuestions.length}</p>
                  <h2 className="mt-2 text-3xl font-bold text-[#12305B]">{quizQuestions[quizIndex].question}</h2>
                  <div className="mt-6 space-y-3">
                    {quizQuestions[quizIndex].options.map((option) => (
                      <button key={option} onClick={() => {
                        setQuizAnswered(true);
                        if (option === quizQuestions[quizIndex].answer) {
                          setTimeout(() => setQuizIndex(1), 700);
                        }
                      }} className="flex w-full items-center justify-between rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-4 text-left hover:border-[#0B3A82]">
                        <span>{option}</span>
                      </button>
                    ))}
                  </div>
                  {quizAnswered && (
                    <div className="mt-6 rounded-xl bg-[#EEF8F1] p-4 text-center text-[#17854A]">
                      <p className="text-lg font-bold">✓ Correct</p>
                      <p className="mt-2">10 XP + Skill Progress</p>
                    </div>
                  )}
                  <div className="mt-6 flex justify-end">
                    <Button className="bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => setScreen("passport")}>Next Question</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "applications":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-4xl">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">My Applications</p>
                <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Application tracker</h2>
              </div>
              <div className="space-y-4">
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#12305B]">Solar Technician</h3>
                        <p className="text-sm text-[#5B6573]">Training • Applied</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#17854A]"><span className="h-2.5 w-2.5 rounded-full bg-[#17854A]" /> Applied</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#12305B]">Electrician Assistant</h3>
                        <p className="text-sm text-[#5B6573]">Job • Documents Pending</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#F28C28]"><span className="h-2.5 w-2.5 rounded-full bg-[#F28C28]" /> Pending</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case "passport":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-3xl">
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">PM-AJAY SAKSHAM</p>
                    <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Career Passport</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><p className="text-sm text-[#5B6573]">Name</p><p className="text-lg font-bold text-[#12305B]">Dhairya</p></div>
                    <div><p className="text-sm text-[#5B6573]">Education</p><p className="text-lg font-bold text-[#12305B]">Class 12</p></div>
                    <div className="sm:col-span-2"><p className="text-sm text-[#5B6573]">Skills</p><p className="text-lg font-bold text-[#12305B]">Electrical Repair • Basic Wiring • Solar Basics</p></div>
                    <div className="sm:col-span-2"><p className="text-sm text-[#5B6573]">Training</p><p className="text-lg font-bold text-[#12305B]">Solar Basics</p></div>
                    <div className="sm:col-span-2"><p className="text-sm text-[#5B6573]">Certificates</p><p className="text-lg font-bold text-[#12305B]">Solar Basics Certificate</p></div>
                    <div className="sm:col-span-2"><p className="text-sm text-[#5B6573]">Career Goal</p><p className="text-lg font-bold text-[#12305B]">Technical Employment</p></div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button className="bg-[#0B3A82] hover:bg-[#12305B]">Share Passport</Button>
                    <Button variant="outline" className="border-[#D6DEE8] bg-white text-[#0B3A82]">Download</Button>
                    <Button variant="secondary" className="bg-[#EEF5FC] text-[#0B3A82]">Update Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Notifications</p>
                  <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Your latest updates</h2>
                </div>
                <Bell className="h-6 w-6 text-[#0B3A82]" />
              </div>
              <div className="space-y-4">
                {notifications.map((item) => (
                  <Card key={item.title} className="border-[#D6DEE8] bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF8F1] text-[#17854A]">
                          <Bell className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-bold text-[#12305B]">{item.title}</p>
                          <p className="mt-1 text-sm text-[#5B6573]">{item.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-3xl space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Settings</p>
                <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Accessibility & experience</h2>
              </div>
              <Card className="border-[#D6DEE8] bg-white shadow-sm">
                <CardContent className="space-y-4 p-5">
                  {[
                    "Text Size",
                    "Language",
                    "Voice",
                    "High Contrast",
                    "Simple Mode",
                    "Reduced Motion",
                    "Low Data Mode",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between gap-4 rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3">
                      <span className="font-medium text-[#12305B]">{item}</span>
                      <button className="rounded-full bg-[#EEF5FC] px-3 py-1 text-xs font-semibold text-[#0B3A82]">On</button>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Button className="w-full bg-[#0B3A82] hover:bg-[#12305B]" onClick={() => setScreen("admin")}>Open Government Dashboard</Button>
            </div>
          </div>
        );
      case "admin":
        return (
          <div className="min-h-screen bg-[#EEF5FC] p-4 py-6 text-[#1F2937]">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Government Monitoring</p>
                  <h2 className="mt-2 text-3xl font-bold text-[#12305B]">PM-AJAY SAKSHAM</h2>
                </div>
                <Button variant="outline" className="border-[#D6DEE8] bg-white" onClick={() => setScreen("home")}>Back</Button>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ["Beneficiaries", "12,540"],
                  ["Active Learning", "7,892"],
                  ["Applications", "4,382"],
                  ["Certificates", "2,951"],
                ].map(([label, value]) => (
                  <Card key={label} className="border-[#D6DEE8] bg-white shadow-sm">
                    <CardContent className="p-5">
                      <p className="text-sm text-[#5B6573]">{label}</p>
                      <p className="mt-2 text-3xl font-bold text-[#12305B]">{value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardHeader><CardTitle className="text-lg text-[#12305B]">Learning Progress</CardTitle></CardHeader>
                  <CardContent><div className="h-52 rounded-xl bg-[#EEF5FC] p-4 text-center text-sm text-[#5B6573]">Recharts visualization placeholder</div></CardContent>
                </Card>
                <Card className="border-[#D6DEE8] bg-white shadow-sm">
                  <CardHeader><CardTitle className="text-lg text-[#12305B]">Applications by District</CardTitle></CardHeader>
                  <CardContent><div className="h-52 rounded-xl bg-[#EEF5FC] p-4 text-center text-sm text-[#5B6573]">District chart placeholder</div></CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  })();

  return screenView;
}

export default Index;
