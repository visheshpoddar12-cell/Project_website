import { Award } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="alt">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic Foundation</h2>
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Rigorous coursework across economics, finance, and quantitative methods, complemented by applied data science training.
        </p>

        {education.map((edu) => (
          <div key={edu.institution} className="edu-card">
            <div className="edu-card__header">
              <div className="edu-card__logo">
                <span className="edu-card__logo-text">{edu.institution.split(' ').map(w => w[0]).join('').slice(0,2)}</span>
              </div>
              <div className="edu-card__meta">
                <h3 className="edu-card__institution">{edu.institution}</h3>
                <p className="edu-card__degree">{edu.degree}</p>
                <p className="edu-card__conc">Concentration: {edu.concentration}</p>
              </div>
              <div className="edu-card__right">
                <span className="edu-card__dates">{edu.dates}</span>
                <div className="edu-card__gpa">
                  <span className="edu-card__gpa-value">{edu.gpa}</span>
                  <span className="edu-card__gpa-label">GPA</span>
                </div>
              </div>
            </div>

            <div className="edu-card__body">
              <div className="edu-card__honors">
                {edu.honors.map((h) => (
                  <div key={h} className="edu-card__honor">
                    <Award size={12} strokeWidth={2} />
                    {h}
                  </div>
                ))}
              </div>

              <div className="edu-card__courses">
                <p className="edu-card__courses-label">Relevant Coursework</p>
                <div className="edu-card__course-tags">
                  {edu.coursework.map((c) => (
                    <span key={c} className="tag tag-navy">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .edu-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .edu-card__header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: center;
          padding: 28px 32px;
          border-bottom: 1px solid var(--border);
        }
        .edu-card__logo {
          width: 56px; height: 56px;
          background: var(--navy);
          border-radius: var(--radius);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .edu-card__logo-text {
          font-family: var(--font-serif);
          font-size: 20px;
          color: var(--white);
          letter-spacing: -0.02em;
        }
        .edu-card__institution {
          font-size: 18px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 3px;
        }
        .edu-card__degree {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        .edu-card__conc {
          font-size: 13px;
          color: var(--text-muted);
        }
        .edu-card__right {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .edu-card__dates {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .edu-card__gpa {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .edu-card__gpa-value {
          font-size: 22px;
          font-weight: 700;
          color: var(--navy);
          font-family: var(--font-serif);
          line-height: 1;
        }
        .edu-card__gpa-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .edu-card__body { padding: 24px 32px; }
        .edu-card__honors {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
        }
        .edu-card__honor {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .edu-card__honor svg { color: var(--gold); }
        .edu-card__courses-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .edu-card__course-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        @media (max-width: 700px) {
          .edu-card__header { grid-template-columns: auto 1fr; }
          .edu-card__right { display: none; }
          .edu-card__header, .edu-card__body { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
