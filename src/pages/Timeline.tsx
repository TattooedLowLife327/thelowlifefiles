type Item = { date: string; text: string };

export default function Timeline() {
  const items: Item[] = [
    { date: '2025-09-20', text: 'Stream remarks begin — collect timestamps & chat logs.' },
    { date: '2025-09-21', text: 'Discord discussion — capture message IDs & screenshots.' },
    { date: '2025-10-04', text: 'Gifting subs + apology claims — cross-check activity feed.' }
  ];

  return (
    <section className="card p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3">Event Timeline</h2>
      <ul className="space-y-3">
        {items.map(it => (
          <li key={it.date} className="text-sm">
            <span className="text-white/80">📅 <b>{it.date}</b></span> — {it.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
