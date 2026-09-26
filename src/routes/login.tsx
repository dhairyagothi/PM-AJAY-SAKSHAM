import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [otp, setOtp] = useState("123456");

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
            <input className="w-full rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3 text-base outline-none" defaultValue="9876543210" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#12305B]">OTP</label>
            <input className="w-full rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3 text-base outline-none" value={otp} onChange={(e) => setOtp(e.target.value)} />
          </div>

          <Link to="/onboarding" className="block w-full rounded-xl bg-[#0B3A82] px-4 py-3 text-center text-base font-semibold text-white hover:bg-[#12305B]">
            Continue
          </Link>

          <div className="pt-2 text-center text-xs text-[#5B6573]">Demo Mode • Prefilling sample beneficiary</div>
        </div>
      </div>
    </div>
  );
}
