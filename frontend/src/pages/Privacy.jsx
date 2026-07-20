import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy' },
]);

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Etacom Technology privacy policy - how we collect, use, and protect your personal information.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Etacom Technology',
    url: 'https://etacomtechnology.com',
  },
};

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Etacom Technology privacy policy - how we collect, use, and protect your personal information."
        canonical="/privacy"
        jsonLd={[breadcrumbJsonLd, jsonLd]}
      />
      <PageHeader title="Privacy Policy" subtitle="Last updated: June 2026" />

      <section className="section">
        <div className="container legal-content">
          <h2>1. Information We Collect</h2>
          <p>When you visit our website or contact us through our form, we may collect:</p>
          <ul>
            <li>Name and contact information (email, phone)</li>
            <li>Company/organization name</li>
            <li>Project details you provide in the message field</li>
            <li>Basic analytics data (pages visited, time spent, referral source)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiry and provide requested information</li>
            <li>Send project proposals and quotes</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.
          </p>

          <h2>3. Data Storage & Security</h2>
          <p>Your data is stored securely on our servers and through our form processing partner (Netlify Forms / Formspree). We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>4. Cookies & Analytics</h2>
          <p>Our website may use basic analytics tools to understand how visitors interact with our site. This helps us improve our content and user experience. Analytics data is aggregated and does not identify individual visitors.</p>

          <h2>5. Third-Party Services</h2>
          <p>We use the following third-party services that may process data:</p>
          <ul>
            <li><strong>Netlify</strong> &mdash; Website hosting and form processing</li>
            <li><strong>Google Fonts</strong> &mdash; Font delivery (may collect anonymized IP data)</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of communications at any time</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>We retain contact form submissions for as long as necessary to fulfill the purposes for which they were collected, typically up to 12 months, unless a longer retention period is required by law.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this privacy policy or how we handle your data, please contact us:
          </p>
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