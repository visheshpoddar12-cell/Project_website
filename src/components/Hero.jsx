import { ArrowRight, Download, Mail } from 'lucide-react';
import { personal, stats } from '../data/portfolio';
import headshotPng from '../../headshot.png';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid grid-bg" aria-hidden="true" />
      <div className="hero__chartline" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__headline">
            {personal.firstName}<br />{personal.lastName}
          </h1>

          <p className="hero__subtitle">
            Global Markets • Sales &amp; Trading • Research • Data-Driven Strategy
          </p>

          <div className="hero__tags">
            <span className="hero__tag">Global Markets</span>
            <span className="hero__tag">Sales & Trading</span>
            <span className="hero__tag">Research</span>
            <span className="hero__tag">Data-Driven Strategy</span>
          </div>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View Research <ArrowRight size={15} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              <Download size={14} /> Resume
            </a>
          </div>

          <div className="hero__links">
            <a href={`mailto:${personal.email}`} className="hero__link">
              <Mail size={13} /> Email
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hero__link">
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero__link">
              Resume
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero__portrait-wrap" aria-label={`${personal.name} portrait`}>
          <div className="hero__portrait-frame">
            <img src={headshotPng} alt={personal.name} className="hero__portrait" />
          </div>
        </aside>
      </div>

      <style>{`
        .hero {
          min-height: 78vh;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding-top: var(--nav-height);
          position: relative;
          overflow: hidden;
        }
        .hero__grid {
          position: absolute;
          inset: 0;
          opacity: 0.52;
        }
        .hero__chartline {
          position: absolute;
          inset: 20% 0 auto auto;
          width: 58%;
          height: 260px;
          opacity: 0.18;
          pointer-events: none;
          background:
            linear-gradient(135deg, transparent 0 10%, rgba(126,181,255,0.28) 10.2% 10.6%, transparent 10.8% 29%, rgba(126,181,255,0.22) 29.2% 29.6%, transparent 29.8% 48%, rgba(201,180,111,0.18) 48.2% 48.6%, transparent 48.8%),
            linear-gradient(180deg, rgba(216,228,255,0.08) 1px, transparent 1px);
          background-size: 100% 100%, 100% 52px;
        }
        .hero__inner {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) 400px;
          gap: 48px;
          align-items: center;
          flex: 1;
          padding-top: 48px;
          padding-bottom: 46px;
          position: relative;
          z-index: 1;
        }

        /* Tags */
        .hero__tags {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .hero__tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 5px 12px;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: rgba(11,15,16,0.72);
          transition: all var(--transition);
        }
        .hero__tag:hover {
          border-color: var(--border-accent);
          color: var(--cyan);
          background: var(--cyan-dim);
        }
        .hero__headline {
          max-width: 850px;
          margin-bottom: 24px;
          color: var(--text);
          font-size: clamp(46px, 6.5vw, 82px);
          font-weight: 860;
          letter-spacing: -0.04em;
          line-height: 0.98;
          margin-bottom: 24px;
        }
        .hero__subtitle {
          max-width: 640px;
          margin-bottom: 18px;
          color: var(--text-2);
          font-size: 17px;
          line-height: 1.55;
          letter-spacing: 0.01em;
        }

        /* CTAs */
        .hero__ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 16px;
        }

        /* Ghost links */
        .hero__links {
          display: flex;
          gap: 24px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .hero__link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          transition: color var(--transition);
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }
        .hero__link:hover {
          color: var(--text);
          border-bottom-color: var(--border-accent);
        }

        /* Stats */
        .hero__stats {
          display: flex;
          gap: 36px;
          padding-top: 22px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
        }
        .hero__stat { display: flex; flex-direction: column; }
        .hero__stat-val {
          font-family: var(--font-mono);
          font-size: 25px;
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .hero__stat-lbl {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        .hero__portrait-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__portrait-frame {
          width: min(100%, 360px);
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 1px solid rgba(92,193,255,0.28);
          border-radius: 14px;
          background: rgba(4,10,24,0.72);
          box-shadow: 0 0 0 1px rgba(255,77,90,0.06), 0 24px 60px rgba(0,0,0,0.42);
        }
        .hero__portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        @media (max-width: 1020px) {
          .hero__inner {
            grid-template-columns: 1fr;
            gap: 34px;
            text-align: center;
            justify-items: center;
          }
          .hero__portrait-wrap { width: 100%; }
          .hero__portrait-frame { width: min(72vw, 300px); }
          .hero__tags { justify-content: center; }
        @media (max-width: 520px) {
          .hero__headline { font-size: 39px; }
          .hero__ctas { flex-direction: column; align-items: stretch; }
          .hero__stats { gap: 20px; }
        }
      `}</style>
    </section>
  );
}
