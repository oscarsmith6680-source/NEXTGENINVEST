import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const [aum, setAum] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let aumInterval = setInterval(() => {
        setAum(prev => {
          if (prev >= 33) {
            clearInterval(aumInterval);
            return 33;
          }
          return prev + 1;
        });
      }, 50);

      let transInterval = setInterval(() => {
        setTransactions(prev => {
          if (prev >= 600) {
            clearInterval(transInterval);
            return 600;
          }
          return prev + 20;
        });
      }, 30);

      return () => {
        clearInterval(aumInterval);
        clearInterval(transInterval);
      };
    }
  }, [isVisible]);

  return (
    <section id="about" style={{ backgroundColor: '#fff' }} ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 fade-up">
            <h2 className="section-title">We specialize in cash-flowing opportunities found in the world’s largest asset-based markets</h2>
            <p className="lead mb-4" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
              Nextgeninvest’s investment strategy seeks to derive value from hard or financial assets by providing creative capital solutions.
            </p>
            <p className="mb-4">
              With over 20 years of experience transacting in global asset-based private markets, we’ve developed significant asset expertise, experience-based judgment and long-term relationships that we believe enable us to provide investors with non-correlated and reasonably downside-protected exposure.
            </p>
            <div className="mb-5">
              <Link href="/approach" className="btn btn-premium px-5 py-3">Our Approach</Link>
            </div>
            <div className="mt-5 d-flex gap-5 align-items-center">
              <div>
                <h3 className="mb-0 text-gold" style={{ fontSize: '2.5rem' }}>${aum}B+</h3>
                <span className="text-muted small" style={{ letterSpacing: '1px' }}>ASSETS UNDER MANAGEMENT</span>
              </div>
              <div style={{ width: '1px', height: '60px', backgroundColor: '#e1e1e1' }}></div>
              <div>
                <h3 className="mb-0 text-gold" style={{ fontSize: '2.5rem' }}>{transactions}+</h3>
                <span className="text-muted small" style={{ letterSpacing: '1px' }}>TRANSACTIONS EXECUTED</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 fade-up">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate Investment" 
                className="img-fluid"
                style={{ filter: 'grayscale(0.2)' }}
              />
              <div 
                className="position-absolute d-none d-md-block" 
                style={{ 
                  bottom: '-30px', 
                  right: '-30px', 
                  width: '200px', 
                  height: '200px', 
                  backgroundColor: 'var(--primary-color)',
                  zIndex: -1 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
