import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  BookOpen,
  Briefcase,
  FileText,
  Home,
  Languages,
  Menu,
  Mic,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { useSakshamStore } from "@/store/useSakshamStore";

const navItems = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Opportunities", to: "/opportunities", icon: Briefcase },
  { label: "Learning", to: "/learning", icon: BookOpen },
  { label: "Applications", to: "/applications", icon: FileText },
  { label: "Career Passport", to: "/career-passport", icon: ShieldCheck },
  { label: "Profile", to: "/profile", icon: User },
];

const mobileNavItems = [
  navItems[0],
  navItems[1],
  navItems[2],
  navItems[4],
  navItems[5],
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { guide } = useSakshamStore();
  const showMentorButton = !["/", "/language", "/login", "/onboarding"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 text-[#1F2937] md:pb-0">
      <header className="relative z-50 border-b border-[#dbe4ef] bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-8">
          <img src="/goi.png" alt="Government of India" className="h-11 w-auto max-w-[82px] object-contain object-left" />
          <Link to="/home" className="leading-none text-[#0b3a82]">
            <span className="block text-[15px] font-semibold tracking-tight">PM-AJAY</span>
            <span className="block text-[21px] font-bold tracking-tight">SAKSHAM</span>
            <span className="block text-[9px] tracking-wide text-[#5d7392]">Pradhan Mantri - Anusuchit Jati Abhyuday Yojna</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/language" aria-label="Choose language" className="inline-flex items-center gap-1.5 rounded-md border border-[#d6e0ec] px-2.5 py-1.5 text-xs font-semibold text-[#12305b]"><Languages className="h-4 w-4 text-[#0b55a2]" /> EN</Link>
            <Link to="/notifications" className="hidden rounded-md p-2 text-[#0b3a82] hover:bg-[#eef5fc] md:block" aria-label="Notifications"><Bell className="h-5 w-5" /></Link>
            <button type="button" className="relative z-[110] grid h-9 w-9 place-items-center rounded-md text-[#12305b] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu" aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <nav className="hidden border-b border-[#dbe4ef] bg-white md:block">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-8 py-1.5">
          {navItems.slice(0, 5).map(({ label, to, icon: Icon }) => {
            const active = location.pathname === to || location.pathname.startsWith(`${to}/`);
            return (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${active ? "bg-[#EEF5FC] text-[#0B3A82]" : "text-[#5B6573]"
                  }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="md:hidden">
        {menuOpen && (
          <nav className="fixed inset-x-3 top-[72px] z-[100] rounded-2xl border border-[#D6DEE8] bg-white p-2 shadow-2xl shadow-[#12305b]/15">
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
              to="/language"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]"
            >
              <span className="grid h-4 w-4 place-items-center text-xs text-[#0B3A82]">अ</span> Choose language
            </Link>
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
      </div>

      <main className="mx-auto max-w-7xl px-4 py-5 md:px-8 md:py-8">
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
      {showMentorButton && (
        <Link to="/voice" aria-label={`Talk to ${guide === "sakhi" ? "Sakhi" : "Saksham"}`} className="mentor-fab group fixed bottom-[76px] right-4 z-50 md:bottom-6 md:right-6">
          <img src={guide === "sakhi" ? "/female-mascot.png" : "/male-mascot.png"} alt="" className="h-14 w-14 object-contain drop-shadow-lg transition group-hover:scale-110" />
          <span className="absolute -bottom-1 right-0 rounded-full bg-[#0b55a2] px-2 py-0.5 text-[10px] font-bold text-white">{guide === "sakhi" ? "Sakhi" : "Saksham"}</span>
        </Link>
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
