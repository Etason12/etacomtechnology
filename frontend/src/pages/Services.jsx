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

      <section className="section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((s) => (
              <div className="card service-page-card" key={s.title}>
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
