const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://etacomtechnology.vercel.app';

export function createBreadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const services = [
  { icon: 'fa-solid fa-laptop-code', title: 'Software Development', desc: 'Custom enterprise software development tailored to your business needs. We design, develop, and implement robust software solutions that streamline operations and drive growth.' },
  { icon: 'fa-solid fa-cubes', title: 'ERP System Implementation', desc: 'Comprehensive ERP solutions covering accounting, HR, inventory, sales, procurement, and more. Built exclusively for Ethiopian businesses.' },
  { icon: 'fa-solid fa-globe', title: 'Website Design & Development', desc: 'Custom websites, web portals, and web applications designed to engage your audience and deliver results. Responsive, fast, and SEO-friendly.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance mobile experiences.' },
  { icon: 'fa-solid fa-database', title: 'Database Design & Development', desc: 'Scalable and secure database solutions. We design, implement, and optimize databases for performance and reliability.' },
  { icon: 'fa-solid fa-sms', title: 'Bulk SMS Messaging', desc: 'Shortcode and bulk SMS messaging gateway for businesses. Reach your customers instantly with our reliable SMS platform.' },
  { icon: 'fa-solid fa-server', title: 'Cloud Server Management', desc: 'Cloud server setup, configuration, and management services. We help you leverage cloud infrastructure for scalability.' },
  { icon: 'fa-solid fa-chart-line', title: 'SEO & Digital Marketing', desc: 'Search engine optimization, local SEO, and SEO audit services to improve your online visibility and drive organic traffic.' },
  { icon: 'fa-solid fa-handshake', title: 'IT Consulting', desc: 'Strategic IT consulting to help you make informed technology decisions. From digital transformation to technology roadmap planning.' },
  { icon: 'fa-solid fa-vial', title: 'Software Testing & QA', desc: 'Comprehensive software testing services including UAT, functional testing, performance testing, and quality assurance.' },
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
