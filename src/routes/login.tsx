import { ArrowRight, CheckCircle2, LockKeyhole, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [otp, setOtp] = useState("123456");
  const navigate = useNavigate();

  return (
    <div className="patriotic-page min-h-screen px-4 py-6 text-[#14365f] md:py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between"><img src="/goi.png" alt="Government of India" className="h-14 w-auto md:h-20" /><Link to="/language" className="rounded-full border border-[#b9d9f6] bg-white px-3 py-2 text-xs font-bold text-[#0b55a2]">भाषा / Language</Link></header>
        <div className="overflow-hidden rounded-3xl border border-[#cfe2f5] bg-white shadow-xl md:grid md:grid-cols-[.9fr_1.1fr]">
          <aside className="relative overflow-hidden bg-gradient-to-br from-[#073d80] to-[#0b69b7] p-7 text-white md:p-10">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[20px] border-white/10" /><div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-[22px] border-[#ef8d29]/30" />
            <p className="relative text-sm font-semibold tracking-wide text-white/75">Government of India</p><h1 className="relative mt-3 text-3xl font-black md:text-4xl">Welcome to<br />PM-AJAY SAKSHAM</h1><p className="relative mt-4 text-sm leading-relaxed text-white/80">Your trusted career and learning companion for skills, opportunities, and a better tomorrow.</p>
            <div className="relative mt-8 space-y-3 text-sm"><div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#8fe0ae]" /> Secure beneficiary access</div><div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#8fe0ae]" /> Personalised guidance</div><div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#8fe0ae]" /> Government opportunity support</div></div>
          </aside>
          <main className="p-6 md:p-10">
            <div className="mb-7"><span className="inline-flex items-center gap-2 rounded-full bg-[#eaf5ff] px-3 py-1 text-xs font-bold text-[#0b55a2]"><LockKeyhole className="h-3.5 w-3.5" /> Secure sign in</span><h2 className="mt-4 text-2xl font-black text-[#123d78] md:text-3xl">Let’s get started</h2><p className="mt-1 text-sm text-[#527092]">Enter your mobile number to continue.</p></div>
            <div className="space-y-5"><label className="block"><span className="mb-2 block text-sm font-bold text-[#123d78]">Mobile Number</span><span className="flex items-center rounded-xl border border-[#cfe2f5] bg-[#f8fbff] px-3 focus-within:border-[#0b55a2] focus-within:ring-2 focus-within:ring-[#0b55a2]/10"><Smartphone className="h-5 w-5 text-[#6c88a7]" /><input aria-label="Mobile Number" className="w-full bg-transparent p-3 text-base outline-none" defaultValue="9876543210" inputMode="numeric" /></span></label><label className="block"><span className="mb-2 block text-sm font-bold text-[#123d78]">One-Time Password</span><input aria-label="One-Time Password" className="w-full rounded-xl border border-[#cfe2f5] bg-[#f8fbff] p-3 text-base tracking-[0.3em] outline-none focus:border-[#0b55a2] focus:ring-2 focus:ring-[#0b55a2]/10" value={otp} onChange={(event) => setOtp(event.target.value)} maxLength={6} inputMode="numeric" /></label><button type="button" onClick={() => navigate("/onboarding")} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b55a2] px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-[#0b55a2]/20 transition hover:-translate-y-0.5 hover:bg-[#083e7d]">Continue securely <ArrowRight className="h-5 w-5" /></button></div>
            <p className="mt-6 text-center text-xs text-[#6c88a7]">Demo mode • Sample beneficiary details are prefilled</p>
          </main>
        </div>
      </div>
    </div>
  );
}

