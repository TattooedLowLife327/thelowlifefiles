import { useState } from "react";
import { useParams } from "react-router-dom";
import { PAGES, type User } from "../data/pages";

export default function PageDetail() {
  const { pageId } = useParams();
  const page = PAGES.find((p) => p.id === pageId);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (!page) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-white">Page not found</h1>
      </div>
    );
  }

  return (
    <section>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3.5 sm:gap-5">
        {/* Page Header */}
        <div className="overflow-hidden">
          <img
            src={page.banner}
            alt={`${page.name} banner`}
            className="h-32 sm:h-48 md:h-56 lg:h-64 w-full object-cover"
          />
        </div>

        {/* Players Section */}
        <div className="card w-full p-4 sm:p-6">
          <h2 className="mb-3 text-lg font-semibold sm:text-xl">Players</h2>
          {page.users.length === 0 ? (
            <p className="text-[13px] sm:text-sm text-neutral-400">
              No players added yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {page.users.map((u) => (
                <button
                  key={u.id}
                  className="user-card rounded-xl sm:rounded-2xl bg-white/5 p-2.5 sm:p-3 text-left transition hover:bg-white/10"
                  onClick={() => setSelectedUser(u)}
                >
                  <h3 className="text-[13px] font-medium sm:text-base">{u.name}</h3>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected User Receipts */}
        {selectedUser && (
          <div className="card w-full p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-semibold sm:text-xl">
              Receipts for {selectedUser.name}
            </h2>
            <div className="space-y-2.5 sm:space-y-3">
              {selectedUser.receipts.length === 0 && (
                <p className="text-[13px] sm:text-sm text-neutral-400">
                  No receipts submitted yet.
                </p>
              )}
              {selectedUser.receipts.map((r) => (
                <div key={r.id} className="receipt-card rounded-lg sm:rounded-xl bg-white/3 p-3 sm:p-3.5">
                  <h4 className="text-[13px] sm:text-sm font-medium">{r.date}</h4>
                  <p className="mt-1.5 text-[13px] sm:text-sm leading-relaxed">{r.text}</p>
                  {r.submitter && (
                    <p className="mt-1.5 text-xs">
                      <em>Submitted by: {r.submitter}</em>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
