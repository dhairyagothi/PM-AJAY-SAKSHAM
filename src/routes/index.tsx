import { ArrowRight, BookOpen, MessageCircle, Mic, PhoneCall, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useSakshamStore } from "@/store/useSakshamStore";

const languageNames = ["English", "हिन्दी", "বাংলা", "मराठी", "తెలుగు", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ", "ଓଡ଼ିଆ", "অসমীয়া", "اردو"];

export default function WelcomePage() {
  const { guide, setGuide } = useSakshamStore();
  const guideName = guide === "sakhi" ? "Sakhi" : "Saksham";

  return (
    <div className="patriotic-page min-h-screen text-[#14365f]">
      <header className="gov-banner">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 md:px-10 md:py-5">
          <img src="/goi.png" alt="Government of India, Ministry of Social Justice & Empowerment" className="h-14 w-auto object-contain md:h-20" />
          <div className="min-w-0 border-l border-white/30 pl-4 text-white">
            <p className="text-xs font-medium tracking-wide text-white/80 md:text-sm">Ministry of Social Justice &amp; Empowerment</p>
            <p className="text-[10px] text-white/75 md:text-xs">सामाजिक न्याय और अधिकारिता मंत्रालय</p>

          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2"><label className="flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-2 py-1.5 text-[11px] font-semibold text-white"><select value={guide} onChange={(event) => setGuide(event.target.value as "saksham" | "sakhi")} className="bg-transparent text-white outline-none [&>option]:text-[#123d78]" aria-label="Choose Saksham or Sakhi"><option value="saksham">Saksham</option><option value="sakhi">Sakhi</option></select></label><Link to="/language" className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs text-white">भाषा / Language</Link></div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-8 md:px-10 md:pt-14">
        <section className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="text-3xl font-black leading-tight text-[#123d78] md:text-5xl">PM-AJAY</p>
            <p className="mt-5 text-lg font-semibold text-[#315982]">Pradhan Mantri - Anusuchit Jati Abhyuday Yojna</p>
            <p className="mt-5 text-lg font-semibold text-[#315982]">Your AI-powered career and livelihood Saathi.</p>
            <div className="mt-5 rounded-2xl border border-[#b9d9f6] bg-[#eaf5ff] p-5 text-left text-base leading-relaxed shadow-sm">“I am {guideName}, your career and learning companion. Let’s build your better future together!”</div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link to="/language" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b55a2] px-6 py-4 font-bold text-white shadow-lg shadow-[#0b55a2]/20 transition hover:-translate-y-1 hover:bg-[#093e7a]">Get Started <ArrowRight className="h-5 w-5" /></Link><Link to="/voice" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#b6d4ef] bg-white px-6 py-4 font-bold text-[#0b55a2] transition hover:-translate-y-1"><Mic className="h-5 w-5" /> Talk to {guideName}</Link></div>
          </div>
          <div className="order-1 flex justify-center md:order-2"><div className="relative max-w-[560px]"><div className="absolute inset-10 rounded-full bg-[#dcefff] blur-2xl" /><img src={guide === "sakhi" ? "/female-mascot.png" : "/male-mascot.png"} alt={guideName + ", Saksham career guide"} className="relative max-h-[420px] w-full object-contain drop-shadow-2xl motion-float" /></div></div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Talk to Saksham", sub: "Speak, Ask, Get Guidance", icon: Mic, to: "/voice", color: "blue" },
            { title: "Find Opportunities", sub: "Jobs, Courses, Training, Schemes", icon: Search, to: "/opportunities", color: "green" },
            { title: "Continue Learning", sub: "Build Your Skills", icon: BookOpen, to: "/learning", color: "orange" },
          ].map(({ title, sub, icon: Icon, to, color }) => <Link key={title} to={to} className={"action-tile action-" + color}><span className="tile-icon"><Icon className="h-8 w-8" /></span><span className="text-xl font-bold">{title}</span><span className="mt-1 text-sm">{sub}</span><ArrowRight className="absolute bottom-4 right-4 h-6 w-6 rounded-full p-1 text-white" /></Link>)}
        </section>

        <section className="mx-auto mt-12 max-w-4xl text-center"><h2 className="section-heading">How would you like to use Saksham?</h2><div className="mt-7 grid grid-cols-3 divide-x divide-[#b8d8f6]"><Link to="/voice" className="flex flex-col items-center gap-2 px-2"><Mic className="h-10 w-10 rounded-full bg-[#e4f2ff] p-2 text-[#0b55a2]" /><b>Voice</b><span className="text-sm">Speak with Saksham</span></Link><Link to="/voice" className="flex flex-col items-center gap-2 px-2"><MessageCircle className="h-10 w-10 rounded-full bg-[#e4f2ff] p-2 text-[#0b55a2]" /><b>Chat</b><span className="text-sm">Ask Saksham</span></Link><Link to="/onboarding" className="flex flex-col items-center gap-2 px-2"><BookOpen className="h-10 w-10 rounded-full bg-[#e4f2ff] p-2 text-[#0b55a2]" /><b>Form</b><span className="text-sm">Fill your details</span></Link></div></section>

        <section className="mx-auto mt-9 flex max-w-3xl items-center gap-4 rounded-2xl border border-[#b9d9f6] bg-[#eaf5ff] p-4"><PhoneCall className="h-10 w-10 shrink-0 rounded-full bg-[#0b55a2] p-2 text-white" /><div><p className="font-bold">No smartphone? Call Saksham</p><p className="text-sm text-[#527092]">Toll-free IVR support | Available in English & Hindi</p></div><ArrowRight className="ml-auto h-5 w-5 text-[#0b55a2]" /></section>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm"><span className="mr-2 font-semibold">Available in:</span>{languageNames.map((language, index) => <span key={language} className={"rounded-full border px-3 py-1.5 " + (index < 2 ? "border-[#0b55a2] bg-[#0b55a2] text-white" : "border-[#b9d9f6] bg-white")}>{language}</span>)}</div>
      </main>
      <footer className="gov-footer">PM-AJAY &nbsp; | &nbsp; Government of India &nbsp; | &nbsp; Ministry of Social Justice & Empowerment <span className="hidden md:inline"> &nbsp; | &nbsp; Help &nbsp; | &nbsp; Contact &nbsp; | &nbsp; Accessibility</span></footer>
    </div>
  );
}
