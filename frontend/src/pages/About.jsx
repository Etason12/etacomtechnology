import { Link } from 'react-router-dom';
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import { createBreadcrumbJsonLd } from "../data/shared";

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Etacom Technology - a premier ICT and software development company founded in 2023 in Mekelle, Tigray, Ethiopia. Discover our mission, vision, and expertise serving clients across Ethiopia."
        keywords="about Etacom Technology, ICT company Mekelle, software development Tigray, IT consulting Addis Ababa, Ethiopian technology company, ICT solutions Ethiopia"
        canonical="/about"
        jsonLd={breadcrumbJsonLd}
      />
      <PageHeader title="About Us" subtitle="Building Ethiopia&apos;s digital future through technology and innovation" />

      <section className="section animate-on-scroll">
        <div className="container about-page-grid">
          <div className="about-page-text">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">From Mekelle to All of Ethiopia</h2>
            <p>Founded in 2023 in Mekelle, Etacom Technology started with a simple mission: bring world-class technology solutions to Ethiopian businesses. What began as a small team of engineers has grown into a full-service technology partner serving hotels, enterprises, NGOs, and government organizations across the country.</p>
            <p>We understand the unique challenges of the Ethiopian market &mdash; from infrastructure limitations to the need for solutions that work reliably in local conditions. Our team combines international expertise with deep local knowledge.</p>
            <Link to="/profile" className="btn btn-primary btn-download">Download Company Profile</Link>
          </div>
          <div className="about-page-stats">
            <div className="about-stat">
              <span className="about-stat-number">3</span>
              <span className="about-stat-label">Years in Business</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">20+</span>
              <span className="about-stat-label">Projects Delivered</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">12</span>
              <span className="about-stat-label">Team Members</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">2</span>
              <span className="about-stat-label">Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section animate-on-scroll" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Mission & Vision</span>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To empower Ethiopian organizations with technology solutions that drive efficiency, enable growth, and create lasting value. We bridge the gap between global technology capabilities and local business needs.</p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>To be Ethiopia&apos;s most trusted technology partner &mdash; the first choice for organizations seeking reliable, innovative, and impactful digital solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-desc">Experienced professionals passionate about technology and delivering results.</p>
          </div>
          <div className="team-grid animate-stagger">
            <div className="team-card">
              <div className="team-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Chief Executive Officer</h3>
              <p className="team-role">Strategy & Leadership</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Chief Technology Officer</h3>
              <p className="team-role">Engineering & Architecture</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Head of Operations</h3>
              <p className="team-role">Delivery & Client Success</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section animate-on-scroll" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="values-grid animate-stagger">
            <div className="value-item">
              <h4>Reliability</h4>
              <p>We deliver on our promises. Every solution we build is designed to work reliably in Ethiopian conditions.</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>We stay current with global technology trends and bring the best tools to solve local challenges.</p>
            </div>
            <div className="value-item">
              <h4>Partnership</h4>
              <p>We don&apos;t just build and leave. We become long-term technology partners invested in your success.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We operate with transparency, honesty, and respect in every client relationship.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner animate-on-scroll">
        <div className="container cta-content">
          <div>
            <h2>Want to work with us?</h2>
            <p>We&apos;re always looking for talented people and interesting projects.</p>
          </div>
          <a href="/contact" className="btn btn-white">Get in Touch</a>
        </div>
      </section>
    </>
  );
}