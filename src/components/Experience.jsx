import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience">
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
                <div className="exp-item__dot" />
                {i < experience.length - 1 && <div className="exp-item__line" />}
              </div>

              <div className="exp-card">
                <div className="exp-card__header">
                  <div>
                    <h3 className="exp-card__title">{role.title}</h3>
                    <p className="exp-card__company">
                      {role.company} &nbsp;·&nbsp; <span className="exp-card__location">{role.location}</span>
                    </p>
                  </div>
                  <span className="exp-card__dates">{role.dates}</span>
                </div>

                <ul className="exp-card__bullets">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="exp-card__bullet">
                      <span className="exp-card__bullet-dot" />
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
        .exp-timeline { display: flex; flex-direction: column; gap: 0; }
        .exp-item {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 20px;
          margin-bottom: 8px;
        }
        .exp-item__marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 28px;
        }
        .exp-item__dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--gold);
          border: 2px solid var(--white);
          box-shadow: 0 0 0 2px var(--gold);
          flex-shrink: 0;
          z-index: 1;
        }
        .exp-item__line {
          width: 1px;
          flex: 1;
          background: var(--border);
          margin-top: 8px;
          margin-bottom: -28px;
        }
        .exp-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
          transition: box-shadow var(--transition), border-color var(--transition);
        }
        .exp-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--gray-200);
        }
        .exp-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 12px;
          flex-wrap: wrap;
        }
        .exp-card__title {
          font-size: 16px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .exp-card__company {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .exp-card__location { color: var(--text-muted); }
        .exp-card__dates {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-muted);
          white-space: nowrap;
          padding: 4px 10px;
          background: var(--gray-100);
          border-radius: 3px;
          flex-shrink: 0;
        }
        .exp-card__bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }
        .exp-card__bullet {
          display: flex;
          gap: 12px;
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          align-items: flex-start;
        }
        .exp-card__bullet-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          margin-top: 7px;
        }
        .exp-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }
        @media (max-width: 600px) {
          .exp-item { grid-template-columns: 1fr; }
          .exp-item__marker { display: none; }
          .exp-card__header { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
