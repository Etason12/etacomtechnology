import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Terms of Reference', path: '/terms' },
]);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Reference',
  description: 'Etacom Technology terms of reference for projects, contracts, and service agreements.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Etacom Technology',
    url: 'https://etacomtechnology.com',
  },
};

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Reference"
        description="Etacom Technology terms of reference for projects, contracts, and service agreements."
        canonical="/terms"
        jsonLd={[breadcrumbJsonLd, jsonLd]}
      />
      <PageHeader title="Terms of Reference" subtitle="Last updated: June 2026" />

      <section className="section">
        <div className="container legal-content">
          <h2>1. Scope of Services</h2>
          <p>Etacom Technology provides the following services:</p>
          <ul>
            <li>Software development (web, mobile, enterprise applications)</li>
            <li>AI and machine learning solutions</li>
            <li>Data engineering, analytics, and visualization</li>
            <li>Data center design, setup, and maintenance</li>
            <li>ICT equipment supply and installation (networking, CCTV, PABX, structured cabling)</li>
            <li>Digital transformation consulting</li>
          </ul>

          <h2>2. Project Engagement</h2>
          <p>All projects begin with a requirements gathering phase. Etacom Technology will provide a detailed proposal including scope, timeline, deliverables, and pricing before any work begins. Projects are initiated upon written confirmation and, where applicable, receipt of advance payment as agreed in the contract.</p>

          <h2>3. Deliverables</h2>
          <p>Deliverables are defined in the project proposal or contract. Etacom Technology commits to delivering all agreed-upon deliverables within the specified timeline. Changes to scope after project initiation will be handled through a formal change request process.</p>

          <h2>4. Payment Terms</h2>
          <p>Payment terms are defined in each individual project contract. Standard terms typically include:</p>
          <ul>
            <li>Advance payment upon project confirmation</li>
            <li>Milestone-based payments tied to deliverables</li>
            <li>Final payment upon project completion and acceptance</li>
          </ul>

          <h2>5. Warranty & Support</h2>
          <p>Etacom Technology provides a warranty period for all completed projects as specified in the contract. During the warranty period, defects in delivered work will be addressed at no additional cost. Post-warranty support and maintenance agreements are available separately.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>Upon full payment, the client receives ownership of all custom-developed deliverables as specified in the contract. Etacom Technology retains the right to use general knowledge, skills, and non-proprietary methodologies gained during the project.</p>

          <h2>7. Confidentiality</h2>
          <p>Etacom Technology treats all client information as confidential. We do not disclose project details, business data, or proprietary information to third parties without written consent from the client.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>Etacom Technology&apos;s liability is limited to the value of the project contract. We are not liable for indirect, consequential, or incidental damages arising from project delays or service interruptions caused by factors beyond our control.
          </p>

          <h2>9. Force Majeure</h2>
          <p>Neither party shall be held liable for failure to perform obligations due to circumstances beyond reasonable control, including but not limited to natural disasters, government actions, power outages, or network failures.
          </p>

          <h2>10. Governing Law</h2>
          <p>These terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes shall be resolved through good-faith negotiation, with arbitration as a fallback under Ethiopian arbitration rules.
          </p>

          <h2>Contact</h2>
          <p>For questions about these terms, please contact:</p>
          <ul>
            <li>Email: <a href="mailto:info@etacomtechnology.com">info@etacomtechnology.com</a></li>
            <li>Phone (Mekelle): <a href="tel:+25191408058">+251-914-08058</a></li>
            <li>Phone (Addis Ababa): <a href="tel:+251911554969">+251-911-554969</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}