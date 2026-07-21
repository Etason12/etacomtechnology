import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { createBreadcrumbJsonLd } from '../data/shared';

const SITE_URL = 'https://etacomtechnology.com';

const fallbackPosts = {
  'hotels-ict-infrastructure': {
    title: 'Why Hotels in Ethiopia Need Modern ICT Infrastructure',
    category: 'ICT Infrastructure',
    date: '2026-06-01',
    author: 'Etacom Technology',
    content: `
      <p>Guest expectations have changed dramatically in recent years. Today&apos;s travelers expect seamless connectivity, in-room entertainment, and smart controls &mdash; whether they&apos;re staying at a luxury hotel in Addis Ababa or a business hotel in Mekelle.</p>
      <h2>The Basics: Reliable Wi-Fi</h2>
      <p>Wi-Fi is no longer a luxury &mdash; it&apos;s a utility. Guests expect fast, stable internet access in their rooms, conference halls, and common areas. A poorly managed network leads to negative reviews and lost repeat business. Ticket-based WiFi management systems allow hotels to control bandwidth per guest, track usage, and prevent network abuse.</p>
      <h2>Hotel TV & IPTV</h2>
      <p>Traditional satellite TV is being replaced by IPTV systems that offer on-demand content, casting capabilities, and branded hotel channels. These systems integrate with property management software for automated check-in/check-out TV activation.</p>
      <h2>Security: CCTV & Access Control</h2>
      <p>Modern CCTV systems with remote monitoring give hotel management peace of mind. Combined with door access and time attendance systems, hotels can secure restricted areas and track staff movements efficiently.</p>
      <h2>Fire Safety: FADS</h2>
      <p>Fire alarm detection systems are essential for guest safety and regulatory compliance. Early detection and automated alerts can prevent disasters and save lives.</p>
      <h2>Getting Started</h2>
      <p>The good news is that upgrading ICT infrastructure doesn&apos;t have to happen all at once. Start with the most critical systems &mdash; typically Wi-Fi and CCTV &mdash; and build from there. Work with a local partner who understands the Ethiopian market and can provide ongoing support.
    `,
  },
  'ngos-data-analytics': {
    title: 'How NGOs Can Use Data Analytics for Better Decision Making',
    category: 'AI & Data',
    date: '2026-05-15',
    author: 'Etacom Technology',
    content: `
      <p>Development organizations collect vast amounts of data &mdash; from household surveys and project monitoring to financial tracking and beneficiary feedback. Yet many NGOs struggle to transform this data into actionable insights that improve program outcomes and demonstrate impact to donors.</p>
      <h2>The Data Challenge</h2>
      <p>Common barriers include fragmented data systems, limited analytical capacity, and the pressure to prioritize reporting over learning. Data often sits in spreadsheets, paper forms, or disconnected databases, making it difficult to see patterns or make timely decisions.</p>
      <h2>Practical Steps Forward</h2>
      <p><strong>1. Start with a Data Strategy</strong> &mdash; Define what questions you need to answer, what data you already have, and what gaps exist. Focus on 3-5 key decisions you want to improve.</      <p><strong>2. Standardize Data Collection</strong> &mdash; Use consistent indicators, shared definitions, and digital tools (like KoboToolbox, ODK, or CommCare) to reduce cleaning time and improve quality.
      <p><strong>3. Build a Central Data Repository</strong> &mdash; Even a well-structured cloud database (PostgreSQL, BigQuery, or Snowflake) can serve as a single source of truth, enabling cross-project analysis.
      <p><strong>4. Invest in Visualization</strong> &mdash; Dashboards in Power BI, Tableau, or Metabase make trends visible to program managers and leadership alike, without requiring technical skills.
      <p><strong>5. Create a Learning Culture</strong> &mdash; Schedule regular data review meetings where teams discuss what the numbers mean, not just whether targets were met.
      <h2>Real-World Example</h2>
      <p>An Ethiopian NGO tracking agricultural extension services moved from quarterly PDF reports to a live dashboard showing farmer adoption rates by woreda. Field coordinators now spot underperforming areas in real time and adjust outreach &mdash; resulting in a 23% increase in technology adoption within one season.</p>
      <h2>Getting Started</h2>
      <p>You don&apos;t need a massive budget or a data science team. Start small: pick one program, one question, and build a prototype dashboard. Iterate from there. The goal isn&apos;t perfect data &mdash; it&apos;s better decisions.
      <p>Need help building a data analytics pipeline for your organization? <Link to="/contact">Let&apos;s talk</Link>.</p>
    `,
  },
  'digital-transformation-sme': {
    title: 'Digital Transformation for Ethiopian SMEs: Where to Start',
    category: 'Digital Transformation',
    date: '2026-04-01',
    author: 'Etacom Technology',
    content: `
      <p>Going digital doesn&apos;t have to be overwhelming. We break down the first steps any Ethiopian business can take to modernize their operations.
      <h2>Start with a Digital Maturity Assessment</h2>
      <p>Before investing in technology, understand where you stand. Map your current processes, identify pain points, and prioritize areas where digital tools can deliver the most value.
      <h2>Quick Wins</h2>
      <p><strong>1. Digitize Core Operations</strong> &mdash; Move from paper-based records to digital systems for accounting, inventory, and customer management.
      <p><strong>2. Establish Online Presence</strong> &mdash; A professional website and social media presence are essential for credibility and customer acquisition.
      <p><strong>3. Adopt Cloud Tools</strong> &mdash; Use cloud-based collaboration tools (Google Workspace, Microsoft 365) for remote work and team collaboration.
      <p><strong>4. Implement Basic Analytics</strong> &mdash; Track key metrics (sales, customers, expenses) in a dashboard to make data-driven decisions.
      <h2>Choosing the Right Partner</h2>
      <p>Work with a local technology partner who understands the Ethiopian market, regulatory environment, and business culture. Look for experience with similar-sized businesses and a track record of ongoing support.
      <h2>Next Steps</h2>
      <p>Etacom Technology offers digital maturity assessments and transformation roadmaps tailored to Ethiopian SMEs. <Link to="/contact">Contact us</Link> to start your journey.
    `,
  },
  'data-center-ethiopian-climate': {
    title: 'Data Center Design Considerations for the Ethiopian Climate',
    category: 'Data Center',
    date: '2026-03-01',
    author: 'Etacom Technology',
    content: `
      <p>High temperatures and power fluctuations present unique challenges for data center operations in Ethiopia. Here&apos;s how to design for reliability.
      <h2>The Ethiopian Context</h2>
      <p>Ethiopia&apos;s climate varies significantly &mdash; from the cooler highlands of Addis Ababa (average 16°C) to the hot lowlands where temperatures regularly exceed 35°C. Combined with an evolving power grid that can experience voltage fluctuations and outages, designing data centers here requires specific engineering considerations.
      <h2>Cooling Strategy</h2>
      <p>Traditional air conditioning may not suffice. Consider:</p>
      <p><strong>Precision cooling</strong> &mdash; In-row or overhead units that target hot aisles directly.
      <p><strong>Hot/cold aisle containment</strong> &mdash; Prevents air mixing, improves cooling efficiency by 20-30%.
      <p><strong>Free cooling</strong> &mdash; In highland areas, leverage cooler outside air during night/early morning.
      <p><strong>Liquid cooling</strong> &mdash; For high-density racks (>15kW/rack), direct-to-chip or immersion cooling.
      <h2>Power Resilience</h2>
      <p>Ethiopia&apos;s grid is improving but still faces challenges:
      <p><strong>N+1 UPS configuration</strong> &mdash; Minimum redundancy for critical loads.
      <p><strong>Generators with automatic transfer switches</strong> &mdash; Sized for full load + cooling.
      <p><strong>Voltage regulation</strong> &mdash; AVRs or online UPS to handle grid fluctuations.
      <p><strong>Fuel strategy</strong> &mdash; Secure supply contracts; consider dual-fuel generators.
      <h2>Physical Design</h2>
      <ul>
        <li><strong>Raised floors</strong> &mdash; For cable management and underfloor air distribution.
        <li><strong>Fire suppression</strong> &mdash; Gas-based (FM-200, Novec) to protect equipment.
        <li><strong>Environmental monitoring</strong> &mdash; Temperature, humidity, leak detection, door sensors.
        <li><strong>Seismic considerations</strong> &mdash; Ethiopia is in an active seismic zone; racks and equipment should be rated accordingly.
      </ul>
      <h2>Looking Ahead</h2>
      <p>As Ethiopia&apos;s digital economy grows, demand for local data center capacity will increase. Designing for the local environment from day one avoids costly retrofits and ensures reliability. Whether you&apos;re building a server room or a full-scale data center, partner with experts who understand both global best practices and Ethiopian realities.
      <p>Planning a data center project? <Link to="/contact">Let&apos;s discuss</Link> your requirements.
    `,
  },
  'custom-software-vs-offtheshelf': {
    title: 'Custom Software vs Off-the-Shelf: Which Is Right for Your Business?',
    category: 'Software Development',
    date: '2026-02-01',
    author: 'Etacom Technology',
    content: `
      <p>Every growing business faces this decision: buy a ready-made solution or build something custom. There&apos;s no universal answer &mdash; the right choice depends on your specific context, budget, timeline, and long-term strategy.
      <h2>Off-the-Shelf Software</h2>
      <p><strong>Pros:</strong></p>
      <ul>
        <li><strong>Faster deployment</strong> &mdash; Often ready in days or weeks</li>
        <li><strong>Lower upfront cost</strong> &mdash; Subscription or license fees vs. development investment</li>
        <li><strong>Proven reliability</strong> &mdash; Tested by thousands of users</li>
        <li><strong>Regular updates</strong> &mdash; Vendor handles maintenance, security, features</li>
        <li><strong>Ecosystem & integrations</strong> &mdash; Pre-built connectors for common tools</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li><strong>Generic fit</strong> &mdash; Forces your processes to adapt to the software</li>
        <li><strong>Limited customization</strong> &mdash; Workarounds for unique needs</li>
        <li><strong>Ongoing costs</strong> &mdash; Per-user licenses scale with team size</li>
        <li><strong>Vendor lock-in</strong> &mdash; Data export and migration can be difficult</li>
        <li><strong>Feature bloat</strong> &mdash; Paying for modules you don&apos;t need</li>
      </ul>
      <h2>Custom Software Development</h2>
      <p><strong>Pros:</strong></p>
      <ul>
        <li><strong>Exact fit</strong> &mdash; Built for your specific workflows and requirements</li>
        <li><strong>Competitive advantage</strong> &mdash; Unique capabilities competitors can&apos;t easily replicate</li>
        <li><strong>Full ownership</strong> &mdash; Control your data, roadmap, and IP</li>
        <li><strong>Scalability</strong> &mdash; Architecture designed for your growth trajectory</li>
        <li><strong>Integration freedom</strong> &mdash; Connect to any system, legacy or modern</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li><strong>Higher initial investment</strong> &mdash; Development, testing, deployment costs</li>
        <li><strong>Longer time to value</strong> &mdash; Months before first usable version</li>
        <li><strong>Ongoing maintenance</strong> &mdash; You own bugs, updates, security patches</li>
        <li><strong>Technical risk</strong> &mdash; Requires skilled team or reliable partner</li>
        <li><strong>Opportunity cost</strong> &mdash; Internal focus on software vs. core business</li>
      </ul>
      <h2>Decision Framework</h2>
      <p>Ask yourself:</p>
      <ol>
        <li><strong>Is this a core differentiator?</strong> If the process defines your competitive edge &rarr; custom. If it&apos;s a commodity (email, payroll, CRM) &rarr; off-the-shelf.</        <li><strong>How unique are your workflows?</strong> Highly specialized or regulated processes often need custom solutions.
        <li><strong>What&apos;s your timeline?</strong> Need it yesterday? Buy. Have 6-12 months? Build.
        <li><strong>What&apos;s the 3-5 year cost?</strong> Compare total cost of ownership: licenses + customization + integration vs. build + maintain.
        <li><strong>Do you have technical capacity?</strong> In-house team or budget for a long-term partner?
      </ol>
      <h2>The Hybrid Approach</h2>
      <p>Many successful Ethiopian businesses use both: off-the-shelf for standard functions (accounting, HR, email) and custom for core operations (customer-facing apps, proprietary workflows, integration layers). This balances speed, cost, and strategic value.
      <h2>How We Can Help</h2>
      <p>At Etacom Technology, we&apos;ve guided clients through this decision and built both custom solutions and integration layers for commercial platforms. <Link to="/contact">Let&apos;s discuss your specific situation</Link> and find the right path.
    `,
  },
  'addis-ababa-office': {
    title: 'Etacom Technology Opens Addis Ababa Office',
    category: 'Company News',
    date: '2026-01-15',
    author: 'Etacom Technology',
    content: `
      <p>We&apos;re expanding! Our new office in Addis Ababa allows us to better serve clients in the capital region and across southern Ethiopia.
      <h2>Why Addis Ababa?</h2>
      <p>As Ethiopia&apos;s capital and economic hub, Addis Ababa is home to a growing number of hotels, enterprises, NGOs, and government organizations that need reliable ICT solutions. Having a local presence means on-site support, and stronger relationships with our clients.
      <h2>Two Offices, One Team</h2>
      <p>Our Mekelle office continues to serve clients in the Tigray region, while the Addis Ababa office expands our reach across Ethiopia. Both offices are staffed with engineers and technicians ready to deploy, maintain, and support ICT infrastructure and software solutions.
      <h2>What This Means for Our Clients</h2>
      <p>With two offices, we can now offer:</p>
      <ul>
        <li>Faster on-site response times</li>
        <li>Better coverage across Ethiopia</li>
        <li>Dedicated project teams for large deployments</li>
        <li>Local support and maintenance contracts</li>
      </ul>
      <h2>Get in Touch</h2>
      <p>Whether you&apos;re in Mekelle, Addis Ababa, or anywhere in Ethiopia, we&apos;re ready to help. <Link to="/contact">Contact us</Link> to discuss your next project.
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = fallbackPosts[slug];

  if (!post) {
    return (
      <>
        <PageHeader title="Article Not Found" subtitle="The article you&apos;re looking for doesn&apos;t exist." />
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
          </div>
        </section>
      </>
    );
  }

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${slug}` },
  ]);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 200) : '',
    author: { '@type': 'Organization', name: post.author || 'Etacom Technology' },
    publisher: { '@type': 'Organization', name: 'Etacom Technology' },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
  };

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <>
      <SEO
        title={post.title || 'Article'}
        description={post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 160) : 'Read our latest article on technology and software development.'}
        keywords={`${post.category || 'technology'}, software development, ERP, ${post.title || ''}`}
        canonical={`/blog/${slug}`}
        ogType="article"
        publishedTime={post.date}
        author={post.author}
        jsonLd={[breadcrumbJsonLd, articleJsonLd]}
      />
      <PageHeader
        title={post.title}
        subtitle={
          <>
            {post.category && (
              <span style={{ background: 'var(--color-primary)', color: 'white', padding: '2px 10px', borderRadius: 12, marginRight: 12, fontSize: '0.8rem' }}>
                {post.category}
              </span>
            )}
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time> &middot; {post.author}
          </>
        }
      />
      <section className="section">
        <div className="container">
          <div className="blog-content">
            <Link to="/blog" style={{ color: 'var(--color-primary)', marginBottom: 12, display: 'inline-block' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6, verticalAlign: 'middle' }}><polyline points="15 18 9 12 15 6"/></svg>
              Back to Blog
            </Link>
            <div className="body" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
        </div>
      </section>
    </>
  );
}