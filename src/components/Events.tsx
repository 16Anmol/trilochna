import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Tree Plantation Drive",
      date: "August 15, 2024",
      time: "7:00 AM - 12:00 PM",
      location: "Central Park, Sector 15",
      type: "Tree Plantation",
      participants: "50+ volunteers needed",
      description: "Join us for a massive tree plantation drive to celebrate Independence Day by giving back to Mother Earth.",
      status: "Open",
      color: "nature"
    },
    {
      id: 2,
      title: "Free Eye Check-up Camp",
      date: "August 22, 2024", 
      time: "9:00 AM - 4:00 PM",
      location: "Community Health Center, Block A",
      type: "Health Camp",
      participants: "20+ volunteers needed",
      description: "Comprehensive eye examinations by certified ophthalmologists for all age groups, completely free of cost.",
      status: "Open",
      color: "sky"
    },
    {
      id: 3,
      title: "Blood Test & Awareness Camp",
      date: "September 5, 2024",
      time: "8:00 AM - 2:00 PM", 
      location: "City Hospital Premises",
      type: "Health Camp",
      participants: "25+ volunteers needed",
      description: "Free blood tests including diabetes screening, cholesterol checks, and basic health parameter monitoring.",
      status: "Open",
      color: "health"
    }
  ];

  const pastEvents = [
    {
      title: "Monsoon Tree Plantation",
      date: "July 20, 2024",
      location: "Green Valley Park",
      impact: "150 trees planted",
      volunteers: "65 participants"
    },
    {
      title: "Summer Health Camp",
      date: "June 15, 2024", 
      location: "Municipal School",
      impact: "200+ people screened",
      volunteers: "40 participants"
    },
    {
      title: "World Environment Day Drive",
      date: "June 5, 2024",
      location: "Various Locations",
      impact: "300 trees planted",
      volunteers: "100+ participants"
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our upcoming activities and be part of positive change. Together, we create 
            lasting impact in our communities through meaningful action.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-foreground">Upcoming Events</h3>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge 
                      variant={event.color === 'nature' ? 'default' : 'secondary'}
                      className={`${
                        event.color === 'nature' ? 'bg-gradient-nature text-white' :
                        event.color === 'sky' ? 'bg-gradient-sky text-white' :
                        'bg-health text-white'
                      }`}
                    >
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <Button 
                    variant={event.color as any} 
                    className="w-full"
                  >
                    Register for Event
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">Past Events & Impact</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Impact:</span>
                      <span className="text-sm text-nature font-semibold">{event.impact}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Volunteers:</span>
                      <span className="text-sm text-sky font-semibold">{event.volunteers}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-nature rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Don't Miss Our Next Event!
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Stay updated with our latest events and be the first to know about new opportunities 
            to make a difference in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Subscribe to Updates
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;