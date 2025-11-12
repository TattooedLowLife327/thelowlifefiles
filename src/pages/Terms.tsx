export default function Terms() {
  return (
    <section className="card p-5 sm:p-7 space-y-4">
      <h1 className="text-2xl font-semibold">Terms of Use</h1>
      <p className="text-sm text-neutral-400">Last Updated: November 12, 2025</p>

      <div className="space-y-3 text-sm leading-relaxed text-neutral-100">
        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">1. Purpose</h2>
          <p>
            The LowLife Files documents harassment within the Granboard community. Access is provided solely for reviewing
            evidence and understanding the events described. Redistribution or misrepresentation of the materials is
            prohibited.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">2. Acceptable Use</h2>
          <p>
            Do not exploit the site to harass, dox, or intimidate others. Automated scraping, rate-limiting attacks, and any
            attempt to bypass security are forbidden. Violations may be reported to hosting providers or law enforcement.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">3. Content Accuracy</h2>
          <p>
            Evidence is provided “as is.” While we verify timestamps and sources, no warranty is made regarding completeness.
            If you believe something is inaccurate, contact us with documentation so we can review it.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">4. Intellectual Property</h2>
          <p>
            All site design, copy, and curated evidence are the property of TattooedLowLife unless otherwise noted. Do not
            republish without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">5. Liability</h2>
          <p>
            Use of this site is at your own risk. We are not responsible for damages arising from your reliance on the
            information presented here.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">6. Contact</h2>
          <p>
            Questions or concerns about these terms? Email <a className="text-purple-300 underline" href="mailto:thelowlifefiles@gmail.com">thelowlifefiles@gmail.com</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
