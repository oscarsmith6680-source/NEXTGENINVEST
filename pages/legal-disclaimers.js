import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LegalDisclaimersPage() {
  return (
    <>
      <Head>
        <title>Legal Disclaimers & Terms of Use | Nextgeninvest | Global Investment Firm</title>
      </Head>

      <Navbar />

      <main>
        {/* Page Hero - Matching About UI */}
        <section className="position-relative py-5 overflow-hidden" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#1F4D3A' }}>
          <div className="position-absolute w-100 h-100 opacity-25" style={{ top: 0, left: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mt-5 pt-5 position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-10 fade-up active">
                <h6 className="text-gold mb-3 fw-bold" style={{ letterSpacing: '4px' }}>LEGAL</h6>
                <h1 className="display-3 text-white mb-4 fw-bold">Legal Disclaimers & <span className="text-gold">Terms of Use</span></h1>
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
                  <h2 className="h3 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>Use of This Website</h2>
                  <p className="mb-4 text-muted">By accessing this website, you agree to be bound by these Legal Disclaimers and Terms of Use. If you do not agree to these terms, please do not use this website. Nextgeninvest, L.P. ("Nextgeninvest") reserves the right to modify these terms at any time without notice. Your continued use of the website following any changes constitutes your acceptance of the new terms.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>No Investment Advice or Solicitation</h2>
                  <p className="mb-4 text-muted">The information provided on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security, investment product, or service. Nothing on this website should be interpreted as investment, legal, tax, or other advice. You should consult with your own professional advisors before making any investment decisions.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Investment Performance</h2>
                  <p className="mb-4 text-muted">Past performance is not indicative of future results. No representation is being made that any investment will or is likely to achieve profits or losses similar to those achieved in the past. All investments involve risk, including the loss of principal.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Intellectual Property</h2>
                  <p className="mb-4 text-muted">All content on this website, including text, graphics, logos, and images, is the property of Nextgeninvest or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any part of this website without our prior written consent.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Disclaimer of Warranties</h2>
                  <p className="mb-4 text-muted">This website is provided on an "as is" and "as available" basis. Nextgeninvest makes no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, or materials included on it. To the fullest extent permitted by law, Nextgeninvest disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Limitation of Liability</h2>
                  <p className="mb-4 text-muted">Nextgeninvest will not be liable for any damages of any kind arising from the use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages. Your sole remedy for dissatisfaction with this website is to stop using it.</p>

                  <h2 className="h3 fw-bold mb-4 mt-5" style={{ color: 'var(--primary-color)' }}>Governing Law</h2>
                  <p className="mb-4 text-muted">These terms and your use of this website will be governed by and construed in accordance with the laws of the State of Minnesota, without giving effect to any principles of conflicts of law.</p>

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
