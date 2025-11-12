import { useCallback, useEffect, useRef, useState } from "react";
import FileCabinet from "../components/FileCabinet";

const DRAWER_OPEN_DURATION = 650;
const CARD_RISE_DURATION = 700;
const CARD_RISE_HOLD = 180;
const CARD_SETTLE_DELAY = 0;
const CARD_LIFT_DURATION = 900;
const CARD_SHRINK_DURATION = 900;
const CARD_DROP_DURATION = 900;

type CardPhase = "hidden" | "rise" | "settle" | "closingLift" | "closingShrink" | "closingDrop";

export default function Home() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cardPhase, setCardPhase] = useState<CardPhase>("hidden");
  const [viewCount, setViewCount] = useState<number | null>(null);
  const timersRef = useRef<number[]>([]);
  const overviewId = "home-overview-card";

  useEffect(() => {
    fetch("/.netlify/functions/views")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.views === 'number') {
          setViewCount(data.views);
        } else {
          setViewCount(0);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch view count:', err);
        setViewCount(0);
      });
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const schedule = useCallback((delay: number, fn: () => void) => {
    const id = window.setTimeout(() => {
      timersRef.current = timersRef.current.filter((stored) => stored !== id);
      fn();
    }, delay);
    timersRef.current.push(id);
  }, []);

  const handleOpen = useCallback(() => {
    if (cardPhase !== "hidden") return;
    clearTimers();
    setDrawerOpen(true);
    schedule(DRAWER_OPEN_DURATION, () => {
      setCardPhase("hidden"); // Ensure base state is rendered
      schedule(20, () => { // Small delay to force reflow
        setCardPhase("rise");
        schedule(CARD_RISE_DURATION, () => {
          schedule(CARD_RISE_HOLD, () => setCardPhase("settle"));
        });
      });
    });
  }, [cardPhase, clearTimers, schedule]);

  const handleClose = useCallback(() => {
    if (cardPhase === "hidden" || cardPhase === "closingDrop") return;
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    clearTimers();
    setCardPhase("closingLift");
    schedule(CARD_LIFT_DURATION, () => {
      setCardPhase("closingShrink");
      schedule(CARD_SHRINK_DURATION, () => {
        schedule(CARD_SETTLE_DELAY, () => {
          setCardPhase("closingDrop");
          schedule(CARD_DROP_DURATION, () => {
            setCardPhase("hidden");
            setDrawerOpen(false);
          });
        });
      });
    });
  }, [cardPhase, clearTimers, schedule]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const cardVisible =
    cardPhase === "settle" || cardPhase === "closingLift" || cardPhase === "closingShrink" || cardPhase === "closingDrop";

  const cardClasses = ["overview-card", "px-4", "py-5", "sm:px-6", "sm:py-7", "space-y-3"];
  if (cardVisible) cardClasses.push("is-visible");
  if (cardPhase === "rise") cardClasses.push("is-rise");
  if (cardPhase === "settle") cardClasses.push("is-settle");
  if (cardPhase === "closingLift") cardClasses.push("is-closing-up");
  if (cardPhase === "closingShrink") cardClasses.push("is-closing-shrink");
  if (cardPhase === "closingDrop") cardClasses.push("is-closing-drop");

  return (
    <section>
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative flex w-full justify-center">
          <div className="pointer-events-none absolute bottom-full left-0 right-0 mb-4 hidden h-16 bg-gradient-to-b from-ink via-ink/90 to-transparent sm:block" />
          <FileCabinet
            topOpen={isDrawerOpen}
            onTopToggle={handleOpen}
            overviewId={overviewId}
            bottomCounter={viewCount !== null ? viewCount.toString().padStart(4, '0') : '----'}
          />

          <div
            id={overviewId}
            className={cardClasses.join(" ")}
            aria-hidden={cardPhase === "hidden"}
          >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-3 top-3 rounded-lg border border-purple-300/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-inner shadow-purple-700/40 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60"
                style={{
                  backgroundImage: "url(/smallbuttonbackground.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                Refile
              </button>
            <h1 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-2xl">Overview</h1>
            <p className="text-[13px] leading-relaxed text-neutral-200 sm:text-sm">
              The LowLife Files is a digital archive documenting three years of coordinated harassment, manipulation, and defamation within the online darts community.
            </p>
            <p className="text-[13px] leading-relaxed text-neutral-200 sm:text-sm mt-3">
              Created by Mae Hensley (TattooedLowLife), this site provides factual evidence—messages, screenshots, recordings, and posts—to counter false narratives and hold accountable those who targeted her and others in the Granboard scene.
            </p>
            <p className="text-[13px] leading-relaxed text-neutral-200 sm:text-sm mt-3">
              This isn't about revenge—it's about accountability and truth. Use the sidebar to review evidence organized by incident and individual. Every document has been vetted for authenticity and time-stamped.
            </p>
            <p className="text-[13px] leading-relaxed text-neutral-200 sm:text-sm mt-3 italic">
              Silence only protects bullies. This is Mae's way of reclaiming her narrative and ensuring the record reflects truth, not rumors.
            </p>
            <p className="text-[12px] leading-relaxed text-neutral-400 sm:text-xs mt-3">
              <strong>Privacy note:</strong> We log visitor IP addresses server-side to prevent abuse and document harassment incidents. These details are never shared publicly and are only used for security and evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
