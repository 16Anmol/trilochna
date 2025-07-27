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
            Trilochna
          </h1>
          <p className="text-lg md:text-xl mb-3 font-medium">
            A Community for Green & Healthy Living
          </p>
          <p className="text-base md:text-lg mb-6 opacity-90 max-w-xl mx-auto">
            Planting Trees. Saving Lives. Empowering Youth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button variant="nature" className="text-base px-6 py-3">
              Join as Volunteer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="sky" className="text-base px-6 py-3">
              Upcoming Events
            </Button>
            <Button variant="outline" className="text-base px-6 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              See Our Impact
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">500+</h3>
              <p className="text-xs opacity-90">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">1000+</h3>
              <p className="text-xs opacity-90">Trees Planted</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">50+</h3>
              <p className="text-xs opacity-90">Health Camps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;