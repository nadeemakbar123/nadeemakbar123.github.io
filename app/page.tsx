const metrics = [
  { value: "25K", label: "Sites built", note: "Brand claim" },
  {
    value: "10K",
    label: "Google Business Profiles handled",
    note: "Brand claim",
  },
  {
    value: "★★★★★",
    label: "Rating",
    note: "Illustrative placeholder until verified public reviews are published",
  },
];

const profileBenefits = [
  "Get discovered faster in local Google searches and Google Maps results.",
  "Turn profile visitors into calls, direction requests, and website traffic.",
  "Build trust with consistent business information, updates, and responses.",
  "Improve local visibility with structured optimization and ongoing management.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero card">
        <p className="badge">StackEnterprises.dev</p>
        <h1>Professional growth through full-stack web development and local visibility.</h1>
        <p className="lead">
          We help brands launch reliable full-stack websites and manage Google Business
          Profiles with a clear strategy focused on discoverability, trust, and conversions.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:contact@StackEnterprises.dev">
            Contact Us
          </a>
          <a className="btn btn-secondary" href="https://wa.me/923221643195">
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="card">
        <h2>What we do</h2>
        <div className="grid two-col">
          <article>
            <h3>Full-stack website development</h3>
            <p>
              We design and build modern web experiences from frontend UI to backend APIs and
              deployment-ready architecture.
            </p>
          </article>
          <article>
            <h3>Google Business Profile management</h3>
            <p>
              We optimize and manage profiles end-to-end: setup checks, category alignment,
              content updates, and ongoing profile health.
            </p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Why optimize your Google Business Profile?</h2>
        <ul className="benefits">
          {profileBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Brand metrics snapshot</h2>
        <p className="disclaimer">
          The figures below are presented as StackEnterprises brand marketing claims and an
          illustrative placeholder until independently verified references and reviews are
          available.
        </p>
        <div className="grid metrics-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric">
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
              <p className="metric-note">{metric.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <div className="contact-grid">
          <p>
            <strong>WhatsApp:</strong> <a href="https://wa.me/923221643195">+923221643195</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@StackEnterprises.dev">contact@StackEnterprises.dev</a>
          </p>
          <p>
            <strong>CEO:</strong> Ejaz Ahmed
          </p>
          <p>
            <strong>Facebook:</strong> <span>URL placeholder (to be added)</span>
          </p>
        </div>
      </section>
    </main>
  );
}
