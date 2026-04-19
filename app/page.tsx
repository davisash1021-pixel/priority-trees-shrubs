import TopBar from '@/components/TopBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import Supply from '@/components/Supply';
import HowItWorks from '@/components/HowItWorks';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import CTABand from '@/components/CTABand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <Hero />
      <TrustStrip />
      <About />
      <Supply />
      <HowItWorks />
      <Team />
      <Testimonials />
      <CTABand />
      <Contact />
      <Footer />
    </>
  );
}
