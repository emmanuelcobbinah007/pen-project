import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Marquee from "./components/Marquee";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <HowItWorks />
      <Impact />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
