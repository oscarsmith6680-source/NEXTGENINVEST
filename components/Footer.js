import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="row gy-5 mb-5">
          <div className="col-lg-4 col-md-12">
            <div className="footer-brand mb-4">
              <Link href="/" className="text-decoration-none">
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.6rem', letterSpacing: '2px', color: 'white' }}>
                  NEXTGEN<span style={{ color: 'var(--accent-gold)' }}>INVEST</span>
                </span>
              </Link>
            </div>
            <p className="mb-4 pe-lg-5 text-white-50" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              A global leader in alternative asset investing, specializing in complex, asset-rich opportunities across aviation, real estate, and specialty finance.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon-v2"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-icon-v2"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="social-icon-v2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon-v2"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/about" className="footer-link small">About Us</Link></li>
              <li><Link href="/approach" className="footer-link small">Our Approach</Link></li>
              <li><Link href="/careers" className="footer-link small">Careers</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Our Policies</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/privacy-policy" className="footer-link small">Privacy Policy</Link></li>
              <li><Link href="/legal-disclaimers" className="footer-link small">Terms & Conditions</Link></li>
              <li><Link href="/do-not-sell" className="footer-link small">Privacy Rights</Link></li>
              <li><Link href="/legal-disclaimers" className="footer-link small">Legal Disclaimers</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4">
            <h6 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Global Headquarters</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li className="footer-contact-item d-flex gap-3 align-items-start">
                <i className="bi bi-geo-alt mt-1"></i>
                <span className="small text-white-50">4600 Wells Fargo Center, 90 South Seventh Street, Minneapolis, MN 55402</span>
              </li>
              <li className="footer-contact-item d-flex gap-3 align-items-center">
                <i className="bi bi-telephone"></i>
                <span className="small text-white-50">+1 (612) 851-3100</span>
              </li>
              <li className="footer-contact-item d-flex gap-3 align-items-center">
                <i className="bi bi-envelope"></i>
                <span className="small text-white-50">info@nextgeninvest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 border-top border-white-10">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <p className="small mb-0 text-white-50">&copy; 2026 Nextgeninvest, L.P. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-4">
                <p className="small mb-0 text-white-50">Developed by <a href="https://logix9.io/" target="_blank" rel="noopener noreferrer" className="footer-bottom-link text-decoration-none" style={{ color: 'var(--accent-gold)' }}>Logix9</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .border-white-10 {
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
