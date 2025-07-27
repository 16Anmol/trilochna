import Header from "@/components/Header";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const GetInvolved = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Volunteer />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;