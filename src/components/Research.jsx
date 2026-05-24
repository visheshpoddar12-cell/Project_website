import { useState } from 'react';
import { ArrowUpRight, Clock, FileText } from 'lucide-react';
import { research } from '../data/portfolio';

const categories = ['All', 'Equity Research', 'Macro Analysis', 'Industry Deep Dive', 'Investment Thesis', 'Market Commentary', 'Policy & Macro'];

const catColors = {
  'Equity Research':     { bg: 'rgba(6,182,212,0.1)',  text: '#22D3EE',  border: 'rgba(6,182,212,0.2)' },
  'Macro Analysis':      { bg: 'rgba(16,185,129,0.1)', text: '#6EE7B7',  border: 'rgba(16,185,129,0.2)' },
  'Industry Deep Dive':  { bg: 'rgba(245,158,11,0.1)', text: '#FCD34D',  border: 'rgba(245,158,11,0.2)' },
  'Investment Thesis':   { bg: 'rgba(245,158,11,0.1)', text: '#FCD34D',  border: 'rgba(245,158,11,0.2)' },
  'Market Commentary':   { bg: 'rgba(255,255,255,0.05)', text: 'rgba(226,232,240,0.5)', border: 'rgba(255,255,255,0.1)' },
  'Policy & Macro':      { bg: 'rgba(139,92,246,0.1)', text: '#C4B5FD',  border: 'rgba(139,92,246,0.2)' },
};

export default function Research() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? research : research.filter(r => r.category === active);

  return (
    <section id="research">
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
              className={`filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="research__grid">
          {filtered.map((item, i) => {
            const colors = catColors[item.category] || catColors['Market Commentary'];
            return (
              <div key={i} className="research-card glass-card">
                <div className="research-card__top">
                  <span
                    className="research-card__cat"
                    style={{
                      background: colors.bg,
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {item.category}
                  </span>
                  <span className="research-card__date">{item.date}</span>
                </div>

                <h3 className="research-card__title">{item.title}</h3>
                <p className="research-card__summary">{item.summary}</p>

                <div className="research-card__footer">
                  <div className="research-card__meta">
                    <span className="research-meta-item">
                      <Clock size={11} /> {item.readTime}
                    </span>
                    {item.pdf && (
                      <span className="research-meta-item">
                        <FileText size={11} /> PDF
                      </span>
                    )}
                  </div>
                  <a href="#" className="research-card__link">
                    Read <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .research__filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .research__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .research-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 22px;
        }
        .research-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }
        .research-card__cat {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .research-card__date {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
          white-space: nowrap;
        }
        .research-card__title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
          line-height: 1.4;
          flex: 1;
          letter-spacing: -0.01em;
        }
        .research-card__summary {
          font-size: 13.5px;
          color: var(--text-2);
          line-height: 1.7;
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
        .research-meta-item {
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
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          color: var(--cyan);
          transition: all var(--transition);
          letter-spacing: 0.02em;
        }
        .research-card__link:hover {
          color: var(--cyan-light);
          text-shadow: 0 0 8px rgba(6,182,212,0.5);
        }

        @media (max-width: 960px) {
          .research__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .research__grid { grid-template-columns: 1fr; }
          .research__filters { gap: 6px; }
        }
      `}</style>
    </section>
  );
}
