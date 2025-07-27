const Gallery = () => {
  const images = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/5e1757499c657c3f76c16443/9af44282-a2c5-44de-8e4f-d98786049bda/kids%2Bplanting%2Ba%2Btree.JPG",
      alt: "Volunteers planting trees in forest",
      height: "h-64"
    },
    {
      src: "https://regencyhealthcare.in/wp-content/uploads/2018/08/blood-donation-3.png",
      alt: "Blood Donation Camp",
      height: "h-64"
    },
    {
      src: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/11/15/Photos/Processed/WSSAUWIN-kipC--621x414@LiveMint.jpg",
      alt: "Community road cleaning initiative",
      height: "h-72"
    },
    {
      src: "https://media.istockphoto.com/id/584597924/vector/community-cleaning-on-the-roadside.jpg?s=612x612&w=0&k=20&c=ZnNURd8IFuunkGquauePacvT-p8kFHEmQEndb1khj0s=",
      alt: "Clipart",
      height: "h-60"
    },
    {
      src: "https://images.stockcake.com/public/9/f/7/9f753cc2-3e29-4bab-a019-79e4e7349b2d_large/community-gardening-activity-stockcake.jpg",
      alt: "Forest conservation efforts",
      height: "h-58"
    },
    {
      src: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/06/GettyImages-465489053_header-1024x575.jpg?w=1155&h=1528",
      alt: "Blood donation awareness campaign",
      height: "h-52"
    },
    {
      src: "https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg",
      alt: "Nature preservation volunteers",
      height: "h-64"
    },
    {
      src: "https://media.slidesgo.com/storage/22798018/conversions/0-drugs-awareness-workshop-thumb.jpg",
      alt: "Drugs Awareness initiative",
      height: "h-56"
    },
    {
      src: "https://pbs.twimg.com/media/GY8KZGYbkAARAjh?format=jpg&name=large",
      alt: "Community project",
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
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-3 space-y-3">
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