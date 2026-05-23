import { useState } from 'react';
import { ExternalLink, FileText, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';
import { projects, stockPitches, otherWork } from '../data/portfolio';

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
          {project.pdf && (
            <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="proj-card__icon-btn" title="View PDF">
              <FileText size={14} />
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
        <div className="proj__section" id="stock-pitches">
          <p className="section-label">Stock pitches and equity research reports</p>


          <div className="pitches-table">
            <div className="pitches-row pitches-header">
              <div className="pitches-cell name">Pitch</div>
              <div className="pitches-cell date">Date</div>
              <div className="pitches-cell type">Type</div>
              <div className="pitches-cell pos">Position</div>
            </div>

            {stockPitches.map((p, i) => (
              <div className="pitches-row" key={`pitch-${i}`}>
                <div className="pitches-cell name">
                  <span className="pitch-text">{p.title}</span>
                  {p.reportUrl && (
                    <a href={p.reportUrl} target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginLeft: 12 }}>
                      Report
                    </a>
                  )}
                  {p.modelUrl && (
                    <a href={p.modelUrl} className="action-button" download style={{ marginLeft: 12 }}>
                      Model
                    </a>
                  )}
                  {p.websiteUrl && (
                    <a href={p.websiteUrl} target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginLeft: 12 }}>
                      Website
                    </a>
                  )}
                  {p.pitchUrl && (
                    <a href={p.pitchUrl} target="_blank" rel="noopener noreferrer" className="action-button" style={{ marginLeft: 12 }}>
                      Pitch
                    </a>
                  )}
                </div>
                <div className="pitches-cell date">{p.date}</div>
                <div className="pitches-cell type">{p.competition ? 'Competition' : 'Personal'}</div>
                <div className="pitches-cell pos">{p.position}</div>
              </div>
            ))}
          </div>

          <div className="proj__section" id="other">
            <p className="section-label">Other</p>
            <h3 className="section-title section-title--small">Additional writing and modeling work</h3>
            <div className="other-grid">
              {otherWork.map((item, index) => (
                <div key={index} className="other-card">
                  <div className="other-card__heading">
                    <p className="other-card__subtitle">{item.subtitle}</p>
                    <h4>{item.title}</h4>
                    <p className="other-card__date">{item.date}</p>
                  </div>
                  <p className="other-card__desc">{item.description}</p>
                  <div className="other-card__actions">
                    {item.links.map((link) => (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="action-button">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .proj__filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }
        .proj__section .section-label {
          font-size: 22px;
          line-height: 1.1;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 18px;
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
        /* Stock pitches table styles */
        .pitches-table { margin-top: 18px; display: flex; flex-direction: column; gap: 12px; }
        .pitches-row { display: grid; grid-template-columns: 1fr 140px 120px 220px; gap: 12px; align-items: center; padding: 12px 14px; border-radius: var(--radius); background: var(--white); border: 1px solid var(--border); }
        .pitches-header { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
        .pitches-cell.name { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
        .pitches-cell.date,
        .pitches-cell.type,
        .pitches-cell.pos { font-size: 13px; color: var(--text-secondary); }
        .pitch-text { font-weight: 600; color: var(--navy); }
        .action-button { display: inline-flex; align-items: center; justify-content: center; padding: 8px 12px; border-radius: 999px; background: var(--gray-100); border: 1px solid var(--border); color: var(--navy); font-size: 12px; text-decoration: none; transition: all var(--transition); }
        .action-button:hover { background: var(--navy); color: var(--white); border-color: var(--navy); }
        .other-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin-top: 24px; }
        .other-card { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px; display: flex; flex-direction: column; gap: 16px; }
        .other-card__subtitle { font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; }
        .other-card h4 { margin: 0; font-size: 18px; line-height: 1.35; color: var(--navy); }
        .other-card__date { font-size: 13px; color: var(--text-muted); margin-top: 6px; }
        .other-card__desc { font-size: 14px; line-height: 1.75; color: var(--text-secondary); }
        .other-card__actions { display: flex; flex-wrap: wrap; gap: 10px; }
        #other { margin-top: 48px; }
        @media (max-width: 1100px) {
          .other-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 760px) {
          .proj__grid { grid-template-columns: 1fr; }
          .pitches-row { grid-template-columns: 1fr; }
          .pitches-row.pitches-header { display: none; }
          .pitches-cell { width: 100%; }
          .other-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
