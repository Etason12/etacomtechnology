import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const serviceMap = {
  "custom-software-development": {
    title: "Custom Software Development",
    shortTitle: "Software Development",
    tagline: "Tailored applications built for your business",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    description: "We design and build custom software solutions that address your unique business challenges. From web applications to enterprise systems, our team uses modern architectures and proven methodologies to deliver reliable, scalable, and secure software.",
    details: [
      "Requirements analysis and solution architecture",
      "Full-stack web development (React, Node.js, Python, .NET)",
      "Enterprise resource planning (ERP) systems",
      "Customer relationship management (CRM) platforms",
      "API development and third-party integrations",
      "Legacy system modernization and migration",
      "Quality assurance and automated testing",
      "Deployment, monitoring, and ongoing maintenance"
    ],
    technologies: ["React", "Node.js", "Python", "Django", "PostgreSQL", "Docker", "AWS", "Azure"],
    benefits: [
      "Scalable architecture that grows with your business",
      "Reduced operational costs through automation",
      "Improved data-driven decision making",
      "Enhanced security and compliance",
      "Faster time-to-market for new features"
    ]
  },

  "ai-machine-learning": {
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    tagline: "Intelligent solutions powered by data",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    description: "Harness the power of artificial intelligence and machine learning to automate processes, uncover insights, and create intelligent products. Our team builds custom ML solutions tailored to your business needs.",
    details: [
      "Predictive analytics and forecasting models",
      "Natural language processing (NLP) and chatbots",
      "Computer vision and image recognition",
      "Recommendation engines and personalization",
      "Anomaly detection and fraud prevention",
      "Process automation with intelligent workflows",
      "MLOps: model deployment, monitoring, and retraining",
      "Custom LLM fine-tuning and RAG pipelines"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "MLflow", "Kubernetes", "AWS SageMaker"],
    benefits: [
      "Automate repetitive tasks and reduce manual effort",
      "Unlock predictive insights from your data",
      "Enhance customer experience with personalization",
      "Stay ahead of competition with AI innovation",
      "Reduce operational costs through automation"
    ]
  },

  "data-engineering-analytics": {
    title: "Data Engineering & Analytics",
    shortTitle: "Data Engineering",
    tagline: "Turn raw data into business intelligence",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    description: "We build robust data infrastructure that collects, processes, and transforms your raw data into actionable business intelligence. From data pipelines to interactive dashboards, we help you make data-driven decisions.",
    details: [
      "Data pipeline design and implementation (ETL/ELT)",
      "Data warehousing and lakehouse architecture",
      "Real-time data streaming and processing",
      "Business intelligence dashboards and reporting",
      "Data quality, governance, and cataloging",
      "Self-service analytics and ad-hoc querying",
      "Advanced analytics and statistical modeling",
      "Data migration and platform modernization"
    ],
    technologies: ["Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery", "PostgreSQL", "Kafka", "Python", "SQL"],
    benefits: [
      "Single source of truth for all your data",
      "Faster, more accurate business decisions",
      "Democratized data access across teams",
      "Reduced manual reporting effort",
      "Scalable architecture for growing data volumes"
    ]
  },

  "cloud-solutions-devops": {
    title: "Cloud Solutions & DevOps",
    shortTitle: "Cloud & DevOps",
    tagline: "Scalable, secure, and automated infrastructure",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    description: "Accelerate your cloud journey with modern DevOps practices. We help you migrate, optimize, and operate cloud infrastructure with confidence &mdash; from migration to full automation.",
    details: [
      "Cloud migration strategy and execution (AWS, Azure, GCP)",
      "Infrastructure as Code (Terraform, CloudFormation, Pulumi)",
      "CI/CD pipeline design and implementation",
      "Container orchestration (Kubernetes, ECS, AKS, GKE)",
      "Infrastructure monitoring, logging, and alerting",
      "Security hardening and compliance automation",
      "Cost optimization and FinOps practices",
      "Site reliability engineering (SRE) practices"
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "ArgoCD", "Prometheus", "Grafana"],
    benefits: [
      "Faster time-to-market with automated deployments",
      "Improved system reliability and uptime",
      "Reduced infrastructure costs through optimization",
      "Enhanced security and compliance posture",
      "Scalable infrastructure that grows with you"
    ]
  },

  "mobile-web-applications": {
    title: "Mobile & Web Applications",
    shortTitle: "Mobile & Web",
    tagline: "Beautiful, performant apps for any device",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    description: "We create engaging mobile and web applications that deliver exceptional user experiences. From consumer apps to enterprise tools, we build applications that users love and businesses rely on.",
    details: [
      "iOS and Android native app development (Swift, Kotlin)",
      "Cross-platform development (React Native, Flutter)",
      "Progressive Web Apps (PWAs)",
      "Responsive web application development",
      "UI/UX design and prototyping",
      "App store deployment and management",
      "Performance optimization and testing",
      "Ongoing maintenance and feature updates"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Next.js", "Tailwind CSS", "Firebase", "Supabase"],
    benefits: [
      "Reach customers on any device",
      "Fast, native-like performance",
      "Consistent brand experience across platforms",
      "Faster development with cross-platform tools",
      "Ongoing updates and feature enhancements"
    ]
  },

  "data-visualization-bi": {
    title: "Data Visualization & BI",
    shortTitle: "Data Viz & BI",
    tagline: "See your data tell a story",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>`,
    description: "Transform complex data into clear, interactive visualizations and business intelligence solutions. Empower your teams to explore data, uncover insights, and make confident decisions.",
    details: [
      "Interactive dashboards and executive reporting",
      "Real-time data visualization and monitoring",
      "Custom chart types and advanced visualizations",
      "Embedded analytics for your applications",
      "Self-service BI for business users",
      "Data storytelling and presentation tools",
      "Automated report generation and distribution",
      "Mobile-responsive dashboards"
    ],
    technologies: ["Power BI", "Tableau", "Looker", "Metabase", "D3.js", "Apache Superset", "SQL", "Python", "R"],
    benefits: [
      "Faster, data-driven decisions at all levels",
      "Democratized access to insights",
      "Real-time visibility into business performance",
      "Clear communication of complex data",
      "Reduced dependency on technical teams for reports"
    ]
  },

  "data-center-solutions": {
    title: "Data Center Solutions",
    shortTitle: "Data Center",
    tagline: "Reliable, scalable infrastructure for your operations",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    description: "We design, supply, and install complete data center infrastructure tailored to your organization&apos;s needs. From server rooms to enterprise-grade facilities, we deliver reliable, scalable, and efficient infrastructure.",
    details: [
      "Data center design and space planning",
      "Server and storage procurement & installation",
      "Cooling and ventilation systems (precision AC, containment)",
      "Power systems: UPS, generators, PDUs, busways",
      "Structured cabling (fiber, copper, patching)",
      "Fire suppression (FM-200, Novec 1230)",
      "Environmental monitoring (temp, humidity, leak, door)",
      "Physical security (access control, CCTV, rack locks)",
      "Data center migration and consolidation",
      "Ongoing maintenance and 24/7 support"
    ],
    technologies: ["HP Enterprise", "Dell", "Cisco", "APC", "Eaton", "Vertiv", "Rittal", "VMware", "Nutanix"],
    benefits: [
      "High availability and uptime for critical systems",
      "Optimized power and cooling efficiency",
      "Scalable infrastructure for future growth",
      "Enhanced security and physical protection",
      "Compliance with industry standards"
    ]
  },

  "digital-transformation": {
    title: "Digital Transformation",
    shortTitle: "Digital Transformation",
    tagline: "Modernize your business for the digital age",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    description: "We guide organizations through their digital transformation journey &mdash; from strategy to execution. Our consultants work alongside your team to identify opportunities, select the right technologies, and implement change that delivers measurable value.",
    details: [
      "Digital maturity assessment and roadmap",
      "Technology strategy and vendor selection",
      "Business process automation and optimization",
      "Legacy system modernization and migration",
      "Cloud adoption and migration planning",
      "Change management and user adoption",
      "Data strategy and analytics enablement",
      "Innovation labs and proof-of-concept development"
    ],
    technologies: ["Various enterprise platforms", "Cloud services", "Low-code platforms", "Automation tools"],
    benefits: [
      "Increased operational efficiency and agility",
      "New revenue streams through digital products",
      "Improved customer and employee experience",
      "Data-driven decision making culture",
      "Future-ready organization"
    ]
  },

  "ict-equipment-supply-installation": {
    title: "ICT Equipment Supply & Installation",
    shortTitle: "ICT Supply & Install",
    tagline: "End-to-end ICT infrastructure for your organization",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`,
    description: "We supply, install, and configure a complete range of ICT equipment for hotels, enterprises, NGOs, and government organizations. Our turnkey solutions ensure your technology infrastructure is reliable, secure, and ready for business.",
    details: [
      "Network infrastructure design and installation",
      "Wi-Fi and wireless networking solutions",
      "Structured cabling (Cat6, Cat6a, fiber optic)",
      "CCTV and video surveillance systems",
      "Access control and biometric systems",
      "PABX and VoIP phone systems",
      "Intercom and public address systems",
      "Server, storage, and workstation procurement",
      "Configuration, testing, and commissioning",
      "Documentation, training, and handover"
    ],
    technologies: ["Cisco", "Ubiquiti", "MikroTik", "Hikvision", "Dahua", "Axis", "Ruckus", "TP-Link", "HP", "Dell"],
    benefits: [
      "Single vendor for all ICT infrastructure needs",
      "Professional installation and configuration",
      "Ongoing technical support and maintenance",
      "Compliance with industry standards",
      "Cost-effective procurement through partnerships"
    ]
  }
};

export default function Service() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');

  const service = slug ? serviceMap[slug] : null;

  if (!slug || !service) {
    return (
      <>
        <SEO
          title="Service Not Found"
          description="The requested service could not be found. Please browse our services."
          canonical="/services"
        />
        <PageHeader title="Service Not Found" subtitle="The requested service could not be found. Please browse our services below." />
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary">Browse All Services</Link>
          </div>
        </section>
      </>
    );
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Etacom Technology',
      url: 'https://etacomtechnology.com',
    },
    serviceType: service.title,
    areaServed: 'Ethiopia',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://etacomtechnology.com/contact`,
      availableLanguage: ['English', 'Amharic'],
    },
  };

  return (
    <>
      <SEO
        title={service.title}
        description={service.tagline}
        canonical={`/services?slug=${service.slug}`}
        jsonLd={serviceJsonLd}
      />
      <PageHeader title={service.title} subtitle={service.tagline} />

      <section className="service-hero" id="serviceHero">
        <div className="service-hero-bg"></div>
        <div className="container service-hero-content">
          <Link to="/services" className="service-back-link">&larr; All Services</Link>
          <div className="service-hero-icon" id="serviceHeroIcon" dangerouslySetInnerHTML={{ __html: service.icon }} />
          <span className="section-tag" id="serviceTag">{service.title}</span>
          <h1 className="service-hero-title" id="serviceTitle">{service.title}</h1>
          <p className="service-hero-tagline" id="serviceTagline">{service.tagline}</p>
        </div>
      </section>

      <section className="service-detail section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              <h2>Overview</h2>
              <p className="service-detail-text">{service.description}</p>
              <h3>What We Deliver</h3>
              <ul className="service-detail-list" id="serviceDetails">
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <aside className="service-detail-sidebar">
              <div className="sidebar-card">
                <h3>Benefits</h3>
                <ul className="sidebar-benefits" id="serviceBenefits">
                  {service.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-card">
                <h3>Technologies</h3>
                <div className="sidebar-tags" id="serviceTechs">
                  {service.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="sidebar-card sidebar-card--cta">
                <h3>Ready to Get Started?</h3>
                <p>Let&apos;s discuss how we can help with your project.</p>
                <Link to="/contact" className="btn btn-primary btn-full">Contact Us</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}