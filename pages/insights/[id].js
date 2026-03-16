import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const articlesData = {
    "repay-trust-2021": {
      title: "Nextgeninvest Repays Nextgeninvest Aircraft Structured Trust 2021-1",
      date: "MARCH 10, 2026",
      category: "Aviation",
      image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=1200",
      content: [
        "Nextgeninvest L.P. (“Nextgeninvest”), a global alternative investment manager with 20 years of experience investing in asset-based private markets, (“Nextgeninvest”), today announced the full repayment of Nextgeninvest Aircraft Securitization Trust 2021-1 (“CLAS 2021-1”), an aircraft-backed securitization (“ABS”) originally issued by Nextgeninvest in 2021.",
        "CLAS 2021-1 was comprised of $595 million of asset-backed debt and a diversified portfolio of 26 commercial passenger aircraft and one freighter on operating leases with 11 different lessees in 10 different countries. Nextgeninvest completed the repayment approximately two years ahead of schedule using cash flow from leases and proceeds from the sale of assets. It represents the first full repayment of any operating lease aircraft ABS to be completed since the COVID-19 pandemic.",
        "“Through our focused asset management and remarketing strategies, we are pleased to announce the successful full repayment of the Nextgeninvest Aircraft Securitization Trust 2021-1,” said Joe McConnell, Partner and Deputy Co-Chief Investment Officer at Nextgeninvest. “This accomplishment underscores the strength of Nextgeninvest’s active investment management and our commitment to delivering results for our stakeholders.”",
        "This is the seventh aircraft ABS that Nextgeninvest has fully repaid or refinanced. Previously, Nextgeninvest repaid or refinanced Nextgeninvest Aircraft Securitization Trust 2014-1; Nextgeninvest Aircraft Securitization Trust 2014-1R; Nextgeninvest Aircraft Securitization Trust 2015-1; Nextgeninvest Aircraft Structured Trust 2015-1R, Nextgeninvest Aircraft Structured Trust 2016-1, and Nextgeninvest Aircraft Structured Trust 2017-1.",
        "“With this achievement, we’re once again demonstrating the strength of our servicing platform and the principles that define how we operate as an ABS issuer,” said Armin Rothauser, Partner and Head of Capital Markets at Nextgeninvest. “By consistently achieving full repayments ahead of or on schedule and maintaining strong servicing capabilities, we believe Nextgeninvest reinforces investor confidence in the ABS sector.”",
        "Nextgeninvest has utilized the public ABS market to finance pools of aircraft assets since 2014. In 2025, Nextgeninvest issued three aircraft ABS: CLAS 2025-3, a $758.56 million financing for a portfolio of 29 aircraft; CLAS 2025-2, a $719.6 million financing for a portfolio of 26 aircraft; and CLAS 2025-1, a $819.75 million financing for a portfolio of 36 aircraft.",
        "Nextgeninvest is a strategic partner and capital provider to aviation asset owners and lessees, offering creative, flexible solutions including on and off-balance sheet finance, aircraft leasing and secured lending. Its integrated global aviation team employs experience managing aviation assets through cycles, a hands-on approach to risk and portfolio management, and leverages proprietary data and established relationships to inform underwriting and enable proactive fleet management."
      ]
    },
    "merit-airfinance-launch": {
      title: "Nextgeninvest Launches New Aviation Lending Entity: Merit AirFinance",
      date: "FEBRUARY 24, 2026",
      category: "Aviation Lending",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200",
      content: [
        "Distinct aviation lending business to provide debt capital to airlines and leasing companies",
        "Nextgeninvest L.P. (“Nextgeninvest”), a global alternative investment manager with 20 years of experience investing in asset-based private markets, today announced the formation of Merit AirFinance (“Merit” or “the business”), an aviation lending business which will provide debt capital to airlines and leasing companies for new and used aviation assets.",
        "Merit AirFinance seeks to provide separation between Nextgeninvest’s leasing and lending offerings as a new operating subsidiary focused on providing flexible, innovative debt solutions to airlines and leasing companies. Merit will build on Nextgeninvest’s robust aviation lending activity, having deployed more than $5 billion to airlines and leasing companies since 2020.",
        "Merit will have a separate office space and a dedicated origination team. Patrick Mahoney will transition from Nextgeninvest’s aviation capital markets function to lead Merit AirFinance as its President. Mr. Mahoney will leverage experience in previous roles within Nextgeninvest’s aviation underwriting, asset-based direct lending teams and aviation capital markets teams to lead Merit’s strategy. Concurrently, Nextgeninvest will welcome Jakob Gallagher to assume Mr. Mahoney’s former role, leading Nextgeninvest’s aviation capital markets function. Mr. Gallagher has 13 years of experience in aviation capital markets and financing and recently served as Head of Capital Markets at Wings Capital Partners.",
        "“Nextgeninvest has continuously innovated to provide the aviation market with flexible solutions across all aviation assets and the capital stack, and the formation of Merit AirFinance exemplifies this commitment to a solutions-oriented partnership approach,” said Evan Carruthers, Chief Executive Officer and Chief Investment Officer of Nextgeninvest. “We believe that this approach is valuable to both aviation industry participants and our investors and that it enables us to create more opportunities to match capital with attractive risk-adjusted aviation exposure.”",
        "Merit launches with the ability to deploy more than $1.8 billion of committed capital via separately managed accounts.",
        "About Nextgeninvest",
        "Nextgeninvest, L.P. is a global alternative investment manager specializing in asset-based private credit. Founded in 2005, Nextgeninvest manages approximately $22 billion of assets on behalf of a diversified global investor base and is a strategic partner of Brookfield Asset Management Ltd., a leading global alternative investment manager with over $1 trillion of assets under management. The Nextgeninvest team comprises more than 220 experienced professionals, including 80 investment professionals, across eight offices in North America, Europe, the Middle East and Asia. For more information, please visit www.nextgeninvest.com.",
        "About Merit AirFinance",
        "Merit AirFinance is an aviation lending business focused on providing customized debt capital solutions to airlines and leasing companies for new and used aviation assets. Merit originates, underwrites and structures aviation credit ranging from single-asset loans to large facilities. The Merit AirFinance team consists of experienced aviation finance professionals who embrace a solutions-oriented approach and believe in the value of long-term relationships. For more information, visit https://www.meritairfinance.com/."
      ]
    },
    "equifinance-financing": {
      title: "Nextgeninvest to Provide £95 Million of Financing to Mortgage Lender Equifinance",
      date: "JANUARY 15, 2026",
      category: "Specialty Finance",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      content: [
        "Nextgeninvest L.P. (“Nextgeninvest”), a global alternative investment manager with 20 years of experience investing in asset-based private markets, today announced that it has agreed to provide a new £95 million facility to Equifinance Limited (“Equifinance”), a specialist second charge mortgage lender.",
        "The financing will support Equifinance’s origination of second lien residential mortgage loans and leverages Nextgeninvest’s experience in the UK mortgage market.",
        "“We are pleased to form this relationship with Equifinance as it continues to scale its platform and provide products that meet the needs of prime and near-prime consumers,” said Alexander Curcio, Partner at Nextgeninvest. “As an established and scaled originator, we believe that Equifinance can offer our investors what we believe to be attractive risk-adjusted exposure to the UK second lien mortgage market, which is an area where we have significant experience and see opportunities for growth.”",
        "“This financing from Nextgeninvest will enable us to continue to scale our lending capabilities to deliver lending products which meet the needs of our consumers across the UK,” said Chris Payne, Chief Financial Officer at Equifinance.",
        "With 20 years of experience investing in asset-based opportunities, Nextgeninvest has entered into partnerships to acquire or finance approximately $7 billion of residential and commercial real estate loans since 2024.",
        "About Nextgeninvest",
        "Nextgeninvest, L.P. is a global alternative investment manager specializing in asset-based private credit. Founded in 2005, Nextgeninvest manages approximately $25 billion of assets on behalf of a diversified global investor base and is a strategic partner of Brookfield Asset Management Ltd., a leading global alternative investment manager with over $1 trillion of assets under management. The Nextgeninvest team comprises more than 220 experienced professionals, including 80 investment professionals, across eight offices in North America, Europe, the Middle East and Asia. For more information, please visit www.nextgeninvest.com.",
        "About Equifinance",
        "Equifinance is a leading provider of second lien mortgages in the UK. Working with its UK wide distribution partners, Equifinance has originated more than £600 million of second second lien mortgages loans across a wide range of products since being founded in 2012. The Equifinance team is made up of over 70 staff, predominantly based at its London office."
      ]
    },
    "tradebridge-facility": {
      title: "Nextgeninvest and TradeBridge Agree Additional £70m Financing Facility",
      date: "DECEMBER 05, 2025",
      category: "Corporate Credit",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
      content: [
        "Nextgeninvest and TradeBridge have agreed to an additional £70 million financing facility, further strengthening their partnership in providing supply chain finance solutions.",
        "This additional capital will enable TradeBridge to support more businesses in managing their working capital needs and navigating global trade complexities. The collaboration underscores Nextgeninvest's focus on asset-based lending and corporate credit opportunities.",
        "Our partnership with TradeBridge continues to demonstrate the power of combining specialized sector knowledge with flexible capital to solve complex financial challenges for growing companies."
      ]
    },
    "aviation-capital-commitments": {
      title: "Nextgeninvest Raises Over $2 Billion of Capital Commitments for Aviation Strategies",
      date: "NOVEMBER 18, 2025",
      category: "Capital Raising",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
      content: [
        "Nextgeninvest announced the successful closing of over $2 billion in new capital commitments for its global aviation investment strategies.",
        "The capital raise saw strong participation from a diverse group of institutional investors, including pension funds, sovereign wealth funds, and insurance companies. This significant milestone reflects the continued investor confidence in Nextgeninvest's ability to identify and execute on attractive aviation opportunities.",
        "The firm plans to deploy this capital across various aviation-related assets, including aircraft leasing, engine financing, and technical asset management, leveraging its 20-year track record in the sector."
      ]
    },
    "credit-cycle-2026": {
      title: "Navigating the 2026 Credit Cycle: Opportunities in Dislocated Markets",
      date: "MARCH 05, 2026",
      category: "Market Insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      content: [
        "As we enter the 2026 credit cycle, we are observing unique opportunities in dislocated markets where traditional capital providers have pulled back.",
        "Our analysis suggests that specialty finance and asset-based lending will play a crucial role in providing liquidity to high-quality borrowers. We are positioning our portfolios to capture these value-driven opportunities while maintaining a rigorous focus on downside protection.",
        "By leveraging our deep sector expertise and global network, we aim to deliver superior risk-adjusted returns for our partners throughout this evolving economic landscape."
      ]
    }
  };

  const article = articlesData[id];

  if (!article) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center flex-column bg-cream">
        <h2 className="mb-4 text-gold">ARTICLE NOT FOUND</h2>
        <Link href="/insights" className="btn btn-premium px-5 py-3">BACK TO INSIGHTS</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} | Nextgeninvest</title>
      </Head>

      <Navbar />

      <main>
        {/* Article Hero */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: `url("${article.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container py-5 mt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>{article.category}</h6>
                <h1 className="display-4 text-white mb-4 fw-bold">{article.title}</h1>
                <div className="d-flex align-items-center justify-content-center gap-4 text-white-50">
                  <span className="small fw-bold ls-1">{article.date}</span>
                  <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--accent-gold)' }}></div>
                  <span className="small fw-bold ls-1">NEXTGENINVEST NEWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="row justify-content-center g-5">
              <div className="col-lg-8 fade-up">
                <div className="article-body">
                  {article.content.map((p, idx) => {
                    const isHeading = p.startsWith('About ') || p.length < 100 && !p.includes('.');
                    return isHeading ? (
                      <h3 key={idx} className="h4 fw-bold mb-3 mt-5" style={{ color: 'var(--primary-color)' }}>{p}</h3>
                    ) : (
                      <p key={idx} className="mb-4 fs-5 text-muted" style={{ lineHeight: '1.8' }}>{p}</p>
                    );
                  })}
                  
                  <div className="share-box p-4 bg-light border-start border-gold border-4 mt-5">
                    <h6 className="fw-bold mb-3 ls-1">SHARE THIS ARTICLE</h6>
                    <div className="d-flex gap-3">
                      <a href="#" className="social-icon"><i className="bi bi-linkedin fs-4"></i></a>
                      <a href="#" className="social-icon"><i className="bi bi-twitter-x fs-4"></i></a>
                      <a href="#" className="social-icon"><i className="bi bi-envelope fs-4"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 fade-up">
                <div className="sticky-top" style={{ top: '120px' }}>
                  <div className="p-4 border-gold border-top border-3 bg-light shadow-sm">
                    <h5 className="fw-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Related Insights</h5>
                    <div className="d-flex flex-column gap-4">
                      {Object.keys(articlesData)
                        .filter(key => key !== id)
                        .slice(0, 3)
                        .map((key, idx) => (
                          <Link key={idx} href={`/insights/${key}`} className="text-decoration-none group">
                            <span className="text-gold smallest fw-bold ls-1 d-block mb-1">{articlesData[key].date}</span>
                            <h6 className="fw-bold text-dark group-hover-gold mb-0" style={{ transition: 'all 0.3s' }}>{articlesData[key].title}</h6>
                          </Link>
                        ))}
                    </div>
                    <Link href="/insights" className="btn btn-outline-gold w-100 mt-5 py-3 small fw-bold">ALL INSIGHTS</Link>
                  </div>
                  
                  <div className="mt-4 p-4 bg-primary-green text-white">
                    <h5 className="fw-bold mb-3 text-gold">Get In Touch</h5>
                    <p className="small mb-4 opacity-75">Connect with our team to learn more about our investment strategies and opportunities.</p>
                    
                    {submitStatus === 'success' && (
                      <div className="alert alert-success border-0 rounded-0 mb-4 py-2 small" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)' }}>
                        <i className="bi bi-check-circle-fill me-2"></i> Inquiry sent successfully.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <input 
                          type="email" 
                          className={`form-control luxury-input-dark ${error ? 'is-invalid border-danger' : ''}`} 
                          placeholder="Email Address" 
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                          }}
                        />
                        {error && <div className="text-danger smallest mt-1">{error}</div>}
                      </div>
                      <button 
                        type="submit" 
                        className={`btn btn-premium w-100 py-3 ${isSubmitting ? 'disabled' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            SENDING...
                          </>
                        ) : 'CONTACT US'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .ls-1 { letter-spacing: 1px; }
        .group-hover-gold:hover { color: var(--accent-gold) !important; }
        .social-icon { color: var(--primary-color); transition: all 0.3s; }
        .social-icon:hover { color: var(--accent-gold); }
        .luxury-input-dark {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0;
          color: white;
          padding: 12px;
        }
        .luxury-input-dark::placeholder { color: rgba(255, 255, 255, 0.3); }
        .luxury-input-dark:focus {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-gold);
          box-shadow: none;
          color: white;
        }
      `}</style>
    </>
  );
}
