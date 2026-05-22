import { MapPin, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { personal } from '../data/portfolio';

const highlights = [
  { icon: MapPin, text: 'New York, NY' },
  { icon: GraduationCap, text: 'Economics & Finance' },
  { icon: Calendar, text: `Graduating ${personal.graduation}` },
  { icon: BookOpen, text: 'Data Science Focus' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about__inner">
        <div className="about__photo">
          <div className="about__photo-placeholder">
            <span className="about__initials">VP</span>
          </div>
        </div>

        <div className="about__content">
          <p className="section-label">About</p>
          <h2 className="section-title">
            Bridging Markets,<br />Models, and Meaning.
          </h2>
          <div className="divider" />

          <p className="about__text">{personal.aboutP1}</p>
          <p className="about__text" style={{ marginTop: 16 }}>{personal.aboutP2}</p>

          <div className="about__highlights">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="about__chip">
                <Icon size={13} strokeWidth={2} />
                {text}
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href="#experience" className="btn btn-primary">View Experience</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>

      <style>{`
        .about__inner {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 80px;
          align-items: start;
        }
        .about__photo-placeholder {
          width: 280px;
          height: 340px;
          background: linear-gradient(135deg, var(--gray-100) 0%, var(--gray-200) 100%);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
        }
        .about__initials {
          font-family: var(--font-serif);
          font-size: 52px;
          color: var(--gray-400);
        }
        .about__content { padding-top: 4px; }
        .about__text {
          font-size: 15.5px;
          color: var(--text-secondary);
          line-height: 1.8;
        }
        .about__highlights {
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
          border-radius: 3px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--white);
        }
        .about__chip svg { color: var(--gold); }
        .about__actions { display: flex; gap: 12px; flex-wrap: wrap; }
        @media (max-width: 860px) {
          .about__inner { grid-template-columns: 1fr; gap: 40px; }
          .about__photo { display: flex; justify-content: center; }
          .about__photo-placeholder { width: 220px; height: 260px; }
          .about__initials { font-size: 40px; }
        }
      `}</style>
    </section>
  );
}
