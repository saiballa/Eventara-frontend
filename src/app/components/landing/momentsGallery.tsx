export interface GalleryImagesType{
    id:number;
    image:string;
}

export default function MomentsGallerySection() {
    
  const galleryImages:GalleryImagesType[] = [
    { id: 1, image: "/images/moment-1.png" },
    { id: 2, image: "/images/moment-2.png" },
    { id: 3, image: "/images/moment-3.png" },
    { id: 4, image: "/images/moment-4.png" },
    { id: 5, image: "/images/moment-5.png" },
  ];
  return (
    <>
      <section className="py-2 overflow-hidden bg-white">
        <div className="text-center mb-14">
          <h2 className="oswald-semibold text-[36px] md:text-[44px] lg:text-[64px]">
            Moments That <br />
            Made Memories
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gallery-track gap-5">
            {/* First Set */}
            {galleryImages.map((image) => (
              <div
                key={`first-${image.id}`}
                className="shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] rounded-3xl overflow-hidden"
              >
                <img
                  src={image.image}
                  alt={`Moment ${image.id}`}
                  className="w-full h-[340px] object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

            {/* Duplicate Set */}
            {galleryImages.map((image) => (
              <div
                key={`second-${image.id}`}
                className="shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] rounded-3xl overflow-hidden"
              >
                <img
                  src={image.image}
                  alt={`Moment ${image.id}`}
                  className="w-full h-[340px] object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
