import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolio';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#hero" className="navbar__logo" onClick={() => setActive('')}>
            <span className="navbar__logo-first">{personal.firstName}</span>
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

          <button
            className="navbar__hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-nav${open ? ' mobile-nav--open' : ''}`}>
        <ul className="mobile-nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="mobile-nav__link" onClick={() => handleNav(l.href)}>
                {l.label}
              </a>
            </li>
          ))}

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
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          border-bottom-color: var(--border);
          box-shadow: var(--shadow-sm);
        }
        .navbar__inner {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 40px;
        }
        .navbar__logo {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--white);
          text-shadow: 0 1px 14px rgba(0,0,0,0.35);
          flex-shrink: 0;
        }
        .navbar__logo-first { color: var(--white); }
        .navbar__logo-last { color: var(--gold); margin-left: 4px; }
        .navbar__links {
          display: flex;
          list-style: none;
          gap: 4px;
          margin-left: auto;
          align-items: center;
        }
        .navbar__link {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.95);
          padding: 10px 14px;
          border-radius: var(--radius);
          transition: color var(--transition), background var(--transition);
          letter-spacing: 0.01em;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.16);
        }
        .navbar__link:hover, .navbar__link.active {
          color: var(--white);
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.24);
        }
        .navbar--scrolled .navbar__logo { color: var(--navy); }
        .navbar--scrolled .navbar__logo-first { color: var(--navy); }
        .navbar--scrolled .navbar__logo-last { color: var(--gold); }
        .navbar--scrolled .navbar__link { color: var(--text-secondary); }
        .navbar--scrolled .navbar__link:hover, .navbar--scrolled .navbar__link.active { color: var(--navy); background: var(--gray-100); }
        .navbar__cta { margin-left: 8px; padding: 9px 20px; font-size: 13.5px; }
        .navbar__hamburger {
          display: none;
          color: var(--navy);
          margin-left: auto;
          padding: 6px;
        }
        .mobile-nav {
          position: fixed;
          inset: var(--nav-height) 0 0 0;
          background: var(--white);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        .mobile-nav--open { opacity: 1; pointer-events: all; }
        .mobile-nav__links {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 20px;
        }
        .mobile-nav__link {
          font-size: 20px;
          font-weight: 500;
          color: var(--navy);
          padding: 16px 32px;
          width: 100%;
          text-align: center;
          border-radius: var(--radius);
          display: block;
          transition: background var(--transition);
        }
        .mobile-nav__link:hover { background: var(--gray-100); }
        .mobile-nav__btn { margin-top: 16px; width: 100%; justify-content: center; font-size: 16px; padding: 14px; }
        @media (max-width: 900px) {
          .navbar__links, .navbar__cta { display: none; }
          .navbar__hamburger { display: flex; }
          .navbar--scrolled { background: rgba(255,255,255,0.98); }
        }
      `}</style>
    </>
  );
}
