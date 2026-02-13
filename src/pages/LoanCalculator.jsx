import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { useEffect, useState } from 'react'

export default function LoanCalculator(){

  useEffect(() => {
    const section = document.getElementById("loan");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [formData, setFormData] = useState({
    amount: 1000000,
    roi: 6.5,
    tenure: 5
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  return (
    <section className="page services" id='loan'>
      {/* Hero Section */}
      <motion.div 
        className="services-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Calculate Loan Amount</h1>
        <p className="form-subtitle">Calculate your loan eligibility and monthly payments</p>
      </motion.div>

      <ScrollReveal>
        <div className="loan-container" style={{marginBottom: "80px"}} id='loan-container'>
          {/* Consultation Form */}
          <motion.div 
            className="loan-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card">
              
              
              <div className="loan-form">
                {/* Name Field */}
                <div className="form-group">
                  <label>Loan Amount</label>
                  <input 
                    type="number" 
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="100000"
                    required
                    className="form-input"
                    min={100000}
                    max={10000000}
                    step={10000}
                  />
                  <input
                    type="range"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    min={100000}
                    max={10000000}
                    step={10000}
                    className="range-slider"
                  />
                </div>
                <div className="form-group">
                  <label>Rate of Interest (p.a.)</label>
                  <input 
                    type="number" 
                    id="roi"
                    name="roi"
                    value={formData.roi}
                    onChange={handleInputChange}
                    placeholder="6.5"
                    required
                    className="form-input"
                    min={0}
                  />
                  <input
                    type="range"
                    name="roi"
                    value={formData.roi}
                    onChange={handleInputChange}
                    min={1}
                    max={30}
                    step={0.1}
                    className="range-slider"
                  />
                </div>

                <div className="form-group">
                  <label>Loan Tenure (years)</label>
                  <input 
                    type="number" 
                    id="tenure"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    placeholder="5"
                    required
                    className="form-input"
                    min={0}
                  />
                  <input
                    type="range"
                    name="tenure"
                    value={formData.tenure}
                    onChange={handleInputChange}
                    min={1}
                    max={30}
                    step={1}
                    className="range-slider"
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4>Principal Amount:</h4>
                    <p>
                      ₹ {(Number(formData.amount) || 0).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4>Monthly EMI:</h4>
                    <p>
                      ₹ {
                        (Number(
                          (
                            (formData.amount *
                              (formData.roi / (12 * 100)) *
                              Math.pow(
                                1 + formData.roi / (12 * 100),
                                formData.tenure * 12
                              )) /
                            (Math.pow(
                              1 + formData.roi / (12 * 100),
                              formData.tenure * 12
                            ) - 1)
                          )
                        ) || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        }) || 0
                      }
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4>Total Interest:</h4>
                    <p>
                      ₹ {
                        (Number(
                          (
                            (
                              (
                                (formData.amount *
                                  (formData.roi / (12 * 100)) *
                                  Math.pow(
                                    1 + formData.roi / (12 * 100),
                                    formData.tenure * 12
                                  )) /
                                (Math.pow(
                                  1 + formData.roi / (12 * 100),
                                  formData.tenure * 12
                                ) - 1)
                              ) *
                              (formData.tenure * 12)
                            ) - formData.amount
                          )
                        ) || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })
                      }
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h4>Total Amount:</h4>
                    <p>
                      ₹ {
                        (Number(
                          (
                            (
                              (formData.amount *
                                (formData.roi / (12 * 100)) *
                                Math.pow(
                                  1 + formData.roi / (12 * 100),
                                  formData.tenure * 12
                                )) /
                              (Math.pow(
                                1 + formData.roi / (12 * 100),
                                formData.tenure * 12
                              ) - 1)
                            ) *
                            (formData.tenure * 12)
                          )
                        ) || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })
                      }
                    </p>
                  </div>
                </div>



              </div>
            </div>
          </motion.div>
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
