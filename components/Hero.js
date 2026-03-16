import Link from 'next/link';

const Hero = () => {
  return (
    <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
        className="position-absolute w-100 h-100 opacity-25"
        style={{ 
          top: 0, 
          left: 0, 
          zIndex: 0, 
          objectFit: 'cover', 
          width: '100%', 
          height: '100%'
        }}
      >
        <source src="https://player.vimeo.com/external/494454728.sd.mp4?s=80e5e06575971485603719b441e8c783e459a98d&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-8 fade-up active">
            <h1 className="display-3 text-white mb-4 fw-bold">
              Differentiated <span className="text-gold">Asset-based Investors</span>
            </h1>
            <p className="lead text-white-50 fs-4 mb-5" style={{ maxWidth: '700px' }}>
              Nextgeninvest is a global alternative investment firm with approximately $33 billion in assets under management. We are a relationship-oriented, experienced liquidity provider in asset-based opportunities.
            </p>
            <div className="d-flex flex-column flex-md-row gap-4">
              <Link href="/about" className="btn btn-premium px-5 py-3 text-uppercase">About Nextgeninvest</Link>
              <Link href="/contact" className="btn btn-outline-gold px-5 py-3 text-white text-uppercase">Get IN Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
