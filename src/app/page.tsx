import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import ResilientTool from "./components/ResilientTool";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ResilientTool />
      <Services />
      <HowItWorks />
      <Impact />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
