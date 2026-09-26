import { MapPin, Navigation, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function LocationAccess() {
  const [location, setLocation] = useState("Bhopal, Madhya Pradesh");
  const [status, setStatus] = useState<"idle" | "loading" | "denied">("idle");

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setStatus("denied");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation(coords.latitude.toFixed(4) + "° N, " + coords.longitude.toFixed(4) + "° E");
        setStatus("idle");
      },
      () => setStatus("denied"),
      { enableHighAccuracy: false, timeout: 8000 },
    );
  };

  return (
    <div className="rounded-2xl border border-[#cfe2f5] bg-[#f4f9ff] p-4">
      <div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dceeff] text-[#0b55a2]"><MapPin className="h-5 w-5" /></span><div className="min-w-0 flex-1"><p className="text-xs font-bold uppercase tracking-wide text-[#0b55a2]">Your location</p><p className="mt-1 font-bold text-[#123d78]">{location}</p><p className="mt-1 text-xs text-[#527092]">{status === "denied" ? "Location permission was not available. Showing your saved demo district." : "Used only to show nearby opportunities in this prototype."}</p></div></div>
      <button type="button" onClick={requestLocation} className="mt-3 inline-flex items-center gap-2 rounded-xl border border-[#b9d9f6] bg-white px-3 py-2 text-xs font-bold text-[#0b55a2] hover:bg-[#eaf5ff]">{status === "loading" ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Navigation className="h-4 w-4" />} {status === "loading" ? "Finding location…" : "Use my current location"}</button>
    </div>
  );
}

