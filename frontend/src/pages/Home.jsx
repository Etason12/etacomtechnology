import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO'

const services = [
  { icon: 'fa-solid fa-laptop-code', title: 'Software Development', desc: 'Design & Develop Custom Software Solutions that empower businesses to stay ahead of their competition.' },
  { icon: 'fa-solid fa-globe', title: 'Website Design & Development', desc: 'Designing and creating custom built websites, web portals and web applications tailored to your needs.' },
  { icon: 'fa-solid fa-cubes', title: 'ERP System Development', desc: 'Enhance Business Operations with Comprehensive ERP Software streamlining data flow across departments.' },
  { icon: 'fa-solid fa-sms', title: 'SMS Messaging', desc: 'Bulk SMS service provider allowing you to send messages in group using bulk SMS gateway.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Mobile App Development', desc: 'Develops and customizes mobile application development solutions for specific business needs.' },
  { icon: 'fa-solid fa-server', title: 'Server Hosting & Configuration', desc: 'High quality affordable hosting services for companies of all sizes on reliable servers.' },
];

const erpModules = [
  { icon: 'fa-solid fa-chart-line', title: 'Accounting & Finance', desc: 'Keep tabs on your company\'s total cash flow and profit and loss.' },
  { icon: 'fa-solid fa-users', title: 'HR, Payroll & Attendance', desc: 'Automate payroll, recruitment, leave, attendance and employee operations.' },
  { icon: 'fa-solid fa-warehouse', title: 'Inventory Management', desc: 'Track stock levels and pricing for all products your organization handles.' },
  { icon: 'fa-solid fa-tasks', title: 'Project Management', desc: 'Manage raw material, accounting for requirements, and track project status.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Purchase Management', desc: 'Record track of purchase quantities, items purchased, and payment expenses.' },
  { icon: 'fa-solid fa-bullhorn', title: 'Sales & Marketing', desc: 'Manage products, customers, quotations and invoices with CRM integration.' },
  { icon: 'fa-solid fa-truck', title: 'Fleet Management', desc: 'Manage vehicle registration, repair, maintenance, driver and fuel consumption.' },
  { icon: 'fa-solid fa-handshake', title: 'Customer CRM', desc: 'Contact management, lead tracking, quote creation, and sales productivity.' },
];

const industries = [
  { id: 'healthcare', title: 'Healthcare', content: 'We offer Healthcare Software Development solutions based on in-depth research & deep industry knowledge. Our solutions use cutting-edge technology to deliver future-ready systems that address healthcare needs and eliminate redundancy.' },
  { id: 'retail', title: 'Retail & eCommerce', content: 'We deliver cutting-edge technology solutions for eCommerce & retail businesses built on the latest technology platforms with responsive design and payment gateway integration.' },
  { id: 'travel', title: 'Travel & Tourism', content: 'We build cutting-edge technology to help travel and tourism businesses automate customer communication, guest management, online booking, and logistics.' },
  { id: 'education', title: 'Education & eLearning', content: 'Our eLearning development team applies innovative approaches to enhance learning with AR/VR enabled learning, online courses, and learning management systems.' },
  { id: 'banking', title: 'Banking & Finance', content: 'Our team provides custom-built tech solutions for banking and finance to improve agility, operation, and leadership with personalized banking solutions.' },
  { id: 'logistics', title: 'Logistics & Transportation', content: 'Smart logistics software development to manage inventory and keep the supply chain running smoothly from warehouse management to shipping.' },
  { id: 'media', title: 'Media & Entertainment', content: 'We develop fully-fledged software for video streaming, social networking, and media content distribution using the latest tech trends.' },
  { id: 'automotive', title: 'Automotive', content: 'We provide innovative, customized, and technology-driven automotive software solutions built around top approaches for prototyping, developing, and testing.' },
];

const whyUs = [
  { icon: 'fa-solid fa-dollar-sign', title: 'Competitive Pricing', desc: 'We offer website design, software development, ERP, and web hosting at fair market pricing with a quicker turnaround than most companies.' },
  { icon: 'fa-solid fa-star', title: 'We Create Experiences', desc: 'We create experiences that are attractive, simple to use, and drive results. We focus on making things work for your audience and your business.' },
  { icon: 'fa-solid fa-clock', title: 'On Time & On Budget', desc: 'We determine scope, create a budget and timeline, and stick to them. Weekly status checks keep everyone on track.' },
];

const process = [
  { step: 1, title: 'Planning & Strategy', desc: 'All integrals are discussed, timelines decided, roles allotted, milestones and modules are decided as per the SRS documentation.' },
  { step: 2, title: 'Development & Customization', desc: 'Programming, testing, debugging, and UI development. The first working model is shown to the client for feedback.' },
  { step: 3, title: 'Quality Assurance', desc: 'Software quality is checked to satisfy major requirements. The project must be robust, reliable, scalable, and available.' },
  { step: 4, title: 'Support & Maintenance', desc: 'Rules for future service in terms of Support and Maintenance are established and contracts are signed.' },
];

