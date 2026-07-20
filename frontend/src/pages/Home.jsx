import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AnimatedCounter from "../components/AnimatedCounter";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Etacom Technology",
  url: "https://etacomtechnology.com",
  logo: "https://etacomtechnology.com/favicon.svg",
  description: "Premier software development and IT consulting company based in Addis Ababa, Ethiopia.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bole, In-front of Bonanza Hotel",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+251-911-000-000",
    contactType: "customer service",
    email: "info@etacomtechnology.com",
  },
  sameAs: [
    "https://facebook.com/etacomtechnology",
    "https://linkedin.com/company/etacomtechnology",
    "https://twitter.com/etacomtechnology",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Etacom Technology",
  url: "https://etacomtechnology.com",
  description: "Software development, ERP systems, website design, and IT consulting services in Ethiopia.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://etacomtechnology.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function Home() {
  return (
    <>
      <SEO
        description="Etacom Technology - premier software development and IT consulting company in Addis Ababa, Ethiopia. Custom software, ERP systems, website design, and mobile app development."
        keywords="Etacom Technology, software development Ethiopia, ERP Ethiopia, web development Addis Ababa, IT consulting, custom software, mobile apps Ethiopia"
        canonical="/"
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Powering Innovation with
            <span className="gradient-text">Technology & Intelligence</span>
          </h1>
          <p className="hero-desc">
            Etacom Technology delivers cutting-edge software, AI, data solutions, data center infrastructure,
            and ICT equipment supply & installation &mdash; empowering hotels, enterprises, NGOs, and government
            organizations across Ethiopia.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
            <Link to="/#services" className="btn btn-outline">Explore Services</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>20+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="hero-stat">
              <strong>15+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="hero-stat">
              <strong>100%</strong>
              <span>Client Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features animate-on-scroll">
        <div className="container features-grid animate-stagger">
          <article className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Software Development</h3>
            <p>Custom web, mobile, and enterprise software built with modern architectures and best-in-class technologies.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3>AI & Machine Learning</h3>
            <p>Intelligent solutions including predictive models, NLP, computer vision, and process automation powered by AI.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </div>
            <h3>Data Engineering</h3>
            <p>End-to-end data pipelines, warehousing, and analytics infrastructure to turn raw data into actionable insights.</p>
          </article>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <div className="about-image-main">
              <svg className="about-illustration" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="500" fill="#1a0a0a"/>
                <circle cx="200" cy="200" r="120" stroke="rgba(220,38,38,0.2)" strokeWidth="1" fill="none"/>
                <circle cx="200" cy="200" r="80" stroke="rgba(220,38,38,0.15)" strokeWidth="1" fill="none"/>
                <circle cx="200" cy="200" r="40" stroke="rgba(220,38,38,0.1)" strokeWidth="1" fill="none"/>
                <line x1="200" y1="80" x2="200" y2="320" stroke="rgba(220,38,38,0.08)" strokeWidth="1"/>
                <line x1="80" y1="200" x2="320" y2="200" stroke="rgba(220,38,38,0.08)" strokeWidth="1"/>
                <line x1="115" y1="115" x2="285" y2="285" stroke="rgba(220,38,38,0.06)" strokeWidth="1"/>
                <line x1="285" y1="115" x2="115" y2="285" stroke="rgba(220,38,38,0.06)" strokeWidth="1"/>
                <circle cx="200" cy="200" r="6" fill="#dc2626"/>
                <circle cx="200" cy="120" r="4" fill="#dc2626" opacity="0.6"/>
                <circle cx="200" cy="280" r="4" fill="#dc2626" opacity="0.6"/>
                <circle cx="120" cy="200" r="4" fill="#dc2626" opacity="0.6"/>
                <circle cx="280" cy="200" r="4" fill="#dc2626" opacity="0.6"/>
                <rect x="160" y="360" width="80" height="4" rx="2" fill="rgba(220,38,38,0.3)"/>
                <rect x="140" y="380" width="120" height="4" rx="2" fill="rgba(220,38,38,0.2)"/>
                <rect x="170" y="400" width="60" height="4" rx="2" fill="rgba(220,38,38,0.15)"/>
              </svg>
              <div className="about-image-overlay">
                <span className="about-year">Est. 2023</span>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">Trusted Technology Partner in Ethiopia</h2>
            <p className="about-text">
              Founded in 2023, Etacom Technology has quickly established itself as a reliable provider
              of software, AI, data, data center, and ICT solutions. With our headquarters in Addis Ababa
              and operations across Ethiopia, we serve hotels, enterprises, NGOs, government agencies,
              and manufacturing firms.
            </p>
            <p className="about-text">
              We combine deep technical expertise with a passion for innovation to deliver solutions that
              drive efficiency, unlock insights, and create lasting value for every client we serve.
            </p>
            <ul className="about-list">
              <li>Skilled engineers, data scientists & ICT technicians</li>
              <li>Modern technology stack & best practices</li>
              <li>End-to-end project delivery & installation</li>
              <li>Ongoing support and maintenance</li>
            </ul>
            <Link to="/#services" className="btn btn-primary">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">
              <AnimatedCounter target={3} suffix="+" />
            </span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <AnimatedCounter target={20} suffix="+" />
            </span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <AnimatedCounter target={15} suffix="+" />
            </span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <AnimatedCounter target={12} />
            </span>
            <span className="stat-label">Team Members</span>
          </div>
        </div>
      </section>

      <section className="services section animate-on-scroll" id="services">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Comprehensive Technology Solutions</h2>
            <p className="section-desc">From software and AI to data center and ICT infrastructure, we deliver end-to-end solutions tailored to your needs.</p>
          </div>
          <div className="services-grid animate-stagger">
            <article className="service-card">
              <div className="service-icon icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Custom Software Development</h3>
              <p>Tailored web and enterprise applications built with modern frameworks, clean architecture, and scalable infrastructure.</p>
              <ul className="service-tags">
                <li>Web Apps</li>
                <li>Enterprise Software</li>
                <li>API Development</li>
              </ul>
              <Link to="/services?slug=custom-software-development" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>Intelligent solutions including predictive analytics, natural language processing, and computer vision systems.</p>
              <ul className="service-tags">
                <li>Predictive Models</li>
                <li>NLP & Chatbots</li>
                <li>Computer Vision</li>
              </ul>
              <Link to="/services?slug=ai-machine-learning" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3>Data Engineering & Analytics</h3>
              <p>Robust data pipelines, warehousing solutions, and analytics dashboards that turn data into decisions.</p>
              <ul className="service-tags">
                <li>Data Pipelines</li>
                <li>Data Warehousing</li>
                <li>Analytics Dashboards</li>
              </ul>
              <Link to="/services?slug=data-engineering-analytics" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-cyan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <h3>Cloud Solutions & DevOps</h3>
              <p>Cloud migration, infrastructure automation, and CI/CD pipelines for reliable and scalable deployments.</p>
              <ul className="service-tags">
                <li>Cloud Migration</li>
                <li>CI/CD Pipelines</li>
                <li>Infrastructure as Code</li>
              </ul>
              <Link to="/services?slug=cloud-solutions-devops" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-indigo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <h3>Mobile & Web Applications</h3>
              <p>Cross-platform mobile apps and responsive web applications designed for performance and great user experience.</p>
              <ul className="service-tags">
                <li>iOS & Android</li>
                <li>Progressive Web Apps</li>
                <li>UI/UX Design</li>
              </ul>
              <Link to="/services?slug=mobile-web-applications" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>
              </div>
              <h3>Data Visualization & BI</h3>
              <p>Interactive dashboards and business intelligence solutions that make complex data clear and actionable.</p>
              <ul className="service-tags">
                <li>BI Dashboards</li>
                <li>Real-time Reporting</li>
                <li>Data Storytelling</li>
              </ul>
              <Link to="/services?slug=data-visualization-bi" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-slate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3>Data Center Solutions</h3>
              <p>Design, supply, and installation of data center infrastructure including servers, storage, cooling, and power systems.</p>
              <ul className="service-tags">
                <li>Server & Storage</li>
                <li>Cooling & Power</li>
                <li>Data Center Design</li>
              </ul>
              <Link to="/services?slug=data-center-solutions" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Digital Transformation</h3>
              <p>Strategic consulting and technology implementation to modernize operations and drive digital growth.</p>
              <ul className="service-tags">
                <li>Strategy Consulting</li>
                <li>Legacy Modernization</li>
                <li>Tech Advisory</li>
              </ul>
              <Link to="/services?slug=digital-transformation" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
            <article className="service-card">
              <div className="service-icon icon-pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </div>
              <h3>ICT Equipment Supply & Installation</h3>
              <p>Supply, installation, and configuration of ICT equipment for hotels, enterprises, NGOs, and government organizations.</p>
              <ul className="service-tags">
                <li>Networking & Wi-Fi</li>
                <li>CCTV & Access Control</li>
                <li>Structured Cabling</li>
              </ul>
              <Link to="/services?slug=ict-equipment-supply-installation" className="service-card-link">Learn More <span>&rarr;</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="clients section animate-on-scroll">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Trusted By</span>
            <h2 className="section-title">Our Clients</h2>
            <p className="section-desc">Trusted by hotels, enterprises, NGOs, and government organizations across Ethiopia.</p>
          </div>
          <div className="clients-grid animate-stagger">
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15" stroke="currentColor"/><circle cx="12" cy="10" r="3" stroke="currentColor"/></svg></div><strong>Northern Star Hotel</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor"/></svg></div><strong>Libanos Hotel</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></div><strong>Nyala Motors</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><strong>Homeland Hotel</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><strong>IOM Ethiopia</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div><strong>Balloni Hotel</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg></div><strong>Genfel Hotel</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/><circle cx="12" cy="14" r="2"/></svg></div><strong>Legasona Vehicle Mfg</strong></div>
            <div className="client-item"><div className="client-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><strong>Yarson Importer / Water Works</strong></div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <div>
            <h2>Let&apos;s discuss your project</h2>
            <p>Tell us what you need and we&apos;ll build the right solution.</p>
          </div>
          <Link to="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}