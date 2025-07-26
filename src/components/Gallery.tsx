import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Users, Heart, Leaf } from "lucide-react";

const Gallery = () => {
  // Placeholder images - in a real app, these would be actual event photos
  const galleryImages = {
    treeDrives: [
      { id: 1, title: "Community Tree Plantation", description: "Students planting saplings together", category: "tree-drives" },
      { id: 2, title: "Green Campus Initiative", description: "University students creating a green campus", category: "tree-drives" },
      { id: 3, title: "Monsoon Plantation Drive", description: "Large scale tree plantation during monsoon", category: "tree-drives" },
      { id: 4, title: "Urban Forestry Project", description: "Creating green spaces in urban areas", category: "tree-drives" }
    ],
    eyeCamps: [
      { id: 5, title: "Free Eye Check-up Camp", description: "Doctors conducting eye examinations", category: "eye-camps" },
      { id: 6, title: "Children's Vision Screening", description: "Eye tests for school children", category: "eye-camps" },
      { id: 7, title: "Senior Citizens Health Camp", description: "Eye care for elderly community members", category: "eye-camps" },
      { id: 8, title: "Rural Health Outreach", description: "Mobile eye clinic in rural areas", category: "eye-camps" }
    ],
    bloodCamps: [
      { id: 9, title: "Health Awareness Camp", description: "Blood tests and health screening", category: "blood-camps" },
      { id: 10, title: "Diabetes Screening Drive", description: "Free blood sugar testing for community", category: "blood-camps" },
      { id: 11, title: "Community Health Check", description: "Comprehensive blood test camp", category: "blood-camps" },
      { id: 12, title: "Student Health Initiative", description: "Health screening for college students", category: "blood-camps" }
    ]
  };

  const allImages = [...galleryImages.treeDrives, ...galleryImages.eyeCamps, ...galleryImages.bloodCamps];

  const stats = [
    { icon: Camera, label: "Photos Captured", value: "500+" },
    { icon: Users, label: "People Served", value: "2000+" },
    { icon: Heart, label: "Lives Touched", value: "1500+" },
    { icon: Leaf, label: "Trees Planted", value: "1000+" }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness the power of community action through our photo gallery. Every image tells 
            a story of hope, care, and positive transformation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Photos</TabsTrigger>
            <TabsTrigger value="tree-drives">Tree Drives</TabsTrigger>
            <TabsTrigger value="eye-camps">Eye Camps</TabsTrigger>
            <TabsTrigger value="blood-camps">Blood Tests</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allImages.map((image) => (
                <Card key={image.id} className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="relative aspect-square bg-gradient-to-br from-nature-light to-sky-light p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-nature mx-auto mb-3" />
                      <Badge 
                        variant="secondary" 
                        className={`${
                          image.category === 'tree-drives' ? 'bg-gradient-nature text-white' :
                          image.category === 'eye-camps' ? 'bg-gradient-sky text-white' :
                          'bg-health text-white'
                        }`}
                      >
                        {image.category.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                        View Photo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tree-drives" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.treeDrives.map((image) => (
                <Card key={image.id} className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="relative aspect-square bg-gradient-to-br from-nature-light to-nature p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Leaf className="h-12 w-12 text-nature-dark mx-auto mb-3" />
                      <Badge className="bg-gradient-nature text-white">
                        Tree Plantation
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                        View Photo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="eye-camps" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.eyeCamps.map((image) => (
                <Card key={image.id} className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="relative aspect-square bg-gradient-to-br from-sky-light to-sky p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-sky mx-auto mb-3" />
                      <Badge className="bg-gradient-sky text-white">
                        Eye Care
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                        View Photo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blood-camps" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.bloodCamps.map((image) => (
                <Card key={image.id} className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="relative aspect-square bg-gradient-to-br from-red-100 to-health/20 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-12 w-12 text-health mx-auto mb-3" />
                      <Badge className="bg-health text-white">
                        Health Testing
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" size="sm" className="bg-white/90 hover:bg-white">
                        View Photo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-card mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Be Part of Our Next Story
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every photo in our gallery represents lives touched and positive change created. 
            Join us and be part of the next chapter in our journey of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="nature" size="lg">
              Join Our Next Event
            </Button>
            <Button variant="outline" size="lg">
              Share Your Photos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;