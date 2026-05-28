import { useState } from 'react';
import { ArrowUpRight, CalendarDays, FileText, Trophy } from 'lucide-react';
import { stockPitches, otherWork } from '../data/portfolio';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'equity', label: 'Equity Research' },
  { key: 'personal', label: 'Personal Pitches' },
  { key: 'competitions', label: 'Competitions' },
  { key: 'modeling', label: 'Merger Model' },
];

function PitchCard({ pitch }) {
  const isCompetition = pitch.filterGroup === 'competitions';
  const isEquity = pitch.filterGroup === 'equity';
  const isModeling = pitch.filterGroup === 'modeling';

  return (
    <article className={`pitch-card ${isCompetition ? 'pitch-card--competition' : ''} ${isEquity ? 'pitch-card--equity' : ''} ${isModeling ? 'pitch-card--modeling' : ''}`}>
      <div className="pitch-card__body">
        <div className="pitch-card__top">
          <span className="pitch-card__eyebrow">{pitch.eyebrow}</span>
          {isCompetition && (
            <span className="pitch-card__mark" aria-label="Competition result">
              <Trophy size={13} />
            </span>
          )}
        </div>

        <h3 className="pitch-card__title">{pitch.company}</h3>

        <div className="pitch-card__meta">
          <span className="pitch-card__meta-item">
            <CalendarDays size={16} />
            {pitch.date}
          </span>
          <span className="pitch-card__meta-item">
            <FileText size={16} />
            {pitch.category}
          </span>
        </div>

        {pitch.position && (
          <div className="pitch-card__result">
            <Trophy size={13} />
            <span>{pitch.position}</span>
          </div>
        )}
      </div>

      <div className="pitch-card__links">
        {pitch.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pitch-card__link"
            {...(l.download ? { download: true } : {})}
          >
            {l.label}
            <ArrowUpRight size={13} />
          </a>
        ))}
      </div>
    </article>
  );
}

/* ─── Other Work Tag colors ─── */
const tagColorMap = {
  gold:    'other-card__tag--gold',
  cyan:    'other-card__tag--cyan',
  emerald: 'other-card__tag--emerald',
};

