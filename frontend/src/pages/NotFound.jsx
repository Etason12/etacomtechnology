import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        canonical="/404"
      />
      <PageHeader title="404 - Page Not Found" />
      <section className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--gray-500)', marginBottom: 24, fontSize: '1.1rem' }}>
            The page you&apos;re looking for doesndoesndoesn&apos;tapos;tapos;t exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </section>
    </>
  );
}
