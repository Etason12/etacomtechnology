import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { services, createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]);

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
      <PageHeader title="Our Services" subtitle="End-to-end technology solutions for businesses of all sizes" />

      <section className="services section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Comprehensive Technology Solutions</h2>
            <p className="section-desc">From software and AI to data center and ICT infrastructure, we deliver end-to-end solutions tailored to your needs.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <article className="service-card" key={s.title}>
                <div className={`service-icon ${s.iconColor || ''}`}>
                  <i className={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-tags">
                  {s.tags?.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="service-card-link">Learn More <span>&rarr;</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <div>
            <h2>Need a Custom Solution?</h2>
            <p>We tailor our services to meet your specific business requirements.</p>
          </div>
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}