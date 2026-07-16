import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Etacom <span>Technology</span></h3>
            <p>
              Established in 2023, Etacom Technology is a premier software development and
              IT consulting company. We deliver innovative digital solutions including custom
              software, ERP systems, website development, and mobile applications.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/etacomtechnology" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
              <a href="https://linkedin.com/company/etacomtechnology" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
              <a href="https://youtube.com/@etacomtechnology" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
              <a href="https://twitter.com/etacomtechnology" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/services">Software Development</Link></li>
              <li><Link to="/erp-modules">ERP Solutions</Link></li>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">SEO Service</Link></li>
              <li><Link to="/services">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4>ERP Modules</h4>
            <ul className="footer-links">
              <li><Link to="/erp-modules">Accounting & Finance</Link></li>
              <li><Link to="/erp-modules">HR & Payroll</Link></li>
              <li><Link to="/erp-modules">Inventory Management</Link></li>
              <li><Link to="/erp-modules">Sales & Marketing</Link></li>
              <li><Link to="/erp-modules">Purchase Management</Link></li>
              <li><Link to="/erp-modules">CRM</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li><i className="fas fa-phone" /><span>+251-911-000-000<br />+251-912-000-000</span></li>
              <li><i className="fas fa-envelope" /><span>info@etacomtechnology.com</span></li>
              <li><i className="fas fa-map-marker-alt" /><span>Bole, Addis Ababa<br />Ethiopia</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Etacom Technology PLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