const faqs = [
  { q: 'Why Choose Etacom Technology as a Software Development Partner?', a: 'We strive to be the best with substantial experience in providing diversified software development services. Our experts specialize in customer-centric engagement, strict quality measures, and deep domain expertise to deliver the best solutions.' },
  { q: 'What Software Development Services Do You Offer?', a: 'We provide full-scale services including custom software development, web app development, mobile app development, software testing, and more.' },
  { q: 'What Technologies Do You Use?', a: 'We offer services inclusive of various technologies and frameworks. The selection depends on your business requirements, budget, and future demands.' },
  { q: 'Do You Provide Maintenance and Support After Deployment?', a: 'Yes, sustaining a software application is equally important as developing it. Our services include feature enhancements, optimization, bug fixing, and preventive maintenance.' },
  { q: 'Do You Offer Cost-Effective Solutions?', a: 'Unlike other companies, we offer all services at competitive prices. We believe in providing cost-effective, professional, and reliable services.' },
];

const blogPosts = [
  {
    title: 'The Future of ERP in 2026: Trends & Solutions',
    category: 'ERP',
    excerpt: 'Explore how ERP systems are evolving with AI, cloud computing, and automation to transform business operations in Ethiopia.',
    date: 'Dec 27, 2025',
    slug: 'future-of-erp-2026',
  },
  {
    title: 'Digital Transformation: How Businesses Can Leverage Technology',
    category: 'Technology',
    excerpt: 'Learn how Ethiopian businesses can embrace digital transformation to stay competitive in the modern marketplace.',
    date: 'Nov 28, 2025',
    slug: 'digital-transformation',
  },
  {
    title: 'Top Software Development Trends in Ethiopia for 2026',
    category: 'Software',
    excerpt: 'Discover the latest software development trends shaping the Ethiopian tech landscape in 2026.',
    date: 'Oct 21, 2025',
    slug: 'software-trends-2026',
  },
];

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Etacom Technology',
  url: 'https://etacomtechnology.com',
  logo: 'https://etacomtechnology.com/favicon.svg',
  description: 'Premier software development and IT consulting company based in Addis Ababa, Ethiopia.',
  foundingDate: '2023',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bole, In-front of Bonanza Hotel',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+251-911-000-000',
    contactType: 'customer service',
    email: 'info@etacomtechnology.com',
  },
  sameAs: [
    'https://facebook.com/etacomtechnology',
    'https://linkedin.com/company/etacomtechnology',
    'https://twitter.com/etacomtechnology',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Etacom Technology',
  url: 'https://etacomtechnology.com',
  description: 'Software development, ERP systems, website design, and IT consulting services in Ethiopia.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://etacomtechnology.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
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
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>We Have The Right<br /><span>Technology Solutions</span></h1>
            <p>
              At Etacom Technology, we excel in crafting secure, scalable, and robust
              website, web portal, and ERP software products. Based in Addis Ababa,
              Ethiopia, we deliver exceptional digital solutions since 2023.
            </p>
            <div className="hero-badges">
              <span>Software Development</span>
              <span>ERP Implementation</span>
              <span>Website Design</span>
              <span>Mobile Apps</span>
              <span>IT Consulting</span>
            </div>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started <i className="fas fa-arrow-right" />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="icon-stack"><i className="fas fa-code" /></div>
              <span>Etacom Technology</span>
              <span style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: 8 }}>
                Since 2023
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>We deliver end-to-end technology solutions that help businesses grow and succeed in the digital era.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="card service-card" key={i}>
                <div className="icon"><i className={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="section erp-section" id="erp">
        <div className="container">
          <div className="section-header">
            <h2>ERP System Modules</h2>
            <p>Comprehensive ERP software developed exclusively for Ethiopian companies. Each module manages different divisions and departments.</p>
          </div>
          <div className="erp-grid">
            {erpModules.map((m, i) => (
              <div className="card erp-card" key={i}>
                <div className="icon"><i className={m.icon} /></div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section industries-section">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>We deliver scalable and secure solutions to diverse industries including healthcare, retail, banking, and more.</p>
          </div>
          <IndustryTabs industries={industries} />
        </div>
      </section>

      {/* Why Us */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We are committed to delivering excellence through competitive pricing, exceptional experiences, and reliable delivery.</p>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="card why-card" key={i}>
                <div className="icon"><i className={w.icon} /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>We follow a proven methodology to deliver high-quality software solutions on time and within budget.</p>
          </div>
          <div className="process-steps">
            {process.map((p, i) => (
              <div className="process-step" key={i}>
                <div className="step-number">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let us help you leverage technology to achieve your goals.</p>
          <Link to="/contact" className="btn">Contact Us Today</Link>
        </div>
      </section>

      {/* Blog */}
      <section className="section" id="blog">
        <div className="container">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <p>Insights on software development, ERP implementation, and technology trends.</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <div className="card blog-card" key={i}>
                <div className="blog-card-image">
                  <i className="fas fa-newspaper" />
                </div>
                <div className="blog-card-body">
                  <span className="category">{post.category}</span>
                  <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                  <div className="meta">
                    <span><i className="far fa-calendar" /> {post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and process.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function IndustryTabs({ industries }) {
  const [active, setActive] = useState(industries[0]);
  return (
    <>
      <div className="industry-tabs">
        {industries.map((ind) => (
          <button
            key={ind.id}
            className={`industry-tab${active.id === ind.id ? ' active' : ''}`}
            onClick={() => setActive(ind)}
          >
            {ind.title}
          </button>
        ))}
      </div>
      <div className="industry-content">
        <h3>{active.title}</h3>
        <p>{active.content}</p>
      </div>
    </>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className={`faq-question${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        {q}
        <span className="arrow"><i className="fas fa-chevron-down" /></span>
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}
