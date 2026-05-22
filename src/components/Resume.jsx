import { Download, FileText, RefreshCw } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="alt">
      <div className="container resume__inner">
        <div className="resume__left">
          <p className="section-label">Resume</p>
          <h2 className="section-title">Curriculum Vitae</h2>
          <div className="divider" />
          <p className="resume__text">
            A concise record of my academic background, professional experience, research output, and technical skills. Tailored versions available for specific roles upon request.
          </p>
          <div className="resume__meta">
            <span className="resume__meta-item">
              <RefreshCw size={12} /> Last updated: May 2025
            </span>
            <span className="resume__meta-item">
              <FileText size={12} /> One page PDF
            </span>
          </div>
          <div className="resume__actions">
            <a href="/resume.pdf" download className="btn btn-primary">
              <Download size={15} /> Download PDF
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Online
            </a>
          </div>
          <p className="resume__note">
            For finance and consulting roles, I am happy to tailor the resume to emphasize relevant experience. Reach out via the contact section.
          </p>
        </div>

        <div className="resume__preview">
          <div className="resume__mock">
            <div className="resume__mock-header">
              <div className="resume__mock-name" />
              <div className="resume__mock-sub" />
              <div className="resume__mock-sub short" />
            </div>
            {[
              { label: 'EDUCATION', lines: 3 },
              { label: 'EXPERIENCE', lines: 5 },
              { label: 'PROJECTS', lines: 4 },
              { label: 'SKILLS', lines: 2 },
            ].map(({ label, lines }) => (
              <div key={label} className="resume__mock-section">
                <div className="resume__mock-section-label">{label}</div>
                <div className="resume__mock-divider" />
                {Array.from({ length: lines }).map((_, i) => (
                  <div
                    key={i}
                    className="resume__mock-line"
                    style={{ width: `${75 + Math.random() * 22}%` }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="resume__preview-overlay">
            <a href="/resume.pdf" download className="btn btn-gold">
              <Download size={15} /> Download Resume
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .resume__inner {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 72px;
          align-items: center;
        }
        .resume__text {
          font-size: 15.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .resume__meta {
          display: flex;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .resume__meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .resume__meta-item svg { color: var(--gold); }
        .resume__actions {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .resume__note {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          padding: 14px;
          background: var(--white);
          border: 1px solid var(--border);
          border-left: 3px solid var(--gold);
          border-radius: var(--radius);
        }
        .resume__preview {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .resume__preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,31,58,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .resume__preview:hover .resume__preview-overlay { opacity: 1; }
        .resume__mock {
          background: var(--white);
          padding: 28px 24px;
          border: 1px solid var(--border);
        }
        .resume__mock-header { margin-bottom: 20px; text-align: center; }
        .resume__mock-name {
          height: 14px;
          background: var(--navy);
          border-radius: 3px;
          width: 60%;
          margin: 0 auto 8px;
        }
        .resume__mock-sub {
          height: 8px;
          background: var(--gray-200);
          border-radius: 3px;
          width: 80%;
          margin: 0 auto 5px;
        }
        .resume__mock-sub.short { width: 50%; }
        .resume__mock-section { margin-bottom: 16px; }
        .resume__mock-section-label {
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .resume__mock-divider {
          height: 1px;
          background: var(--navy);
          margin-bottom: 8px;
        }
        .resume__mock-line {
          height: 7px;
          background: var(--gray-100);
          border-radius: 3px;
          margin-bottom: 5px;
        }
        @media (max-width: 900px) {
          .resume__inner { grid-template-columns: 1fr; gap: 40px; }
          .resume__preview { max-width: 360px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
