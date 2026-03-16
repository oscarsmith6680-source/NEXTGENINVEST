import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function DoNotSellPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    region: '',
    agreed: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
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
    if (!formData.region.trim()) newErrors.region = 'State/Region is required';
    if (!formData.agreed) newErrors.agreed = 'You must agree to the request';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', region: '', agreed: false });
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1500);
    }
  };

  return (
    <>
      <Head>
        <title>Do Not Sell or Share My Personal Information | Nextgeninvest</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Matching About UI */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-10 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>PRIVACY RIGHTS</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Do Not Sell or Share <br/><span className="text-gold">My Personal Information</span></h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 fade-up active">
                <div className="policy-content py-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Your Privacy Rights</h2>
                  <p className="mb-4 text-muted">Depending on where you live, you may have the right to opt-out of the "sale" or "sharing" of your personal information. Nextgeninvest, L.P. ("Nextgeninvest") does not sell your personal information for monetary compensation. However, under some laws, the term "sell" or "share" may include certain activities where personal information is disclosed to third parties for targeted advertising or other purposes.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Request to Opt-Out</h2>
                  <p className="mb-4 text-muted">If you would like to exercise your right to opt-out of any such activities, please complete the form below or contact us at the email provided. We will process your request in accordance with applicable laws.</p>
                  
                  <div className="opt-out-form p-4 p-md-5 border bg-light mt-5">
                    <h4 className="fw-bold mb-4">Opt-Out Request Form</h4>
                    
                    {submitStatus === 'success' && (
                      <div className="alert alert-success border-0 rounded-0 mb-4 py-3" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }}>
                        <i className="bi bi-check-circle-fill me-2"></i> Your opt-out request has been submitted successfully.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label small fw-bold text-uppercase ls-1">Full Name</label>
                          <input 
                            type="text" 
                            name="fullName"
                            className={`form-control ${errors.fullName ? 'is-invalid border-danger' : ''}`} 
                            placeholder="Enter your name" 
                            value={formData.fullName}
                            onChange={handleInputChange}
                          />
                          {errors.fullName && <div className="text-danger smallest mt-1">{errors.fullName}</div>}
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label small fw-bold text-uppercase ls-1">Email Address</label>
                          <input 
                            type="email" 
                            name="email"
                            className={`form-control ${errors.email ? 'is-invalid border-danger' : ''}`} 
                            placeholder="email@example.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && <div className="text-danger smallest mt-1">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label small fw-bold text-uppercase ls-1">State/Region of Residence</label>
                        <input 
                          type="text" 
                          name="region"
                          className={`form-control ${errors.region ? 'is-invalid border-danger' : ''}`} 
                          placeholder="e.g. California, US" 
                          value={formData.region}
                          onChange={handleInputChange}
                        />
                        {errors.region && <div className="text-danger smallest mt-1">{errors.region}</div>}
                      </div>
                      <div className="mb-4">
                        <div className="d-flex gap-3 align-items-start">
                          <input 
                            type="checkbox" 
                            name="agreed"
                            className={`form-check-input mt-1 ${errors.agreed ? 'is-invalid' : ''}`} 
                            id="opt-out-check" 
                            checked={formData.agreed}
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label small text-muted" htmlFor="opt-out-check">
                            I request that Nextgeninvest does not sell or share my personal information for cross-context behavioral advertising.
                          </label>
                        </div>
                        {errors.agreed && <div className="text-danger smallest mt-1">{errors.agreed}</div>}
                      </div>
                      <button 
                        type="submit" 
                        className={`btn btn-premium w-100 py-3 mt-2 ${isSubmitting ? 'disabled' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            SUBMITTING...
                          </>
                        ) : 'SUBMIT REQUEST'}
                      </button>
                    </form>
                  </div>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Contact Information</h2>
                  <p className="mb-4 text-muted">If you have any questions or concerns regarding our privacy practices or your rights, please contact us at:</p>
                  <p className="text-muted fw-bold mb-1">Nextgeninvest, L.P.</p>
                  <p className="text-muted mb-1">Attn: Legal & Compliance</p>
                  <p className="text-muted mb-3">Email: <a href="mailto:info@nextgeninvest.com" className="text-gold text-decoration-none">info@nextgeninvest.com</a></p>

                  <div className="mt-5 pt-4 border-top">
                    <p className="small text-muted mb-0">Last Updated: March 11, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <style jsx>{`
        .ls-1 { letter-spacing: 1px; }
      `}</style>
    </>
  );
}
