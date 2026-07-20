import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
]);

const blogPosts = [
  {
    slug: 'hotels-ict-infrastructure',
    title: 'Why Hotels in Ethiopia Need Modern ICT Infrastructure',
    category: 'ICT Infrastructure',
    excerpt: 'Guest expectations have changed. Modern hotels need reliable Wi-Fi, IPTV, and smart room controls to stay competitive. Here is what Ethiopian hotels should prioritize.',
    date: '2026-06-01',
    author: 'Etacom Technology',
  },
  {
    slug: 'ngos-data-analytics',
    title: 'How NGOs Can Use Data Analytics for Better Decision Making',
    category: 'AI & Data',
    excerpt: 'Development organizations collect vast amounts of data but often struggle to turn it into actionable insights. We explore practical approaches to data-driven decisions.',
    date: '2026-05-15',
    author: 'Etacom Technology',
  },
  {
    slug: 'digital-transformation-sme',
    title: 'Digital Transformation for Ethiopian SMEs: Where to Start',
    category: 'Digital Transformation',
    excerpt: 'Going digital does not have to be overwhelming. We break down the first steps any Ethiopian business can take to modernize their operations.',
    date: '2026-04-01',
    author: 'Etacom Technology',
  },
  {
    slug: 'data-center-ethiopian-climate',
    title: 'Data Center Design Considerations for the Ethiopian Climate',
    category: 'Data Center',
    excerpt: 'High temperatures and power fluctuations present unique challenges for data center operations in Ethiopia. Here is how to design for reliability.',
    date: '2026-03-01',
    author: 'Etacom Technology',
  },
  {
    slug: 'custom-software-vs-offtheshelf',
    title: 'Custom Software vs Off-the-Shelf: Which Is Right for Your Business?',
    category: 'Software Development',
    excerpt: 'We compare the pros and cons of building custom software versus using ready-made solutions, and help you decide what fits your needs and budget.',
    date: '2026-02-01',
    author: 'Etacom Technology',
  },
  {
    slug: 'addis-ababa-office',
    title: 'Etacom Technology Opens Addis Ababa Office',
    category: 'Company News',
    excerpt: 'We are expanding! Our new office in Addis Ababa allows us to better serve clients in the capital region and across southern Ethiopia.',
    date: '2026-01-15',
    author: 'Etacom Technology',
  },
];

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Insights on software, AI, data, and technology trends in Ethiopia from Etacom Technology."
        keywords="software development blog Ethiopia, AI trends Ethiopia, digital transformation Ethiopia, Etacom Technology blog"
        canonical="/blog"
        jsonLd={breadcrumbJsonLd}
      />
      <PageHeader title="Blog" subtitle="Insights on technology, innovation, and digital transformation in Ethiopia" />

      <section className="section animate-on-scroll">
        <div className="container">
          <div className="blog-grid animate-stagger">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <div className="blog-card-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-read-more">
                  <span>Read article &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <div>
            <h2>Have a topic suggestion?</h2>
            <p>We would love to hear what you would like us to write about.</p>
          </div>
          <Link to="/contact" className="btn btn-white">Let Us Know</Link>
        </div>
      </section>
    </>
  );
}