export default function Privacy() {
  return (
    <section className="card p-5 sm:p-7 space-y-4">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-neutral-400">Last Updated: November 12, 2025</p>

      <div className="space-y-3 text-sm leading-relaxed text-neutral-100">
        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">1. What We Collect</h2>
          <p>
            We automatically collect limited technical data from visitors: IP addresses, page requests, timestamps, and
            browser/device details. The public view counter uses anonymized hashes, so no personal data is exposed there.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">2. Why We Collect It</h2>
          <p>
            The data is recorded to protect the site and its owner from harassment, spam, and coordinated abuse. It helps
            identify repeated attacks and preserve evidence for legitimate investigations.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">3. How It’s Stored</h2>
          <p>
            Logs are stored privately on Netlify Blobs. Access is restricted to TattooedLowLife. Entries are periodically
            purged unless they are part of an ongoing investigation. Only aggregated, non-identifiable visit counts are shown
            publicly.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">4. Legal Basis</h2>
          <p>
            Data is processed under legitimate interest to maintain security, document harassment, and defend against
            malicious activity.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">5. Sharing and Disclosure</h2>
          <p>
            Information is shared only when required by law or when cooperating with investigations into harassment, abuse,
            or fraud. We never sell or disclose this data to third parties for marketing.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">6. Cookies and Tracking</h2>
          <p>
            This site does not use tracking cookies, analytics pixels, or advertising scripts. Browsing is not profiled or
            tracked across other sites.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">7. Contact</h2>
          <p>
            Questions or data requests? Email <a className="text-purple-300 underline" href="mailto:thelowlifefiles@gmail.com">thelowlifefiles@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">8. Updates</h2>
          <p>
            Policy updates will be posted here with a new “Last Updated” date. Continued use of the site means you accept the
            latest version.
          </p>
        </section>
      </div>
    </section>
  );
}
