import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import treeIcon from "@/assets/tree-icon.jpg";
import eyeIcon from "@/assets/eye-icon.jpg";
import bloodIcon from "@/assets/blood-icon.jpg";

const Activities = () => {
  const activities = [
    {
      title: "Tree Plantation",
      description: "We will organize regular tree plantation drives across communities, helping combat climate change while creating beautiful green spaces for everyone to enjoy.",
      benefits: [
        "Combat air pollution",
        "Create oxygen-rich environments", 
        "Prevent soil erosion",
        "Provide habitat for wildlife",
        "Build community connections"
      ],
      icon: treeIcon,
      color: "nature",
      bgGradient: "bg-gradient-nature"
    },
    {
      title: "Youth Empowerment",
      description: "Empowering young minds through skill development workshops, leadership training, and educational programs designed to build confidence and create future leaders.",
      benefits: [
        "Leadership skill development",
        "Personal growth workshops",
        "Career guidance sessions",
        "Confidence building activities",
        "Peer networking opportunities"
      ],
      icon: eyeIcon,
      color: "sky",
      bgGradient: "bg-gradient-sky"
    },
    {
      title: "Women Empowerment",
      description: "Supporting women through skill development programs, awareness campaigns, and community support systems to foster independence and leadership in society.",
      benefits: [
        "Skill development training",
        "Financial literacy programs",
        "Health awareness campaigns",
        "Leadership development",
        "Community support networks"
      ],
      icon: bloodIcon,
      color: "health",
      bgGradient: "bg-health"
    }
  ];

  return (
    <section id="activities" className="py-12 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three pillars of impact: environmental conservation, youth empowerment, 
            and women empowerment working together for a sustainable future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {activities.map((activity, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-3">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <img 
                    src={activity.icon} 
                    alt={`${activity.title} icon`}
                    className="w-full h-full object-cover rounded-full shadow-soft group-hover:scale-110 transition-smooth"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {activity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${activity.bgGradient} mt-2 flex-shrink-0`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

             {/*   <Button 
                  variant={activity.color as any} 
                  className="w-full"
                >
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every activity we organize is an opportunity to create positive change. 
            Join us in our upcoming events and be part of something meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg" onClick={() => window.open('/coming-soon', '_blank')}>
              View Upcoming Events
            </Button>
            <Button variant="outline" size="lg">
              Volunteer Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;