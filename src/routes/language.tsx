import { ArrowRight, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSakshamStore, type LanguageCode } from "@/store/useSakshamStore";

const languages = [
  ["English", "Continue in English", "en"], ["हिन्दी", "हिंदी में जारी रखें", "hi"], ["বাংলা", "বাংলায় চালিয়ে যান", "bn"], ["मराठी", "मराठीत सुरू ठेवा", "mr"], ["తెలుగు", "తెలుగులో కొనసాగించండి", "te"], ["தமிழ்", "தமிழில் தொடரவும்", "ta"], ["ગુજરાતી", "ગુજરાતીમાં ચાલુ રાખો", "gu"], ["ಕನ್ನಡ", "ಕನ್ನಡದಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ", "kn"], ["മലയാളം", "മലയാളത്തിൽ തുടരുക", "ml"], ["ਪੰਜਾਬੀ", "ਪੰਜਾਬੀ ਵਿੱਚ ਜਾਰੀ ਰੱਖੋ", "pa"], ["ଓଡ଼ିଆ", "ଓଡ଼ିଆରେ ଜାରି ରଖନ୍ତୁ", "or"], ["অসমীয়া", "অসমীয়াত আগবাঢ়ক", "as"], ["اردو", "اردو میں جاری رکھیں", "ur"],
];

export default function LanguagePage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useSakshamStore();
  const chooseLanguage = (code: string) => { setLanguage(code as LanguageCode); navigate("/login"); };
  return (
    <div className="patriotic-page min-h-screen px-4 py-6 text-[#14365f] md:py-12">
      <div className="mx-auto max-w-5xl"><div className="mb-8 flex items-center justify-between"><img src="/goi.png" alt="Government of India" className="h-14 w-auto md:h-20" /><span className="rounded-full bg-[#eaf5ff] px-3 py-2 text-xs font-bold text-[#0b55a2]">{language.toUpperCase()}</span></div><div className="mx-auto max-w-3xl text-center"><Globe2 className="mx-auto h-12 w-12 text-[#0b55a2]" /><p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0b55a2]">भाषा चुनें • Select language</p><h1 className="mt-2 text-3xl font-black text-[#123d78] md:text-4xl">Choose your preferred language</h1><p className="mt-2 text-[#527092]">Your choice will be remembered throughout PM-AJAY SAKSHAM.</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{languages.map(([name, description, code], index) => <button key={name} type="button" onClick={() => chooseLanguage(code)} className={"group flex items-center justify-between rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg " + (language === code || index < 2 ? "border-[#0b55a2]" : "border-[#dbe7f2]")}><div><p className="text-xl font-bold text-[#123d78]">{name}</p><p className="mt-1 text-xs text-[#527092]">{description}</p></div><ArrowRight className="h-5 w-5 text-[#0b55a2] transition group-hover:translate-x-1" /></button>)}</div></div>
    </div>
  );
}
