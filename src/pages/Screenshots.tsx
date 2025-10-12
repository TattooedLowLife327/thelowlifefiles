type ExhibitPair = {
  id: string;
  claim: string;       // A: what was said
  counter: string;     // B: contradictory evidence
  aImage?: string;
  bImage?: string;
  links?: { label: string; href: string }[];
};

export default function Screenshots() {
  const pairs: ExhibitPair[] = [
    {
      id: 'ex1',
      claim: 'Claim A: “We apologized yesterday in chat.”',
      counter: 'Exhibit B: Activity feed shows gifted subs on Oct 4; no explicit apology in chat (10:40).',
      links: [{ label: 'Stream Clip', href: '#' }, { label: 'Chat Log', href: '#' }]
    }
  ];

  return (
    <section className="card p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3">Screenshots & Contradictions (A vs. B)</h2>
      <div className="space-y-4">
        {pairs.map(p => (
          <div key={p.id} className="border border-white/10 rounded-xl p-3 shadow-insetSoft">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <div className="text-[11px] uppercase text-neutral-400 mb-1">Claim (A)</div>
                <p className="text-sm leading-relaxed">{p.claim}</p>
                {p.aImage && <img src={p.aImage} alt="A" className="rounded-lg mt-2" />}
              </div>
              <div>
                <div className="text-[11px] uppercase text-neutral-400 mb-1">Exhibit (B)</div>
                <p className="text-sm leading-relaxed">{p.counter}</p>
                {p.bImage && <img src={p.bImage} alt="B" className="rounded-lg mt-2" />}
              </div>
            </div>
            {!!p.links?.length && (
              <div className="flex flex-wrap gap-3 mt-2 text-xs">
                {p.links.map(l => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="underline">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
