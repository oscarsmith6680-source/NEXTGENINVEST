import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function InsightsPage() {
  const articles = [
    {
      id: "repay-trust-2021",
      title: "Nextgeninvest Repays Nextgeninvest Aircraft Structured Trust 2021-1",
      date: "MAR 10, 2026",
      category: "AVIATION",
      image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "merit-airfinance-launch",
      title: "Nextgeninvest Launches New Aviation Lending Entity: Merit AirFinance",
      date: "FEB 24, 2026",
      category: "AVIATION LENDING",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "equifinance-financing",
      title: "Nextgeninvest to Provide £95 Million of Financing to Mortgage Lender Equifinance",
      date: "JAN 15, 2026",
      category: "SPECIALTY FINANCE",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <>
      <Head>
        <title>Insights | Nextgeninvest | Global Investment Firm</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Matching About UI */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-8 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>MARKET INTELLIGENCE</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Strategic <span className="text-gold">Insights</span> & News</h1>
                <p className="lead text-white-50 fs-4">Access our latest perspectives on global alternative asset markets, capital trends, and firm milestones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Latest Insights Section - Matching Homepage Strategic Insights UI */}
        <section className="bg-white">
          <div className="container">
            <div className="row mb-5 fade-up">
              <div className="col-lg-12">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '3px' }}>PERSPECTIVES</h6>
                <h2 className="section-title">Latest Insights</h2>
              </div>
            </div>

            <div className="row g-4">
              {articles.map((a, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 mb-4 fade-up">
                  <div className="bg-white shadow-sm h-100 d-flex flex-column article-card-wrapper">
                    <div className="overflow-hidden" style={{ height: '240px' }}>
                      <img src={a.image} className="w-100 h-100 object-fit-cover article-img" alt={a.title} />
                    </div>
                    <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                      <div>
                        <span className="small text-gold fw-bold" style={{ letterSpacing: '1px' }}>{a.category}</span>
                        <h4 className="mt-2 mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>{a.title}</h4>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-top pt-3">
                        <span className="small text-muted">{a.date}</span>
                        <Link href={`/insights/${a.id}`} className="text-primary-green small text-decoration-none fw-bold">Read More <i className="bi bi-arrow-right ms-1"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA Section */}
        <section className="bg-light border-top">
          <div className="container text-center">
            <div className="max-width-800 mx-auto fade-up">
              <h2 className="display-5 mb-4 fw-bold" style={{ color: 'var(--primary-color)' }}>Ready to Explore More?</h2>
              <p className="lead text-muted mb-5">Connect with our specialized team to learn more about our global asset strategies and investment philosophy.</p>
              <div className="d-flex flex-column flex-md-row gap-4 justify-content-center">
                <Link href="/contact" className="btn btn-premium px-5 py-3">INQUIRE TODAY</Link>
                <Link href="/strategies" className="btn btn-outline-gold px-5 py-3">OUR STRATEGIES</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .article-card-wrapper {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .article-card-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        .article-img {
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .article-card-wrapper:hover .article-img {
          transform: scale(1.1);
        }
        .text-primary-green {
          color: var(--primary-color);
          transition: color 0.3s ease;
        }
        .text-primary-green:hover {
          color: var(--accent-gold);
        }
      `}</style>
    </>
  );
}
