import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Users, Star, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Thank you for your interest. We'll contact you soon with more details.",
    });
    setFormData({ name: "", email: "", phone: "", interest: "" });
  };

  const benefits = [
    {
      icon: Award,
      title: "Official Certificate",
      description: "Receive an official Trilochna Volunteer Certificate recognizing your contribution to society."
    },
    {
      icon: Star,
      title: "Skill Development",
      description: "Gain valuable experience in community service, leadership, and environmental conservation."
    },
    {
      icon: Users,
      title: "Network Building",
      description: "Connect with like-minded individuals and build lasting friendships while making a difference."
    },
    {
      icon: Heart,
      title: "Personal Growth",
      description: "Experience the joy of giving back and develop a sense of purpose through meaningful work."
    }
  ];

  return (
    <section id="volunteer" className="py-12 bg-nature-light/20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Volunteer With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a community of passionate changemakers and be part of something bigger than yourself. 
            Your time, energy, and enthusiasm can create ripples of positive change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Why Join Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Join Trilochna?</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                As a student or young professional, volunteering with Trilochna offers you the perfect 
                opportunity to make a real impact while growing personally and professionally. We believe 
                in nurturing our volunteers and providing them with meaningful experiences that last a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-base font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-nature rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Get Your Official Certificate!</h4>
              <p className="mb-4 opacity-90">
                Every volunteer receives an official Trilochna Volunteer Certificate upon completion 
                of their service commitment. This certificate is recognized and can enhance your 
                resume and college applications.
              </p>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                View Sample Certificate
              </Button>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Register as Volunteer</CardTitle>
              <p className="text-muted-foreground text-center">
                Fill out the form below and take the first step towards making a difference
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest *</Label>
                  <Select value={formData.interest} onValueChange={(value) => setFormData({...formData, interest: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tree-plantation">Tree Plantation</SelectItem>
                      <SelectItem value="health-camps">Health Camps</SelectItem>
                      <SelectItem value="event-management">Event Management</SelectItem>
                      <SelectItem value="social-media">Social Media & Marketing</SelectItem>
                      <SelectItem value="all">All Activities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" variant="nature" size="lg" className="w-full">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By registering, you agree to our terms and conditions. We respect your privacy and 
                  will only use your information to contact you about volunteer opportunities.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of students and young professionals who are already making a difference. 
            Your journey towards creating positive change starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg">
              Join Our WhatsApp Group
            </Button>
            <Button variant="outline" size="lg">
              Contact Volunteer Coordinator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;