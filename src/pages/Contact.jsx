import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { countries } from '../data/countries'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'
import emailjs from "@emailjs/browser";

export default function Contact(){

  useEffect(() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: 'India',
    countryCode: '+91',
    interest: 'Real Estate Buy & Sell',
    message: '',
    email: ""
  });

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(c => c.name === e.target.value)
    setFormData({
      ...formData,
      country: e.target.value,
      countryCode: selectedCountry?.code || '+91'
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    emailjs 
      .sendForm(
        "service_cbm2wf4",
        "template_oqaoroe",
        e.target,
        "2cvO2pGkdIhdxymd0"
      ).then(() => {
      alert("Message sent successfully ✅");
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
    setFormData({
      name: '',
      phone: '',
      country: 'India',
      countryCode: '+91',
      interest: 'Real Estate Buy & Sell',
      message: '',
      email: ""
    });
  };


  const openEmail = () => {
    const email = "kamal@prestige-properties.co";
    const subject = "Real Estate Inquiry";
    const body = "Hello,\n\nI am interested in your real estate services.";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailUrl, "_blank");
    }
  };

  return (
    <section className="page contact" id='contact'>
      {/* Hero Section */}
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>BOOK YOUR CONSULTATIONS</h1>
        <p>Get in touch with our real estate experts. Fill out the form and we'll contact you within 24 hours.</p>
      </motion.div>

      <ScrollReveal>
        <div className="contact-container">
          {/* Consultation Form */}
          <motion.div 
            className="consultation-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card">
              <h2>Schedule Your Consultation</h2>
              <p className="form-subtitle">Tell us about your real estate goals and interests</p>
              
              <form onSubmit={handleSubmit} className="consultation-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Full Name <span style={{color: "red"}}>*</span></label>
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
                    <label htmlFor="countryCode">Country Code <span style={{color: "red"}}>*</span></label>
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
                    <label htmlFor="phone">Phone Number <span style={{color: "red"}}>*</span></label>
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

                  <div className="form-group">
                    <label htmlFor="phone">Email <span style={{color: "red"}}>*</span></label>
                    <div className="phone-input-wrapper">
                      {/* <span className="country-code">{formData.countryCode}</span> */}
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@gmail.com"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                {/* </div> */}

                {/* Interest Dropdown */}
                <div className="form-group">
                  <label htmlFor="interest">Interest</label>
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

          {/* Contact Info */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card">
              <h3>Why Book a Consultation?</h3>
              <ul className="benefits-list">
                <li>✓ Expert personalized guidance</li>
                <li>✓ Custom property recommendations</li>
                <li>✓ Tax & investment advice</li>
                <li>✓ Flexible scheduling</li>
                <li>✓ No obligation, completely free</li>
              </ul>
            </div>

            <div className="info-card office-info">
              <h3>Prestige Properties Office</h3>
              <div className="office-details">
                <div className="detail-item">
                  <span className="detail-label">📍 Address:</span>
                  <p>D 208B, Golden I, Tech Zone IV<br/>Greater Noida West, Uttar Pradesh-201318</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📧 Email:</span>
                  <p onClick={openEmail} style={{color: "yellow", textDecoration: "underline", cursor: "pointer"}}>kamal@prestige-properties.co</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">📞 Phone:</span>
                  <p>
                    <a
                      href="tel:+919911331082"
                      style={{color: "yellow", textDecoration: "underline", cursor: "pointer"}}
                    >
                      +91 9911331082
                    </a>
                  </p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">🕐 Hours:</span>
                  <p>Mon - Fri: 10 AM - 6 PM<br/>Sat: 10 AM - 4 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}
