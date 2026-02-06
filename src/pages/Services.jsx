import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'
import { useEffect, useState } from 'react'
import { countries } from '../data/countries'

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

  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({});
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(c => c.name === e.target.value)
    setFormData({
      ...formData,
      country: e.target.value,
      countryCode: selectedCountry?.code || '+91'
    })
  };

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

      <ScrollReveal>
        <div className="loan-container">
          {/* Consultation Form */}
          <motion.div 
            className="loan-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card">
              <h2>Calculate Loan Amount</h2>
              <p className="form-subtitle">Calculate your loan eligibility and monthly payments</p>
              
              <form onSubmit={handleSubmit} className="loan-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>

                {/* Phone and Country Code */}
                {/* <div className="form-group-row"> */}
                  <div className="form-group">
                    <label htmlFor="countryCode">Country Code *</label>
                    <select 
                      id="countryCode"
                      name="country"
                      value={formData.country}
                      onChange={handleCountryChange}
                      className="form-select"
                    >
                      {countries.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="phone-input-wrapper">
                      {/* <span className="country-code">{formData.countryCode}</span> */}
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                {/* </div> */}

                {/* Interest Dropdown */}
                <div className="form-group">
                  <label htmlFor="interest">Interest *</label>
                  <select 
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Additional Details (Optional)</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about what you're looking for..."
                    rows="4"
                    className="form-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn primary form-submit">
                  Book Consultation
                </button>

                <p className="form-note">We respect your privacy. Your information will not be shared.</p>
              </form>
            </div>
          </motion.div>
        </div>
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
