const servicesData = {
  "custom-software-development": {
    title: "Custom Software Development",
    shortTitle: "Software Development",
    tagline: "Tailored applications built for your business",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
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
      "Enhanced security and compliance"
    ]
  },

  "ai-machine-learning": {
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    tagline: "Intelligent solutions powered by data",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    description: "Harness the power of artificial intelligence and machine learning to automate processes, uncover insights, and create intelligent products. Our data scientists and ML engineers build production-grade models that deliver measurable business impact.",
    details: [
      "Predictive analytics and forecasting models",
      "Natural language processing (NLP) and chatbots",
      "Computer vision and image recognition",
      "Recommendation engines and personalization",
      "Anomaly detection and fraud prevention",
      "Model deployment, monitoring, and MLOps",
      "Data preprocessing and feature engineering",
      "Custom LLM fine-tuning and RAG pipelines"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI", "Hugging Face", "MLflow", "Kubernetes"],
    benefits: [
      "Automate repetitive tasks and reduce costs",
      "Extract actionable insights from your data",
      "Improve customer experience with personalization",
      "Stay ahead of the competition with AI-driven innovation"
    ]
  },

  "data-engineering-analytics": {
    title: "Data Engineering & Analytics",
    shortTitle: "Data Engineering",
    tagline: "Turn raw data into business intelligence",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    description: "We build robust data infrastructure that collects, stores, and processes your data efficiently. Our data engineering solutions ensure you have clean, reliable data ready for analysis and decision-making.",
    details: [
      "Data pipeline design and implementation",
      "Data warehousing and lakehouse architecture",
      "ETL/ELT process automation",
      "Real-time data streaming and processing",
      "Data quality monitoring and governance",
      "Scalable database design and optimization",
      "Big data processing (Spark, Hadoop)",
      "Self-service analytics platforms"
    ],
    technologies: ["Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery", "Kafka", "Python", "SQL"],
    benefits: [
      "Single source of truth for your data",
      "Faster, more reliable reporting",
      "Reduced data silos across departments",
      "Scalable infrastructure that grows with data volume"
    ]
  },

  "cloud-solutions-devops": {
    title: "Cloud Solutions & DevOps",
    shortTitle: "Cloud & DevOps",
    tagline: "Scale with confidence in the cloud",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    description: "Accelerate your digital transformation with cloud infrastructure and DevOps practices. We help you migrate, modernize, and manage your applications in the cloud with automation, reliability, and security at every layer.",
    details: [
      "Cloud migration strategy and execution",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD pipeline setup and optimization",
      "Containerization with Docker and Kubernetes",
      "Cloud cost optimization and governance",
      "Monitoring, logging, and observability",
      "Security best practices and compliance",
      "Disaster recovery and high availability"
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    benefits: [
      "Faster time-to-market with automated deployments",
      "Reduced infrastructure costs",
      "Improved reliability and uptime",
      "Elastic scalability for traffic spikes"
    ]
  },

  "mobile-web-applications": {
    title: "Mobile & Web Applications",
    shortTitle: "Mobile & Web",
    tagline: "Beautiful, performant apps for any device",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    description: "We create engaging mobile and web applications that deliver exceptional user experiences. From cross-platform mobile apps to progressive web applications, our team combines modern design with solid engineering.",
    details: [
      "iOS and Android native app development",
      "Cross-platform development (React Native, Flutter)",
      "Progressive web applications (PWA)",
      "Responsive web design and development",
      "UI/UX design and prototyping",
      "App store deployment and management",
      "Performance optimization and analytics",
      "Accessibility and inclusive design"
    ],
    technologies: ["React Native", "Flutter", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "GraphQL"],
    benefits: [
      "Reach customers on any device",
      "Fast, native-like performance",
      "Consistent brand experience across platforms",
      "Faster development with cross-platform tools"
    ]
  },

  "data-visualization-bi": {
    title: "Data Visualization & BI",
    shortTitle: "Data Viz & BI",
    tagline: "See your data tell a story",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>`,
    description: "Transform complex data into clear, interactive visualizations and dashboards. Our BI solutions empower your team to explore data, uncover trends, and make informed decisions in real time.",
    details: [
      "Interactive dashboards and reporting",
      "Business intelligence strategy and tool selection",
      "Real-time data visualization",
      "Custom chart and graph development",
      "KPI tracking and executive reporting",
      "Data storytelling and presentations",
      "Embedded analytics for your products",
      "Self-service BI for business teams"
    ],
    technologies: ["Power BI", "Tableau", "Looker", "Metabase", "D3.js", "Apache Superset", "SQL", "Python"],
    benefits: [
      "Faster, data-driven decisions",
      "Democratized access to insights",
      "Real-time visibility into business performance",
      "Clear communication of complex data"
    ]
  },

  "data-center-solutions": {
    title: "Data Center Solutions",
    shortTitle: "Data Center",
    tagline: "Reliable, scalable infrastructure for your operations",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    description: "We design, supply, and install complete data center infrastructure tailored to your organization's needs. From server rooms to enterprise data centers, we deliver reliable, efficient, and secure environments for your critical IT operations.",
    details: [
      "Data center design and planning",
      "Server and storage system procurement & installation",
      "Cooling and ventilation system setup",
      "Power distribution and backup (UPS, generators)",
      "Rack layout and cable management",
      "Fire suppression and environmental monitoring",
      "Data center migration and consolidation",
      "Ongoing maintenance and support"
    ],
    technologies: ["HP Enterprise", "Dell", "Cisco", "APC", "Eaton", "Vertiv", "Rittal", "VMware"],
    benefits: [
      "High availability and uptime for critical systems",
      "Optimized power and cooling efficiency",
      "Scalable infrastructure for business growth",
      "Enhanced security and physical protection"
    ]
  },

  "digital-transformation": {
    title: "Digital Transformation",
    shortTitle: "Digital Transformation",
    tagline: "Modernize your business for the digital age",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    description: "We guide organizations through their digital transformation journey — from strategy to execution. Our consultants work alongside your team to identify opportunities, select the right technologies, and implement changes that drive real business value.",
    details: [
      "Digital maturity assessment and gap analysis",
      "Technology roadmap and strategy development",
      "Business process automation and optimization",
      "Legacy system modernization",
      "Change management and team training",
      "Cloud adoption and migration planning",
      "Digital workplace and collaboration tools",
      "ROI measurement and continuous improvement"
    ],
    technologies: ["Various enterprise platforms", "Cloud services", "Low-code platforms", "Automation tools"],
    benefits: [
      "Increased operational efficiency",
      "Improved customer and employee experience",
      "New revenue streams through digital products",
      "Agile and responsive business operations"
    ]
  },

  "ict-equipment-supply-installation": {
    title: "ICT Equipment Supply & Installation",
    shortTitle: "ICT Supply & Installation",
    tagline: "End-to-end ICT infrastructure for your organization",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`,
    description: "We supply, install, and configure a complete range of ICT equipment for hotels, enterprises, NGOs, and government organizations. Our turnkey solutions ensure your technology infrastructure is reliable, secure, and ready for business.",
    details: [
      "Network infrastructure design and installation",
      "Wi-Fi and wireless networking solutions",
      "Structured cabling (Cat6, fiber optic)",
      "CCTV and video surveillance systems",
      "Access control and biometric systems",
      "Intercom and public address systems",
      "IT equipment procurement and configuration",
      "Testing, commissioning, and handover"
    ],
    technologies: ["Cisco", "Ubiquiti", "MikroTik", "Hikvision", "Dahua", "Axis", "Ruckus", "TP-Link"],
    benefits: [
      "Reliable, enterprise-grade connectivity",
      "Comprehensive security and surveillance",
      "Professional installation and configuration",
      "Ongoing technical support and maintenance"
    ]
  }
};