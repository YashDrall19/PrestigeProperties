import { useEffect } from "react";

export default function Vastu(){

  useEffect(() => {
    const section = document.getElementById("vastu");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="page vastu" id="vastu">
      <h1>VASTU CONSULTATION</h1>
      <div className="section">
        <div className="img-placeholder large" aria-hidden="true"></div>
        <div>
          <p>Our experienced Vastu consultants help align homes and spaces for harmony.</p>
          <ul>
            <li>Site visit & report</li>
            <li>Floor plan guidance</li>
            <li>Follow-up implementation suggestions</li>
          </ul>
          <button className="btn primary">Book a Consultation</button>
        </div>
      </div>
    </section>
  )
}
