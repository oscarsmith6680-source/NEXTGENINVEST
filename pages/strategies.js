import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function StrategiesPage() {
  const [dealVolume, setDealVolume] = useState(0);
  const [countries, setCountries] = useState(0);
  const [experience, setExperience] = useState(0);
  const factsRef = useRef(null);
  const [factsVisible, setFactsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFactsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (factsRef.current) observer.observe(factsRef.current);
    return () => {
      if (factsRef.current) observer.unobserve(factsRef.current);
    };
  }, []);

  useEffect(() => {
    if (factsVisible) {
      let vInterval = setInterval(() => {
        setDealVolume(prev => (prev >= 20 ? 20 : prev + 1));
      }, 100);
      let cInterval = setInterval(() => {
        setCountries(prev => (prev >= 1300 ? 1300 : prev + 50));
      }, 30);
      let eInterval = setInterval(() => {
        setExperience(prev => (prev >= 8 ? 8 : prev + 1));
      }, 200);
      return () => {
        clearInterval(vInterval);
        clearInterval(cInterval);
        clearInterval(eInterval);
      };
    }
  }, [factsVisible]);

  const investmentStrategies = [
    { 
      title: "Aviation Leasing & Lendings", 
      description: "Providing on and off balance sheet finance to airlines and other aviation asset owners, including aircraft leasing and secured lending.", 
      icon: "bi-airplane-engines" 
    },
    { 
      title: "Consumer Credit", 
      description: "Financing or acquiring new and seasoned portfolios of consumer loans across the risk spectrum.", 
      icon: "bi-wallet2" 
    },
    { 
      title: "SMB & Specialty Finance", 
      description: "Financing or acquiring new portfolios of loans to small and medium-sized businesses, including in factoring, merchant cash advances and equipment leasing.", 
      icon: "bi-graph-up-arrow" 
    },
    { 
      title: "Residential Mortgage", 
      description: "Financing or acquiring new portfolios of residential mortgages and originating loans to assist in the transition of real estate.", 
      icon: "bi-house-check" 
    },
    { 
      title: "Commercial Mortgage", 
      description: "Providing loans to commercial real estate developers and other originators backed by leasing or rental arrangements; loans backed by other forms of infrastructure assets with contractual cash flow.", 
      icon: "bi-buildings" 
    }
  ];

  return (
    <>
      <Head>
        <title>Investment Strategies | Nextgeninvest</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Matching About UI */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-8 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>INVESTMENT STRATEGIES</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Precision in Alternative <span className="text-gold">Asset Investing</span></h1>
                <p className="lead text-white-50 fs-4">We specialize in identifying and acquiring asset-rich opportunities across global markets, delivering sophisticated capital solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Asset-Based Investments */}
        <section className="py-section-vogue bg-white overflow-hidden">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5 order-2 order-lg-1 fade-up">
                <div className="asset-text-content">
                  <h6 className="text-gold small mb-3 fw-bold" style={{ letterSpacing: '5px' }}>OUR PORTFOLIO</h6>
                  <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--primary-color)', lineHeight: '1.1' }}>Asset-Based <br/> Investments</h2>
                  <div className="gold-separator mb-4"></div>
                  <p className="mb-5 text-muted" style={{ lineHeight: '1.8' }}>
                    Since 2005, Nextgeninvest has specialized in asset-based investing. Today, our strategies address some of the largest asset-based markets comprising the global economy. As a result of our tenure, long-standing relationships and significant asset data, we believe we have meaningful competitive advantages in these markets and are capable of providing investors with programmatic, scaled exposure to attractive asset opportunities within them.
                  </p>
                  <Link href="/contact" className="btn btn-premium px-5 py-3">GET IN TOUCH</Link>
                </div>
              </div>
              
              <div className="col-lg-7 order-1 order-lg-2 fade-up">
                <div className="modern-composition">
                  <div className="main-image-frame">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" className="main-image" alt="Corporate Building" />
                    <div className="image-overlay-vogue"></div>
                  </div>
                  <div className="secondary-image-frame d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600" className="secondary-image" alt="Asset Detail" />
                  </div>
                  <div className="experience-stamp">
                    <span className="stamp-num">20+</span>
                    <span className="stamp-text">YEARS OF<br/>SUCCESS</span>
                  </div>
                  <div className="decorative-grid"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Facts Section - Minimalist Architectural Metrics */}
        <section ref={factsRef} className="py-section-minimalist position-relative overflow-hidden" style={{ backgroundColor: '#1F4D3A' }}>
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div className="row g-0">
              <div className="col-lg-4 border-end-gold fade-up">
                <div className="minimal-fact-box p-5 text-center">
                  <div className="minimal-value-wrap">
                    <h2 className="min-number">{dealVolume}</h2>
                  </div>
                  <div className="min-divider"></div>
                  <h4 className="min-label">Years of Experience</h4>
                  <p className="min-subtext">Two decades of alternative investing</p>
                </div>
              </div>
              
              <div className="col-lg-4 border-end-gold fade-up">
                <div className="minimal-fact-box p-5 text-center">
                  <div className="minimal-value-wrap">
                    <h2 className="min-number">{countries}</h2>
                    <span className="min-suffix">+</span>
                  </div>
                  <div className="min-divider"></div>
                  <h4 className="min-label">Transactions</h4>
                  <p className="min-subtext">Executed across global markets</p>
                </div>
              </div>
              
              <div className="col-lg-4 fade-up">
                <div className="minimal-fact-box p-5 text-center">
                  <div className="minimal-value-wrap">
                    <h2 className="min-number">{experience}</h2>
                  </div>
                  <div className="min-divider"></div>
                  <h4 className="min-label">Global Offices</h4>
                  <p className="min-subtext">Strategic presence worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div className="arch-overlay"></div>
        </section>

        {/* 4. Detailed Investment Strategies Text */}
        <section className="bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 fade-up">
                <h2 className="section-title">Investment Strategies</h2>
                <div className="strategy-text-body">
                  <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
                    Nextgeninvest seeks opportunities to unlock value from hard or financial assets by providing creative capital solutions across the risk spectrum, with particular expertise in asset-based or asset-backed credit. We deploy capital into what we believe to be large, durable opportunity sets that enable our team to leverage its significant asset expertise, our institutional data and long-standing relationships.
                  </p>
                  <p className="text-muted mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                    We deliver asset-based exposure to institutional investors through closed-end investment funds, separately or individually managed accounts, and other private placement formats.
                  </p>
                  <p className="text-muted mb-0 fs-5" style={{ lineHeight: '1.8' }}>
                    In our role as a capital solutions provider to asset owners and originators in these markets, we lead with a solutions-oriented mindset and are known to innovate to meet the needs of our counterparties. Alongside our ability to address the full capital stack, our in-house capital markets capabilities, inclusive of structuring and ratings expertise, provides added value to counterparties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Specialized Asset-Based Strategies (Grid) */}
        <section className="bg-light">
          <div className="container">
            <h2 className="section-title mb-5">Specialized Asset-Based Strategies</h2>
            <div className="row g-4">
              {investmentStrategies.map((s, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 fade-up">
                  <div className="luxury-card h-100 border-top border-gold border-3 p-5">
                    <div className="mb-4">
                      <i className={`bi ${s.icon} display-5 text-gold`}></i>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>{s.title}</h4>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Meet Our Team Section */}
        <section className="bg-white border-top">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7 fade-up">
                <h2 className="section-title">Meet Our Team</h2>
                <p className="lead text-muted mb-5" style={{ lineHeight: '1.8' }}>
                  Our teams are designed to bring together specialized asset expertise, structuring experience, counterparty relationships and experienced-based judgement to create and execute creative solutions that provide downside protection.
                </p>
                <Link href="/contact" className="btn btn-premium px-5 py-3">Join our Team</Link>
              </div>
              <div className="col-lg-5 fade-up d-none d-lg-block">
                <div className="p-2 border border-gold">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="img-fluid" alt="Team Collaboration" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .py-section-vogue {
          padding: 50px 0;
        }
        .gold-separator {
          width: 80px;
          height: 2px;
          background: var(--accent-gold);
        }
        .modern-composition {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .main-image-frame {
          width: 85%;
          height: 500px;
          overflow: hidden;
          position: relative;
          z-index: 2;
          box-shadow: 30px 30px 80px rgba(0,0,0,0.15);
        }
        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 2s ease;
        }
        .modern-composition:hover .main-image {
          transform: scale(1.1);
        }
        .image-overlay-vogue {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(31, 77, 58, 0.3), transparent);
        }
        .secondary-image-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 280px;
          height: 350px;
          overflow: hidden;
          z-index: 3;
          border: 10px solid #fff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        .secondary-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .experience-stamp {
          position: absolute;
          bottom: 20px;
          right: -20px;
          background: var(--accent-gold);
          color: white;
          padding: 2rem;
          z-index: 4;
          text-align: center;
          min-width: 160px;
        }
        .stamp-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 5px;
          font-family: 'Montserrat', sans-serif;
        }
        .stamp-text {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 2px;
          line-height: 1.3;
        }
        .decorative-grid {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(#D4AF37 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
          z-index: 1;
        }

        .py-section-minimalist {
          padding: 0;
          background: #1F4D3A;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        .border-end-gold {
          border-right: 1px solid rgba(212, 175, 55, 0.15);
        }
        .minimal-value-wrap {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
          margin-bottom: 20px;
        }
        .min-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 6rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 0.8;
          margin: 0;
          letter-spacing: -2px;
        }
        .min-suffix {
          font-family: 'Montserrat', sans-serif;
          font-size: 2rem;
          color: var(--accent-gold);
          font-weight: 300;
        }
        .min-divider {
          width: 30px;
          height: 2px;
          background: var(--accent-gold);
          margin: 30px auto;
          transition: width 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .minimal-fact-box:hover .min-divider {
          width: 60px;
        }
        .min-label {
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 12px;
          font-family: 'Raleway', sans-serif;
        }
        .min-subtext {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          margin: 0;
        }
        .arch-overlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          pointer-events: none;
        }

        @media (max-width: 991.98px) {
          .border-end-gold {
            border-right: none;
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          }
          .min-number {
            font-size: 4rem;
          }
          .modern-composition {
            height: auto;
            margin-top: 50px;
          }
          .main-image-frame {
            width: 100%;
            height: 400px;
          }
          .experience-stamp {
            right: 0;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}
