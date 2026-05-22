import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
import { personal } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Talk.</h2>
          <div className="divider" />
          <p className="contact__text">
            Whether you are recruiting for a summer internship, looking to collaborate on research, or simply want to exchange ideas on markets and data — I would like to hear from you. I respond to all substantive messages within 48 hours.
          </p>

          <div className="contact__links">
            <a href={`mailto:${personal.email}`} className="contact__link">
              <div className="contact__link-icon">
                <Mail size={18} />
              </div>
              <div>
                <p className="contact__link-label">Email</p>
                <p className="contact__link-value">{personal.email}</p>
              </div>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
              <div className="contact__link-icon">
                <LinkedinIcon />
              </div>
              <div>
                <p className="contact__link-label">LinkedIn</p>
                <p className="contact__link-value">linkedin.com/in/visheshpoddar</p>
              </div>
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__link">
              <div className="contact__link-icon">
                <GithubIcon />
              </div>
              <div>
                <p className="contact__link-label">GitHub</p>
                <p className="contact__link-value">github.com/visheshpoddar</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__right">
          {sent ? (
            <div className="contact__success">
              <CheckCircle size={40} strokeWidth={1.5} className="contact__success-icon" />
              <h3>Message received.</h3>
              <p>Thank you for reaching out. I'll be in touch within 48 hours.</p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    id="name" name="name" type="text"
                    className="form-input" placeholder="Jane Smith"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    className="form-input" placeholder="jane@example.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <select
                  id="subject" name="subject"
                  className="form-input form-select"
                  value={form.subject} onChange={handleChange} required
                >
                  <option value="">Select a subject</option>
                  <option value="internship">Internship Inquiry</option>
                  <option value="research">Research Collaboration</option>
                  <option value="fulltime">Full-time Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  className="form-input form-textarea"
                  placeholder="Your message here..."
                  rows={5}
                  value={form.message} onChange={handleChange} required
                />
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
          gap: 80px;
          align-items: start;
        }
        .contact__text {
          font-size: 15.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .contact__links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact__link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: all var(--transition);
          background: var(--white);
        }
        .contact__link:hover {
          border-color: var(--navy);
          box-shadow: var(--shadow-sm);
        }
        .contact__link-icon {
          width: 40px; height: 40px;
          background: var(--gray-100);
          border-radius: var(--radius);
          display: flex; align-items: center; justify-content: center;
          color: var(--navy);
          flex-shrink: 0;
          transition: background var(--transition);
        }
        .contact__link:hover .contact__link-icon {
          background: var(--navy);
          color: var(--white);
        }
        .contact__link-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 1px;
        }
        .contact__link-value {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--navy);
        }

        /* Form */
        .contact__form { display: flex; flex-direction: column; gap: 18px; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }
        .form-input {
          padding: 10px 14px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          font-size: 14px;
          font-family: var(--font-sans);
          color: var(--text-primary);
          background: var(--white);
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
          width: 100%;
        }
        .form-input:focus {
          border-color: var(--navy);
          box-shadow: 0 0 0 3px rgba(11,31,58,0.08);
        }
        .form-input::placeholder { color: var(--text-muted); }
        .form-select { appearance: none; cursor: pointer; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .contact__submit {
          align-self: flex-start;
          padding: 12px 28px;
        }
        .contact__success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 12px;
          padding: 60px 40px;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          background: var(--section-alt);
        }
        .contact__success-icon { color: var(--gold); }
        .contact__success h3 {
          font-size: 20px;
          color: var(--navy);
          font-family: var(--font-serif);
          font-weight: 400;
        }
        .contact__success p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 860px) {
          .contact__inner { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
