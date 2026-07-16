import { useState } from 'react';
import axios from 'axios';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { createBreadcrumbJsonLd } from '../data/shared';

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      await axios.post(`${API_URL}/api/contact`, form);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setError('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Etacom Technology for software development, ERP systems, website design, and IT consulting services in Addis Ababa, Ethiopia."
        keywords="contact Etacom Technology, software development Addis Ababa, IT consulting Ethiopia, get a quote Ethiopia, software company contact"
        canonical="/contact"
        jsonLd={breadcrumbJsonLd}
      />
      <PageHeader title="Contact Us" subtitle="Get in touch with us for your software and technology needs" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Discuss Your Project</h2>
              <p>
                Ready to take your business to the next level? Contact us today and
                let's discuss how we can help you achieve your technology goals.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="icon"><i className="fas fa-phone" /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+251-911-000-000<br />+251-912-000-000</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="icon"><i className="fas fa-envelope" /></div>
                  <div>
                    <h4>Email</h4>
                    <p>info@etacomtechnology.com</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                  <div>
                    <h4>Address</h4>
                    <p>Bole, In-front of Bonanza Hotel<br />Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="icon"><i className="fas fa-clock" /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: 16 }}>
                    <i className="fas fa-check-circle" />
                  </div>
                  <h3 style={{ marginBottom: 12 }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--gray-500)' }}>
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" maxLength={100} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" maxLength={254} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+251-XXX-XXXXXX" maxLength={30} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What is this regarding?" maxLength={200} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your project..." maxLength={5000} />
                  </div>
                  {error && <p style={{ color: 'red', marginBottom: 16 }}>{error}</p>}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                    {submitting ? 'Sending...' : <>Send Message <i className="fas fa-paper-plane" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
