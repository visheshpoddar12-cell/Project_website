import { leadership } from '../data/portfolio';

export default function Leadership() {
  return (
    <section id="leadership" className="alt">
      <div className="container">
        <p className="section-label">Leadership</p>
        <h2 className="section-title">Organizations &amp; Initiatives</h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          Beyond coursework — building communities, leading research, and contributing to the broader finance and economics ecosystem on campus.
        </p>

        <div className="lead__grid">
          {leadership.map((item, i) => (
            <div key={i} className="lead-card glass-card">
              <div className="lead-card__header">
                <span className="lead-card__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="lead-card__info">
                  <h3 className="lead-card__role">{item.role}</h3>
                  <p className="lead-card__org">{item.organization}</p>
                </div>
                <span className="lead-card__dates">{item.dates}</span>
              </div>
              <ul className="lead-card__bullets">
                {item.bullets.map((b, j) => (
                  <li key={j} className="lead-bullet">
                    <span className="lead-bullet__dash">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lead__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        .lead-card { padding: 24px 26px; }
        .lead-card__header {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          gap: 12px;
          align-items: start;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .lead-card__num {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1;
          padding-top: 2px;
          background: linear-gradient(135deg, var(--cyan), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lead-card__role {
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 3px;
          letter-spacing: -0.01em;
        }
        .lead-card__org {
          font-size: 13px;
          color: var(--text-2);
          font-weight: 500;
        }
        .lead-card__dates {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
          white-space: nowrap;
          padding-top: 4px;
          letter-spacing: 0.02em;
        }
        .lead-card__bullets { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .lead-bullet {
          display: flex;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-2);
          line-height: 1.65;
          align-items: flex-start;
        }
        .lead-bullet__dash {
          color: var(--cyan);
          font-weight: 700;
          flex-shrink: 0;
        }

        @media (max-width: 700px) {
          .lead__grid { grid-template-columns: 1fr; }
          .lead-card__header { grid-template-columns: 36px 1fr; }
          .lead-card__dates { display: none; }
        }
      `}</style>
    </section>
  );
}
