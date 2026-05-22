import { useState } from 'react';
import { ArrowRight, Clock, FileText } from 'lucide-react';
import { research } from '../data/portfolio';

const categories = ['All', 'Equity Research', 'Macro Analysis', 'Industry Deep Dive', 'Investment Thesis', 'Market Commentary', 'Policy & Macro'];

const categoryColors = {
  'Equity Research': 'cat--blue',
  'Macro Analysis': 'cat--green',
  'Industry Deep Dive': 'cat--orange',
  'Investment Thesis': 'cat--gold',
  'Market Commentary': 'cat--gray',
  'Policy & Macro': 'cat--teal',
};

export default function Research() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? research : research.filter(r => r.category === active);

  return (
    <section id="research" className="alt">
      <div className="container">
        <p className="section-label">Research</p>
        <h2 className="section-title">Market Commentary &amp; Research</h2>
        <p className="section-sub" style={{ marginBottom: 36 }}>
          Equity research notes, macroeconomic analysis, and industry commentary written to investment-research standards: thesis-driven, evidence-backed, and directly actionable.
        </p>

        <div className="research__filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`research__filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="research__grid">
          {filtered.map((item, i) => (
            <div key={i} className="research-card">
              <div className="research-card__top">
                <span className={`research-card__cat ${categoryColors[item.category] || ''}`}>
                  {item.category}
                </span>
                <span className="research-card__date">{item.date}</span>
              </div>
              <h3 className="research-card__title">{item.title}</h3>
              <p className="research-card__summary">{item.summary}</p>
              <div className="research-card__footer">
                <div className="research-card__meta">
                  <span className="research-card__meta-item">
                    <Clock size={11} /> {item.readTime}
                  </span>
                  {item.pdf && (
                    <span className="research-card__meta-item">
                      <FileText size={11} /> PDF
                    </span>
                  )}
                </div>
                <a href="#" className="research-card__link">
                  Read Report <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .research__filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .research__filter-btn {
          padding: 7px 16px;
          border-radius: 3px;
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          background: var(--white);
          transition: all var(--transition);
          letter-spacing: 0.01em;
        }
        .research__filter-btn:hover {
          border-color: var(--navy);
          color: var(--navy);
        }
        .research__filter-btn.active {
          background: var(--navy);
          color: var(--white);
          border-color: var(--navy);
        }
        .research__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .research-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
        }
        .research-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--gray-200);
          transform: translateY(-2px);
        }
        .research-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .research-card__cat {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 9px;
          border-radius: 2px;
        }
        .cat--blue { background: #e8f0fe; color: #1a56db; }
        .cat--green { background: #e8f5e9; color: #1e7e34; }
        .cat--orange { background: #fff3e0; color: #c45d00; }
        .cat--gold { background: rgba(201,168,76,0.12); color: #8b6f2a; }
        .cat--gray { background: var(--gray-100); color: var(--text-secondary); }
        .cat--teal { background: #e0f2f1; color: #00695c; }
        .research-card__date {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .research-card__title {
          font-size: 15px;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.4;
          flex: 1;
        }
        .research-card__summary {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .research-card__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          margin-top: auto;
        }
        .research-card__meta {
          display: flex;
          gap: 12px;
        }
        .research-card__meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .research-card__link {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          color: var(--navy);
          transition: color var(--transition);
          letter-spacing: 0.01em;
        }
        .research-card__link:hover { color: var(--gold); }
        @media (max-width: 960px) {
          .research__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .research__grid { grid-template-columns: 1fr; }
          .research__filters { gap: 6px; }
          .research__filter-btn { font-size: 11px; padding: 6px 12px; }
        }
      `}</style>
    </section>
  );
}
