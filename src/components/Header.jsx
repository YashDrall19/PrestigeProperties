import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from "../assets/logot.png";

export default function Header({ onMenu }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const headerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto-collapse after 3 seconds on mount
  useEffect(() => {
    const collapseTimeout = setTimeout(() => {
      setIsCollapsed(true);
    }, 3000);

    return () => clearTimeout(collapseTimeout);
  }, []);

  const handleHeaderHover = () => {
    setIsCollapsed(false);
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleHeaderLeave = () => {
    // Collapse header after 1 second of mouse leaving
    timeoutRef.current = setTimeout(() => {
      setIsCollapsed(true);
    }, 500);
  };

  return (
    <header 
      className={`site-header ${isCollapsed ? 'collapsed' : ''}`}
      ref={headerRef}
      onMouseEnter={handleHeaderHover}
      onMouseLeave={handleHeaderLeave}
    >
      <div className="header-content">
        <button className="menu-btn" onClick={onMenu} aria-label="Toggle menu" aria-expanded="false">
          <svg className="menu-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="0" y="1" width="20" height="2" rx="1" fill="currentColor" />
            <rect x="0" y="7" width="20" height="2" rx="1" fill="currentColor" />
            <rect x="0" y="13" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        <div className='logo-image'>
          <img src={logo} alt="Prestige Properties" />
        </div>
        {/* <div className="logo-brand"><h2>PRESTIGE PROPERTIES</h2></div> */}
        <nav className="header-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/loan-calculator">Loan Calculator</NavLink>
        </nav>
      </div>
    </header>
  )
}
