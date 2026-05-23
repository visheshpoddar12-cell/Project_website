import { personal } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#hero" className="footer__name">
            {personal.firstName} <span>{personal.lastName}</span>
          </a>
          <p className="footer__tagline">Economics · Finance · Data Science</p>
        </div>
        <nav className="footer__nav">
          {['#about', '#research', '#projects', '#skills', '#leadership', '#resume', '#experience', '#contact'].map((h) => (
            <a key={h} href={h} className="footer__nav-link">
              {h.slice(1).charAt(0).toUpperCase() + h.slice(2)}
            </a>
          ))}
        </nav>
        <p className="footer__copy">© {year} {personal.name}</p>
      </div>

      <style>{`
        .footer {
          background: var(--navy);
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer__name {
          font-size: 15px;
          font-weight: 600;
          color: var(--white);
          display: block;
          margin-bottom: 4px;
        }
        .footer__name span { color: var(--gold); }
        .footer__tagline {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .footer__nav {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer__nav-link {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          transition: color var(--transition);
        }
        .footer__nav-link:hover { color: var(--white); }
        .footer__copy {
          font-size: 12px;
          color: rgba(255,255,255,0.25);
        }
        @media (max-width: 700px) {
          .footer__inner { flex-direction: column; align-items: flex-start; gap: 20px; }
          .footer__nav { gap: 14px; }
        }
      `}</style>
    </footer>
  );
}