function OtherCard({ work }) {
  return (
    <div className="other-card">
      <div className={`other-card__tag ${tagColorMap[work.tagColor] || ''}`}>{work.tag}</div>
      <h3 className="other-card__title">{work.title}</h3>
      <p className="other-card__date">{work.date}</p>
      <p className="other-card__desc">{work.description}</p>
      <div className="other-card__links">
        {work.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="other-link">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visiblePitches = activeFilter === 'all'
    ? stockPitches
    : stockPitches.filter((pitch) => pitch.filterGroup === activeFilter);

  return (
    <>
      <section id="projects">
        <div className="container stock-work">
          <p className="stock-work__label">Stock Pitches and Equity Research Reports</p>
          <h2 className="section-title">Trade ideas, research, and market models</h2>
          <p className="section-sub">
            A running log of personal and competition equity pitches — each backed by fundamental analysis, financial modeling, and a clear buy/sell thesis.
          </p>

          <div className="pitch-filters" aria-label="Filter stock pitch entries">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`pitch-filter${activeFilter === filter.key ? ' pitch-filter--active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="pitch-grid">
            {visiblePitches.map((pitch) => (
              <PitchCard key={pitch.company} pitch={pitch} />
            ))}
          </div>
        </div>
      </section>

      <section id="other-work" className="alt">
        <div className="container">
          <p className="section-label">Market Notes</p>
          <h2 className="section-title">Selected Market Writing &amp; Modeling</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Research notes, public writing, and standalone models framed as concise market intelligence.
          </p>
          <div className="other-grid">
            {otherWork.map((w, i) => <OtherCard key={i} work={w} />)}
          </div>
        </div>
      </section>

      <style>{`
        .stock-work__label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: var(--gold-light);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .stock-work__label::before {
          content: '';
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
        }
        .pitch-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 36px 0 30px;
        }
        .pitch-filter {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          color: var(--text);
          padding: 11px 17px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          line-height: 1;
          text-transform: uppercase;
          transition: color var(--transition), border-color var(--transition), background var(--transition), box-shadow var(--transition), transform var(--transition);
        }
        .pitch-filter:hover {
          border-color: rgba(126,181,255,0.34);
          color: var(--cyan);
          background: rgba(126,181,255,0.12);
          transform: translateY(-1px);
        }
        .pitch-filter--active {
          border-color: rgba(212,182,106,0.52);
          color: var(--gold-light);
          background: rgba(212,182,106,0.14);
          box-shadow: inset 0 0 0 1px rgba(212,182,106,0.14), 0 0 18px rgba(212,182,106,0.06);
        }
        .pitch-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

                .pitch-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 286px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          box-shadow: 0 18px 40px rgba(0,0,0,0.09);
          transition: transform var(--transition), border-color var(--transition), background var(--transition);
        }
        .pitch-card::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 0;
          width: 2px;
          background: var(--cyan);
        }
        .pitch-card--competition::before {
          background: var(--gold);
        }
        .pitch-card--equity::before {
          background: var(--emerald);
        }
        .pitch-card--modeling::before {
          background: var(--rose);
        }
                 .pitch-card:hover {
          transform: translateY(-2px);
          border-color: rgba(126,181,255,0.6);
          background: rgba(255,255,255,0.14);
        }
                .pitch-card--competition:hover {
          border-color: rgba(212,182,106,0.42);
          background: rgba(255,255,255,0.16);
        }
                .pitch-card--modeling:hover {
          border-color: rgba(255,196,128,0.34);
          background: rgba(255,255,255,0.16);
        }
        .pitch-card__body {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 28px 30px 22px;
        }
        .pitch-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 26px;
        }
        .pitch-card__eyebrow {
          width: fit-content;
          border: 1px solid rgba(6,182,212,0.22);
          border-radius: 4px;
          background: rgba(6,182,212,0.055);
          color: rgba(103,232,249,0.92);
          padding: 6px 9px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 900;
          letter-spacing: 0.13em;
          line-height: 1;
          text-transform: uppercase;
        }
        .pitch-card--competition .pitch-card__eyebrow {
          border-color: rgba(245,158,11,0.25);
          background: rgba(245,158,11,0.065);
          color: rgba(252,211,77,0.92);
        }
        .pitch-card--equity .pitch-card__eyebrow {
          border-color: rgba(16,185,129,0.24);
          background: rgba(16,185,129,0.06);
          color: rgba(110,231,183,0.94);
        }
        .pitch-card--modeling .pitch-card__eyebrow {
          border-color: rgba(255,77,90,0.24);
          background: rgba(255,77,90,0.06);
          color: rgba(255,119,130,0.92);
        }
        .pitch-card__mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: 1px solid rgba(245,158,11,0.24);
          border-radius: 4px;
          background: rgba(245,158,11,0.06);
          color: rgba(252,211,77,0.9);
          flex-shrink: 0;
        }
        .pitch-card__title {
          max-width: 620px;
          margin-bottom: 22px;
          color: var(--text);
          font-size: clamp(22px, 2.1vw, 28px);
          font-weight: 800;
          letter-spacing: 0;
          line-height: 1.14;
        }
        .pitch-card__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }
        .pitch-card__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(166,179,173,0.20);
          border-radius: 5px;
          background: rgba(255,255,255,0.08);
          color: var(--text-2);
          padding: 10px 12px;
          font-family: var(--font-mono);
          letter-spacing: 0.03em;
          font-weight: 700;
        }
        .pitch-card__meta-item:first-child {
          font-size: 18px;
          color: var(--gold-light);
          border-color: var(--border-gold);
          background: rgba(212,182,106,0.04);
        }
        .pitch-card__meta-item:last-child {
          font-size: 14px;
          color: rgba(226,232,240,0.76);
        }
        .pitch-card__meta-item svg {
          color: var(--cyan);
        }
        .pitch-card--competition .pitch-card__meta-item svg {
          color: var(--gold);
        }
        .pitch-card--modeling .pitch-card__meta-item svg {
          color: var(--rose);
        }
        .pitch-card__result {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 16px;
          color: rgba(252,211,77,0.9);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 0.01em;
          line-height: 1.45;
        }
        .pitch-card__result svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .pitch-card__links {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 18px 30px 24px;
          border-top: 1px solid rgba(166,179,173,0.14);
          background: linear-gradient(180deg, rgba(2,6,18,0.28), rgba(2,6,18,0.18));
        }
        .pitch-card__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-width: 88px;
          border: 1px solid rgba(166,179,173,0.18);
          border-radius: 4px;
          background: rgba(255,255,255,0.025);
          color: rgba(226,232,240,0.78);
          padding: 9px 13px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.07em;
          line-height: 1;
          text-transform: uppercase;
          transition: transform var(--transition), border-color var(--transition), background var(--transition), color var(--transition), box-shadow var(--transition);
        }
        .pitch-card__link:hover {
          transform: translateY(-1px);
          border-color: rgba(6,182,212,0.58);
          background: rgba(6,182,212,0.12);
          color: var(--cyan-light);
          box-shadow: none;
        }
        .pitch-card--competition .pitch-card__link {
          border-color: rgba(148,163,184,0.18);
          background: rgba(255,255,255,0.025);
          color: rgba(226,232,240,0.78);
        }
        .pitch-card--competition .pitch-card__link:hover {
          border-color: rgba(245,158,11,0.5);
          background: rgba(245,158,11,0.1);
          color: var(--gold-light);
          box-shadow: none;
        }
        .pitch-card--modeling .pitch-card__link:hover {
          border-color: rgba(255,77,90,0.45);
          background: rgba(255,77,90,0.09);
          color: #ff7a84;
        }

        @media (min-width: 980px) {
          .pitch-card--equity {
            grid-column: span 2;
            min-height: 250px;
          }
        }

        @media (max-width: 900px) {
          .pitch-grid { grid-template-columns: 1fr; }
          .pitch-card { min-height: 255px; }
        }
        @media (max-width: 560px) {
          .stock-work__label { font-size: 10px; letter-spacing: 0.13em; }
          .pitch-filter { width: 100%; justify-content: center; }
          .pitch-card__body { padding: 22px 20px 18px; }
          .pitch-card__links { padding: 16px 20px 20px; }
          .pitch-card__link { flex: 1 1 auto; }
          .pitch-card__title { font-size: 22px; }
        }

        /* ═══ Other Work ═══ */
        .other-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .other-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 240px;
          overflow: hidden;
          border: 1px solid rgba(212,182,106,0.32);
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(4,10,22,0.95), rgba(10,18,34,0.88));
          box-shadow: 0 28px 72px rgba(0,0,0,0.42);
          transition: transform var(--transition), border-color var(--transition), background var(--transition), box-shadow var(--transition);
          padding: 28px 30px 28px;
        }
        .other-card::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 2px;
          background: rgba(212,182,106,0.85);
        }
        .other-card::after {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          bottom: 10px;
          width: 4px;
          border-radius: 6px;
          background: linear-gradient(180deg, rgba(212,182,106,0.95), rgba(126,181,255,0.85));
        }
        .other-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 32px 88px rgba(0,0,0,0.46);
          border-color: rgba(212,182,106,0.55);
        }
        .other-card__title {
          font-size: 18px;
          line-height: 1.35;
          color: #ffffff;
          margin: 14px 0 10px;
          max-width: 100%;
        }
        .other-card__desc {
          color: rgba(226,232,240,0.84);
          line-height: 1.8;
          margin-bottom: 18px;
          font-size: 14px;
        }
        .other-card__tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          width: fit-content;
          font-family: var(--font-mono);
        }
        .other-card__date {
          color: var(--gold-light);
          font-weight: 700;
          margin: 10px 0 14px;
        }
        .other-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid var(--border);
          color: var(--text-muted);
          background: rgba(255,255,255,0.03);
          transition: all var(--transition);
          letter-spacing: 0.02em;
          font-family: var(--font-mono);
        }
        .other-link:hover {
          border-color: var(--border-accent);
          color: var(--cyan);
          background: var(--cyan-dim);
        }

        @media (max-width: 600px) {
          .other-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
