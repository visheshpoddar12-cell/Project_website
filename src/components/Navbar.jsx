import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolio';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Pitches', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => { setOpen(false); setActive(href); };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#hero" className="navbar__logo" onClick={() => setActive('')}>
            <span className="navbar__logo-first">{personal.firstName}</span>
            <span className="navbar__logo-sep"> </span>
            <span className="navbar__logo-last">{personal.lastName}</span>
          </a>

          <ul className="navbar__links">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`navbar__link${active === l.href ? ' active' : ''}`}
                  onClick={() => handleNav(l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="quick">
            <button
              type="button"
              className={`navbar__cta${quickOpen ? ' navbar__cta--open' : ''}`}
              onClick={() => setQuickOpen(!quickOpen)}
              aria-expanded={quickOpen}
              aria-haspopup="menu"
            >
              Quick Links <span>⌘K</span>
            </button>
            {quickOpen && (
              <div className="quick__menu" role="menu">
                <a href={`mailto:${personal.email}`} role="menuitem" onClick={() => setQuickOpen(false)}>
                  <span>Email</span><small>CONTACT</small>
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" role="menuitem" onClick={() => setQuickOpen(false)}>
                  <span>LinkedIn</span><small>PROFILE</small>
                </a>
                <a href="/resume.pdf" download role="menuitem" onClick={() => setQuickOpen(false)}>
                  <span>Resume</span><small>PDF</small>
                </a>
              </div>
            )}
          </div>

          <button
            className="navbar__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${open ? ' mobile-nav--open' : ''}`}>
        <ul className="mobile-nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="mobile-nav__link" onClick={() => handleNav(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${personal.email}`} className="mobile-nav__cta" onClick={() => setOpen(false)}>
              Email
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: var(--nav-height);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
          border-bottom: 1px solid transparent;
        }
        .navbar--scrolled {
          background: rgba(5,6,7,0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom-color: var(--border);
          box-shadow: 0 1px 0 rgba(0,229,200,0.05);
        }
        .navbar__inner {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .navbar__logo {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .navbar__logo-first { color: var(--text); }
        .navbar__logo-sep { width: 6px; }
        .navbar__logo-last {
          color: var(--gold-light);
        }
        .navbar__links {
          display: flex;
          list-style: none;
          gap: 2px;
          margin-left: auto;
          align-items: center;
        }
        .navbar__link {
          font-size: 13.5px;
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--text-muted);
          padding: 7px 12px;
          border-radius: 4px;
          transition: color var(--transition), background var(--transition);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .navbar__link:hover, .navbar__link.active {
          color: var(--text);
          background: rgba(255,255,255,0.05);
        }
        .navbar__link.active { color: var(--cyan); }
        .quick { position: relative; margin-left: 8px; }
        .navbar__cta {
          padding: 8px 10px 8px 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 999px;
          border: 1px solid rgba(255,77,90,0.38);
          color: var(--cyan);
          background: rgba(5,6,7,0.72);
          transition: all var(--transition);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .navbar__cta span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 28px;
          height: 20px;
          border-radius: 999px;
          border: 1px solid rgba(166,179,173,0.16);
          color: var(--text-muted);
          font-size: 10px;
          letter-spacing: 0;
        }
        .navbar__cta:hover, .navbar__cta--open {
          background: var(--cyan-dim);
          border-color: rgba(0,229,200,0.5);
          box-shadow: var(--glow-cyan);
        }
        .quick__menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 230px;
          padding: 8px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: rgba(5,6,7,0.96);
          box-shadow: var(--shadow);
        }
        .quick__menu a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 11px 12px;
          border-radius: 4px;
          color: var(--text-2);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
        }
        .quick__menu a:hover {
          background: rgba(0,229,200,0.08);
          color: var(--text);
        }
        .quick__menu small {
          color: var(--text-dim);
          font-size: 10px;
          letter-spacing: 0.08em;
        }
        .navbar__hamburger {
          display: none;
          color: var(--text-2);
          margin-left: auto;
          padding: 6px;
          border-radius: 6px;
          transition: background var(--transition);
        }
        .navbar__hamburger:hover { background: rgba(255,255,255,0.06); }

        /* Mobile */
        .mobile-nav {
          position: fixed;
          inset: var(--nav-height) 0 0 0;
          background: rgba(5,6,7,0.98);
          backdrop-filter: blur(20px);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          border-top: 1px solid var(--border);
        }
        .mobile-nav--open { opacity: 1; pointer-events: all; }
        .mobile-nav__links {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
          padding: 20px;
        }
        .mobile-nav__link {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-2);
          padding: 16px 32px;
          width: 100%;
          text-align: center;
          border-radius: 4px;
          display: block;
          transition: all var(--transition);
        }
        .mobile-nav__link:hover { background: rgba(255,255,255,0.04); color: var(--text); }
        .mobile-nav__cta {
          display: block;
          margin-top: 16px;
          width: 100%;
          text-align: center;
          padding: 14px 32px;
          border-radius: 8px;
          border: 1px solid var(--border-accent);
          color: var(--cyan);
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          transition: all var(--transition);
        }
        .mobile-nav__cta:hover { background: var(--cyan-dim); }

        @media (max-width: 860px) {
          .navbar__links, .quick { display: none; }
          .navbar__hamburger { display: flex; }
        }
      `}</style>
    </>
  );
}
