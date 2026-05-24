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
          <div key={edu.institution} className="edu-card glass-card">
            <div className="edu-card__header">
              <div className="edu-card__logo">
                <span className="edu-card__initials">
                  {edu.institution.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="edu-card__meta">
                <h3 className="edu-card__inst">{edu.institution}</h3>
                <p className="edu-card__degree">{edu.degree}</p>
                <p className="edu-card__conc">Concentration: {edu.concentration}</p>
              </div>
              <div className="edu-card__right">
                <span className="edu-card__dates">{edu.dates}</span>
                <div className="edu-card__gpa">
                  <span className="edu-card__gpa-val">{edu.gpa}</span>
                  <span className="edu-card__gpa-lbl">GPA</span>
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
              <p className="edu-card__courses-lbl">Relevant Coursework</p>
              <div className="edu-card__course-tags">
                {edu.coursework.map((c) => (
                  <span key={c} className="tag tag-navy">{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .edu-card { overflow: hidden; padding: 0; }
        .edu-card:hover {
          border-color: rgba(0,229,200,0.28);
          box-shadow: 0 0 0 1px rgba(0,229,200,0.06), var(--shadow-sm);
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
          width: 54px; height: 54px;
          background: linear-gradient(135deg, var(--cyan-dim), rgba(245,158,11,0.1));
          border: 1px solid var(--border-accent);
          border-radius: var(--radius);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .edu-card__initials {
          font-size: 18px;
          font-weight: 900;
          background: linear-gradient(135deg, var(--cyan), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .edu-card__inst {
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .edu-card__degree {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-2);
          margin-bottom: 2px;
        }
        .edu-card__conc { font-size: 13px; color: var(--text-muted); }
        .edu-card__right {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        .edu-card__dates {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .edu-card__gpa {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 10px 12px;
          border: 1px solid rgba(198,162,74,0.22);
          border-radius: var(--radius);
          background: rgba(198,162,74,0.055);
        }
        .edu-card__gpa-val {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1;
          background: linear-gradient(135deg, var(--cyan), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .edu-card__gpa-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .edu-card__body { padding: 24px 32px; }
        .edu-card__honors {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .edu-card__honor {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: var(--text-2);
          font-weight: 500;
        }
        .edu-card__honor svg { color: var(--gold); }
        .edu-card__courses-lbl {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .edu-card__course-tags {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 8px;
        }
        .edu-card__course-tags .tag {
          text-align: center;
          justify-content: center;
        }

        @media (max-width: 700px) {
          .edu-card__header { grid-template-columns: auto 1fr; }
          .edu-card__right { display: none; }
          .edu-card__header, .edu-card__body { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
