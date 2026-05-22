import { leadership } from '../data/portfolio';

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="container">
        <p className="section-label">Leadership</p>
        <h2 className="section-title">Organizations &amp; Initiatives</h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          Beyond coursework — building communities, leading research, and contributing to the broader finance and economics ecosystem on campus.
        </p>

        <div className="lead__grid">
          {leadership.map((item, i) => (
            <div key={i} className="lead-card">
              <div className="lead-card__header">
                <div className="lead-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="lead-card__role">{item.role}</h3>
                  <p className="lead-card__org">{item.organization}</p>
                </div>
                <span className="lead-card__dates">{item.dates}</span>
              </div>
              <ul className="lead-card__bullets">
                {item.bullets.map((b, j) => (
                  <li key={j} className="lead-card__bullet">
                    <span className="lead-card__dash">—</span>
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
          gap: 20px;
        }
        .lead-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          box-shadow: var(--shadow-sm);
          transition: box-shadow var(--transition), transform var(--transition);
        }
        .lead-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .lead-card__header {
          display: grid;
          grid-template-columns: 36px 1fr auto;
          gap: 14px;
          align-items: start;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .lead-card__num {
          font-family: var(--font-serif);
          font-size: 22px;
          color: var(--gold);
          line-height: 1;
          padding-top: 2px;
        }
        .lead-card__role {
          font-size: 15px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 3px;
        }
        .lead-card__org {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .lead-card__dates {
          font-size: 11.5px;
          color: var(--text-muted);
          font-weight: 500;
          white-space: nowrap;
          padding-top: 4px;
        }
        .lead-card__bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .lead-card__bullet {
          display: flex;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          align-items: flex-start;
        }
        .lead-card__dash {
          color: var(--gold);
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 1px;
        }
        @media (max-width: 700px) {
          .lead__grid { grid-template-columns: 1fr; }
          .lead-card__header { grid-template-columns: 32px 1fr; }
          .lead-card__dates { display: none; }
        }
      `}</style>
    </section>
  );
}
