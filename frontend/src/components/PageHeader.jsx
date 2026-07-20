export default function PageHeader({ title, subtitle, eyebrow }) {
  return (
    <section className="page-header">
      <div className="page-header-bg" aria-hidden="true"></div>
      <div className="container page-header-content">
        {eyebrow && <span className="page-header-eyebrow">{eyebrow}</span>}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
