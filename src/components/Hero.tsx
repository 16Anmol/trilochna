import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Activity, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students planting trees and doctors conducting health camps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            NAMISHARANYA
          </h1>
          <p className="text-lg md:text-xl mb-3 font-medium">
            A Community for Green & Sustainable Living
          </p>
          <p className="text-base md:text-lg mb-6 opacity-90 max-w-xl mx-auto">
            Planting Trees. Empowering Youth. Empowering Women.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button variant="nature" className="text-base px-6 py-3" onClick={() => window.open('/get-involved', '_blank')}>
              Join as Volunteer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="sky" className="text-base px-6 py-3" onClick={() => window.open('/coming-soon', '_blank')}>
              Upcoming Events
            </Button>
            
            <Button variant="outline" className="text-base px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              See Our Impact
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
     
    </section>
  );
};

export default Hero;