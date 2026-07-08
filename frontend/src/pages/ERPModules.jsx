import SEO from '../components/SEO'

const modules = [
  { icon: 'fa-solid fa-chart-line', title: 'Accounting & Finance', desc: 'Primarily formed of accounting modules that keep tabs on your company\'s total cash flow and profit and loss. Includes general ledger, accounts payable/receivable, and financial reporting.' },
  { icon: 'fa-solid fa-users', title: 'HR, Payroll & Attendance', desc: 'Automates operations involving employees including payroll, recruitment, leave management, attendance tracking, performance evaluation, and employee records.' },
  { icon: 'fa-solid fa-warehouse', title: 'Warehouse & Inventory', desc: 'Keep track of stock levels, pricing, and movement of all products that your organization manufactures, purchases, stores, and sells.' },
  { icon: 'fa-solid fa-tasks', title: 'Project Management', desc: 'Manage raw material requirements, accounting for project needs, tracking project status, resource allocation, and milestone monitoring.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Purchase Management', desc: 'Record and track all essential order information including purchase quantities, items purchased, vendor management, and payment expenses.' },
  { icon: 'fa-solid fa-bullhorn', title: 'Sales & Marketing', desc: 'Sales management with CRM integration. Easily manage products, customers, quotations, invoices, and marketing campaigns from one platform.' },
  { icon: 'fa-solid fa-truck', title: 'Fleet Management', desc: 'Manage vehicle registration, repair and maintenance schedules, driver management, fuel consumption tracking, and all other aspects of your fleet.' },
  { icon: 'fa-solid fa-handshake', title: 'Customer CRM', desc: 'Contact management, communication tracking, opportunity/lead tracking, quote creation, sales agent productivity monitoring, and customer analytics.' },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://etacomtechnology.com/' },
    { '@type': 'ListItem', position: 2, name: 'ERP Modules', item: 'https://etacomtechnology.com/erp-modules' },
  ],
}

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
      <section className="page-header">
        <div className="container">
          <h1>ERP System Modules</h1>
          <p>Comprehensive ERP software developed exclusively for Ethiopian companies</p>
        </div>
      </section>

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
            {modules.map((m, i) => (
              <div className="card service-page-card" key={i}>
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
