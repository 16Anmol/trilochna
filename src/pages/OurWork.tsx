import Header from "@/components/Header";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const OurWork = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Activities />
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;