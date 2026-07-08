import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import SEO from '../components/SEO'

const fallbackPosts = {
  'future-of-erp-2026': {
    title: 'The Future of ERP in 2026: Trends & Solutions',
    category: 'ERP',
    date: '2025-12-27',
    author: 'Etacom Technology',
    content: `
      <p>Enterprise Resource Planning (ERP) systems continue to evolve rapidly, driven by advancements in artificial intelligence, cloud computing, and automation. As we move through 2026, businesses in Ethiopia and across Africa are increasingly adopting modern ERP solutions to streamline operations and gain competitive advantages.</p>
      <h2>Key ERP Trends in 2026</h2>
      <p><strong>AI-Powered Analytics:</strong> Modern ERP systems now leverage artificial intelligence to provide predictive analytics, helping businesses forecast demand, optimize inventory, and make data-driven decisions.</p>
      <p><strong>Cloud-First Approach:</strong> Cloud-based ERP solutions are becoming the standard, offering scalability, lower upfront costs, and remote accessibility that on-premise systems cannot match.</p>
      <p><strong>Mobile ERP:</strong> With the proliferation of smartphones, mobile-accessible ERP modules allow managers and employees to access critical business data from anywhere.</p>
      <p><strong>Integration Capabilities:</strong> Today's ERP systems offer seamless integration with other business tools, creating a unified technology ecosystem.</p>
      <h2>Why Ethiopian Businesses Need Modern ERP</h2>
      <p>Ethiopian businesses face unique challenges including rapid growth, regulatory requirements, and increasing competition. A modern ERP system helps address these challenges by providing real-time visibility into operations, improving compliance, and enabling scalable growth.</p>
      <p>At Etacom Technology, we specialize in implementing and customizing ERP solutions tailored to the Ethiopian market. Our ERP modules cover accounting, HR, inventory, sales, procurement, and more.</p>
    `,
  },
  'digital-transformation': {
    title: 'Digital Transformation for Ethiopian Businesses',
    category: 'Technology',
    date: '2025-11-28',
    author: 'Etacom Technology',
    content: `
      <p>Digital transformation is no longer a luxury — it is a necessity for businesses that want to remain competitive. In Ethiopia, where the digital economy is growing rapidly, businesses must embrace technology to streamline operations, enhance customer experiences, and drive growth.</p>
      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation refers to the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It is also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>
      <h2>Key Areas of Digital Transformation</h2>
      <p><strong>Customer Experience:</strong> Using technology to understand customer needs and deliver personalized experiences across all touchpoints.</p>
      <p><strong>Operational Agility:</strong> Implementing systems that allow your business to respond quickly to market changes and opportunities.</p>
      <p><strong>Workforce Enablement:</strong> Equipping employees with the tools and technologies they need to be productive and collaborative.</p>
      <p><strong>Data-Driven Decision Making:</strong> Leveraging data analytics to make informed business decisions rather than relying on intuition alone.</p>
      <h2>Getting Started</h2>
      <p>Etacom Technology can help you assess your current digital maturity and create a roadmap for transformation. Contact us to learn more.</p>
    `,
  },
  'software-trends-2026': {
    title: 'Top Software Development Trends in Ethiopia for 2026',
    category: 'Software',
    date: '2025-10-21',
    author: 'Etacom Technology',
    content: `
      <p>The software development landscape in Ethiopia is evolving rapidly. As more businesses go digital and the tech ecosystem matures, several key trends are shaping the industry in 2026.</p>
      <h2>1. Rise of Mobile-First Development</h2>
      <p>With mobile phone penetration in Ethiopia exceeding 50%, mobile-first development has become essential. Businesses are prioritizing mobile applications that offer seamless user experiences and offline capabilities.</p>
      <h2>2. Cloud-Native Applications</h2>
      <p>Cloud computing adoption is accelerating. Ethiopian businesses are moving away from traditional on-premise infrastructure to cloud-native solutions that offer scalability, reliability, and cost efficiency.</p>
      <h2>3. AI and Machine Learning Integration</h2>
      <p>Artificial intelligence is being integrated into business applications for chatbots, predictive analytics, process automation, and intelligent decision support systems.</p>
      <h2>4. Low-Code and No-Code Platforms</h2>
      <p>These platforms are democratizing software development, allowing non-technical users to build applications and automate workflows with minimal coding.</p>
      <h2>5. Cybersecurity Focus</h2>
      <p>As digital threats increase, security-first development practices are becoming standard. Ethiopian businesses are investing in secure coding practices, regular audits, and compliance frameworks.</p>
      <p>Etacom Technology stays at the forefront of these trends, delivering modern, secure, and scalable software solutions to our clients.</p>
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/blog/${slug}`)
      .then((res) => setPost(res.data.data))
      .catch(() => {
        const fallback = fallbackPosts[slug];
        if (fallback) setPost(fallback);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container"><p style={{ textAlign: 'center' }}>Loading...</p></div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p style={{ margin: '16px 0', color: 'var(--gray-500)' }}>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const breadcrumbJsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://etacomtechnology.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://etacomtechnology.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://etacomtechnology.com/blog/${slug}` },
    ],
  } : null

  const articleJsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 200) : '',
    author: { '@type': 'Organization', name: post.author || 'Etacom Technology' },
    publisher: { '@type': 'Organization', name: 'Etacom Technology' },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://etacomtechnology.com/blog/${slug}` },
  } : null

  return (
    <>
      <SEO
        title={post?.title || 'Article'}
        description={post?.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 160) : 'Read our latest article on technology and software development.'}
        keywords={`${post?.category || 'technology'}, software development, ERP, ${post?.title || ''}`}
        canonical={`/blog/${slug}`}
        ogType="article"
        publishedTime={post?.date}
        author={post?.author}
        jsonLd={breadcrumbJsonLd || articleJsonLd ? [breadcrumbJsonLd, articleJsonLd].filter(Boolean) : undefined}
      />
      <section className="page-header">
        <div className="container">
          <Link to="/blog" style={{ color: 'var(--primary)', marginBottom: 12, display: 'inline-block' }}>
            <i className="fas fa-arrow-left" /> Back to Blog
          </Link>
          <h1>{post.title}</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--gray-400)' }}>
            {post.category && <span style={{ background: 'var(--primary)', color: 'white', padding: '2px 10px', borderRadius: 12, marginRight: 12, fontSize: '0.8rem' }}>{post.category}</span>}
            {new Date(post.date).toLocaleDateString()} &middot; {post.author}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-post-content">
            <div className="body" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>
    </>
  );
}
