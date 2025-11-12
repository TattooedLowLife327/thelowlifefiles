export default function Contact() {
  return (
    <section className="card p-5 sm:p-7 space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-sm text-neutral-400">
        Need to report harassment, request a correction, or send supporting evidence? Use the channels below.
      </p>
      <div className="space-y-4 text-sm leading-relaxed text-neutral-100">
        <div>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">Email</h2>
          <p>
            <a className="text-purple-300 underline" href="mailto:thelowlifefiles@gmail.com">
              thelowlifefiles@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">What to Include</h2>
          <ul className="list-disc list-inside text-neutral-200 space-y-1">
            <li>Links or screenshots referencing the incident.</li>
            <li>Approximate dates/times the harassment occurred.</li>
            <li>Any usernames or aliases involved.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">Response Time</h2>
          <p>Expect a reply within 3–5 business days. Urgent safety threats are prioritized immediately.</p>
        </div>
      </div>
    </section>
  );
}
