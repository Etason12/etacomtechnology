import { useState } from "react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import { createBreadcrumbJsonLd } from "../data/shared";

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const serviceOptions = [
  { value: "software", label: "Custom Software Development" },
  { value: "ai", label: "AI & Machine Learning" },
  { value: "data", label: "Data Engineering & Analytics" },
  { value: "cloud", label: "Cloud Solutions & DevOps" },
  { value: "mobile", label: "Mobile & Web Applications" },
  { value: "bi", label: "Data Visualization & BI" },
  { value: "datacenter", label: "Data Center Solutions" },
  { value: "ict", label: "ICT Equipment Supply & Installation" },
  { value: "transformation", label: "Digital Transformation" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ kind: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ kind: "idle", message: "" });
    setSubmitting(true);
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    if (payload._hp) return;
    delete payload._hp;
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "your-form-id";
      if (formspreeId && formspreeId !== "your-form-id") {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("submit-failed");
      }
      setStatus({
        kind: "success",
        message: "Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.",
      });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        message: "Oops! There was a problem sending your message. Please try again or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Etacom Technology for ICT solutions, software development, ERP systems, and IT consulting services in Mekelle, Tigray, and Addis Ababa, Ethiopia."
        keywords="ICT solutions Mekelle, contact Etacom Technology, IT services Tigray, software development Ethiopia, data center solutions, ICT equipment installation"
        canonical="/contact"
        jsonLd={[breadcrumbJsonLd, {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Etacom Technology',
          url: 'https://etacomtechnology.com',
          telephone: ['+251-914-08058', '+251-911-554969'],
          address: [
            { '@type': 'PostalAddress', addressLocality: 'Mekelle', addressRegion: 'Tigray', addressCountry: 'ET' },
            { '@type': 'PostalAddress', addressLocality: 'Addis Ababa', addressCountry: 'ET' },
          ],
          areaServed: ['Mekelle', 'Tigray', 'Addis Ababa', 'Ethiopia'],
          url: 'https://www.google.com/maps?cid=CGAYZ9DSXEU4UQIFO',
        }]}
      />
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Let&apos;s discuss your project and how we can help you succeed."
      />

      <section className="section animate-on-scroll">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Let&apos;s Discuss Your Project</h2>
            <p>Have a project in mind? Reach out and our team will respond within 24 hours.</p>
            <ul className="contact-list">
              <li>
                <div className="contact-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@etacomtechnology.com">info@etacomtechnology.com</a>
                </div>
              </li>
              <li>
                <div className="contact-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone &mdash; Mekelle</strong>
                  <a href="tel:+25191408058">+251-914-08058</a>
                </div>
              </li>
              <li>
                <div className="contact-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone &mdash; Addis Ababa</strong>
                  <a href="tel:+251911554969">+251-911-554969</a>
                </div>
              </li>
              <li>
                <div className="contact-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Availability</strong>
                  <span>Mon &ndash; Sat: 8:30 AM &ndash; 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          <form
            id="contactForm"
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required autoComplete="name" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+251..." autoComplete="tel" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">What service do you need?</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
            </div>
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="_hp">Leave this empty</label>
              <input type="text" id="_hp" name="_hp" tabIndex={-1} autoComplete="off" />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
            <p
              className={`form-note${status.kind === "success" ? " success" : ""}${status.kind === "error" ? " error" : ""}`}
              role={status.kind === "error" ? "alert" : undefined}
              aria-live="polite"
            >
              {status.message}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
