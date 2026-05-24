import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Professional History</h2>
        <p className="section-sub" style={{ marginBottom: 56 }}>
          Finance, analytics, and research roles where quantitative analysis met real business decisions.
        </p>

        <div className="exp-timeline">
          {experience.map((role, i) => (
            <div key={i} className="exp-item">
              <div className="exp-item__marker">
                <div className="exp-dot" />
                {i < experience.length - 1 && <div className="exp-line" />}
              </div>

              <div className="exp-card glass-card">
                <div className="exp-card__header">
                  <div className="exp-card__meta">
                    <h3 className="exp-card__title">{role.title}</h3>
                    <p className="exp-card__company">
                      {role.company}
                      <span className="exp-card__sep"> · </span>
                      <span className="exp-card__loc">{role.location}</span>
                    </p>
                  </div>
                  <span className="exp-card__dates">{role.dates}</span>
                </div>

                <ul className="exp-card__bullets">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">
                      <span className="exp-bullet__dot" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="exp-card__tags">
                  {role.tags.map((t) => (
                    <span key={t} className="tag tag-navy">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-timeline { display: flex; flex-direction: column; }
        .exp-item {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 20px;
          margin-bottom: 8px;
        }
        .exp-item__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 30px;
        }
        .exp-dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--cyan);
          border: 2px solid var(--bg);
          box-shadow: 0 0 0 2px var(--cyan), var(--glow-cyan);
          flex-shrink: 0;
          z-index: 1;
        }
        .exp-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, rgba(6,182,212,0.3), rgba(6,182,212,0.05));
          margin-top: 8px;
          margin-bottom: -30px;
        }
        .exp-card {
          padding: 24px 28px;
          margin-bottom: 20px;
        }
        .exp-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .exp-card__title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 5px;
          letter-spacing: -0.01em;
        }
        .exp-card__company {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-2);
        }
        .exp-card__sep { color: var(--text-dim); }
        .exp-card__loc { color: var(--text-muted); }
        .exp-card__dates {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
          padding: 4px 12px;
          background: rgba(6,182,212,0.06);
          border: 1px solid rgba(6,182,212,0.15);
          border-radius: 4px;
          flex-shrink: 0;
          letter-spacing: 0.02em;
        }
        .exp-card__bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .exp-bullet {
          display: flex;
          gap: 12px;
          font-size: 14px;
          color: var(--text-2);
          line-height: 1.65;
          align-items: flex-start;
        }
        .exp-bullet__dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--cyan);
          flex-shrink: 0;
          margin-top: 8px;
          box-shadow: 0 0 6px rgba(6,182,212,0.6);
        }
        .exp-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }

        @media (max-width: 600px) {
          .exp-item { grid-template-columns: 1fr; }
          .exp-item__marker { display: none; }
          .exp-card__header { flex-direction: column; }
          .exp-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
