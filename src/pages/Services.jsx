import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'
import { useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Services(){

  useEffect(() => {
    const section = document.getElementById("section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="page services" id='section'>
      {/* Hero Section */}
      <motion.div 
        className="services-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>OUR SERVICES</h1>
        <p>Comprehensive real estate and lifestyle solutions tailored to your needs</p>
      </motion.div>

      {/* Services Grid */}
      <ScrollReveal delay={0.1}>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="service-features">
                {service.details.slice(0, 3).map((detail, idx) => (
                  <li key={idx}>✔ {detail}</li>
                ))}
              </ul>
              {/* <button className="btn primary small">Learn More</button> */}
            </motion.div>
          ))}
        </motion.div>
      </ScrollReveal>

      {/* Detailed Services Section */}
      <ScrollReveal delay={0.2}>
        <div className="services-details">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              className={`service-detail ${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="detail-icon">
                <img src={service.image} alt="" />
              </div>
              <div className="detail-content">
                <h2>{service.title}</h2>
                <p className="detail-desc">{service.fullDescription}</p>
                <div className="detail-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i}>• {detail}</li>
                    ))}
                  </ul>
                </div>
                {/* <button className="btn primary">Get Started</button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={0.3}>
        <motion.section 
          className="services-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Get Started?</h2>
          <p>Contact our team to discuss your real estate and lifestyle needs</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn primary">Book Consultation</Link>
          </div>
        </motion.section>
      </ScrollReveal>
    </section>
  )
}
