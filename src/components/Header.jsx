import { NavLink } from 'react-router-dom'

export default function Header({ onMenu }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <button className="menu-btn" onClick={onMenu} aria-label="Toggle menu">☰</button>
        <div className="logo-brand">Prestige Properties</div>
        <nav className="header-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* Removed Get Started button */}
      </div>
    </header>
  )
}
