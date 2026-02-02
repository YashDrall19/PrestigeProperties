import { motion } from 'framer-motion'

export default function QuickViewModal({ open, onClose, property }){
  if(!open || !property) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div className="modal" initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.18}} onClick={(e)=>e.stopPropagation()}>
        <div className="modal-header">
          <h3>{property.title}</h3>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="img-placeholder">
            <img src={property.img} alt="N/A" />
          </div>
          <p className="muted">{property.location} • {property.size}</p>
          <p><strong>{property.price}</strong></p>
          <p>Bedrooms: {property.beds} • Bathrooms: {property.baths}</p>
        </div>
        <div className="modal-actions">
          <button className="btn primary">Contact Agent</button>
          <button className="btn ghost">Schedule Visit</button>
        </div>
      </motion.div>
    </div>
  )
}
