import { useParams, Link } from 'react-router-dom'
import properties from '../data/properties'
import { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaLocationDot } from 'react-icons/fa6';

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from 'leaflet';
import redMarker from 'leaflet-color-markers/img/marker-icon-red.png';
import greenMarker from 'leaflet-color-markers/img/marker-icon-green.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';
import { IoNavigate } from 'react-icons/io5';

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
    pauseOnHover: false,
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
    <div className="page property-detail" id="property">
      <h1 style={{textTransform: "uppercase"}}>{p.title}</h1>

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

        <p className="muted"><FaLocationDot color='red' /> {p.location}</p>
        <div>
          {p.description}
        </div>
      </div>

      <div className='map-container' onClick={() => console.log('first')}>
        <MapContainer
          center={p.coordinates || [0,0]}
          zoom={14}
          style={{ width: "100%", height: "100%" }} // fill parent div
          scrollWheelZoom={true}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={p.coordinates || [0,0]} icon={redIcon}>
            <Popup><h3>{p.title}</h3></Popup>
          </Marker>
          <ResizeMap /> {/* fixes rendering issues on resize */}
        </MapContainer>
      </div>

      <div className="google-link">
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps <IoNavigate /> 
        </a>
      </div>


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
      

    </div>
  )
}

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

const redIcon = icon({
  iconUrl: redMarker,
  shadowUrl: shadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
