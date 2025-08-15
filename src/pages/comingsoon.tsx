import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-light/30 to-sky-light/30 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-nature mb-6">
            Coming Soon
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Events Calendar
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We're working hard to bring you an amazing events calendar. 
            Stay tuned for exciting tree plantation drives, youth empowerment workshops, 
            and women empowerment programs!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/our-work">
              <Button variant="nature" size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Our Work
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;