import Link from 'next/link';

const Insights = () => {
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
      category: "STRATEGY",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800",
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
    <section id="insights" className="bg-light">
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <h2 className="section-title">Strategic Insights</h2>
            <p>Our latest perspectives on global markets and alternative asset investing.</p>
          </div>
          <div className="col-lg-4 text-lg-end mb-lg-0 mb-4">
            <Link href="/insights" className="btn btn-outline-gold px-4 py-2">View All Articles</Link>
          </div>
        </div>
        <div className="row g-4">
          {articles.map((a, idx) => (
            <div key={idx} className="col-lg-4 fade-up">
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
    </section>
  );
};

export default Insights;
