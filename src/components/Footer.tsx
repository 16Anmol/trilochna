import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Mail, Instagram, Facebook, Leaf } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Join", href: "#volunteer" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nature-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Trilochna</h3>
                <p className="text-sm opacity-80">Green & Healthy Living</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              Empowering communities through tree plantation, healthcare initiatives, and youth engagement. 
              Together, we're building a sustainable future where both nature and humanity thrive.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>trilochna.ngo@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <p>Join our mission:</p>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <p>© {currentYear} Trilochna NGO. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for a better tomorrow</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-6 pt-6 border-t border-white/20 text-center">
          <p className="text-white/90 italic">
            "Planting Trees. Saving Lives. Empowering Youth."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;