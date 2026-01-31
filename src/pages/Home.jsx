import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import properties from '../data/properties'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Home() {
  return (
    <section className="page home">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Premium Real Estate Investment Opportunities</h1>
          <p>Discover premium commercial and residential properties across India. Build wealth through smart, curated real estate investments with transparent returns and expert guidance.</p>
          <div className="hero-ctas">
            <button className="btn ghost-outline">Browse Properties</button>
            <button className="btn primary">Get Started</button>
          </div>
        </div>
        <div className="hero-image img-placeholder" aria-hidden="true">
          <svg viewBox="0 0 400 300" className="placeholder-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#e0e7ff',stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#dcfce7',stopOpacity:1}} />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#grad1)"/>
            <rect x="50" y="80" width="120" height="140" fill="#cbd5e1" rx="8"/>
            <rect x="180" y="60" width="140" height="160" fill="#cbd5e1" rx="8"/>
            <rect x="330" y="100" width="40" height="120" fill="#22c55e" rx="4" opacity="0.8"/>
            <circle cx="70" cy="250" r="12" fill="#22c55e"/>
            <circle cx="210" cy="270" r="10" fill="#22c55e"/>
            <circle cx="340" cy="260" r="8" fill="#22c55e"/>
          </svg>
        </div>
      </motion.section>

      {/* Stats Section */}
      <ScrollReveal>
        <motion.section 
          className="stats-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: '$500M+', label: 'TOTAL TRANSACTION VALUE' },
            { value: '13', label: 'PREMIUM PROPERTIES' },
            { value: '10K+', label: 'REGISTERED INVESTORS' },
            { value: '8-16%', label: 'EXPECTED ANNUAL ROI' },
          ].map((stat, i) => (
            <motion.div key={i} className="stat-item" variants={itemVariants}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>
      </ScrollReveal>

      {/* Investment Card Section */}
      <ScrollReveal delay={0.1}>
        <section className="investment-card-section">
          <div className="investment-left">
            <h2>Why Choose Prestige Properties?</h2>
            <p>We specialize in curating premium real estate investments across commercial and residential sectors. Our properties are strategically located in high-growth regions with proven appreciation potential.</p>
            <button className="btn primary">Explore Properties</button>
          </div>
          <div className="investment-right">
            <div className="card property-card-featured">
              <div className="card-label">Featured</div>
              <div className="img-placeholder card-image">
                <svg viewBox="0 0 300 240" className="placeholder-svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#e0e7ff',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#dcfce7',stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="240" fill="url(#grad2)"/>
                  <rect x="20" y="20" width="260" height="180" fill="#cbd5e1" rx="4"/>
                  <circle cx="150" cy="110" r="40" fill="#22c55e" opacity="0.2"/>
                </svg>
              </div>
              <div className="card-body">
                <p className="card-title">Premium Commercial Portfolio</p>
                <p className="muted">Sector 72, Noida</p>
                <p className="trust-stat">
                  <strong style={{color: '#22c55e'}}>15%+ ROI</strong>
                  <span className="muted small">AVERAGE RETURNS</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal delay={0.2}>
        <section className="features-section">
          <h2>Investment Advantages</h2>
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '💰', title: 'High Returns', desc: 'Earn 8-16% annual ROI from carefully selected premium properties.' },
              { icon: '🏢', title: 'Diverse Portfolio', desc: 'Choose from commercial or residential investments across India.' },
              { icon: '📊', title: 'Transparent Analytics', desc: 'Track your investments with detailed reports and market insights.' },
              { icon: '👨‍💼', title: 'Expert Guidance', desc: 'Benefit from decades of real estate expertise and market knowledge.' },
              { icon: '📈', title: 'Value Appreciation', desc: 'Properties selected for long-term growth in high-potential zones.' },
              { icon: '✅', title: 'Hassle-Free', desc: 'Simple investment process with complete support and transparency.' },
            ].map((feature, i) => (
              <motion.div key={i} className="feature-item" variants={itemVariants}>
                <div className="feature-icon feature-emoji">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Top Properties Section */}
      <ScrollReveal delay={0.2}>
        <section className="top-properties-section">
          <h2>Featured Commercial Properties</h2>
          <p>Prime commercial investments in high-growth business districts.</p>
          <motion.div 
            className="cards-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {properties.filter(p => p.type === 'commercial').slice(0, 3).map((p) => (
              <motion.article key={p.id} className="card" variants={itemVariants}>
                <div className="img-placeholder card-image">
                  <svg viewBox="0 0 300 200" className="placeholder-svg" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id={`propGrad${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#fef3c7',stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#f0fdf4',stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="200" fill={`url(#propGrad${p.id})`}/>
                    <rect x="20" y="20" width="80" height="140" fill="#cbd5e1" rx="2"/>
                    <rect x="110" y="10" width="90" height="160" fill="#cbd5e1" rx="2"/>
                    <rect x="210" y="40" width="70" height="120" fill="#cbd5e1" rx="2"/>
                    <circle cx="150" cy="170" r="5" fill="#22c55e"/>
                  </svg>
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p className="muted">{p.location}</p>
                  <div className="property-price-row">
                    <span className="price">{p.price}</span>
                    <span className="roi">{p.roi}</span>
                  </div>
                  <div className="card-actions">
                    <Link to={`/properties/${p.id}`} className="btn primary small">View</Link>
                    <button className="btn ghost small">Enquire</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Residential Properties Section */}
      <ScrollReveal delay={0.3}>
        <section className="top-properties-section">
          <h2>Featured Residential Properties</h2>
          <p>Luxury residences in premium locations with strong appreciation potential.</p>
          <motion.div 
            className="cards-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {properties.filter(p => p.type === 'residential').slice(0, 3).map((p) => (
              <motion.article key={p.id} className="card" variants={itemVariants}>
                <div className="img-placeholder card-image">
                  <svg viewBox="0 0 300 200" className="placeholder-svg" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id={`propGrad${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#e0e7ff',stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:'#dcfce7',stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="200" fill={`url(#propGrad${p.id})`}/>
                    <polygon points="150,30 250,120 250,180 50,180 50,120" fill="#cbd5e1"/>
                    <rect x="80" y="120" width="50" height="60" fill="#94a3b8"/>
                    <rect x="170" y="120" width="50" height="60" fill="#94a3b8"/>
                    <circle cx="105" cy="135" r="4" fill="#64748b"/>
                    <circle cx="125" cy="135" r="4" fill="#64748b"/>
                  </svg>
                </div>
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p className="muted">{p.location}</p>
                  <div className="property-price-row">
                    <span className="price">{p.price}</span>
                    <span className="roi">{p.roi}</span>
                  </div>
                  <div className="card-actions">
                    <Link to={`/properties/${p.id}`} className="btn primary small">View</Link>
                    <button className="btn ghost small">Enquire</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Steps Section */}
      <ScrollReveal delay={0.2}>
        <section className="services-showcase">
          <h2>Our Services</h2>
          <p>Complete real estate and lifestyle solutions</p>
          <motion.div 
            className="services-showcase-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div key={service.id} className="service-showcase-item" variants={itemVariants}>
                <div className="service-showcase-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">Learn More →</Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Steps Section */}
      <ScrollReveal delay={0.3}>
        <section className="steps-section">
          <h2>Start Investing in Three Simple Steps</h2>
          <p>Begin your investment journey with Prestige Properties today.</p>
          <motion.div 
            className="steps-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: '1', title: 'Browse Properties', desc: 'Explore our curated selection of premium commercial and residential properties.' },
              { num: '2', title: 'Invest Securely', desc: 'Complete your investment with transparent pricing and legal documentation.' },
              { num: '3', title: 'Track & Earn', desc: 'Monitor returns and receive regular updates on property performance and growth.' },
            ].map((step, i) => (
              <motion.div key={i} className="step-item" variants={itemVariants}>
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Trust Section */}
      <ScrollReveal delay={0.3}>
        <section className="trust-section">
          <h2>Prestige Properties - Your Trusted Partner</h2>
          <motion.div 
            className="trust-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { stat: '13', label: 'Premium Properties' },
              { stat: '8-16%', label: 'Average Annual ROI' },
              { stat: '10K+', label: 'Active Investors' },
            ].map((item, i) => (
              <motion.div key={i} className="trust-stat-large" variants={itemVariants}>
                <p>{item.stat}</p>
                <p className="small">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </ScrollReveal>
    </section>
  )
}
