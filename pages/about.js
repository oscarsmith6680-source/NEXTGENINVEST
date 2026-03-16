import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const team = [
    { name: "Julian Adams", role: "Chief Investment Officer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Elena Rodriguez", role: "Managing Director, Real Estate", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Thorne", role: "Head of Aviation Finance", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Sophia Chen", role: "Director of Private Credit", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
  ];

  const infoCards = [
    {
      title: "Approach",
      text: "Nextgeninvest’s investment philosophy seeks to provide investors with exposure according to their risk-return and asset appetite, with a consistent focus on seeking to create reasonable downside protection.",
      link: "/approach",
      buttonText: "Learn More"
    },
    {
      title: "Team",
      text: "Our global team of approximately 250 employees includes more than 90 investment professionals who have specialized asset structuring expertise, in-market experience and long-standing sourcing relationships.",
      link: "/about#team",
      buttonText: "Learn More"
    },
    {
      title: "Careers",
      text: "Nextgeninvest strives to foster a collaborative and entrepreneurial culture driven by thoughtful, motivated people who are energized by complexity and the opportunity to create innovative solutions.",
      link: "/careers",
      buttonText: "Learn More"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Nextgeninvest | Global Investment Firm</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Redesigned to match brand content */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-8 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>ABOUT NEXTGENINVEST</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Discovering Value in <span className="text-gold">Private Markets</span></h1>
                <p className="lead text-white-50 fs-4">A global leader in alternative asset investing, driven by specialized expertise and a legacy of excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 fade-up active">
                <h2 className="section-title">Company Overview</h2>
                <p className="lead text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1.25rem' }}>
                  Nextgeninvest specializes in discovering and pursuing asset-rich and cash-flowing opportunities in the private markets. Founded in 2005, we have experience, data and relationships within the specialty finance, real assets and aviation private markets that we bring to bear as we provide asset-based private credit and other forms of capital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Cards Section - Approach, Team, Careers */}
        <section className="bg-white">
          <div className="container">
            <div className="row g-4">
              {infoCards.map((card, idx) => (
                <div key={idx} className="col-lg-4 fade-up">
                  <div className="luxury-card h-100 border-top border-gold border-3 p-5">
                    <h2 className="h3 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>{card.title}</h2>
                    <p className="text-muted mb-5" style={{ lineHeight: '1.8' }}>{card.text}</p>
                    <Link href={card.link} className="btn btn-outline-gold px-4 py-2 mt-auto">{card.buttonText}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section id="team" className="bg-white border-top">
          <div className="container">
            <div className="row mb-5 align-items-end fade-up">
              <div className="col-lg-8">
                <h2 className="section-title">Our Leadership Team</h2>
                <p>Guided by a group of seasoned professionals with diverse backgrounds in finance and operations.</p>
              </div>
            </div>
            <div className="row g-4">
              {team.map((member, idx) => (
                <div key={idx} className="col-lg-3 col-md-6 fade-up">
                  <div className="team-member-card text-center">
                    <div className="mb-4 overflow-hidden position-relative" style={{ height: '300px' }}>
                      <img src={member.image} className="w-100 h-100 object-fit-cover grayscale" alt={member.name} style={{ transition: 'all 0.5s ease' }} />
                    </div>
                    <h4>{member.name}</h4>
                    <p className="text-gold small fw-bold mb-0">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partnership Section */}
        <section id="partnership" className="bg-white border-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-5 mb-lg-0 fade-up">
                <div className="p-5 border" style={{ backgroundColor: 'var(--bg-cream)' }}>
                  <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '2px' }}>PARTNERSHIP</h6>
                  <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Strategic <br/>Partnership</h2>
                  <div className="gold-separator mb-4" style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-gold)' }}></div>
                  <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800" className="img-fluid opacity-75" alt="Brookfield Partnership" />
                </div>
              </div>
              <div className="col-lg-7 px-lg-5 fade-up">
                <h2 className="section-title">Stronger Together</h2>
                <p className="lead mb-4" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>Nextgeninvest has a strategic partnership with Brookfield Asset Management.</p>
                <p className="mb-4 text-muted" style={{ lineHeight: '1.8' }}>
                  As one of the world’s largest investment firms with approximately $1 trillion of assets under management, Brookfield brings unparalleled scale and resources to our collaboration. Our partnership includes investment of capital from Brookfield and its related entities, and seeks to provide both Nextgeninvest and Brookfield’s clients with differentiated asset-based investment exposure and attractive risk-adjusted returns.
                </p>
                <p className="mb-5 text-muted" style={{ lineHeight: '1.8' }}>
                  For more information, <a href="#" className="text-gold fw-bold text-decoration-none border-bottom border-gold">read the partnership announcement here</a> and visit <a href="https://www.brookfield.com/our-businesses/credit" target="_blank" rel="noopener noreferrer" className="text-gold fw-bold text-decoration-none border-bottom border-gold">Brookfield Credit</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Redesigned for High-End Look */}
        <section className="bg-white">
          <div className="container">
            <div className="luxury-contact-box p-5 p-md-5 position-relative overflow-hidden" style={{ background: 'var(--primary-color)', color: 'white', borderRadius: '0' }}>
              <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="col-lg-7 mb-4 mb-lg-0">
                  <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '3px' }}>CONNECT</h6>
                  <h2 className="display-5 fw-bold mb-4 text-white">Contact Us</h2>
                  <p className="lead opacity-75 mb-0">Contact us for more information about our firm and opportunities to partner with us.</p>
                </div>
                <div className="col-lg-5 text-lg-end">
                  <Link href="/contact" className="btn btn-outline-gold btn-lg px-5 py-3">GET IN TOUCH</Link>
                </div>
              </div>
              <div className="position-absolute" style={{ top: '-20px', right: '-20px', width: '200px', height: '200px', border: '1px solid rgba(212, 175, 55, 0.1)', borderRadius: '50%' }}></div>
              <div className="position-absolute" style={{ bottom: '-50px', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .team-member-card img:hover {
          transform: scale(1.05);
          filter: grayscale(0);
        }
        .grayscale {
          filter: grayscale(1);
        }
        .border-gold {
          border-color: var(--accent-gold) !important;
        }
      `}</style>
    </>
  );
}
