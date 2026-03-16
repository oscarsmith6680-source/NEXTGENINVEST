import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px' }}>
            NEXTGEN<span className="brand-gold" style={{ color: 'var(--accent-gold)' }}>INVEST</span>
          </span>
        </Link>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="bi bi-list fs-1" style={{ color: 'var(--accent-gold)' }}></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link href="/about" className="nav-link text-uppercase">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link href="/approach" className="nav-link text-uppercase">OUR APPROACH</Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className="nav-link text-uppercase">CAREERS</Link>
            </li>
            <li className="nav-item">
              <Link href="/strategies" className="nav-link text-uppercase">STRATEGIES</Link>
            </li>
            <li className="nav-item">
              <Link href="/insights" className="nav-link text-uppercase">INSIGHTS</Link>
            </li>
            <li className="nav-item ms-lg-4">
              <Link href="/contact" className="btn btn-premium text-uppercase">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }

        @media (max-width: 991.98px) {
          .navbar-nav {
            background-color: white;
            padding: 2rem;
            margin-top: 1rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .nav-link {
            color: var(--primary-color) !important;
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
