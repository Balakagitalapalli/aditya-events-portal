const Gallery = () => {
  const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery13.jpeg",
    "/images/gallery14.jpeg",
    "/images/gallery15.jpeg",
    "/images/gallery16.jpeg",
    "/images/gallery17.jpeg",
    "/images/gallery18.jpeg",
    "/images/gallery19.jpeg",
    "/images/gallery17.jpeg",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png",
    "/images/gallery8.png",
    "/images/gallery9.png",
    "/images/gallery10.png",
    "/images/gallery11.png",
    "/images/gallery12.png",
  ];

  return (
    <section className="bg-gray-100 py-16 px-8 rounded-3xl mx-6 mt-10 shadow-sm">
      
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Capturing <span className="text-purple-600">Memories</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Browse through our event gallery to see highlights from past events,
          winning moments, and the incredible energy of our community.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="event"
            className="rounded-xl shadow-md hover:scale-105 transition duration-300 cursor-pointer"
          />
        ))}
      </div>

    </section>
  );
};

export default Gallery;
