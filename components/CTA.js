import Link from 'next/link';

const CTA = () => {
  return (
    <section 
      className="position-relative" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '50px 0'
      }}
    >
      <div 
        className="position-absolute w-100 h-100" 
        style={{ top: 0, left: 0, backgroundColor: 'rgba(31, 77, 58, 0.85)', zIndex: 1 }}
      ></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center text-center text-white">
          <div className="col-lg-8 fade-up">
            <h2 className="display-4 text-white mb-4">Creative investors with <br/>cycle-tested asset expertise</h2>
            <p className="lead mb-5 opacity-75">Contact us to learn more information about our firm’s experience, investment strategies and opportunities.</p>
            <div className="d-flex flex-column flex-md-row gap-4 justify-content-center">
              <Link href="/contact" className="btn btn-premium px-5 py-3">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
