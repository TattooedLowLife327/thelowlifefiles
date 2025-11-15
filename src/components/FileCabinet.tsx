import { KeyboardEvent, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PAGE_MAPPING: Record<string, string> = {
  "AGD": "p-americangran",
  "Unwanted": "p-unwanted",
  "Slacker": "p-slacker",
  "OutKast": "p-outkast",
  "Afterlife": "p-afterlife",
  "Main Stage Night Trips": "p-mainstage",
  "LVL MP": "p-lvlmp",
  "GranDarts": "p-grandarts",
  "TWITCH STREAMERS": "p-twitch",
  "365": "p-365",
  "Nations": "p-nations",
  "The Hub": "p-hub",
  "Mindful Minds": "p-mindful",
  "Darts Den": "p-dartsden",
  "Granboard Vets": "p-granboardvets",
  "Flight Club": "p-flightclub",
  "Shooters": "p-shooters",
  "FTN": "p-ftn",
};

const DRAWER_FILES = {
  top: [
    // Top row (back)
    { name: "AGD", image: "/AGDTAB.png", position: "left" as const, row: 0 },
    { name: "Unwanted", image: "/UNWANTEDTAB.png", position: "right" as const, row: 0 },
    { name: "Slacker", image: "/SLACKERTAB.png", position: "center" as const, row: 0 },
    // Middle row
    { name: "OutKast", image: "/OUTKASTTAB.png", position: "left" as const, row: 1 },
    { name: "Afterlife", image: "/THEEAFTERLIFETAB.png", position: "right" as const, row: 1 },
    { name: "Main Stage Night Trips", image: "/MAINSTAGE-NIGHTTRIPSTAB.png", position: "center" as const, row: 1 },
    // Bottom row (front)
    { name: "LVL MP", image: "/LVLMPTAB.png", position: "left" as const, row: 2 },
    { name: "GranDarts", image: "/GRANDARTSTAB.png", position: "right" as const, row: 2 },
    { name: "TWITCH STREAMERS", image: "/TWTICHSTREAMERSTAB.png", position: "center" as const, row: 2 },
  ],
  bottom: [
    // Top row (back)
    { name: "365", image: "/365TAB.png", position: "left" as const, row: 0 },
    { name: "Nations", image: "/NATIONSTAB.png", position: "right" as const, row: 0 },
    { name: "The Hub", image: "/THEHUBTAB.png", position: "center" as const, row: 0 },
    // Middle row
    { name: "Mindful Minds", image: "/MINDFULMINDSTAB.png", position: "left" as const, row: 1 },
    { name: "Darts Den", image: "/DARTSDENTAB.png", position: "right" as const, row: 1 },
    { name: "Granboard Vets", image: "/GRANBOARDVETSTAB.png", position: "center" as const, row: 1 },
    // Bottom row (front)
    { name: "Flight Club", image: "/FLIGHTCLUBTAB.png", position: "left" as const, row: 2 },
    { name: "Shooters", image: "/SHOOTERSTAB.png", position: "right" as const, row: 2 },
    { name: "FTN", image: "/FTNTAB.png", position: "center" as const, row: 2 },
  ],
};

export default function FileCabinetPreview() {
  const navigate = useNavigate();
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [isChromeMagnetActive, setChromeMagnetActive] = useState(true);
  const [showChromeTip, setShowChromeTip] = useState(false);
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [topEntranceComplete, setTopEntranceComplete] = useState(false);
  const [bottomEntranceComplete, setBottomEntranceComplete] = useState(false);
  const tipTimerRef = useRef<number | null>(null);

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

  useEffect(() => {
    const timer = window.setTimeout(() => setChromeMagnetActive(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (tipTimerRef.current) {
        window.clearTimeout(tipTimerRef.current);
      }
    };
  }, []);

  const showTipTemporarily = () => {
    if (tipTimerRef.current) {
      window.clearTimeout(tipTimerRef.current);
    }
    setShowChromeTip(true);
    tipTimerRef.current = window.setTimeout(() => setShowChromeTip(false), 2200);
  };

  const handleChromeClick = () => {
    showTipTemporarily();
  };

  const handleChromeFocus = () => {
    showTipTemporarily();
  };

  const handleChromeHover = (visible: boolean) => {
    if (tipTimerRef.current) {
      window.clearTimeout(tipTimerRef.current);
      tipTimerRef.current = null;
    }
    setShowChromeTip(visible);
  };

  const handleTabClick = (fileName: string, isMobile: boolean) => {
    if (isMobile) {
      if (selectedTab === fileName) {
        // Second click - navigate
        const pageId = PAGE_MAPPING[fileName];
        if (pageId) {
          navigate(`/page/${pageId}`);
        }
      } else {
        // First click - just raise the tab
        setSelectedTab(fileName);
      }
    } else {
      // Desktop - navigate immediately
      const pageId = PAGE_MAPPING[fileName];
      if (pageId) {
        navigate(`/page/${pageId}`);
      }
    }
  };

  const handleTopKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!topOpen && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      setBottomOpen(false);
      setTopOpen(true);
    }
  };

  const handleTopClick = () => {
    if (!topOpen) {
      if (bottomOpen) {
        setBottomOpen(false);
        setBottomEntranceComplete(false);
        setSelectedTab(null);
        setTimeout(() => setTopOpen(true), 700);
      } else {
        setTopOpen(true);
      }
      setTopEntranceComplete(false);
    } else {
      setTopOpen(false);
      setSelectedTab(null);
    }
  };

  const handleBottomClick = () => {
    if (!bottomOpen) {
      if (topOpen) {
        setTopOpen(false);
        setTopEntranceComplete(false);
        setSelectedTab(null);
        setTimeout(() => setBottomOpen(true), 700);
      } else {
        setBottomOpen(true);
      }
      setBottomEntranceComplete(false);
    } else {
      setBottomOpen(false);
      setSelectedTab(null);
    }
  };

  return (
    <>
      <img
        src="/purpledart.png"
        alt="Purple dart"
        className="cabinet-dart"
        style={{
          position: 'absolute',
          top: '-7.5px',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%) rotate(-81deg)',
          width: '25px',
          height: 'auto',
          zIndex: 0
        }}
      />
      <img
        src="/purpledart.png"
        alt="Purple dart"
        className="cabinet-dart"
        style={{
          position: 'absolute',
          top: '-7.5px',
          left: 'calc(50% - 30px)',
          transform: 'translateX(-50%) translateY(-50%) rotate(-81deg)',
          width: '25px',
          height: 'auto',
          zIndex: 0
        }}
      />
      <img
        src="/purpledart.png"
        alt="Purple dart"
        className="cabinet-dart"
        style={{
          position: 'absolute',
          top: '-7.5px',
          left: 'calc(50% + 30px)',
          transform: 'translateX(-50%) translateY(-50%) rotate(-81deg) scaleX(-1)',
          width: '25px',
          height: 'auto',
          zIndex: 0
        }}
      />
      <div className="cabinet" style={{ position: 'relative', zIndex: 100 }}>
        <AnimatePresence>
          {topOpen && (
            <div className="file-tabs-container-outside" style={{ top: '-82px' }}>
              {DRAWER_FILES.top.map((file, index) => {
                const getPosition = (position: string) => {
                  if (position === 'left') return { left: '2%' };
                  if (position === 'center') return { left: '50%' };
                  if (position === 'right') return { right: '2%' };
                  return { left: '0' };
                };
                const getTransform = (position: string) => {
                  return position === 'center' ? '-50%' : 0;
                };
                const getExitOrder = (row: number, position: string) => {
                  const posOrder = position === 'right' ? 0 : position === 'center' ? 1 : 2;
                  return row * 3 + posOrder;
                };
                const getEnterOrder = (row: number, position: string) => {
                  const posOrder = position === 'left' ? 0 : position === 'center' ? 1 : 2;
                  return (2 - row) * 3 + posOrder;
                };
                const isMobile = window.innerWidth < 768;
                const isSelected = selectedTab === file.name;
                return (
                  <motion.div
                    key={file.name}
                    className="file-tab"
                    style={{
                      ...getPosition(file.position),
                      bottom: `${(2 - file.row) * 12}px`,
                      zIndex: 5 + file.row,
                      cursor: 'pointer'
                    }}
                    initial={{
                      y: 100,
                      x: getTransform(file.position)
                    }}
                    animate={{
                      y: isSelected && isMobile ? -10 : 0,
                      x: getTransform(file.position),
                    }}
                    transition={{
                      y: {
                        delay: (topEntranceComplete || isSelected) ? 0 : 0.3 + (getEnterOrder(file.row, file.position) * 0.08),
                        duration: (topEntranceComplete || isSelected) ? 0.2 : 0.3,
                        ease: "easeOut"
                      },
                      x: {
                        delay: topEntranceComplete ? 0 : 0.3 + (getEnterOrder(file.row, file.position) * 0.08),
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    onAnimationComplete={() => {
                      if (!topEntranceComplete && getEnterOrder(file.row, file.position) === 8) {
                        setTopEntranceComplete(true);
                      }
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    exit={{
                      y: 50,
                      x: getTransform(file.position),
                      transition: {
                        delay: getExitOrder(file.row, file.position) * 0.05,
                        duration: 0.15,
                        ease: "easeIn",
                      }
                    }}
                    onClick={() => handleTabClick(file.name, isMobile)}
                  >
                    <img
                      src={file.image}
                      alt={file.name}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        <div
          className={`cabinet-drawer interactive ${topOpen ? "is-open" : ""}`}
          role="button"
          tabIndex={0}
          aria-pressed={topOpen}
          aria-expanded={topOpen}
          onClick={handleTopClick}
          onKeyDown={handleTopKeyDown}
          style={{ zIndex: 150 }}
        >
          <img
            src="/ttlllogo.png"
            alt="Tattooed Low Life magnet"
            className="cabinet-magnet cabinet-magnet-left"
          />
          <img
            src="/clickme.svg"
            alt="Click me sticky note"
            style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              width: '65px',
              height: 'auto',
              zIndex: 3,
              pointerEvents: 'none'
            }}
          />
          <img
            src="/zfgmagnets.png"
            alt="ZFG magnet"
            className="cabinet-magnet cabinet-magnet-center"
          />
          <div className="cabinet-wrapper">
            <span className="cabinet-label" />
            <span className="cabinet-handle" />
          </div>
          <div className="cabinet-files" />
        </div>

        <AnimatePresence>
          {bottomOpen && (
            <div className="file-tabs-container-outside" style={{ top: '92px', zIndex: 175 }}>
              {DRAWER_FILES.bottom.map((file, index) => {
                const getPosition = (position: string) => {
                  if (position === 'left') return { left: '2%' };
                  if (position === 'center') return { left: '50%' };
                  if (position === 'right') return { right: '2%' };
                  return { left: '0' };
                };
                const getTransform = (position: string) => {
                  return position === 'center' ? '-50%' : 0;
                };
                const getExitOrder = (row: number, position: string) => {
                  const posOrder = position === 'right' ? 0 : position === 'center' ? 1 : 2;
                  return row * 3 + posOrder;
                };
                const getEnterOrder = (row: number, position: string) => {
                  const posOrder = position === 'left' ? 0 : position === 'center' ? 1 : 2;
                  return (2 - row) * 3 + posOrder;
                };
                const isMobile = window.innerWidth < 768;
                const isSelected = selectedTab === file.name;
                return (
                  <motion.div
                    key={file.name}
                    className="file-tab"
                    style={{
                      ...getPosition(file.position),
                      bottom: `${(2 - file.row) * 12}px`,
                      zIndex: 5 + file.row,
                      cursor: 'pointer'
                    }}
                    initial={{
                      y: 100,
                      x: getTransform(file.position)
                    }}
                    animate={{
                      y: isSelected && isMobile ? -10 : 0,
                      x: getTransform(file.position),
                    }}
                    transition={{
                      y: {
                        delay: (bottomEntranceComplete || isSelected) ? 0 : 0.3 + (getEnterOrder(file.row, file.position) * 0.08),
                        duration: (bottomEntranceComplete || isSelected) ? 0.2 : 0.3,
                        ease: "easeOut"
                      },
                      x: {
                        delay: bottomEntranceComplete ? 0 : 0.3 + (getEnterOrder(file.row, file.position) * 0.08),
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    onAnimationComplete={() => {
                      if (!bottomEntranceComplete && getEnterOrder(file.row, file.position) === 8) {
                        setBottomEntranceComplete(true);
                      }
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    exit={{
                      y: 50,
                      x: getTransform(file.position),
                      transition: {
                        delay: getExitOrder(file.row, file.position) * 0.05,
                        duration: 0.15,
                        ease: "easeIn",
                      }
                    }}
                    onClick={() => handleTabClick(file.name, isMobile)}
                  >
                    <img
                      src={file.image}
                      alt={file.name}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        <div
          className={`cabinet-drawer ${bottomOpen ? "is-open" : ""}`}
          role="button"
          tabIndex={0}
          onClick={handleBottomClick}
          style={{ zIndex: 200 }}
        >
          <button
            type="button"
            className="cabinet-magnet cabinet-magnet-bottom-left parental-tip-trigger"
            aria-label="Parental advisory"
          >
            <img
              src="/Parental-Advisory-PNG-Background.png"
              alt=""
              aria-hidden="true"
            />
            <span className="parental-tip">
              THE LOWLIFES OF GRANBOARD IS NOT RESPONSIBLE FOR ANY FEELINGS OF BEING CALLED OUT, SHOTS FIRED, OR BRUISED EGOS.
            </span>
          </button>
          <button
            type="button"
            className={`cabinet-magnet cabinet-magnet-bottom-right chrome-magnet ${isChromeMagnetActive ? "is-animating" : ""}`}
            onClick={handleChromeClick}
            onFocus={handleChromeFocus}
            onBlur={() => handleChromeHover(false)}
            onMouseEnter={() => handleChromeHover(true)}
            onMouseLeave={() => handleChromeHover(false)}
            aria-label="Chrome magnet — tap for best browser tip"
          >
            <img src="/chromemagnet.svg" alt="" aria-hidden="true" />
            <span className={`chrome-tip ${showChromeTip ? "is-visible" : ""}`}>Best viewed in Chrome</span>
          </button>
          {viewCount !== null && (
            <div className="cabinet-counter">
              <div className="cabinet-counter-display">
                <span className="cabinet-counter-label">VIEWS</span>
                <div className="cabinet-counter-digits">
                  {viewCount.toString().padStart(4, '0').slice(0, 2)}<span className="cabinet-counter-colon">:</span>{viewCount.toString().padStart(4, '0').slice(2)}
                </div>
              </div>
            </div>
          )}
          <div className="cabinet-wrapper">
            <span className="cabinet-label" />
            <span className="cabinet-handle" />
          </div>
          <div className="cabinet-files" />
        </div>
      </div>
    </>
  );
}
