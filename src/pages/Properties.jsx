import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import properties from '../data/properties'
import QuickViewModal from '../components/QuickViewModal'

export default function Properties(){
  const [quick, setQuick] = useState({open:false, prop:null})

  useEffect(() => {
    const section = document.getElementById("property");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="page properties" id='property'>
      <h1>OUR LISTINGS</h1>
      {/* <div className="filter-bar">
        <input placeholder="Search by city, locality or id" />
        <select>
          <option>Any</option>
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <button className="btn primary">Search</button>
      </div> */}

      <div className="cards-grid">
        {properties.map((p)=> (
          <article className="card" key={p.id}>
            <div className="img-placeholder card-image">
              <img src={p.img} alt="N/A" />
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.location}</p>
              <div className="card-actions">
                <Link to={`/properties/${p.id}`} className="btn primary small">View</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <QuickViewModal open={quick.open} onClose={()=>setQuick({open:false, prop:null})} property={quick.prop} />
    </section>
  )
}
