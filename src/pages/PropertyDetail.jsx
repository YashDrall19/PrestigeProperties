import { useParams, Link } from 'react-router-dom'
import properties from '../data/properties'
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PropertyDetail() {
  const { id } = useParams()
  const p = properties.find(x => x.id === id)

  const [slidesToShow, setSlidesToShow] = useState(1)

  if (!p) return (
    <section className="page">
      <h2>Property not found</h2>
      <Link to="/properties" className="btn">Back</Link>
    </section>
  )

  useEffect(() => {
    const section = document.getElementById("property");
    section?.scrollIntoView({ behavior: "smooth" });
  }, [])

  // 🔍 Detect image orientation
  useEffect(() => {
    if (!p.slides || p.slides.length === 0) return;

    const img = new Image();
    img.src = p.slides[0]; // check first image (usually enough)

    img.onload = () => {
      if (img.naturalWidth > img.naturalHeight) {
        // Landscape → show 1
        setSlidesToShow(1);
      } else {
        // Portrait → show 2
        setSlidesToShow(2);
      }
    };
  }, [p.slides]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 📱 always 1 on mobile
        },
      },
    ],
  };

  return (
    <section className="page property-detail" id="property">
      <h1>{p.title}</h1>

      <div className="section two-cols">
        <div style={{padding: "0px 20px"}}>
          <Slider {...settings}>
            {p?.slides?.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    maxHeight: "60vh", // max 60% of viewport height
                    height: "auto",
                    objectFit: "contain",
                    padding: "0 20px",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </Slider>

          <p className="muted">{p.location} • {p.size}</p>
          <p><strong>{p.price}</strong></p>
          <p>Bedrooms: {p.beds} • Bathrooms: {p.baths}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <aside>
          <div className="card">
            <div className="card-body">
              <p className="muted">Interested in this property?</p>
              <button className="btn ghost">
                <Link to="/contact" className="service-link">
                  Schedule Visit
                </Link>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
