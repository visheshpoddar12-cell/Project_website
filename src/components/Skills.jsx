import { skills } from '../data/portfolio';

const groupMeta = {
  'Financial Analysis': { label: 'FA', color: 'var(--gold)' },
  'Programming & Data': { label: 'PD', color: 'var(--cyan)' },
  'Statistical Methods': { label: 'SM', color: '#C4B5FD' },
  'Tools & Platforms':  { label: 'TP', color: '#6EE7B7' },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical &amp; Analytical Skills</h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          A working inventory of tools and methods I use regularly across financial analysis, quantitative research, and data science.
        </p>

        <div className="skills__grid">
          {Object.entries(skills).map(([group, items]) => {
            const meta = groupMeta[group];
            return (
              <div key={group} className="skills-group glass-card">
                <div className="skills-group__header">
                  <span
                    className="skills-group__icon"
                    style={{ color: meta.color, borderColor: `${meta.color}30`, background: `${meta.color}10` }}
                  >
                    {meta.label}
                  </span>
                  <h3 className="skills-group__title">{group}</h3>
                </div>
                <div className="skills-group__tags">
                  {items.map((s) => (
                    <span key={s} className="skills-tag">{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .skills-group { padding: 24px; }
        .skills-group__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .skills-group__icon {
          width: 34px; height: 34px;
          border-radius: 6px;
          border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }
        .skills-group__title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-2);
        }
        .skills-group__tags { display: flex; flex-wrap: wrap; gap: 7px; }
        .skills-tag {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 500;
          background: rgba(255,255,255,0.04);
          color: var(--text-2);
          border: 1px solid var(--border);
          letter-spacing: 0.01em;
          transition: all var(--transition);
          cursor: default;
        }
        .skills-tag:hover {
          background: var(--cyan-dim);
          border-color: var(--border-accent);
          color: var(--cyan-light);
        }

        @media (max-width: 1100px) { .skills__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px)  { .skills__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
