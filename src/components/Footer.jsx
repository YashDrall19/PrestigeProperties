import { NavLink, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  console.log(location.pathname === "/")
  const openEmail = () => {
    const email = "kamal@prestige-properties.co";
    const subject = "Real Estate Inquiry";
    const body = "Hello,\n\nI am interested in your real estate services.";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailUrl, "_blank");
    }
  };

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
            <li>{location.pathname !== "/" && <NavLink to="/">Home</NavLink>}</li>
            <li><NavLink to="/properties">Properties</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/loan-calculator">Loan Calculator</NavLink></li>
          </ul>
        </div>
        {/* <div className="footer-section">
          <h5>Legal</h5>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div> */}
        <div className="footer-section">
        <h5>Contact</h5>
        <p>
          Email:{" "}
          <span
            className="app-link"
            onClick={openEmail}
            role="button"
            tabIndex={0}
          >
            kamal@prestige-properties.co
          </span>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:+919911331082"
            className="app-link"
          >
            +91 9911331082
          </a>
        </p>
      </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prestige Properties. All rights reserved. | prestige-properties.co</p>
      </div>
    </footer>
  )
}
