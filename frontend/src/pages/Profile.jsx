import { useRef, useState } from 'react';
import SEO from '../components/SEO';
import { createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Company Profile', path: '/profile' },
]);

const servicesList = [
  { title: 'Custom Software Development', desc: 'Tailored web, mobile, and enterprise applications built with modern architectures, clean code, and scalable infrastructure. We build what your business actually needs.' },
  { title: 'AI & Machine Learning', desc: 'Intelligent solutions including predictive analytics, natural language processing, computer vision systems, and process automation powered by cutting-edge AI.' },
  { title: 'Data Engineering & Analytics', desc: 'End-to-end data pipelines, warehousing, and analytics infrastructure that turn raw data into actionable business insights and real-time dashboards.' },
  { title: 'Cloud Solutions & DevOps', desc: 'Cloud migration, infrastructure automation, and CI/CD pipelines for reliable, scalable, and secure application deployments.' },
  { title: 'Data Center Solutions', desc: 'Design, supply, and installation of data center infrastructure including servers, storage, cooling, power systems, and security.' },
  { title: 'ICT Equipment Supply & Installation', desc: 'Supply, installation, and configuration of networking, Wi-Fi, CCTV, PABX, structured cabling, and access control systems.' },
];

const industries = [
  { name: 'Hotels & Hospitality', desc: 'Hotel TV, IPTV, guest Wi-Fi, CCTV, structured cabling, property management systems, and custom chatbot solutions' },
  { name: 'NGOs & Development Organizations', desc: 'Data analytics dashboards, reporting systems, CCTV installation for field offices' },
  { name: 'Manufacturing & Enterprise', desc: 'ERP systems (inventory, POS, CRM), LAN infrastructure, digital transformation' },
  { name: 'Government', desc: 'Data center design, network infrastructure, security systems' },
];

const clients = [
  'Northern Star Hotel', 'Libanos Hotel', 'Nyala Motors', 'Homeland Hotel',
  'IOM Ethiopia', 'Balloni Hotel', 'Genfel Hotel', 'Legasona Vehicle Mfg',
  'Yarson Importer', 'Daramba Hotel', 'Yarson Importer / Water Works',
];

const reasons = [
  'Skilled engineers, data scientists, and ICT technicians with international expertise',
  'Modern technology stack and industry best practices',
  'End-to-end project delivery, installation, and ongoing support',
  'Deep understanding of the Ethiopian market and local conditions',
  'Long-term partnership approach — we don\u2019t just build and leave',
  'Two office locations: Mekelle and Addis Ababa',
];

export default function Profile() {
  const profileRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const downloadPDF = async () => {
    if (!profileRef.current) return;
    setDownloading(true);
    try {
      const { default: html2pdf } = await import('html2pdf.js');
      const opt = {
        margin: 0.5,
        filename: 'Etacom_Technology_Company_Profile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      await html2pdf().set(opt).from(profileRef.current).save();
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <SEO
        title="Company Profile"
        description="Etacom Technology company profile - software, AI, data, and ICT solutions provider in Ethiopia."
        canonical="/profile"
        jsonLd={breadcrumbJsonLd}
      />

      <div className="profile-toolbar">
        <button
          type="button"
          id="downloadPdfBtn"
          className="btn btn-primary"
          onClick={downloadPDF}
          disabled={downloading}
        >
          {downloading ? 'Generating PDF…' : 'Download as PDF'}
        </button>
      </div>

      <div className="profile-page" id="profileContent" ref={profileRef}>
        <header className="profile-header">
          <div className="profile-logo-area">
            <span className="profile-logo" aria-hidden="true">E</span>
            <div>
              <h1>Etacom Technology</h1>
              <p>Software · AI · Data · ICT Solutions</p>
            </div>
          </div>
          <p className="profile-tagline">Your trusted partner for software, AI, data, data center, and ICT solutions driving digital innovation across Ethiopia.</p>
        </header>

        <section className="profile-section">
          <h2>Company Overview</h2>
          <p>Founded in 2023 in Mekelle, Etacom Technology has quickly established itself as a reliable full-service technology partner. We deliver software, AI, data solutions, data center infrastructure, and ICT equipment supply & installation to hotels, enterprises, NGOs, and government organizations across Ethiopia.</p>
          <p>We combine deep technical expertise with a passion for innovation to deliver solutions that drive efficiency, unlock insights, and create lasting value for every client we serve.</p>
        </section>

        <section className="profile-section">
          <h2>Our Services</h2>
          <div className="profile-services">
            {servicesList.map((s) => (
              <div className="profile-service" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <h2>Industries We Serve</h2>
          <ul className="profile-industries">
            {industries.map((i) => (
              <li key={i.name}><strong>{i.name}</strong> — {i.desc}</li>
            ))}
          </ul>
        </section>

        <section className="profile-section">
          <h2>Our Clients</h2>
          <div className="profile-clients">
            {clients.map((c) => <span key={c}>{c}</span>)}
          </div>
        </section>

        <section className="profile-section">
          <h2>Why Choose Etacom?</h2>
          <ul className="profile-why">
            {reasons.map((r, idx) => <li key={idx}>{r}</li>)}
          </ul>
        </section>

        <footer className="profile-footer">
          <div className="profile-contact">
            <div>
              <strong>Mekelle Office</strong>
              <span>+251-914-08058</span>
            </div>
            <div>
              <strong>Addis Ababa Office</strong>
              <span>+251-911-554969</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>info@etacomtechnology.com</span>
            </div>
          </div>
          <p className="profile-copy">© 2026 Etacom Technology. All rights reserved. Founded 2023.</p>
        </footer>
      </div>
    </>
  );
}
