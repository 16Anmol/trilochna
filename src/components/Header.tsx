import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/ourwork" },
    { name: "Get Involved", href: "/getinvolved" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-soft z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-nature bg-clip-text text-transparent">
              NAMISHARANYA
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">
              Green & Healthy Living
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    location.pathname === item.href
                      ? "text-nature bg-nature-light"
                      : "text-foreground hover:text-nature hover:bg-nature-light"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/getinvolved">
              <Button variant="nature" size="sm">
                Join as Volunteer
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-b-lg shadow-soft">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                    location.pathname === item.href
                      ? "text-nature bg-nature-light"
                      : "text-foreground hover:text-nature hover:bg-nature-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/getinvolved">
                  <Button variant="nature" size="sm" className="w-full">
                    Join as Volunteer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;