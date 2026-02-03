import { NavLink } from 'react-router-dom';
import logo from "../assets/logot.png";

export default function Header({ onMenu }) {

  return (
    <header className="site-header">
      <div className="header-content">
        <button className="menu-btn" onClick={onMenu} aria-label="Toggle menu" aria-expanded="false">
          <svg className="menu-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="0" y="1" width="20" height="2" rx="1" fill="currentColor" />
            <rect x="0" y="7" width="20" height="2" rx="1" fill="currentColor" />
            <rect x="0" y="13" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        <div className='logo-image'>
          <img src={logo} alt="" />
        </div>
        {/* <div className="logo-brand"><h2>PRESTIGE PROPERTIES</h2></div> */}
        <nav className="header-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
