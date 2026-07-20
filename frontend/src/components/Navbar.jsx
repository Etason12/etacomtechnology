import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const serviceLinks = [
  { to: '/service?slug=custom-software-development', label: 'Custom Software Development' },
  { to: '/service?slug=ai-machine-learning', label: 'AI & Machine Learning' },
  { to: '/service?slug=data-engineering-analytics', label: 'Data Engineering & Analytics' },
  { to: '/service?slug=cloud-solutions-devops', label: 'Cloud Solutions & DevOps' },
  { to: '/service?slug=mobile-web-applications', label: 'Mobile & Web Applications' },
  { to: '/service?slug=data-visualization-bi', label: 'Data Visualization & BI' },
  { to: '/service?slug=data-center-solutions', label: 'Data Center Solutions' },
  { to: '/service?slug=digital-transformation', label: 'Digital Transformation' },
  { to: '/service?slug=ict-equipment-supply-installation', label: 'ICT Equipment Supply & Installation' },
];

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { type: 'dropdown', label: 'Services', children: serviceLinks },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact Us', cta: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  // Close menus on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleDropdownToggle = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleWrapperClick = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      !toggleRef.current?.contains(e.target)
    ) {
      setOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleWrapperClick);
    return () => document.removeEventListener('click', handleWrapperClick);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className={`header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`} id="header" role="navigation" aria-label="Main navigation">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="nav">
        <Link to="/" className="logo" aria-label="Etacom Technology Home" onClick={closeAll}>
          <span className="logo-icon">E</span>
          <span className="logo-text">Etacom<span>Technology</span></span>
        </Link>
        <button
          ref={toggleRef}
          className={`nav-toggle${open ? ' active' : ''}`}
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          ref={navRef}
          className={`nav-menu${open ? ' active' : ''}`}
          id="navMenu"
          role="menubar"
        >
          {navLinks.map((item, index) => {
            if (item.type === 'dropdown') {
              return (
                <li key={index} className={`nav-dropdown${dropdownOpen ? ' active' : ''}`} role="none">
                  <button
                    className="nav-link"
                    aria-expanded={dropdownOpen}
                    aria-controls="serviceDropdown"
                    aria-haspopup="true"
                    onClick={handleDropdownToggle}
                    role="menuitem"
                    type="button"
                  >
                    {item.label}
                    <svg className="dropdown-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <ul className={`dropdown-menu${dropdownOpen ? ' active' : ''}`} id="serviceDropdown" role="menu">
                    {item.children.map((child, i) => (
                      <li key={i} role="none">
                        <NavLink
                          to={child.to}
                          role="menuitem"
                          onClick={closeAll}
                          className={({ isActive }) => isActive ? 'active' : ''}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={index} role="none">
                <NavLink
                  to={item.to}
                  role="menuitem"
                  onClick={closeAll}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link${item.cta ? ' btn btn-primary' : ''}${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
          <li role="none" className="nav-theme-toggle">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
