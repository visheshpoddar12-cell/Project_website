import { personal } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#hero" className="footer__name">
            {personal.firstName}
            <span> {personal.lastName}</span>
          </a>
          <p className="footer__tagline">Economics · Finance · Data Science</p>
        </div>

        <nav className="footer__nav">
          {['#about', '#projects'].map((h) => (
            <a key={h} href={h} className="footer__nav-link">
              {h.slice(1).charAt(0).toUpperCase() + h.slice(2)}
            </a>
          ))}
          <a href={`mailto:${personal.email}`} className="footer__nav-link">Email</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer__nav-link">LinkedIn</a>
          <a href="/resume.pdf" download className="footer__nav-link">Resume</a>
        </nav>

        <p className="footer__copy">© {year} {personal.name}</p>
      </div>

      <style>{`
        .footer {
          background: rgba(5,6,7,0.92);
          padding: 32px 0;
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .footer__glow {
          position: absolute;
          bottom: -60px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 120px;
          background: rgba(6,182,212,0.06);
          filter: blur(40px);
          pointer-events: none;
        }
        .footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        .footer__name {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--text);
          display: block;
          margin-bottom: 4px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .footer__name span {
          background: linear-gradient(135deg, var(--cyan), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer__tagline {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-dim);
        }
        .footer__nav { display: flex; gap: 20px; flex-wrap: wrap; }
        .footer__nav-link {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          transition: color var(--transition);
        }
        .footer__nav-link:hover { color: var(--cyan); }
        .footer__copy {
          font-size: 12px;
          color: var(--text-dim);
        }

        @media (max-width: 700px) {
          .footer__inner { flex-direction: column; align-items: flex-start; gap: 20px; }
          .footer__nav { gap: 14px; }
        }
      `}</style>
    </footer>
  );
}
