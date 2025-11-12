import { KeyboardEvent } from "react";

type FileCabinetProps = {
  topOpen: boolean;
  onTopToggle: () => void;
  overviewId?: string;
  bottomCounter?: string;
};

export default function FileCabinet({ topOpen, onTopToggle, overviewId, bottomCounter }: FileCabinetProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!topOpen && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onTopToggle();
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
      <div className="cabinet">
      <div
        className={`cabinet-drawer interactive ${topOpen ? "is-open" : ""}`}
        role="button"
        tabIndex={0}
        aria-pressed={topOpen}
        aria-expanded={topOpen}
        aria-controls={overviewId}
        onClick={() => {
          if (!topOpen) onTopToggle();
        }}
        onKeyDown={handleKeyDown}
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
      <div className="cabinet-drawer">
        <img
          src="/Parental-Advisory-PNG-Background.png"
          alt="Parental Advisory Explicit Content"
          className="cabinet-magnet cabinet-magnet-bottom-left"
        />
        <img
          src="/chromemagnet.svg"
          alt="Chrome magnet"
          className="cabinet-magnet cabinet-magnet-bottom-right"
        />
        {bottomCounter !== undefined && (
          <div className="cabinet-counter">
            <div className="cabinet-counter-display">
              <span className="cabinet-counter-label">VIEWS</span>
              <div className="cabinet-counter-digits">
                {bottomCounter.slice(0, 2)}<span className="cabinet-counter-colon">:</span>{bottomCounter.slice(2)}
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
