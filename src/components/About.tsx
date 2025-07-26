import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-nature-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Trilochna
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate community dedicated to creating a greener planet and healthier society, 
            one tree and one life at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by visionary leader <strong>Tushar Dobra</strong>, Trilochna emerged from a simple yet powerful 
              belief: that small actions can create massive impact. Our journey began with a mission to bridge 
              the gap between environmental conservation and public health awareness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we stand as a beacon of hope, inspiring students and youth to become catalysts of change. 
              Through tree plantation drives, free eye check-up camps, and comprehensive blood tests, we're 
              building a community that cares for both our planet and its people.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in empowering our volunteers with meaningful experiences and official recognition 
              through participation certificates, fostering a culture of service and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Environmental Care</h4>
                <p className="text-muted-foreground">Protecting our planet through sustainable practices</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-sky rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Health First</h4>
                <p className="text-muted-foreground">Making healthcare accessible to all communities</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-health rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Youth Empowerment</h4>
                <p className="text-muted-foreground">Building tomorrow's leaders through service</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-nature-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Impact Driven</h4>
                <p className="text-muted-foreground">Measuring success through positive change</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Mission</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Together, we can create a sustainable future where both nature and humanity thrive. 
            Every volunteer makes a difference, and every action counts towards our shared vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="bg-nature-light px-4 py-2 rounded-full">Environmental Conservation</span>
            <span className="bg-sky-light px-4 py-2 rounded-full">Healthcare Access</span>
            <span className="bg-secondary px-4 py-2 rounded-full">Community Service</span>
            <span className="bg-muted px-4 py-2 rounded-full">Youth Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;