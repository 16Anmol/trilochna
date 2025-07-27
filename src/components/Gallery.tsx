const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=600&fit=crop",
      alt: "Volunteers planting trees in forest",
      height: "h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=500&fit=crop",
      alt: "Sunlight through green trees",
      height: "h-56"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=700&fit=crop",
      alt: "Community tree planting initiative",
      height: "h-72"
    },
    {
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=550&fit=crop",
      alt: "Trees near rocky mountain landscape",
      height: "h-60"
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=650&fit=crop",
      alt: "Forest conservation efforts",
      height: "h-68"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=480&fit=crop",
      alt: "Environmental awareness campaign",
      height: "h-52"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=580&fit=crop",
      alt: "Nature preservation volunteers",
      height: "h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=520&fit=crop",
      alt: "Green environment initiative",
      height: "h-56"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=600&fit=crop",
      alt: "Community garden project",
      height: "h-64"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Our Community in Action
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            See our volunteers making a difference through tree plantation, health camps, and community service
          </p>
        </div>
        
        {/* Pinterest-style masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
          {images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid mb-3 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.height} object-cover group-hover:scale-105 transition-transform duration-300`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;