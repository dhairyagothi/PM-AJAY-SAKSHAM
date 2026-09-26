import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  BookOpen,
  Briefcase,
  FileText,
  Home,
  Menu,
  Mic,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Opportunities", to: "/opportunities", icon: Briefcase },
  { label: "Learning", to: "/learning", icon: BookOpen },
  { label: "Applications", to: "/applications", icon: FileText },
  { label: "Career Passport", to: "/career-passport", icon: ShieldCheck },
  { label: "Profile", to: "/profile", icon: User },
];

const mobileNavItems = navItems.filter(({ label }) => label !== "Career Passport");

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F8FC] pb-20 text-[#1F2937] md:pb-0">
      <header className="hidden bg-[#0B3A82] text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-[10px] font-bold tracking-[0.2em]">
            GOI
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
              Government of India
            </p>
            <p className="text-sm font-semibold">Ministry of Social Justice & Empowerment</p>
          </div>
          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <Button variant="ghost" className="h-8 px-2 text-white hover:bg-white/10">
              हिं
            </Button>
            <Button variant="ghost" className="h-8 px-2 text-white hover:bg-white/10">
              EN
            </Button>
          </div>
        </div>
      </header>

      <div className="hidden bg-[#12305B] text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <p className="text-lg font-bold">PM-AJAY SAKSHAM</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <Link
              to="/notifications"
              className="flex items-center gap-1 transition hover:text-white"
            >
              <Bell className="h-4 w-4" /> Alerts
            </Link>
            <Link to="/voice" className="flex items-center gap-1 transition hover:text-white">
              <Mic className="h-4 w-4" /> Voice
            </Link>
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-[#D6DEE8] bg-white md:block">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
          {navItems.slice(0, 5).map(({ label, to, icon: Icon }) => {
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

      <header className="sticky top-0 z-40 border-b border-[#D6DEE8] bg-white md:hidden">
        <div className="flex h-[60px] items-center gap-2 px-3">
          <Link to="/home" className="min-w-0 flex-1" aria-label="PM-AJAY Saksham home">
            <img
              src="/logo.png"
              alt="PM-AJAY Saksham"
              className="h-10 w-[142px] object-contain object-left"
            />
          </Link>
          <Link
            to="/language"
            className="h-9 rounded-md border border-[#D6DEE8] px-2 text-xs font-semibold text-[#0B3A82]"
            aria-label="Choose language"
          >
            EN⌄
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md text-[#12305B] hover:bg-[#EEF5FC]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute left-0 right-0 top-full border-b border-[#D6DEE8] bg-white p-2 shadow-lg">
            {navItems.map(({ label, to, icon: Icon }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]"
              >
                <Icon className="h-4 w-4 text-[#0B3A82]" />
                {label}
              </Link>
            ))}
            <Link
              to="/notifications"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]"
            >
              <Bell className="h-4 w-4 text-[#0B3A82]" /> Notifications
            </Link>
            <Link
              to="/voice"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]"
            >
              <Mic className="h-4 w-4 text-[#0B3A82]" /> Talk to Saksham
            </Link>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-4 md:py-6">
        {(title || subtitle) && (
          <div className="mb-4 md:mb-6">
            {title && <h1 className="text-xl font-bold text-[#12305B] md:text-3xl">{title}</h1>}
            {subtitle && <p className="mt-1 text-sm text-[#5B6573] md:mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </main>

      <footer className="hidden border-t border-[#D6DEE8] bg-white text-center text-sm text-[#5B6573] md:block">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:justify-between">
          <p>Government of India | PM-AJAY</p>
          <div className="flex items-center justify-center gap-4">
            <span>Accessibility</span>
            <span>Help</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>

      {location.pathname !== "/voice" && (
        <nav
          aria-label="Main navigation"
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-[#D6DEE8] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-3px_12px_rgba(18,48,91,0.06)] md:hidden"
        >
          {mobileNavItems.map(({ label, to, icon: Icon }) => {
            const active = location.pathname === to || location.pathname.startsWith(`${to}/`);
            return (
              <Link
                key={label}
                to={to}
                className={`flex min-h-[58px] flex-col items-center justify-center gap-1 text-[10px] ${active ? "font-bold text-[#0B3A82]" : "text-[#6B7B90]"}`}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      )}
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
