import { ArrowLeft, Keyboard, Languages, Mic, Send, Volume2 } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GovernmentLayout } from "@/components/government-layout";
import { useSakshamStore, type LanguageCode } from "@/store/useSakshamStore";

type RecognitionLike = {
  lang: string; interimResults: boolean;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: (() => void) | null; start: () => void; stop: () => void;
};
type SpeechWindow = Window & { SpeechRecognition?: new () => RecognitionLike; webkitSpeechRecognition?: new () => RecognitionLike };
const speechLanguages: Array<{ label: string; code: LanguageCode; speechCode: string }> = [
  { label: "English", code: "en", speechCode: "en-IN" }, { label: "हिन्दी", code: "hi", speechCode: "hi-IN" }, { label: "मराठी", code: "mr", speechCode: "mr-IN" }, { label: "বাংলা", code: "bn", speechCode: "bn-IN" }, { label: "தமிழ்", code: "ta", speechCode: "ta-IN" },
];
const hindiCommands = [
  "मेरे लिए नौकरी ढूंढो",
  "नजदीकी अवसर दिखाओ",
  "मेरी पढ़ाई जारी रखो",
  "मेरा प्रोफाइल दिखाओ",
  "मेरा करियर पासपोर्ट दिखाओ",
];

export default function VoicePage() {
  const navigate = useNavigate();
  const { guide, setGuide, language, setLanguage } = useSakshamStore();
  const [status, setStatus] = useState("Tap the microphone to speak");
  const [userText, setUserText] = useState("");
  const [textInput, setTextInput] = useState("");
  const recognitionRef = useRef<RecognitionLike | null>(null);
  const selectedLanguage = speechLanguages.find((item) => item.code === language) ?? speechLanguages[0];
  const guideName = guide === "sakhi" ? "Sakhi" : "Saksham";

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage.speechCode;
    utterance.onstart = () => setStatus("Speaking...");
    utterance.onend = () => setStatus("Tap the microphone to speak");
    window.speechSynthesis.speak(utterance);
  };

  const handleCommand = (message: string) => {
    const normalized = message.toLowerCase();
    setUserText(message);
    if (normalized.includes("opportun") || normalized.includes("job") || normalized.includes("काम") || normalized.includes("नौकरी") || normalized.includes("अवसर") || normalized.includes("मौके")) {
      setStatus("Finding nearby opportunities...");
      speak(guideName + " found opportunities near Bhopal. Opening them now.");
      window.setTimeout(() => navigate("/opportunities"), 900);
      return;
    }
    if (normalized.includes("learn") || normalized.includes("course") || normalized.includes("सीख") || normalized.includes("पढ़ाई") || normalized.includes("कोर्स")) {
      setStatus("Opening your learning path...");
      speak("Here is your Solar Technician learning path.");
      window.setTimeout(() => navigate("/learning"), 900);
      return;
    }
    if (normalized.includes("प्रोफाइल")) {
      setStatus("आपका प्रोफाइल खोल रहा हूं...");
      speak("आपका प्रोफाइल यहां है।");
      window.setTimeout(() => navigate("/profile"), 900);
      return;
    }
    if (normalized.includes("पासपोर्ट") || normalized.includes("करियर पासपोर्ट")) {
      setStatus("आपका करियर पासपोर्ट खोल रहा हूं...");
      speak("आपका करियर पासपोर्ट यहां है।");
      window.setTimeout(() => navigate("/career-passport"), 900);
      return;
    }
    const response = "I heard you. I can help you find nearby opportunities, continue learning, or understand your profile.";
    setStatus(response); speak(response);
  };

  const startListening = () => {
    const browserWindow = window as SpeechWindow;
    const Recognition = browserWindow.SpeechRecognition ?? browserWindow.webkitSpeechRecognition;
    if (!Recognition) { setStatus("Speech recognition is unavailable here. Please use the text box below."); return; }
    const recognition = new Recognition();
    recognition.lang = selectedLanguage.speechCode;
    recognition.interimResults = false;
    recognition.onresult = (event) => handleCommand(event.results[0]?.[0]?.transcript ?? "");
    recognition.onerror = () => setStatus("I could not hear that. Please try again or type instead.");
    recognitionRef.current = recognition;
    setStatus("Listening..."); recognition.start();
  };

  const submitText = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = textInput.trim();
    if (!message) return;
    setTextInput(""); handleCommand(message);
  };

  const prompt = selectedLanguage.code === "hi" ? "Namaste! Aap kis tarah ka kaam dhoondh rahe hain?" : "Hello! What kind of work or learning opportunity are you looking for?";

  return (
    <GovernmentLayout>
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center gap-3"><Link to="/home" aria-label="Back home" className="grid h-9 w-9 place-items-center rounded-full text-[#0B3A82] hover:bg-[#EEF5FC]"><ArrowLeft className="h-5 w-5" /></Link><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b55a2]">AI career companion</p><h1 className="text-2xl font-black text-[#123d78]">Talk to {guideName}</h1></div></div>
        <div className="grid gap-3 rounded-2xl border border-[#cfe2f5] bg-white p-3 shadow-sm sm:grid-cols-2"><label className="flex items-center gap-2 rounded-xl bg-[#f4f9ff] px-3 py-2 text-xs font-bold text-[#123d78]"><Languages className="h-4 w-4 text-[#0b55a2]" /><span className="sr-only">Select language</span><select value={selectedLanguage.code} onChange={(event) => setLanguage(event.target.value as LanguageCode)} className="w-full bg-transparent outline-none"><option value="en">English</option><option value="hi">हिन्दी</option><option value="mr">मराठी</option><option value="bn">বাংলা</option><option value="ta">தமிழ்</option></select></label><label className="flex items-center gap-2 rounded-xl bg-[#f4fbf6] px-3 py-2 text-xs font-bold text-[#087748]"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#168c57] text-[10px] text-white">✓</span><span className="sr-only">Select Saksham or Sakhi</span><select value={guide} onChange={(event) => setGuide(event.target.value as "saksham" | "sakhi")} className="w-full bg-transparent outline-none"><option value="saksham">Saksham</option><option value="sakhi">Sakhi</option></select></label></div>
        <section className="mt-4 overflow-hidden rounded-3xl border border-[#cfe2f5] bg-gradient-to-b from-[#eaf5ff] to-white shadow-sm"><div className="flex flex-col items-center px-5 pt-5 text-center"><div className="relative h-56 w-52"><div className="absolute inset-4 rounded-full bg-white/80 blur-xl" /><img src={guide === "sakhi" ? "/female-mascot.png" : "/male-mascot.png"} alt={guideName} className="relative h-full w-full object-contain motion-float" /></div><p className="text-xl font-black text-[#123d78]">Namaste, I’m {guideName}</p><p className="mt-1 text-sm text-[#527092]">Your career and learning companion</p><div className="mt-4 max-w-lg rounded-2xl rounded-bl-sm border border-[#b9d9f6] bg-white px-5 py-4 text-left text-base leading-relaxed text-[#123d78] shadow-sm">{prompt}</div><button type="button" onClick={() => speak(prompt)} className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#0b55a2]"><Volume2 className="h-4 w-4" /> Listen</button></div><div className="mx-4 mb-4 mt-5 rounded-2xl bg-white p-4 text-center shadow-sm"><div className="flex h-8 items-center justify-center gap-1" aria-hidden="true">{[8, 14, 20, 11, 25, 16, 29, 15, 22, 10, 26, 17, 30, 12, 22].map((height, index) => <span key={index} className="w-1 rounded-full bg-[#65a1e8]" style={{ height }} />)}</div><p className="mt-2 min-h-5 text-sm text-[#52677f]" aria-live="polite">{userText ? "You: " + userText : status}</p></div></section>
        <button type="button" onClick={startListening} className="mx-auto mt-8 grid h-20 w-20 place-items-center rounded-full bg-[#0b55a2] text-white shadow-[0_0_0_10px_#dcebff] transition hover:bg-[#083e7d] active:scale-95"><Mic className="h-9 w-9" /></button><p className="mt-4 text-center text-sm font-bold text-[#123d78]">Tap to speak</p>
        <div className="mt-6 rounded-2xl border border-[#dbe7f2] bg-[#f7fbff] p-4"><p className="text-xs font-bold uppercase tracking-wide text-[#0b55a2]">{selectedLanguage.code === "hi" ? "हिंदी में बोलकर आज़माएं" : "Try a demo command"}</p><p className="mt-1 text-xs text-[#527092]">{selectedLanguage.code === "hi" ? "इनमें से कोई भी वाक्य बोलें:" : "Speak or tap any of these commands:"}</p><div className="mt-3 flex flex-wrap gap-2">{(selectedLanguage.code === "hi" ? hindiCommands : ["Find nearby opportunities", "Continue my learning", "Show my profile"]).map((command) => <button key={command} type="button" onClick={() => handleCommand(command)} className="rounded-full border border-[#b9d9f6] bg-white px-3 py-2 text-xs font-semibold text-[#123d78] hover:bg-[#eaf5ff]">{command}</button>)}</div></div>
        <form onSubmit={submitText} className="mt-4 flex gap-2"><input aria-label="Type a message" value={textInput} onChange={(event) => setTextInput(event.target.value)} placeholder="Type instead" className="min-w-0 flex-1 rounded-xl border border-[#cfe2f5] bg-white px-4 py-3 text-sm outline-none focus:border-[#0b55a2]" /><button type="submit" aria-label="Send message" className="inline-flex items-center gap-2 rounded-xl bg-[#0b55a2] px-4 text-sm font-bold text-white"><Send className="h-4 w-4" /> Send</button></form>
      </div>
    </GovernmentLayout>
  );
}
