import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Keyboard, Mic, UserRound, Volume2 } from "lucide-react";

import { GovernmentLayout } from "@/components/government-layout";

type RecognitionLike = {
  lang: string;
  interimResults: boolean;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechWindow = Window & {
  SpeechRecognition?: new () => RecognitionLike;
  webkitSpeechRecognition?: new () => RecognitionLike;
};

const languages = [
  {
    label: "English",
    code: "en-IN",
    prompt: "Hello! I am Saksham. What kind of work are you looking for?",
  },
  {
    label: "हिन्दी",
    code: "hi-IN",
    prompt: "Namaste! Main Saksham hoon. Aap kis tarah ka kaam dhoondh rahe hain?",
  },
  {
    label: "मराठी",
    code: "mr-IN",
    prompt: "Namaskar! Mi Saksham aahe. Tumhala kontya prakarcha kaam have aahe?",
  },
];

export default function VoicePage() {
  const [languageIndex, setLanguageIndex] = useState(1);
  const [status, setStatus] = useState("Tap to speak");
  const [userText, setUserText] = useState("");
  const [textInput, setTextInput] = useState("");
  const recognitionRef = useRef<RecognitionLike | null>(null);
  const language = languages[languageIndex] ?? languages[0];

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language.code;
    utterance.onstart = () => setStatus("Speaking...");
    utterance.onend = () => setStatus("Tap to speak");
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    const browserWindow = window as SpeechWindow;
    const Recognition = browserWindow.SpeechRecognition ?? browserWindow.webkitSpeechRecognition;
    if (!Recognition) {
      setStatus("Voice input is not available in this browser. Type instead.");
      return;
    }

    const recognition = new Recognition();
    recognition.lang = language.code;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript ?? "";
      setUserText(transcript);
      const response =
        languageIndex === 1
          ? "Dhanyavaad. Main aapke liye aapke hunar aur zile ke hisaab se avsar dekh raha hoon."
          : languageIndex === 2
            ? "Dhanyavaad. Mi tumchya kaushalyanshi ani jilhyashi julnarya sandhi shodhat aahe."
            : "Thank you. I will find opportunities that match your skills and district.";
      setStatus("I am finding opportunities for you...");
      speak(response);
    };
    recognition.onerror = () =>
      setStatus("I could not hear that. Please try again or type instead.");
    recognitionRef.current = recognition;
    setStatus("Listening...");
    recognition.start();
  };

  const submitText = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = textInput.trim();
    if (!message) return;
    setUserText(message);
    setTextInput("");
    const response = "I will look for opportunities that match your skills and district.";
    setStatus(response);
    speak(response);
  };

  return (
    <GovernmentLayout>
      <div className="mx-auto max-w-xl">
        <div className="mb-3 flex items-center gap-3">
          <Link
            to="/home"
            aria-label="Back home"
            className="grid h-9 w-9 place-items-center rounded-full text-[#0B3A82] hover:bg-[#EEF5FC]"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold text-[#12305B]">Talk to Saksham</h1>
        </div>

        <div
          className="grid grid-cols-3 rounded-full bg-[#EAF1FA] p-1"
          role="group"
          aria-label="Choose conversation language"
        >
          {languages.map((item, index) => (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguageIndex(index)}
              aria-pressed={languageIndex === index}
              className={`rounded-full px-2 py-2 text-sm font-semibold ${languageIndex === index ? "bg-[#0B55B7] text-white shadow-sm" : "text-[#52677F]"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center py-5">
          <div className="grid h-36 w-36 place-items-center rounded-full bg-[#E8F2FF] text-[#0B3A82]">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-b from-white to-[#D4E7FF] shadow-inner">
              <UserRound className="h-20 w-20 stroke-[1.4]" />
            </div>
          </div>
          <p className="mt-4 text-center text-lg font-bold text-[#12305B]">Namaste!</p>
          <p className="mt-2 max-w-md rounded-2xl rounded-bl-sm border border-[#C9DDF6] bg-[#EAF3FF] px-5 py-4 text-center text-lg leading-relaxed text-[#12305B]">
            {language.prompt}
          </p>
          <button
            type="button"
            onClick={() => speak(language.prompt)}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0B3A82]"
          >
            <Volume2 className="h-4 w-4" /> Listen to Saksham
          </button>
        </div>

        <div className="rounded-xl border border-[#D6E2F0] bg-white p-3 text-center">
          <div className="flex h-8 items-center justify-center gap-1" aria-hidden="true">
            {[8, 14, 20, 11, 25, 16, 29, 15, 22, 10, 26, 17, 30, 12, 22, 15, 8].map(
              (height, index) => (
                <span key={index} className="w-1 rounded-full bg-[#65A1E8]" style={{ height }} />
              ),
            )}
          </div>
          <p aria-live="polite" className="mt-2 min-h-5 text-sm text-[#52677F]">
            {userText ? `You: ${userText}` : status}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <button
            type="button"
            onClick={startListening}
            aria-label="Tap to speak"
            className="grid h-20 w-20 place-items-center rounded-full bg-[#0B55B7] text-white shadow-[0_0_0_10px_#DCEBFF] transition hover:bg-[#0B3A82] active:scale-95"
          >
            <Mic className="h-9 w-9" />
          </button>
          <span className="mt-4 text-sm font-bold text-[#12305B]">Tap to Speak</span>
        </div>

        <form onSubmit={submitText} className="mt-7 flex gap-2">
          <label htmlFor="voice-message" className="sr-only">
            Type a message
          </label>
          <input
            id="voice-message"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            placeholder="Type instead"
            className="min-w-0 flex-1 rounded-md border border-[#D6DEE8] bg-white px-3 py-3 text-sm outline-none focus:border-[#0B55B7]"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="inline-flex items-center gap-2 rounded-md bg-[#0B3A82] px-4 text-sm font-semibold text-white"
          >
            <Keyboard className="h-4 w-4" /> Send
          </button>
        </form>
      </div>
    </GovernmentLayout>
  );
}
