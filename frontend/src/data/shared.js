const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://etacomtechnology.com';

export function createBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const services = [
  {
    slug: 'custom-software-development',
    icon: 'fa-solid fa-laptop-code',
    iconColor: 'icon-blue',
    title: 'Custom Software Development',
    desc: 'Tailored web and enterprise applications built with modern frameworks, clean architecture, and scalable infrastructure.',
    tags: ['Web Apps', 'Enterprise Software', 'API Development'],
  },
  {
    slug: 'ai-machine-learning',
    icon: 'fa-solid fa-robot',
    iconColor: 'icon-purple',
    title: 'AI & Machine Learning',
    desc: 'Intelligent solutions including predictive analytics, natural language processing, and computer vision systems.',
    tags: ['Predictive Models', 'NLP & Chatbots', 'Computer Vision'],
  },
  {
    slug: 'data-engineering-analytics',
    icon: 'fa-solid fa-database',
    iconColor: 'icon-green',
    title: 'Data Engineering & Analytics',
    desc: 'Robust data pipelines, warehousing solutions, and analytics dashboards that turn data into decisions.',
    tags: ['Data Pipelines', 'Data Warehousing', 'Analytics Dashboards'],
  },
  {
    slug: 'cloud-solutions-devops',
    icon: 'fa-solid fa-cloud',
    iconColor: 'icon-cyan',
    title: 'Cloud Solutions & DevOps',
    desc: 'Cloud migration, infrastructure automation, and CI/CD pipelines for reliable and scalable deployments.',
    tags: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    slug: 'mobile-web-applications',
    icon: 'fa-solid fa-mobile-screen',
    iconColor: 'icon-indigo',
    title: 'Mobile & Web Applications',
    desc: 'Cross-platform mobile apps and responsive web applications designed for performance and great user experience.',
    tags: ['iOS & Android', 'Progressive Web Apps', 'UI/UX Design'],
  },
  {
    slug: 'data-visualization-bi',
    icon: 'fa-solid fa-chart-bar',
    iconColor: 'icon-teal',
    title: 'Data Visualization & BI',
    desc: 'Interactive dashboards and business intelligence solutions that make complex data clear and actionable.',
    tags: ['BI Dashboards', 'Real-time Reporting', 'Data Storytelling'],
  },
  {
    slug: 'data-center-solutions',
    icon: 'fa-solid fa-server',
    iconColor: 'icon-slate',
    title: 'Data Center Solutions',
    desc: 'Design, supply, and installation of data center infrastructure including servers, storage, cooling, and power systems.',
    tags: ['Server & Storage', 'Cooling & Power', 'Data Center Design'],
  },
  {
    slug: 'digital-transformation',
    icon: 'fa-solid fa-arrows-rotate',
    iconColor: 'icon-orange',
    title: 'Digital Transformation',
    desc: 'Strategic consulting and technology implementation to modernize operations and drive digital growth.',
    tags: ['Strategy Consulting', 'Legacy Modernization', 'Tech Advisory'],
  },
  {
    slug: 'ict-equipment-supply-installation',
    icon: 'fa-solid fa-wifi',
    iconColor: 'icon-pink',
    title: 'ICT Equipment Supply & Installation',
    desc: 'Supply, installation, and configuration of ICT equipment for hotels, enterprises, NGOs, and government organizations.',
    tags: ['Networking & Wi-Fi', 'CCTV & Access Control', 'Structured Cabling'],
  },
];

export const homeServices = [
  { icon: 'fa-solid fa-laptop-code', title: 'Software Development', desc: 'Design & Develop Custom Software Solutions that empower businesses to stay ahead of their competition.' },
  { icon: 'fa-solid fa-globe', title: 'Website Design & Development', desc: 'Designing and creating custom built websites, web portals and web applications tailored to your needs.' },
  { icon: 'fa-solid fa-cubes', title: 'ERP System Development', desc: 'Enhance Business Operations with Comprehensive ERP Software streamlining data flow across departments.' },
  { icon: 'fa-solid fa-sms', title: 'SMS Messaging', desc: 'Bulk SMS service provider allowing you to send messages in group using bulk SMS gateway.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Mobile App Development', desc: 'Develops and customizes mobile application development solutions for specific business needs.' },
  { icon: 'fa-solid fa-server', title: 'Server Hosting & Configuration', desc: 'High quality affordable hosting services for companies of all sizes on reliable servers.' },
];

export const erpModules = [
  { icon: 'fa-solid fa-chart-line', title: 'Accounting & Finance', desc: 'Keep tabs on your company\'s total cash flow and profit and loss.' },
  { icon: 'fa-solid fa-users', title: 'HR, Payroll & Attendance', desc: 'Automate payroll, recruitment, leave, attendance and employee operations.' },
  { icon: 'fa-solid fa-warehouse', title: 'Inventory Management', desc: 'Track stock levels and pricing for all products your organization handles.' },
  { icon: 'fa-solid fa-tasks', title: 'Project Management', desc: 'Manage raw material, accounting for requirements, and track project status.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Purchase Management', desc: 'Record track of purchase quantities, items purchased, and payment expenses.' },
  { icon: 'fa-solid fa-bullhorn', title: 'Sales & Marketing', desc: 'Manage products, customers, quotations and invoices with CRM integration.' },
  { icon: 'fa-solid fa-truck', title: 'Fleet Management', desc: 'Manage vehicle registration, repair, maintenance, driver and fuel consumption.' },
  { icon: 'fa-solid fa-handshake', title: 'Customer CRM', desc: 'Contact management, lead tracking, quote creation, and sales productivity.' },
];

export const erpModulesDetailed = [
  { icon: 'fa-solid fa-chart-line', title: 'Accounting & Finance', desc: 'Primarily formed of accounting modules that keep tabs on your company\'s total cash flow and profit and loss. Includes general ledger, accounts payable/receivable, and financial reporting.' },
  { icon: 'fa-solid fa-users', title: 'HR, Payroll & Attendance', desc: 'Automates operations involving employees including payroll, recruitment, leave management, attendance tracking, performance evaluation, and employee records.' },
  { icon: 'fa-solid fa-warehouse', title: 'Warehouse & Inventory', desc: 'Keep track of stock levels, pricing, and movement of all products that your organization manufactures, purchases, stores, and sells.' },
  { icon: 'fa-solid fa-tasks', title: 'Project Management', desc: 'Manage raw material requirements, accounting for project needs, tracking project status, resource allocation, and milestone monitoring.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Purchase Management', desc: 'Record and track all essential order information including purchase quantities, items purchased, vendor management, and payment expenses.' },
  { icon: 'fa-solid fa-bullhorn', title: 'Sales & Marketing', desc: 'Sales management with CRM integration. Easily manage products, customers, quotations, invoices, and marketing campaigns from one platform.' },
  { icon: 'fa-solid fa-truck', title: 'Fleet Management', desc: 'Manage vehicle registration, repair and maintenance schedules, driver management, fuel consumption tracking, and all other aspects of your fleet.' },
  { icon: 'fa-solid fa-handshake', title: 'Customer CRM', desc: 'Contact management, communication tracking, opportunity/lead tracking, quote creation, sales agent productivity monitoring, and customer analytics.' },
];