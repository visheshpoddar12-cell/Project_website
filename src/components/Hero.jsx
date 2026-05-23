import { personal } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__headline serif">
            {personal.name}
          </h1>

          <div className="hero__tags">
            <span>Finance</span>
            <span>Economics</span>
            <span>Data Science</span>
          </div>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              Explore my projects
            </a>
          </div>

          <div className="hero__links">
            <a href={`mailto:${personal.email}`} className="hero__link">Email</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hero__link">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero__link">Resume</a>
          </div>
        </div>

        <div className="hero__visual">
          <img src="/headshot.png" alt="LinkedIn headshot" className="hero__headshot" />
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--nav-height);
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .hero__bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to top, var(--white), transparent);
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          align-items: center;
          padding-top: 48px;
          padding-bottom: 80px;
          position: relative;
          z-index: 1;
        }
        .hero__headline {
          font-size: clamp(46px, 5.5vw, 82px);
          color: var(--white);
          line-height: 1.05;
          margin-bottom: 18px;
          max-width: 720px;
        }
        .hero__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }
        .hero__tags span {
          font-size: 13px;
          font-weight: 600;
          color: var(--gold);
          background: rgba(255,255,255,0.06);
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
        }
        .hero__ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hero .btn-primary { background: var(--gold); color: var(--navy); }
        .hero .btn-primary:hover { background: var(--gold-light); }
        .hero__links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .hero__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: var(--radius);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          transition: background var(--transition), color var(--transition), border-color var(--transition);
        }
        .hero__link:hover {
          background: rgba(255,255,255,0.18);
          color: var(--white);
          border-color: rgba(255,255,255,0.25);
        }
        .hero__visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .hero__headshot {
          width: 100%;
          max-width: 440px;
          border-radius: 28px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.1);
          object-fit: cover;
        }
        .hero__chart-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        .hero__chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          height: 100px;
          margin-bottom: 16px;
        }
        .hero__bar {
          flex: 1;
          background: linear-gradient(to top, var(--gold), rgba(201,168,76,0.3));
          border-radius: 2px 2px 0 0;
          animation: grow 0.6s ease-out backwards;
        }
        @keyframes grow {
          from { height: 0 !important; }
        }
        .hero__chart-footer {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .hero__chart-tag {
          font-size: 10px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 2px;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.03em;
        }
        .hero__pill {
          position: absolute;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          white-space: nowrap;
        }
        .hero__pill--1 { top: 30px; left: -20px; }
        .hero__pill--2 { top: 80px; right: -10px; }
        .hero__pill--3 { bottom: 100px; left: -30px; }
        .hero__pill--4 { bottom: 50px; right: 0; }

        @media (max-width: 960px) {
          .hero__inner { grid-template-columns: 1fr; gap: 0; }
          .hero__visual { display: none; }
          .hero__stats { gap: 28px; }
        }
        @media (max-width: 480px) {
          .hero__headline { font-size: 28px; }
          .hero__ctas { flex-direction: column; }
          .hero__stats { gap: 20px; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
