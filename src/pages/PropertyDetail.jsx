import { useParams, Link } from 'react-router-dom'
import properties from '../data/properties'
import { useEffect } from 'react'

export default function PropertyDetail(){
  const { id } = useParams()
  const p = properties.find(x=> x.id === id)
  if(!p) return (
    <section className="page">
      <h2>Property not found</h2>
      <Link to="/properties" className="btn">Back</Link>
    </section>
  )

  useEffect(() => {
    const section = document.getElementById("property");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="page property-detail" id='property'>
      <h1>{p.title}</h1>
      <div className="section two-cols">
        <div>
          <div className="img-placeholder large" aria-hidden="true"></div>
          <p className="muted">{p.location} • {p.size}</p>
          <p><strong>{p.price}</strong></p>
          <p>Bedrooms: {p.beds} • Bathrooms: {p.baths}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus ac velit ornare lobortis.</p>
        </div>
        <aside>
          <div className="card">
            <div className="card-body">
              <p className="muted">Interested in this property?</p>
              <button className="btn primary">Contact Agent</button>
              <button className="btn ghost">Schedule Visit</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
