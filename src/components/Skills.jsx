import { skills } from '../data/portfolio';

const groupIcons = {
  'Financial Analysis': '📊',
  'Programming & Data': '💻',
  'Statistical Methods': '📐',
  'Tools & Platforms': '🛠',
};

export default function Skills() {
  return (
    <section id="skills" className="alt">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical &amp; Analytical Skills</h2>
        <p className="section-sub" style={{ marginBottom: 52 }}>
          A working inventory of tools and methods I use regularly across financial analysis, quantitative research, and data science.
        </p>

        <div className="skills__grid">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="skills-group">
              <div className="skills-group__header">
                <span className="skills-group__icon" aria-hidden="true">{groupIcons[group]}</span>
                <h3 className="skills-group__title">{group}</h3>
              </div>
              <div className="skills-group__tags">
                {items.map((s) => (
                  <span key={s} className="skills-group__tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .skills-group {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-sm);
        }
        .skills-group__header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .skills-group__icon { font-size: 18px; }
        .skills-group__title {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--navy);
        }
        .skills-group__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .skills-group__tag {
          display: inline-block;
          padding: 5px 11px;
          border-radius: 3px;
          font-size: 12.5px;
          font-weight: 500;
          background: var(--gray-100);
          color: var(--text-secondary);
          letter-spacing: 0.01em;
          transition: background var(--transition), color var(--transition);
          cursor: default;
        }
        .skills-group__tag:hover {
          background: var(--navy);
          color: var(--white);
        }
        @media (max-width: 1100px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
