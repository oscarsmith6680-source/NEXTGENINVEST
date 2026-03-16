import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Strategies from '../components/Strategies';
import WhyChooseUs from '../components/WhyChooseUs';
import Insights from '../components/Insights';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextgeninvest | Global Alternative Asset Investment Firm</title>
        <meta name="description" content="A high-end premium financial investment website for global alternative assets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Strategies />
        <WhyChooseUs />
        <Insights />
        <CTA />
        <Contact />
        <Footer />
      </main>

      <style jsx global>{`
        /* Any additional page-specific global styles */
      `}</style>
    </>
  );
}
