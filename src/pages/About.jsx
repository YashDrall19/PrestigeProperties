import { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About(){
  useEffect(() => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="page about" id="about">
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Prestige Properties</h1>
        <p className="hero-subtitle">Transforming Real Estate Dreams Into Reality</p>
        <div className="hero-divider"></div>
      </motion.div>

      {/* Mission & Vision Section */}
      <ScrollReveal>
        <motion.section 
          className="mission-vision-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mission-card" variants={itemVariants}>
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower investors and homebuyers with transparent, expert-guided real estate solutions that deliver exceptional value and build lasting wealth through curated premium properties across India's most promising markets.</p>
          </motion.div>
          
          <motion.div className="mission-card" variants={itemVariants}>
            <div className="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To become India's most trusted real estate partner, recognized for integrity, expertise, and delivering transformational investment opportunities that create generational wealth and secure futures for our clients.</p>
          </motion.div>

          <motion.div className="mission-card" variants={itemVariants}>
            <div className="mission-icon">⭐</div>
            <h3>Our Promise</h3>
            <p>100% transparency in every transaction. No hidden charges. Expert guidance at every step. Your success is our success, and we're committed to exceeding your expectations in every interaction.</p>
          </motion.div>
        </motion.section>
      </ScrollReveal>

      {/* Why Choose Us Section */}
      <ScrollReveal>
        <section className="why-choose-us">
          <h2>Why Choose Prestige Properties?</h2>
          <p className="section-subtitle">We don't just sell properties; we build legacies</p>
          
          <motion.div 
            className="reasons-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="reason-card" variants={itemVariants}>
              <div className="reason-number">01</div>
              <h4>Curated Portfolio</h4>
              <p>Access to 13+ premium properties across India's most promising commercial and residential zones, handpicked by our expert team.</p>
            </motion.div>

            <motion.div className="reason-card" variants={itemVariants}>
              <div className="reason-number">02</div>
              <h4>Expert Guidance</h4>
              <p>Benefit from our team's 15+ years of combined experience in real estate investment, market analysis, and property optimization.</p>
            </motion.div>

            <motion.div className="reason-card" variants={itemVariants}>
              <div className="reason-number">03</div>
              <h4>Holistic Services</h4>
              <p>From property selection to Vastu consultation, interior design, and loan assistance—we cover every aspect of your real estate journey.</p>
            </motion.div>

            <motion.div className="reason-card" variants={itemVariants}>
              <div className="reason-number">04</div>
              <h4>ROI Focused</h4>
              <p>Properties selected with expected 4-8% annual returns. We focus on investments that generate wealth, not just expenses.</p>
            </motion.div>

            <motion.div className="reason-card" variants={itemVariants}>
              <div className="reason-number">05</div>
              <h4>Full Transparency</h4>
              <p>Clear communication at every stage. No hidden costs. Complete documentation and legal support from start to finish.</p>
            </motion.div>

            <motion.div className="reason-card" variants={itemVariants}>
              <div className="reason-number">06</div>
              <h4>24/7 Support</h4>
              <p>Dedicated support team available round the clock. Your questions matter, and we're here to help whenever you need us.</p>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Our Expertise Section */}
      <ScrollReveal>
        <section className="expertise-section">
          <h2>Our Core Expertise</h2>
          
          <motion.div 
            className="expertise-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="expertise-item" variants={itemVariants}>
              <div className="expertise-icon">🏢</div>
              <h4>Commercial Real Estate</h4>
              <ul>
                <li>Office spaces with ready-to-use infrastructure</li>
                <li>Co-working solutions for entrepreneurs</li>
                <li>Retail and business development zones</li>
              </ul>
            </motion.div>

            <motion.div className="expertise-item" variants={itemVariants}>
              <div className="expertise-icon">🏠</div>
              <h4>Residential Properties</h4>
              <ul>
                <li>Premium residential apartments</li>
                <li>Luxury villas and independent homes</li>
                <li>Family-focused developments</li>
              </ul>
            </motion.div>

            <motion.div className="expertise-item" variants={itemVariants}>
              <div className="expertise-icon">📊</div>
              <h4>Investment Strategy</h4>
              <ul>
                <li>Market analysis and trend forecasting</li>
                <li>Portfolio diversification planning</li>
                <li>Long-term wealth accumulation strategies</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Credentials Section */}
      {/* <ScrollReveal>
        <section className="credentials-section">
          <h2>Trusted By Hundreds of Investors</h2>
          
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="stat-box" variants={itemVariants}>
              <div className="stat-number">500+ Cr</div>
              <div className="stat-label">Transaction Value</div>
            </motion.div>

            <motion.div className="stat-box" variants={itemVariants}>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Investors</div>
            </motion.div>

            <motion.div className="stat-box" variants={itemVariants}>
              <div className="stat-number">13</div>
              <div className="stat-label">Premium Properties</div>
            </motion.div>

            <motion.div className="stat-box" variants={itemVariants}>
              <div className="stat-number">8-16%</div>
              <div className="stat-label">Average Annual ROI</div>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal> */}

      {/* Values Section */}
      <ScrollReveal>
        <section className="values-section">
          <h2>Our Core Values</h2>
          
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="value-card" variants={itemVariants}>
              <h4>💎 Integrity</h4>
              <p>We operate with complete honesty and transparency. Your trust is our most valuable asset, and we earn it every single day.</p>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <h4>🚀 Excellence</h4>
              <p>We never settle for mediocre. Every property, every consultation, every service is delivered with exceptional quality and attention to detail.</p>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <h4>🤝 Client Focus</h4>
              <p>Your success is our priority. We listen, understand, and tailor solutions that align perfectly with your goals and aspirations.</p>
            </motion.div>

            <motion.div className="value-card" variants={itemVariants}>
              <h4>🌱 Growth Mindset</h4>
              <p>We continuously evolve, innovate, and adapt to market trends, ensuring our clients always have access to the best opportunities.</p>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <motion.section 
          className="about-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Start Your Real Estate Journey?</h2>
          <p>Join thousands of successful investors who've transformed their wealth through smart real estate decisions.</p>
          <a href="/contact" className="btn primary btn-large">Book Your Consultation</a>
        </motion.section>
      </ScrollReveal>
    </section>
  )
}
