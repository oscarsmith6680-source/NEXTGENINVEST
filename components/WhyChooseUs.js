const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-primary-green text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 fade-up">
            <h2 className="section-title text-white">Why Investors Choose Us</h2>
            <div className="d-flex flex-column gap-5 mt-5">
              <div className="d-flex align-items-start gap-4">
                <div 
                  className="d-flex align-items-center justify-content-center" 
                  style={{ minWidth: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}
                >
                  <i className="bi bi-graph-up-arrow fs-3"></i>
                </div>
                <div>
                  <h4 className="text-white mb-2">Decades of Experience</h4>
                  <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Over 20 years of navigating complex market cycles with a focus on risk-adjusted returns.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-4">
                <div 
                  className="d-flex align-items-center justify-content-center" 
                  style={{ minWidth: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}
                >
                  <i className="bi bi-globe fs-3"></i>
                </div>
                <div>
                  <h4 className="text-white mb-2">Global Presence</h4>
                  <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Operating across North America, Europe, and Asia to capture localized opportunities.</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-4">
                <div 
                  className="d-flex align-items-center justify-content-center" 
                  style={{ minWidth: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}
                >
                  <i className="bi bi-people fs-3"></i>
                </div>
                <div>
                  <h4 className="text-white mb-2">Expert Team</h4>
                  <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>A multidisciplinary team of investment professionals with deep sector-specific expertise.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 fade-up">
            <div 
              style={{ 
                height: '500px', 
                backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '10px solid rgba(255, 255, 255, 0.1)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
