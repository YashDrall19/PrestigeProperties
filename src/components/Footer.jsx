export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Prestige Properties</h4>
          <p>Premium real estate investment solutions across commercial and residential sectors in India.</p>
          <p style={{fontSize: '0.85rem', marginTop: '12px', color: '#94a3b8'}}>prestige-properties.co</p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#home">Properties</a></li>
            <li><a href="#about">Blog</a></li>
            <li><a href="#services">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Legal</h5>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Contact</h5>
          <p>Email: info@prestige-properties.co</p>
          <p>Phone: +91 (800) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prestige Properties. All rights reserved. | prestige-properties.co</p>
      </div>
    </footer>
  )
}
