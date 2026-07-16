import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { erpModulesDetailed, createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'ERP Modules', path: '/erp-modules' },
]);

export default function ERPModules() {
  return (
    <>
      <SEO
        title="ERP System Modules"
        description="Explore Etacom Technology's comprehensive ERP modules for Ethiopian businesses: Accounting, HR, Inventory, Sales, CRM, Fleet Management, and more."
        keywords="ERP modules Ethiopia, ERP software Ethiopia, accounting ERP, HR payroll ERP, inventory management, CRM Ethiopia, Etacom Technology ERP"
        canonical="/erp-modules"
        jsonLd={breadcrumbJsonLd}
      />
      <PageHeader title="ERP System Modules" subtitle="Comprehensive ERP software developed exclusively for Ethiopian companies" />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p style={{ maxWidth: 800 }}>
              Each and every module has a specific purpose in our ERP software. These modules
              look over and manage different divisions and departments of your organization,
              providing a unified view of your entire business operations.
            </p>
          </div>
          <div className="services-page-grid">
            {erpModulesDetailed.map((m) => (
              <div className="card service-page-card" key={m.title}>
                <div className="icon"><i className={m.icon} /></div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our ERP?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div className="card" style={{ textAlign: 'center', padding: 32 }}>
              <h4 style={{ marginBottom: 12, fontSize: '1.1rem' }}>Tailored for Ethiopia</h4>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Built specifically for the Ethiopian market, our ERP complies with local regulations, tax requirements, and business practices.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 32 }}>
              <h4 style={{ marginBottom: 12, fontSize: '1.1rem' }}>Modular & Scalable</h4>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Start with the modules you need and add more as your business grows. Our ERP scales with your organization.
              </p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 32 }}>
              <h4 style={{ marginBottom: 12, fontSize: '1.1rem' }}>Affordable Pricing</h4>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Get enterprise-grade ERP functionality at prices that make sense for Ethiopian businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
