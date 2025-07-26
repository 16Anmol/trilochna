import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Volunteer from "@/components/Volunteer";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Volunteer />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
