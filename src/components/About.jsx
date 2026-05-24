import { MapPin, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { personal } from '../data/portfolio';

const highlights = [
  { icon: MapPin, text: 'Toronto, ON' },
  { icon: GraduationCap, text: 'Rotman Commerce' },
  { icon: Calendar, text: `Class of ${personal.graduation}` },
  { icon: BookOpen, text: 'Data Science Focus' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about__inner">
        <div className="about__content">
          <p className="section-label">About</p>
          <h2 className="section-title">
            Curious by default,<br />disciplined by markets.
          </h2>
          <div className="divider" />

          <p className="about__text">{personal.aboutP1}</p>
          <p className="about__text" style={{ marginTop: 16 }}>{personal.aboutP2}</p>
          <div className="about__chips">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="about__chip">
                <Icon size={13} strokeWidth={2} />
                {text}
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href="#projects" className="btn btn-primary">View Stock Pitches</a>
            <a href={`mailto:${personal.email}`} className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>

      <style>{`
        .about__inner {
          max-width: 780px;
        }
        .about__content { padding-top: 4px; }
        .about__text {
          font-size: 15.5px;
          color: var(--text-2);
          line-height: 1.8;
        }
        .about__scholarship {
          margin-top: 18px;
          padding: 16px 18px;
          border: 1px solid rgba(198,162,74,0.22);
          border-left: 3px solid var(--gold);
          border-radius: var(--radius);
          background:
            linear-gradient(90deg, rgba(198,162,74,0.08), rgba(198,162,74,0.025)),
            rgba(13,17,23,0.72);
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.7;
          letter-spacing: 0.02em;
        }
        .about__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
          margin-bottom: 32px;
        }
        .about__chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-2);
          background: rgba(255,255,255,0.03);
          transition: all var(--transition);
        }
        .about__chip:hover {
          border-color: var(--border-accent);
          background: var(--cyan-dim);
          color: var(--text);
        }
        .about__chip svg { color: var(--cyan); }
        .about__actions { display: flex; gap: 12px; flex-wrap: wrap; }

        @media (max-width: 860px) {
          .about__inner { max-width: none; }
        }
      `}</style>
    </section>
  );
}
