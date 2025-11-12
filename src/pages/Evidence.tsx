import { Link } from "react-router-dom";

export default function Evidence() {
  return (
    <section className="card p-5 sm:p-7 space-y-4">
      <div className="flex justify-end">
        <Link
          to="/privacy"
          className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
        >
          Close ✕
        </Link>
      </div>
      <h1 className="text-2xl font-semibold">Evidence Collection &amp; Use Policy</h1>
      <p className="text-sm text-neutral-400">Last Updated: November 12, 2025</p>

      <div className="space-y-3 text-sm leading-relaxed text-neutral-100">
        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">1. Purpose</h2>
          <p>
            The LowLife Files collects, preserves, and displays materials tied to verified harassment or coordinated abuse
            within the Granboard community. All evidence supports documentation, accountability, and public-interest reporting.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">2. Sources of Evidence</h2>
          <p className="font-semibold text-neutral-300">a) Publicly Available Material</p>
          <p>
            We archive content already public (streams, open social posts, public chats). Once published openly, there is no
            reasonable expectation of privacy. Collection is protected under fair use and legitimate interest doctrines.
          </p>
          <p className="font-semibold text-neutral-300">b) Direct Communications</p>
          <p>
            Screenshots or recordings from conversations involving TattooedLowLife (or authorized reps) may be retained to
            establish timelines, defend against defamation, or provide evidence to platforms/authorities. At least one party
            consented to retention.
          </p>
          <p className="font-semibold text-neutral-300">c) Third-Party Submissions</p>
          <p>
            Submitters must confirm they are an original participant or lawful recipient. Submitting grants consent for review
            and publication. Irrelevant personal identifiers are redacted. Anonymous tips remain private until corroborated.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">3. Review &amp; Verification</h2>
          <p>
            Evidence is reviewed for authenticity, timestamps, and context. Manipulated or decontextualized material is not
            knowingly published. Source references are cited whenever possible.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">4. Privacy &amp; Redaction</h2>
          <p>
            Personal contact details, family info, and unrelated identifiers are redacted. Only relevant excerpts are shown
            and blurred/masked where necessary to focus on the behavior being documented.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">5. Legal Standing &amp; Fair Use</h2>
          <p>
            Presentation follows fair use, legitimate interest, and truthful reporting principles. Evidence serves educational,
            journalistic, and defensive purposes. Misusing this documentation for harassment or retaliation is prohibited.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">6. Data Retention &amp; Removal</h2>
          <p>
            Evidence is kept as long as needed for documentation or security. Individuals may request review or redaction at{" "}
            <a className="text-purple-300 underline" href="mailto:thelowlifefiles@gmail.com">
              thelowlifefiles@gmail.com
            </a>
            . Requests are evaluated case-by-case.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">7. Cooperation with Authorities</h2>
          <p>
            Credible threats or defamation may be escalated to law enforcement, hosting providers, or legal counsel. Only the
            necessary records are shared and solely for verified incidents.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">8. Prohibition on Unauthorized Use</h2>
          <p>
            All archived evidence is curated for accountability. Republishing, weaponizing, or distorting these materials for
            retaliation violates this policy and may result in legal action.
          </p>
        </section>
      </div>
    </section>
  );
}
