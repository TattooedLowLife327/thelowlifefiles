import { useCallback, useEffect, useRef, useState } from "react";
import FileCabinet from "../components/FileCabinet";

const DRAWER_OPEN_DURATION = 650;
const CARD_RISE_DURATION = 700;
const CARD_RISE_HOLD = 0;
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
      .then((res) => res.json())
      .then((data) => setViewCount(data.views))
      .catch(() => setViewCount(0));
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
            aria-hidden={cardPhase === "hidden" || !cardVisible}
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
              This interactive, mobile-first dossier organizes evidence across platforms: streams, Discord, tournament
              chats, and screenshots. Use the sidebar to browse the timeline, review video exhibits, and see A/B
              contradictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
