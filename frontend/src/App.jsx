import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Services = lazy(() => import('./pages/Services'));
const Service = lazy(() => import('./pages/Service'));
const ERPModules = lazy(() => import('./pages/ERPModules'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Profile = lazy(() => import('./pages/Profile'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function Loading() {
  return (
    <div
      className="route-loading"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="route-loading-inner">
        <span className="route-loading-logo" aria-hidden="true">E</span>
        <div className="route-loading-spinner" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="route-loading-text">Loading…</p>
      </div>
    </div>
  );
}

function ScrollRevealOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document
        .querySelectorAll('.animate-on-scroll, .animate-stagger')
        .forEach((el) => el.classList.add('visible'));
      return;
    }
    // wait a tick so lazy-loaded content is rendered
    const id = window.requestAnimationFrame(() => {
      const targets = document.querySelectorAll(
        '.animate-on-scroll, .animate-stagger'
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      targets.forEach((el) => observer.observe(el));
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollRevealOnRoute />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service" element={<Service />} />
              <Route path="/erp-modules" element={<ERPModules />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App