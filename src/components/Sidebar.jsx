import { NavLink } from 'react-router-dom'

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="sidebar-inner">
        <div className="brand">Prestige</div>
        <nav className="nav">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Home</NavLink>
          {/* <NavLink to="/overview" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Overview</NavLink> */}
          <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Services</NavLink>
          <NavLink to="/properties" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Properties</NavLink>
          {/* <NavLink to="/vastu" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Vastu Consult</NavLink> */}
          {/* <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>About</NavLink> */}
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Contact</NavLink>
          <NavLink to="/loan-calculator" className={({isActive}) => isActive ? 'active' : ''} onClick={onClose}>Loan Calculator</NavLink>
        </nav>
        <div className="sidebar-close" onClick={onClose}>✕</div>
      </div>
    </aside>
  )
}
