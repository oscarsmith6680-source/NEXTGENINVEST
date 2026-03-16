import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Address is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Phone Number must be at least 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1500);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Nextgeninvest | Global Investment Firm</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-8 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>CONNECT</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">How Can We <span className="text-gold">Support You?</span></h1>
                <p className="lead text-white-50 fs-4">Whether you are an institutional investor or a prospective partner, our global team is ready to assist with your alternative asset needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section - Sidebar matches Homepage Sidebar layout */}
        <section id="contact" className="bg-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0 fade-up">
                <h2 className="section-title">Get In Touch</h2>
                <p className="lead mb-5">Connect with our team to discuss alternative asset investment opportunities.</p>
                
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center gap-4">
                    <div className="contact-icon-box">
                      <i className="bi bi-geo-alt text-gold fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold">Headquarters</h5>
                      <p className="text-muted small mb-0">Minneapolis, Minnesota, US</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="contact-icon-box">
                      <i className="bi bi-envelope text-gold fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold">Email</h5>
                      <p className="text-muted small mb-0">info@nextgeninvest.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="contact-icon-box">
                      <i className="bi bi-telephone text-gold fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold">Phone</h5>
                      <p className="text-muted small mb-0">+1 (612) 851-3100</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-top">
                  <p className="text-uppercase small fw-bold" style={{ letterSpacing: '2px', color: 'var(--primary-color)' }}>OFFICE LOCATIONS</p>
                  <div className="row g-3">
                    <div className="col-4 text-muted small">Minneapolis</div>
                    <div className="col-4 text-muted small">London</div>
                    <div className="col-4 text-muted small">Singapore</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 fade-up">
                <div className="p-4 p-md-5 border" style={{ backgroundColor: 'var(--bg-cream)' }}>
                  <h3 className="mb-4 fw-bold">Send an Inquiry</h3>
                  {submitStatus === 'success' && (
                    <div className="alert alert-success border-0 rounded-0 mb-4 py-3" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }}>
                      <i className="bi bi-check-circle-fill me-2"></i> Inquiry submitted successfully.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        className={`form-control luxury-input ${errors.fullName ? 'is-invalid border-danger' : ''}`} 
                        id="name" 
                        placeholder="John Doe" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                      {errors.fullName && <div className="text-danger small mt-1 fs-6">{errors.fullName}</div>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        className={`form-control luxury-input ${errors.email ? 'is-invalid border-danger' : ''}`} 
                        id="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <div className="text-danger small mt-1 fs-6">{errors.email}</div>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Phone Number</label>
                      <input 
                        type="text" 
                        name="phone"
                        className={`form-control luxury-input ${errors.phone ? 'is-invalid border-danger' : ''}`} 
                        id="phone" 
                        placeholder="Only numbers allowed" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <div className="text-danger small mt-1 fs-6">{errors.phone}</div>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Your Message</label>
                      <textarea 
                        name="message"
                        className={`form-control luxury-input ${errors.message ? 'is-invalid border-danger' : ''}`} 
                        id="message" 
                        rows="5" 
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                      {errors.message && <div className="text-danger small mt-1 fs-6">{errors.message}</div>}
                    </div>
                    <button 
                      type="submit" 
                      className={`btn btn-premium w-100 py-3 ${isSubmitting ? 'disabled' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          SENDING...
                        </>
                      ) : 'SUBMIT INQUIRY'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .ls-1 { letter-spacing: 1px; }
        
        .contact-icon-box {
          min-width: 50px;
          height: 50px;
          background: #fff;
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .luxury-input {
          border-radius: 0;
          padding: 15px;
          border: 1px solid #e1e1e1;
          font-family: 'Raleway', sans-serif;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .luxury-input:focus {
          border-color: var(--accent-gold);
          box-shadow: none;
          background-color: #fff;
        }
      `}</style>
    </>
  );
}
