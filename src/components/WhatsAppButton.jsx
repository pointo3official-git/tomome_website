import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "917306288896"; // country code + number, no "+" or spaces
const PREFILLED_MESSAGE = "Hi! I'd like to know more about your programs.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PREFILLED_MESSAGE,
)}`;

const AGENT_NAME = "Tomome Team";
const AGENT_AVATAR = "logos/tomome-logo-up.png"; 
const BUBBLE_DELAY_MS = 2500;
const STORAGE_KEY = "wa-bubble-dismissed";

function readDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function saveDismissed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable (private mode etc.) – ignore */
  }
}

function Avatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-sm font-semibold text-white"
        aria-hidden="true"
      >
        {AGENT_NAME.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={AGENT_AVATAR}
      alt=""
      onError={() => setFailed(true)}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
    />
  );
}

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);

  // Show the notification after a short delay, unless the user already closed it
  useEffect(() => {
    if (readDismissed()) return;
    const timer = setTimeout(() => setShowBubble(true), BUBBLE_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const closeBubble = () => {
    setShowBubble(false);
    saveDismissed();
  };

  return (
    <div
      className="fixed right-4 z-50 flex flex-col items-end gap-3 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      {/* Notification bubble */}
      <div
        role="status"
        aria-live="polite"
        className={`relative w-[17rem] max-w-[calc(100vw-2rem)] origin-bottom-right rounded-2xl bg-white p-3 pr-9 shadow-xl ring-1 ring-black/5 transition-all duration-300 ${
          showBubble
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeBubble}
          className="flex items-start gap-3"
        >
          <Avatar />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900">{AGENT_NAME}</p>
            <p className="mt-0.5 text-sm leading-snug text-gray-600">
              Hi 👋 Have any questions? Just send us a “Hi” on WhatsApp and
              we’ll be happy to help!
            </p>
          </div>
        </a>

        {/* Close button (sibling of the link so clicks don't navigate) */}
        <button
          type="button"
          onClick={closeBubble}
          aria-label="Close message"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>

        {/* Little tail pointing at the icon */}
        <span
          className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white ring-1 ring-black/5"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:h-16 sm:w-16"
      >
        <svg viewBox="0 0 16 16" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>

        {/* Notification badge (hidden once the bubble is dismissed) */}
        {showBubble && (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
              1
            </span>
          </span>
        )}
      </a>
    </div>
  );
}