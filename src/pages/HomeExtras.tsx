import { useState } from 'react';
import { PAGES, type Page, type User } from '../data/pages';

export default function HomeExtras() {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  function openPage(page: Page) {
    setSelectedPage(page);
    setSelectedUser(null);
  }

  function openUser(user: User) {
    setSelectedUser(user);
  }

  return (
    <section>
      <div className="card p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold mb-3">Overview</h1>
        <p className="text-sm leading-relaxed text-neutral-200">
          This interactive, mobile-first dossier organizes evidence across platforms:
          streams, Discord, tournament chats, and screenshots. Use the sidebar to
          browse the timeline, review video exhibits, and see A/B contradictions.
        </p>
      </div>

      {/* Disclaimer below overview */}
      <div className="mt-3 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs italic text-neutral-400">
        Disclaimer: The quality - or lack there of - of the display images used below are not a direct creation of
        TattooedLowLife. She would never put something that low quality out into the world.. but then again, the image
        quality is a direct representation of the quality of tournaments they put on.
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {PAGES.map((page) => {
          const isTwitch = page.name === 'Twitch Streamers';
          return (
            <button
              key={page.id}
              className={`page-card p-3 rounded text-left ${isTwitch ? 'col-span-full bg-purple-700/60 text-white' : 'bg-white/5'}`}
              onClick={() => openPage(page)}
              aria-pressed={selectedPage?.id === page.id}
            >
              <img src={page.banner} alt={`${page.name} banner`} className="w-full h-20 object-cover rounded mb-2" />
              <h2 className="text-base font-semibold">{page.name}</h2>
            </button>
          );
        })}
      </div>

      {selectedPage && (
        <section className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Players on {selectedPage.name}</h3>
          <div className="grid grid-cols-2 gap-3">
            {selectedPage.users.map((u) => (
              <button
                key={u.id}
                className="user-card bg-white/5 p-3 rounded text-left"
                onClick={() => openUser(u)}
                aria-pressed={selectedUser?.id === u.id}
              >
                <h2 className="text-base font-medium">{u.name}</h2>
              </button>
            ))}
          </div>
        </section>
      )}

      {selectedUser && (
        <section className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Receipts for {selectedUser.name}</h3>
          <div className="space-y-3">
            {selectedUser.receipts.length === 0 && (
              <p className="text-sm text-neutral-400">No receipts submitted yet.</p>
            )}
            {selectedUser.receipts.map((r) => (
              <div key={r.id} className="receipt-card bg-white/3 p-3 rounded">
                <h4 className="text-sm font-medium">📅 {r.date}</h4>
                <p className="text-sm mt-1">{r.text}</p>
                {r.submitter && (
                  <p className="text-xs mt-1"><em>Submitted by: {r.submitter}</em></p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
