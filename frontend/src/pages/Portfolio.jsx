import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
]);

const projects = [
  {
    category: 'ICT Infrastructure',
    title: 'Northern Star Hotel \u2014 ICT & Smart Systems',
    desc: 'Full ICT infrastructure deployment including network backbone, Wi-Fi, CCTV, IPTV, and PABX. Also delivered a Telegram-based chatbot for categorizing and dispatching guest orders.',
    tags: ['Networking', 'CCTV', 'IPTV', 'PABX', 'Telegram Bot'],
  },
  {
    category: 'ICT Infrastructure',
    title: 'Libanos Hotel \u2014 AV, Network & Safety',
    desc: 'Complete hotel TV system, full audio-visual installation, WiFi and network infrastructure, and fire alarm detection system (FADS).',
    tags: ['Hotel TV', 'Audio-Visual', 'WiFi & Network', 'Fire FADS'],
  },
  {
    category: 'Security',
    title: 'IOM Ethiopia \u2014 CCTV Installation',
    desc: 'Installed and commissioned 24 CCTV cameras across both the Shire and Mekelle offices for the International Organization for Migration.',
    tags: ['CCTV', 'Shire Office', 'Mekelle Office'],
  },
  {
    category: 'Software & Infrastructure',
    title: 'Legasona Vehicle Manufacturing \u2014 LAN & ERP',
    desc: 'Full LAN infrastructure deployment and a custom ERP system covering inventory management, point-of-sale, customer CRM, order queue, stock transfers, purchasing, expense tracking, multi-branch support, role-based access, dark mode, and full Amharic translation.',
    tags: ['LAN Infrastructure', 'ERP', 'Inventory', 'POS', 'CRM', 'Amharic'],
  },
  {
    category: 'Software Development',
    title: 'Daramba Hotel \u2014 Pension Management System',
    desc: 'Built a pension management system for tracking and managing employee pension data, contributions, and payouts.',
    tags: ['Pension System', 'Web Application'],
  },
  {
    category: 'ICT Infrastructure',
    title: 'Homeland Hotel \u2014 Full ICT Setup',
    desc: 'WiFi, CCTV, hotel TV system, time attendance and access control installation, and server setup and installation.',
    tags: ['WiFi', 'CCTV', 'Hotel TV', 'Access Control', 'Server'],
  },
  {
    category: 'Security',
    title: 'Nyala Motors \u2014 CCTV Surveillance',
    desc: 'Installed 8 CCTV cameras covering both the garage and office premises for complete security coverage.',
    tags: ['CCTV', 'Garage', 'Office'],
  },
  {
    category: 'ICT Infrastructure',
    title: 'Balloni Hotel \u2014 Network & Access Systems',
    desc: 'Hotel networking infrastructure, PBX phone system, door access installation and setup, and time attendance access control.',
    tags: ['Networking', 'PBX', 'Door Access', 'Time Attendance'],
  },
  {
    category: 'ICT Infrastructure',
    title: 'Genfel Hotel \u2014 WiFi & Network Upgrade',
    desc: 'Ticket-based WiFi management system, network infrastructure upgrade, router configuration, and server installation.',
    tags: ['WiFi Management', 'Network Upgrade', 'Server'],
  },
  {
    category: 'Web Development',
    title: 'Yarson Importer / Water Works \u2014 Website',
    desc: 'Designed and developed a professional website for Yarson Importer and Water Works.',
    tags: ['Web Design', 'Web Development'],
  },
];

const industries = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15"/></svg>,
    title: 'Hotels & Hospitality',
    desc: 'PMS, IPTV, guest Wi-Fi, CCTV, structured cabling',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>,
    title: 'NGOs & Development',
    desc: 'Data analytics, dashboards, reporting systems',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Government',
    desc: 'Data centers, network infrastructure, security systems',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42"/></svg>,
    title: 'Manufacturing & Enterprise',
    desc: 'ERP, networking, automation, digital transformation',
  },
];

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="See our work - hotel management systems, ICT infrastructure, data solutions, and software projects delivered across Ethiopia."
        keywords="Etacom Technology portfolio, hotel management systems, ICT infrastructure, data solutions, software projects Ethiopia"
        canonical="/portfolio"
        jsonLd={breadcrumbJsonLd}
      />
      <PageHeader title="Our Work" subtitle="Projects we&apos;ve delivered for hotels, enterprises, NGOs, and government organizations" />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="portfolio-grid">
            {projects.map((p, i) => (
              <article className="portfolio-card" key={i}>
                <div className="portfolio-card-header">
                  <span className="portfolio-category">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="portfolio-tags">
                  {p.tags.map((tag, j) => (
                    <span key={j}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industries</span>
            <h2 className="section-title">Sectors We Serve</h2>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div className="industry-item" key={i}>
                <div className="industry-icon">
                  {ind.icon}
                </div>
                <h4>{ind.title}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you need and we&apos;ll build the right solution.</p>
          </div>
          <Link to="/contact" className="btn btn-white">Start a Project</Link>
        </div>
      </section>
    </>
  );
}