import { useState } from 'react';
import { ExternalLink, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/portfolio';

const allCats = ['All', ...new Set(projects.map(p => p.category))];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`proj-card${expanded ? ' proj-card--expanded' : ''}`}>
      <div className="proj-card__top">
        <span className="tag tag-navy proj-card__cat">{project.category}</span>
        <div className="proj-card__actions">
          {project.demo && (
            <a href={project.demo} className="proj-card__icon-btn" title="Live Demo">
              <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a href={project.github} className="proj-card__icon-btn" title="GitHub">
              <GitBranch size={14} />
            </a>
          )}
        </div>
      </div>

      <h3 className="proj-card__title">{project.title}</h3>
      <p className="proj-card__summary">{project.summary}</p>

      <div className={`proj-card__details${expanded ? ' proj-card__details--open' : ''}`}>
        <div className="proj-card__row">
          <span className="proj-card__row-label">Problem</span>
          <span className="proj-card__row-text">{project.problem}</span>
        </div>
        <div className="proj-card__row">
          <span className="proj-card__row-label">Method</span>
          <span className="proj-card__row-text">{project.method}</span>
        </div>
        <div className="proj-card__row">
          <span className="proj-card__row-label">Result</span>
          <span className="proj-card__row-text proj-card__result">{project.result}</span>
        </div>
      </div>

      <div className="proj-card__footer">
        <div className="proj-card__tools">
          {project.tools.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <button
          className="proj-card__toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <><ChevronUp size={13} /> Less</> : <><ChevronDown size={13} /> Details</>}
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Finance &amp; Data Science Work</h2>
        <p className="section-sub" style={{ marginBottom: 36 }}>
          Each project addresses a real financial or economic question using quantitative methods. Documented by problem, methodology, and outcome — not just code.
        </p>

        <div className="proj__filters">
          {allCats.map((c) => (
            <button
              key={c}
              className={`research__filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="proj__grid">
          {filtered.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>

      <style>{`
        .proj__filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .proj__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .proj-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
        }
        .proj-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--gray-200);
          transform: translateY(-2px);
        }
        .proj-card--expanded {
          grid-column: span 1;
        }
        .proj-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .proj-card__cat { font-size: 10.5px; }
        .proj-card__actions { display: flex; gap: 6px; }
        .proj-card__icon-btn {
          width: 28px; height: 28px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted);
          transition: all var(--transition);
        }
        .proj-card__icon-btn:hover {
          background: var(--navy);
          color: var(--white);
          border-color: var(--navy);
        }
        .proj-card__title {
          font-size: 15px;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.35;
        }
        .proj-card__summary {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .proj-card__details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .proj-card__details--open {
          max-height: 300px;
          opacity: 1;
        }
        .proj-card__row {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 10px;
          align-items: baseline;
        }
        .proj-card__row-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding-top: 2px;
        }
        .proj-card__row-text {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .proj-card__result {
          color: var(--navy);
          font-weight: 500;
        }
        .proj-card__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          margin-top: auto;
          gap: 8px;
        }
        .proj-card__tools {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          flex: 1;
        }
        .proj-card__tools .tag { font-size: 10.5px; padding: 3px 8px; }
        .proj-card__toggle {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 5px 10px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          background: var(--white);
          white-space: nowrap;
          transition: all var(--transition);
          flex-shrink: 0;
        }
        .proj-card__toggle:hover {
          background: var(--navy);
          color: var(--white);
          border-color: var(--navy);
        }
        @media (max-width: 960px) {
          .proj__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .proj__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
