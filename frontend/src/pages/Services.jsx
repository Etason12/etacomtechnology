import { Link } from 'react-router-dom';
import SEO from '../components/SEO'

const services = [
  { icon: 'fa-solid fa-laptop-code', title: 'Software Development', desc: 'Custom enterprise software development tailored to your business needs. We design, develop, and implement robust software solutions that streamline operations and drive growth.' },
  { icon: 'fa-solid fa-cubes', title: 'ERP System Implementation', desc: 'Comprehensive ERP solutions covering accounting, HR, inventory, sales, procurement, and more. Built exclusively for Ethiopian businesses.' },
  { icon: 'fa-solid fa-globe', title: 'Website Design & Development', desc: 'Custom websites, web portals, and web applications designed to engage your audience and deliver results. Responsive, fast, and SEO-friendly.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance mobile experiences.' },
  { icon: 'fa-solid fa-database', title: 'Database Design & Development', desc: 'Scalable and secure database solutions. We design, implement, and optimize databases for performance and reliability.' },
  { icon: 'fa-solid fa-sms', title: 'Bulk SMS Messaging', desc: 'Shortcode and bulk SMS messaging gateway for businesses. Reach your customers instantly with our reliable SMS platform.' },
  { icon: 'fa-solid fa-server', title: 'Cloud Server Management', desc: 'Cloud server setup, configuration, and management services. We help you leverage cloud infrastructure for scalability.' },
  { icon: 'fa-solid fa-chart-line', title: 'SEO & Digital Marketing', desc: 'Search engine optimization, local SEO, and SEO audit services to improve your online visibility and drive organic traffic.' },
  { icon: 'fa-solid fa-handshake', title: 'IT Consulting', desc: 'Strategic IT consulting to help you make informed technology decisions. From digital transformation to technology roadmap planning.' },
  { icon: 'fa-solid fa-vial', title: 'Software Testing & QA', desc: 'Comprehensive software testing services including UAT, functional testing, performance testing, and quality assurance.' },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://etacomtechnology.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://etacomtechnology.com/services' },
  ],
}

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore Etacom Technology's comprehensive services: custom software development, ERP implementation, website design, mobile apps, SEO, IT consulting, and more in Ethiopia."
        keywords="software development services Ethiopia, ERP implementation, web design Addis Ababa, mobile app development, IT consulting, SEO services Ethiopia, Etacom Technology services"
        canonical="/services"
        jsonLd={breadcrumbJsonLd}
      />
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>End-to-end technology solutions for businesses of all sizes</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((s, i) => (
              <div className="card service-page-card" key={i}>
                <div className="icon"><i className={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Need a Custom Solution?</h2>
          <p>We tailor our services to meet your specific business requirements.</p>
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
