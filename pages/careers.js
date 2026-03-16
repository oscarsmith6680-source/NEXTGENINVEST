import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CareersPage() {
  const locations = [
    { city: "MINNEAPOLIS", image: "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?auto=format&fit=crop&q=80&w=800" },
    { city: "NEW YORK", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800" },
    { city: "DALLAS", image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=800" },
    { city: "LONDON", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800" },
    { city: "MADRID", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800" },
    { city: "DUBLIN", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800" },
    { city: "SINGAPORE", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800" }
  ];

  const values = [
    { title: "Inspire Trust", content: "We inspire trust by boldly doing the right thing and following through on our commitments; by embodying authenticity, honesty and integrity in our own actions and assuming the positive intent of others. We foster a trusting environment by leading with humility, vulnerability and empathy." },
    { title: "Win Together", content: "We win together by collaborating, communicating, and engaging one another. We openly empower individuals for the good of the whole because we believe we are greater together. Just as we share our successes, we stand by each other in our failures." },
    { title: "Honor Stakeholders", content: "We honor our employee, investor and community stakeholders by thoughtfully considering our impacts and acting with a sense of responsibility." },
    { title: "Innovate & Evolve", content: "We innovate and evolve by respecting all ideas and courageously challenging the status quo. We find opportunity within complexity and motivate ourselves to evolve with agility." }
  ];

  const benefitsWithIcons = [
    { title: "Retirement Savings Plan", subtitle: "with Company Match", icon: "bi-bank" },
    { title: "Paid Family Leave", subtitle: "Comprehensive support for your loved ones", icon: "bi-house-heart" },
    { title: "Charitable Giving", subtitle: "Match Program for employee donations", icon: "bi-gift" },
    { title: "Wellness Program", subtitle: "& Fitness Challenges for a healthy life", icon: "bi-heart-pulse" },
    { title: "Private Health Insurance", subtitle: "Premium coverage for you and your family", icon: "bi-hospital" }
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "Investment Analyst", text: "Working here has provided me with unparalleled exposure to complex asset classes. The culture of mentorship and the flat structure allow even junior members to have a significant impact on global transactions." },
    { name: "Michael Chen", role: "Portfolio Manager", text: "The collaborative spirit at this firm is what sets it apart. We tackle challenges as a team, and the depth of expertise available across our global offices is truly impressive and rewarding." },
    { name: "Emily Rodriguez", role: "Managing Director", text: "I've seen firsthand how our values translate into results. The commitment to innovation and the focus on long-term value creation make this a truly unique place to build a career in finance." },
    { name: "David Thorne", role: "Head of Aviation Operations", text: "The firm's expertise in specialized sectors like aviation is unmatched. Being part of a team that leads the market in such a dynamic field is both challenging and incredibly fulfilling." },
    { name: "Sophia Al-Mansoori", role: "Associate, Private Credit", text: "The emphasis on diversity and inclusion isn't just talk here; it's woven into our daily operations and our investment strategy. I feel valued and empowered to bring my full self to work every day." }
  ];

  return (
    <>
      <Head>
        <title>Careers | Nextgeninvest | Global Investment Firm</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Matching About UI */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-8 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>CAREERS</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Build Your Career at <br /><span className="text-gold">Nextgeninvest</span></h1>
                <p className="lead text-white-50 fs-4">Join a global team of specialists dedicated to excellence in alternative asset investing and value creation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Greatest Asset Section */}
        <section className="bg-white border-bottom">
          <div className="container">
            <div className="row text-center">
              <div className="max-width-800 mx-auto fade-up">
                <h2 className="display-5 mb-4 fw-bold" style={{ color: 'var(--primary-color)' }}>Our greatest asset is the talented team of individuals who fuel our differentiated approach.</h2>
                <p className="lead text-muted mb-5">We are committed to fostering a culture of excellence, where specialized expertise and collaborative innovation drive our success in global alternative asset investing. Our professionals are empowered to tackle complex challenges and deliver superior value for our partners worldwide.</p>
                <Link href="/contact" className="btn btn-premium px-5 py-3">JOIN OUR TEAM</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Country section */}
        <section className="bg-light">
          <div className="container">
            <h2 className="section-title text-center mb-5">Our Global Offices</h2>
            <div className="row g-4 justify-content-center">
              {locations.map((loc, idx) => (
                <div key={idx} className="col-lg-3 col-md-4 col-sm-6 fade-up">
                  <div className="location-card">
                    <div className="location-img-wrap">
                      <img src={loc.image} alt={loc.city} className="w-100 h-100 object-fit-cover grayscale-hover" />
                      <div className="location-overlay">
                        <h4 className="text-white fw-bold mb-0">{loc.city}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Values (FAQ Style) */}
        <section className="bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 fade-up">
                <h2 className="section-title">Our Values</h2>
                <p className="text-muted pe-lg-5" style={{ fontSize: '1.1rem' }}>Our culture seeks to balance individual ambition with a strong focus on teamwork, collaboration and the greater good. We are guided by four core values.</p>
              </div>
              <div className="col-lg-6 fade-up">
                <div className="accordion accordion-flush" id="valuesAccordion">
                  {values.map((val, idx) => (
                    <div className="accordion-item border-bottom py-3" key={idx}>
                      <h2 className="accordion-header" id={`heading${idx}`}>
                        <button className="accordion-button collapsed bg-white shadow-none fw-bold fs-5 p-0 py-3 text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded="false" aria-controls={`collapse${idx}`}>
                          {val.title}
                        </button>
                      </h2>
                      <div id={`collapse${idx}`} className="accordion-collapse collapse" aria-labelledby={`heading${idx}`} data-bs-parent="#valuesAccordion">
                        <div className="accordion-body px-0 text-muted" style={{ lineHeight: '1.8' }}>
                          {val.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 & 6. Rewards & Benefits with Icons */}
        <section className="bg-light">
          <div className="container">
            <div className="text-center mb-5 fade-up">
              <h2 className="section-title text-center">Rewards & Benefits</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>We offer a comprehensive benefits package designed to support the well-being and long-term security of our employees.</p>
            </div>
            <div className="row g-4 mt-4">
              {benefitsWithIcons.map((benefit, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 fade-up">
                  <div className="benefit-card h-100 p-5 bg-white border-top border-gold border-3 shadow-sm">
                    <div className="benefit-icon-box mb-4">
                      <i className={`bi ${benefit.icon} display-5 text-gold`}></i>
                    </div>
                    <h4 className="fw-bold mb-2">{benefit.title}</h4>
                    <p className="text-muted small mb-0">{benefit.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Our People (Testimonials Slider) */}
        <section className="bg-white border-top overflow-hidden">
          <div className="container text-center">
            <h2 className="section-title text-center mb-5">Our People</h2>
            <div id="testimonialCarousel" className="carousel slide testimonial-slider mx-auto" data-bs-ride="carousel" style={{ maxWidth: '900px' }}>
              <div className="carousel-inner">
                {testimonials.map((t, idx) => (
                  <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                    <div className="p-5 border-0 bg-cream-soft h-100 text-center position-relative">
                      <div className="quote-icon-wrap mb-4">
                        <i className="bi bi-quote display-3 text-gold opacity-50"></i>
                      </div>
                      <p className="lead italic mb-5 mx-auto" style={{ fontStyle: 'italic', maxWidth: '700px', fontSize: '1.4rem', lineHeight: '1.8', color: 'var(--primary-color)' }}>"{t.text}"</p>
                      <div className="mt-auto">
                        <h5 className="fw-bold mb-1" style={{ letterSpacing: '1px' }}>{t.name}</h5>
                        <p className="text-gold small text-uppercase fw-bold mb-0" style={{ letterSpacing: '2px' }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <i className="bi bi-chevron-left text-primary-green fs-2"></i>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <i className="bi bi-chevron-right text-primary-green fs-2"></i>
              </button>
              <div className="carousel-indicators position-relative mt-5">
                {testimonials.map((_, idx) => (
                  <button key={idx} type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to={idx} className={idx === 0 ? 'active' : ''} aria-current={idx === 0 ? 'true' : 'false'} aria-label={`Slide ${idx + 1}`}></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Commitment to Diversity, Equity & Inclusion - High-End Corporate UI */}
        <section className="bg-light border-top border-bottom">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 fade-up">
                <div className="dei-image-wrapper position-relative">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" className="img-fluid shadow-lg w-100" alt="Corporate Team" style={{ border: '15px solid #fff' }} />
                  <div className="dei-floating-card d-none d-md-block">
                    <h4 className="text-gold fw-bold mb-0">100%</h4>
                    <small className="text-white text-uppercase ls-2">Commitment</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 fade-up">
                <div className="ps-lg-5">
                  <h2 className="display-4 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Diversity, Equity <br /> & Inclusion</h2>
                  <p className="lead mb-5 text-muted" style={{ lineHeight: '1.8' }}>Nextgeninvest aspires to create an equal opportunity work environment that fosters inclusivity and respects, embraces and leverages our diversity of backgrounds, experiences and thoughts. We believe this results in deeper employee engagement and better decision-making that, in turn, drives better performance for investors. We are focused on achieving the following objectives:</p>
                  
                  <div className="dei-points-grid">
                    <div className="dei-point-item d-flex gap-4 mb-4">
                      <div className="dei-icon-box-v2">
                        <i className="bi bi-people text-gold"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">Engaging Programming</h5>
                        <p className="small text-muted mb-0">Offer dedicated programming that enhances skills, builds awareness and fosters inclusion across the organization</p>
                      </div>
                    </div>
                    <div className="dei-point-item d-flex gap-4 mb-4">
                      <div className="dei-icon-box-v2">
                        <i className="bi bi-graph-up-arrow text-gold"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">Monitor Progress</h5>
                        <p className="small text-muted mb-0">Benchmark our programming against DEI goals and track employee engagement to evaluate our progress</p>
                      </div>
                    </div>
                    <div className="dei-point-item d-flex gap-4">
                      <div className="dei-icon-box-v2">
                        <i className="bi bi-globe-americas text-gold"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">Broader Reach</h5>
                        <p className="small text-muted mb-0">Seek to have a positive impact on the alternative investment industry through involvement with and support of third-party organizations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Our investor-focused mission section */}
        <section className="bg-white overflow-hidden position-relative">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 fade-up">
                <h2 className="display-4 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Our investor-focused mission</h2>
                <p className="lead mb-5 text-muted">We measure our success not by the magnitude of our growth but by the impact we have on investors – those whose missions we seek to enrich through our daily work. Our purpose is to help every investor entrusting us with capital achieve its goals.</p>
                <Link href="/contact" className="btn btn-premium px-5 py-3 text-uppercase">join our team</Link>
              </div>
            </div>
          </div>
          <div className="mission-pattern"></div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .location-img-wrap {
          height: 250px;
          position: relative;
          overflow: hidden;
        }
        .location-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          transition: all 0.4s ease;
        }
        .grayscale-hover {
          filter: grayscale(1);
          transition: all 0.6s ease;
        }
        .location-card:hover .grayscale-hover {
          filter: grayscale(0);
          transform: scale(1.1);
        }
        .location-card:hover .location-overlay {
          background: linear-gradient(to top, var(--primary-color) 0%, transparent 80%);
        }
        
        .accordion-button:not(.collapsed) {
          color: var(--accent-gold);
        }
        .accordion-button::after {
          filter: grayscale(1) invert(1);
        }
        
        .benefit-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
        }
        
        .dei-dot {
          width: 12px;
          height: 12px;
          background-color: var(--accent-gold);
          border-radius: 50%;
        }

        /* Testimonial Slider Styles */
        .bg-cream-soft {
          background-color: #fdfdfb;
        }
        .testimonial-slider .carousel-control-prev,
        .testimonial-slider .carousel-control-next {
          width: 50px;
          opacity: 1;
        }
        .testimonial-slider .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ccc;
          margin: 0 8px;
          border: none;
        }
        .testimonial-slider .carousel-indicators button.active {
          background-color: var(--accent-gold);
        }
        
        .dei-icon-box-v2 {
          min-width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          flex-shrink: 0;
        }
        .dei-image-wrapper {
          padding: 20px;
        }
        .dei-floating-card {
          position: absolute;
          bottom: 50px;
          right: -20px;
          background: var(--primary-color);
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          z-index: 2;
          text-align: center;
          min-width: 160px;
        }
        .ls-2 { letter-spacing: 2px; }
        .py-section-vogue {
          padding: 50px 0;
        }
        
        .mission-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--accent-gold) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.05;
          z-index: 1;
        }
      `}</style>
    </>
  );
}
