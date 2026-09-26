import { Link } from "react-router-dom";

export default function LanguagePage() {
  return (
    <div className="min-h-screen bg-[#EEF5FC] p-4 py-8 text-[#1F2937]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Select language</p>
          <h2 className="mt-2 text-3xl font-bold text-[#12305B]">Choose your language</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/login" className="rounded-2xl border border-[#D6DEE8] bg-white p-8 text-left shadow-sm transition hover:border-[#0B3A82] hover:shadow-md">
            <p className="text-2xl font-bold text-[#0B3A82]">English</p>
            <p className="mt-2 text-sm text-[#5B6573]">Continue in English</p>
          </Link>
          <Link to="/login" className="rounded-2xl border border-[#D6DEE8] bg-white p-8 text-left shadow-sm transition hover:border-[#0B3A82] hover:shadow-md">
            <p className="text-2xl font-bold text-[#0B3A82]">हिन्दी</p>
            <p className="mt-2 text-sm text-[#5B6573]">हिंदी में जारी रखें</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
