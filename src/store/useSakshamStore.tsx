import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type GuideChoice = "saksham" | "sakhi";
export type LanguageCode = "en" | "hi" | "bn" | "te" | "mr" | "ta" | "ur" | "gu" | "kn" | "ml" | "or" | "pa" | "as";

type SakshamStore = {
  guide: GuideChoice;
  language: LanguageCode;
  setGuide: (guide: GuideChoice) => void;
  setLanguage: (language: LanguageCode) => void;
};

const StoreContext = createContext<SakshamStore | null>(null);

function translatePage(language: LanguageCode) {
  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (!combo) return;
  const targetValue = language === "en" ? "" : language;
  if (combo.value === targetValue) return;
  combo.value = targetValue;
  combo.dispatchEvent(new Event("change"));
}

export function SakshamProvider({ children }: { children: ReactNode }) {
  const [guide, setGuideState] = useState<GuideChoice>("saksham");
  const [language, setLanguageState] = useState<LanguageCode>("en");

  const setGuide = (value: GuideChoice) => {
    setGuideState(value);
  };

  const setLanguage = (value: LanguageCode) => {
    setLanguageState(value);
    if (value !== "en") window.setTimeout(() => translatePage(value), 150);
  };

  useEffect(() => {
    if (language === "en") return;
    const timer = window.setInterval(() => translatePage(language), 500);
    return () => window.clearInterval(timer);
  }, [language]);

  const value = useMemo(() => ({ guide, language, setGuide, setLanguage }), [guide, language]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useSakshamStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error("useSakshamStore must be used within SakshamProvider");
  return store;
}
