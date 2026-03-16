import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Nextgeninvest | Global Investment Firm</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Matching About UI */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-8 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>POLICIES</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Privacy <span className="text-gold">Policy</span></h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 fade-up active">
                <div className="policy-content py-5">
                  <h2 className="h3 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Introduction</h2>
                  <p className="mb-4 text-muted">Nextgeninvest, L.P. and its affiliates ("Nextgeninvest," "we," "us," or "our") are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and share personal information about you when you visit our website, interact with us, or use our services.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Information We Collect</h2>
                  <p className="mb-4 text-muted">We may collect personal information that you provide to us directly, such as when you fill out a contact form, subscribe to our insights, or communicate with our investor relations team. This information may include:</p>
                  <ul className="text-muted mb-4">
                    <li className="mb-2">Contact information (name, email address, phone number, mailing address)</li>
                    <li className="mb-2">Professional information (job title, company name)</li>
                    <li className="mb-2">Investor status and preferences</li>
                    <li className="mb-2">Any other information you choose to provide</li>
                  </ul>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>How We Use Your Information</h2>
                  <p className="mb-4 text-muted">We use the personal information we collect for various purposes, including:</p>
                  <ul className="text-muted mb-4">
                    <li className="mb-2">Providing and improving our website and services</li>
                    <li className="mb-2">Communicating with you and responding to your inquiries</li>
                    <li className="mb-2">Sending you marketing communications and insights (where permitted)</li>
                    <li className="mb-2">Complying with legal and regulatory obligations</li>
                    <li className="mb-2">Protecting the security and integrity of our systems</li>
                  </ul>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Sharing of Information</h2>
                  <p className="mb-4 text-muted">We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose information when required by law or to protect our rights or the rights of others.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Data Security</h2>
                  <p className="mb-4 text-muted">We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Your Choices</h2>
                  <p className="mb-4 text-muted">You may opt out of receiving marketing emails from us by following the instructions provided in those emails. You may also contact us to request access to, correction of, or deletion of your personal information.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Changes to This Policy</h2>
                  <p className="mb-4 text-muted">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>

                  <div className="mt-5 pt-4 border-top">
                    <p className="small text-muted mb-0">Last Updated: March 11, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
