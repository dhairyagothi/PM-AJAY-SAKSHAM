import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Bell, BookOpen, Briefcase, Home, Mic, ShieldCheck, User, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Opportunities", to: "/opportunities", icon: Briefcase },
  { label: "Learning", to: "/learning", icon: BookOpen },
  { label: "Passport", to: "/career-passport", icon: ShieldCheck },
  { label: "Profile", to: "/profile", icon: User },
];

export function GovernmentLayout({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#EEF5FC] text-[#1F2937]">
      <header className="bg-[#0B3A82] text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-[10px] font-bold tracking-[0.2em]">
            GOI
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Government of India</p>
            <p className="text-sm font-semibold">Ministry of Social Justice & Empowerment</p>
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
          <div className="flex items-center gap-3 text-sm text-white/70">
            <Link to="/notifications" className="flex items-center gap-1 transition hover:text-white">
              <Bell className="h-4 w-4" /> Alerts
            </Link>
            <Link to="/voice" className="flex items-center gap-1 transition hover:text-white">
              <Mic className="h-4 w-4" /> Voice
            </Link>
          </div>
        </div>
      </div>

      <nav className="border-b border-[#D6DEE8] bg-white">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
          {navItems.map(({ label, to, icon: Icon }) => {
            const active = location.pathname === to || location.pathname.startsWith(`${to}/`);
            return (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                  active ? "bg-[#EEF5FC] text-[#0B3A82]" : "text-[#5B6573]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && <h1 className="text-3xl font-bold text-[#12305B]">{title}</h1>}
            {subtitle && <p className="mt-2 text-sm text-[#5B6573]">{subtitle}</p>}
          </div>
        )}
        {children}
      </main>

      <footer className="border-t border-[#D6DEE8] bg-white text-center text-sm text-[#5B6573]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:justify-between">
          <p>Government of India | PM-AJAY</p>
          <div className="flex items-center justify-center gap-4">
            <span>Accessibility</span>
            <span>Help</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ScreenTitle({ label }: { label: string }) {
  return <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">{label}</p>;
}

export function SummaryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#EEF8F1] px-3 py-1 text-xs font-semibold text-[#17854A]">
      {children}
    </span>
  );
}

export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#D6DEE8] bg-white p-4 shadow-sm">
      <p className="text-sm text-[#5B6573]">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[#12305B]">{value}</p>
    </div>
  );
}

export function ActionButton({ children, to }: { children: ReactNode; to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#12305B]"
    >
      {children}
    </Link>
  );
}
