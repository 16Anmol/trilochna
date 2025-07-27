import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "trilochna.ngo@gmail.com",
      description: "Send us an email for any queries or collaboration opportunities"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX-XXX-XXXX",
      description: "Reach out to us directly for immediate assistance"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Community Center, Sector 21",
      description: "Drop by our office during working hours (9 AM - 6 PM)"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", href: "#", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", href: "#", color: "text-blue-600" }
  ];

  return (
    <section id="contact" className="py-12 bg-nature-light/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-16 h-16 bg-nature rounded-full"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-sky rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-10 h-10 bg-health rounded-full"></div>
        <div className="absolute bottom-32 right-8 w-18 h-18 bg-nature-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about volunteering or want to collaborate? We'd love to hear from you. 
            Get in touch and let's work together for a better tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Whether you're a student looking to volunteer, an organization interested in partnership, 
                or someone who needs our services, we're here to help. Reach out to us through any of 
                the following channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-nature rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold mb-1">{info.title}</h4>
                        <p className="text-nature font-medium mb-1">{info.details}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h4 className="text-xl font-bold text-foreground mb-4">Follow Us</h4>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest activities and connect with our community on social media.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 hover:scale-105 transition-smooth"
                  >
                    <social.icon className={`h-5 w-5 ${social.color}`} />
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              <p className="text-muted-foreground text-center">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name *</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="transition-smooth focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="transition-smooth focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Your Message *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help you or share your thoughts..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="transition-smooth focus:scale-105 resize-none"
                  />
                </div>

                <Button type="submit" variant="nature" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy and will only use your information to respond to your inquiry. 
                  Your details will not be shared with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gradient-nature rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Community Today!
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Ready to make a difference? Contact us now and take the first step towards creating 
            positive change in your community. Together, we can build a greener and healthier future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Join WhatsApp Group
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;