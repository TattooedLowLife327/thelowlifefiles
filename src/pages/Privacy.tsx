export default function Privacy() {
  return (
    <section className="card p-5 sm:p-7 space-y-4">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="text-sm text-neutral-400">Last Updated: November 12, 2025</p>

      <div className="space-y-3 text-sm leading-relaxed text-neutral-100">
        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">1. Scope and Purpose</h2>
          <p>
            This policy governs the collection and use of information by The LowLife Files. We document harassment within the
            Granboard community and collect limited technical data solely to ensure security, prevent abuse, and comply with
            lawful obligations.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">2. Information We Collect</h2>
          <p>
            We automatically record IP addresses, page requests, timestamps, and browser/device details. No personal
            identifiers are collected unless you email us directly. The public counter uses cryptographic hashing so no
            identifiable data is exposed.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">3. Lawful Basis</h2>
          <p>
            Processing occurs under GDPR Article 6(1)(f) legitimate interest: maintaining security, investigating harassment,
            preserving evidence, and complying with lawful requests.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">4. Data Retention & Storage</h2>
          <p>
            Logs are stored in secure Netlify Blobs, encrypted at rest and transmitted via TLS. Access is limited to
            TattooedLowLife. Entries are purged after a set period unless needed for an ongoing investigation. Public stats
            remain aggregated and anonymous.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">5. Sharing & Disclosure</h2>
          <p>
            We never sell or rent visitor data. Information may be disclosed only to comply with legal obligations, aid law
            enforcement investigating harassment, or to trusted service providers operating under confidentiality agreements.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">6. International Transfers</h2>
          <p>
            When data is stored outside your jurisdiction, it is protected by appropriate safeguards such as standard
            contractual clauses or equivalent mechanisms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">7. Data Subject Rights</h2>
          <p>
            Where applicable, you may request access, deletion, or restriction of your data, or lodge complaints with a
            supervisory authority. Email <a className="text-purple-300 underline" href="mailto:thelowlifefiles@gmail.com">thelowlifefiles@gmail.com</a> to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">8. Cookies & Tracking</h2>
          <p>
            This site does not use tracking cookies, analytics frameworks, or advertising scripts. Only minimal session data
            may be used for functionality and is not persisted or profiled.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">9. Security Measures</h2>
          <p>
            Administrative, technical, and physical safeguards protect stored data, though no system is entirely immune to
            threats. We strive to respond quickly to any incident.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">10. Policy Updates</h2>
          <p>
            We may revise this policy. Changes will be reflected in the “Last Updated” date, and continued use signifies
            acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-semibold uppercase tracking-wide text-xs text-neutral-400">11. Contact</h2>
          <p>
            Questions or lawful data requests? Email{" "}
            <a className="text-purple-300 underline" href="mailto:thelowlifefiles@gmail.com">
              thelowlifefiles@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
