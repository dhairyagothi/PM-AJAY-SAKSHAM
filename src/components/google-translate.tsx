import { useEffect } from "react";

type TranslateWindow = Window & {
  googleTranslateInit?: () => void;
  google?: {
    translate?: {
      TranslateElement?: new (options: Record<string, unknown>, elementId: string) => unknown;
    };
  };
};

const INDIAN_LANGUAGES = "en,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,mai,sa,sd,ks,ne, kok,doi".replace(" ", "");

export default function GoogleTranslate({ visible = true }: { visible?: boolean }) {
  useEffect(() => {
    const translateWindow = window as TranslateWindow;

    translateWindow.googleTranslateInit = () => {
      if (!translateWindow.google?.translate?.TranslateElement) return;
      new translateWindow.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: INDIAN_LANGUAGES,
          autoDisplay: false,
        },
        "google_element",
      );
    };

    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.id = "google_translate_script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      translateWindow.googleTranslateInit();
    }

    const hideBanner = () => {
      document.querySelectorAll(".goog-te-banner-frame, .skiptranslate iframe").forEach((element) => {
        (element as HTMLElement).style.display = "none";
      });
      document.body.style.top = "0";
    };

    const interval = window.setInterval(hideBanner, 200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className={visible ? "translate-shell" : "translate-runtime"} aria-label="Choose language">
      <span className="mr-2">Language</span>
      <div id="google_element" />
    </div>
  );
}
