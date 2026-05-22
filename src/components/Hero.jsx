import { ArrowRight, Download, TrendingUp } from 'lucide-react';
import { personal, stats } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="dot" />
            Economics &amp; Finance &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; Quantitative Analysis
          </p>

          <h1 className="hero__headline serif">
            {personal.heroHeadline}
          </h1>

          <p className="hero__sub">{personal.heroSub}</p>

          <div className="hero__ctas">
            <a href="#research" className="btn btn-primary">
              Explore My Research <ArrowRight size={15} />
            </a>
            <a href="#resume" className="btn btn-outline">
              <Download size={15} /> Download Resume
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__chart-card">
            <div className="hero__chart-header">
              <TrendingUp size={14} strokeWidth={2} />
              <span>Market Intelligence</span>
            </div>
            <div className="hero__chart-bars">
              {[45, 62, 51, 78, 65, 88, 72, 94, 80, 96].map((h, i) => (
                <div
                  key={i}
                  className="hero__bar"
                  style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
            <div className="hero__chart-footer">
              <span className="hero__chart-tag">Python</span>
              <span className="hero__chart-tag">Pandas</span>
              <span className="hero__chart-tag">Bloomberg</span>
            </div>
          </div>

          <div className="hero__pill hero__pill--1">DCF Modeling</div>
          <div className="hero__pill hero__pill--2">Econometrics</div>
          <div className="hero__pill hero__pill--3">Equity Research</div>
          <div className="hero__pill hero__pill--4">ML Models</div>
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
        .hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero__headline {
          font-size: clamp(32px, 4.5vw, 54px);
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 620px;
        }
        .hero__sub {
          font-size: 17px;
          color: rgba(255,255,255,0.62);
          line-height: 1.75;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .hero__ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .hero .btn-primary { background: var(--gold); color: var(--navy); }
        .hero .btn-primary:hover { background: var(--gold-light); }
        .hero .btn-outline { border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.8); }
        .hero .btn-outline:hover { background: rgba(255,255,255,0.08); color: var(--white); border-color: rgba(255,255,255,0.5); }
        .hero__stats {
          display: flex;
          gap: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .hero__stat { display: flex; flex-direction: column; }
        .hero__stat-value {
          font-size: 26px;
          font-weight: 700;
          color: var(--white);
          font-family: var(--font-serif);
          line-height: 1;
        }
        .hero__stat-label {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
        }

        /* Visual side */
        .hero__visual {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__chart-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-lg);
          padding: 24px;
          width: 280px;
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 2;
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
