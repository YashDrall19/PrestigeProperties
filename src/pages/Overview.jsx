import { useEffect } from "react";

export default function Overview(){
  useEffect(() => {
    const section = document.getElementById("overview");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="page overview" id="overview">
      <h1>OVERVIEW</h1>
      <div className="section two-cols">
        <div>
          <p>Our agency connects buyers and sellers with transparent listings and trusted agents.</p>
          <ul>
            <li>Verified listings</li>
            <li>Easy scheduling for viewings</li>
            <li>Expert Vastu consultations available</li>
          </ul>
        </div>
        <div className="img-placeholder large" aria-hidden="true"></div>
      </div>
    </section>
  )
}
