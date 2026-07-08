import SEO from '../components/SEO'

export default function About() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://etacomtechnology.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://etacomtechnology.com/about' },
    ],
  }

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Etacom Technology - a premier software development and IT consulting company founded in 2023 in Addis Ababa, Ethiopia. Discover our mission, vision, and expertise."
        keywords="about Etacom Technology, software company Addis Ababa, IT consulting Ethiopia, Ethiopian software company"
        canonical="/about"
        jsonLd={breadcrumbJsonLd}
      />
      <section className="page-header">
        <div className="container">
          <h1>About Etacom Technology</h1>
          <p>Empowering businesses with innovative technology solutions since 2023</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Founded in 2023, Etacom Technology is a premier software development and
                IT consulting company based in Addis Ababa, Ethiopia. We specialize in
                delivering cutting-edge digital solutions that help businesses thrive in
                the modern marketplace.
              </p>
              <p>
                Our team of highly skilled professionals brings years of experience in
                software development, ERP implementation, website design, mobile app
                development, and IT consulting. We are committed to providing our clients
                with innovative, reliable, and cost-effective solutions.
              </p>
              <p>
                At Etacom Technology, we believe in building long-term partnerships with
                our clients. We take the time to understand your unique business needs
                and deliver tailored solutions that drive real results.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">2023</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            <div>
              <div className="hero-image-placeholder" style={{ maxWidth: '100%', height: 400 }}>
                <div className="icon-stack"><i className="fas fa-building" /></div>
                <span>Etacom Technology</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: 8 }}>
                  Since 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Mission & Vision</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div className="card" style={{ textAlign: 'center', padding: 40 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16, color: 'var(--primary)' }}>
                <i className="fas fa-bullseye" />
              </div>
              <h3 style={{ marginBottom: 12, fontSize: '1.3rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7 }}>
                To empower businesses with innovative and reliable technology solutions
                that drive growth, efficiency, and competitive advantage in the digital era.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 40 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16, color: 'var(--primary)' }}>
                <i className="fas fa-eye" />
              </div>
              <h3 style={{ marginBottom: 12, fontSize: '1.3rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7 }}>
                To become Ethiopia's most trusted technology partner, recognized for
                excellence in software development and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
