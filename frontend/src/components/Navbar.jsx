import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/erp-modules', label: 'ERP Modules' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Link to="/" className="logo">
          <div className="logo-icon">E</div>
          Etacom <span>Technology</span>
        </Link>
        <div className={`nav-links${open ? ' open' : ''}`} id="nav-menu" role="menubar">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} role="menuitem">
              {l.label}
            </NavLink>
          ))}
        </div>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="nav-menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
