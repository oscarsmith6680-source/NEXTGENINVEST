import Link from 'next/link';

const Strategies = () => {
  return (
    <section id="strategies" className="bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 fade-up">
            <h2 className="section-title">Our Strategies</h2>
            <p className="lead mb-4" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
              Since 2005, Nextgeninvest has specialized in asset-based investing.
            </p>
            <p className="mb-5 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Today, our strategies address some of the largest asset-based markets comprising the global economy.
            </p>
            <Link href="/strategies" className="btn btn-premium px-5 py-3">Explore Investment Strategies</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
