import { useEffect } from "react";

export default function About(){
  useEffect(() => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="page about" id="about">
      <h1>ABOUT US</h1>
      <div className="section">
        <p>We are a full-service real estate agency focused on trust, transparency and great experiences.</p>
        <div className="img-placeholder large" aria-hidden="true"></div>
      </div>
    </section>
  )
}
