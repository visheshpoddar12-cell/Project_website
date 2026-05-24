import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { personal } from '../data/portfolio';

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="alt">
      <div className="container contact__inner">
        <div className="contact__left">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Talk.</h2>
          <div className="divider" />
          <p className="contact__text">
            Whether you are recruiting for a summer internship, looking to collaborate on research, or simply want to exchange ideas on markets and data — I would like to hear from you. I respond to all substantive messages within 48 hours.
          </p>

          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="contact__link glass-card">
              <div className="contact__link-icon"><Mail size={16} /></div>
              <div>
                <p className="contact__link-label">Email</p>
                <p className="contact__link-value">{personal.email}</p>
              </div>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link glass-card">
              <div className="contact__link-icon"><LinkedinIcon /></div>
              <div>
                <p className="contact__link-label">LinkedIn</p>
                <p className="contact__link-value">linkedin.com/in/visheshpoddar</p>
              </div>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__link glass-card">
              <div className="contact__link-icon"><GithubIcon /></div>
              <div>
                <p className="contact__link-label">GitHub</p>
                <p className="contact__link-value">github.com/visheshpoddar</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__right">
          {sent ? (
            <div className="contact__success glass-card">
              <CheckCircle size={40} strokeWidth={1.5} className="contact__success-icon" />
              <h3>Message received.</h3>
              <p>Thank you for reaching out. I'll be in touch within 48 hours.</p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form className="contact__form glass-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" className="form-input" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" className="form-input" placeholder="jane@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <select id="subject" name="subject" className="form-input form-select" value={form.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="internship">Internship Inquiry</option>
                  <option value="research">Research Collaboration</option>
                  <option value="fulltime">Full-time Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-input form-textarea" placeholder="Your message here..." rows={5} value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }
        .contact__text {
          font-size: 15px;
          color: var(--text-2);
          line-height: 1.75;
          margin-bottom: 32px;
        }
        .contact__links { display: flex; flex-direction: column; gap: 12px; }
        .contact__link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          transition: all var(--transition);
          cursor: pointer;
        }
        .contact__link-icon {
          width: 40px; height: 40px;
          background: var(--cyan-dim);
          border: 1px solid rgba(6,182,212,0.2);
          border-radius: var(--radius);
          display: flex; align-items: center; justify-content: center;
          color: var(--cyan);
          flex-shrink: 0;
          transition: all var(--transition);
        }
        .contact__link:hover .contact__link-icon {
          background: var(--cyan);
          color: #050A18;
          box-shadow: var(--glow-cyan);
        }
        .contact__link-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 2px;
        }
        .contact__link-value {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text);
        }

        /* Form */
        .contact__form { display: flex; flex-direction: column; gap: 18px; padding: 28px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 7px; }
        .form-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .form-input {
          padding: 10px 14px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          font-size: 14px;
          font-family: var(--font-sans);
          color: var(--text);
          background: rgba(255,255,255,0.03);
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
          width: 100%;
        }
        .form-input:focus {
          border-color: var(--border-accent);
          box-shadow: 0 0 0 3px rgba(6,182,212,0.08);
        }
        .form-input::placeholder { color: var(--text-dim); }
        .form-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(226,232,240,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 32px;
        }
        .form-select option { background: #0a1224; color: var(--text); }
        .form-textarea { resize: vertical; min-height: 120px; }
        .contact__submit { align-self: flex-start; padding: 11px 24px; }

        .contact__success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 14px;
          padding: 60px 40px;
        }
        .contact__success-icon { color: var(--emerald); }
        .contact__success h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
        }
        .contact__success p {
          font-size: 14px;
          color: var(--text-2);
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .contact__inner { grid-template-columns: 1fr; gap: 40px; }
          .form-row { grid-template-columns: 1fr; }
          .contact__form { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
