import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-nature-light/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About NAMISHARANYA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate community dedicated to creating a greener planet and healthier society, 
            one tree and one life at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
  NAMISHARANYA is a newly formed NGO driven by a simple yet powerful belief: 
  that even small actions can spark meaningful change. 
  We have begun our journey with a vision to contribute towards environmental care, 
  youth growth, and women empowerment.
</p>
<p className="text-base text-muted-foreground leading-relaxed">
  While our work is just beginning, we are committed to making a difference through 
  initiatives like tree plantation drives, skill-building workshops for youth, 
  and programs that support women in achieving financial and social independence.
</p>
<p className="text-base text-muted-foreground leading-relaxed">
  Our aim is to create a community of volunteers who share a passion for service, 
  learning, and creating a better future — step by step, together.
</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Environmental Care</h4>
                <p className="text-sm text-muted-foreground">Protecting our planet through sustainable practices</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-gradient-sky rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Women Empowerment</h4>
                <p className="text-sm text-muted-foreground">Empowering women through skill development and support</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-health rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Youth Empowerment</h4>
                <p className="text-sm text-muted-foreground">Building tomorrow's leaders through service</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-nature-dark rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Impact Driven</h4>
                <p className="text-sm text-muted-foreground">Measuring success through positive change</p>
              </CardContent>
            </Card>
          </div>
        </div>

       <div className="text-center bg-white rounded-2xl p-6 shadow-card">
  <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Mission</h3>
  <p className="text-lg text-muted-foreground mb-6">
    Together, we can create a sustainable future where both nature and humanity thrive. 
    Every volunteer makes a difference, and every action counts towards our shared vision.
  </p>
  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
    <span className="bg-nature-light px-4 py-2 rounded-full shadow-sm">🌱 Tree Plantation</span>
    <span className="bg-sky-light px-4 py-2 rounded-full shadow-sm">💡 Youth Empowerment</span>
    <span className="bg-secondary px-4 py-2 rounded-full shadow-sm">👩‍🦱 Women Empowerment</span>
    <span className="bg-muted px-4 py-2 rounded-full shadow-sm">🤝 Community Service</span>
  </div>
</div>
      
      </div>
    </section>
  );
};

export default About;