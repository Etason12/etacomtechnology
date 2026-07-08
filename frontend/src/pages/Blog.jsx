import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SEO from '../components/SEO'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://etacomtechnology.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://etacomtechnology.com/blog' },
  ],
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/blog')
      .then((res) => setPosts(res.data.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const fallbackPosts = [
    { title: 'The Future of ERP in 2026: Trends & Solutions', slug: 'future-of-erp-2026', category: 'ERP', excerpt: 'Explore how ERP systems are evolving with AI, cloud computing, and automation.', date: '2025-12-27', author: 'Etacom Technology' },
    { title: 'Digital Transformation for Ethiopian Businesses', slug: 'digital-transformation', category: 'Technology', excerpt: 'Learn how Ethiopian businesses can embrace digital transformation.', date: '2025-11-28', author: 'Etacom Technology' },
    { title: 'Top Software Development Trends in Ethiopia for 2026', slug: 'software-trends-2026', category: 'Software', excerpt: 'Discover the latest software development trends.', date: '2025-10-21', author: 'Etacom Technology' },
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <>
      <SEO
        title="Blog"
        description="Read insights on software development, ERP implementation, digital transformation, and technology trends in Ethiopia from Etacom Technology."
        keywords="software development blog Ethiopia, ERP trends, technology insights Ethiopia, Etacom Technology blog, digital transformation Ethiopia"
        canonical="/blog"
        jsonLd={breadcrumbJsonLd}
      />
      <section className="page-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights on software development, ERP implementation, and technology trends</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--gray-500)' }}>Loading articles...</p>
          ) : (
            <div className="blog-page-grid">
              {displayPosts.map((post, i) => (
                <div className="card blog-card" key={i}>
                  <div className="blog-card-image">
                    <i className="fas fa-newspaper" />
                  </div>
                  <div className="blog-card-body">
                    <span className="category">{post.category || 'General'}</span>
                    <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <div className="meta">
                      <span><i className="far fa-calendar" /> {new Date(post.date).toLocaleDateString()}</span>
                      <span><i className="far fa-user" /> {post.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
