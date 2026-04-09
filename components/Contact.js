import { useState } from 'react';

const Contact = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setSubmitStatus('success');
          setFormData({ fullName: '', email: '', phone: '', message: '' });
        } else {
          setSubmitStatus('error');
          alert(data.error || 'Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitStatus('error');
        alert('Failed to send message. Please check your connection.');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 fade-up">
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead mb-5">Connect with our team to discuss alternative asset investment opportunities.</p>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-4">
                <i className="bi bi-geo-alt text-gold fs-4"></i>
                <div>
                  <h5 className="mb-0">Headquarters</h5>
                  <p className="text-muted small mb-0">Minneapolis, Minnesota, US</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                <i className="bi bi-envelope text-gold fs-4"></i>
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="text-muted small mb-0">info@nextgeninvest.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4">
                <i className="bi bi-telephone text-gold fs-4"></i>
                <div>
                  <h5 className="mb-0">Phone</h5>
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
                    className={`form-control ${errors.fullName ? 'is-invalid border-danger' : ''}`} 
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
                    className={`form-control ${errors.email ? 'is-invalid border-danger' : ''}`} 
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
                    className={`form-control ${errors.phone ? 'is-invalid border-danger' : ''}`} 
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
                    className={`form-control ${errors.message ? 'is-invalid border-danger' : ''}`} 
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
                  ) : 'SEND INQUIRY'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
