import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      category: "Programs",
      title: "Kofia Making Program",
      src: "/gallery/kofia-program.jpg",
      description: "Participants learning traditional Swahili hat-making techniques"
    },
    {
      id: 2,
      category: "Programs",
      title: "Henna Art Program",
      src: "/gallery/Henna-art-program.jpg",
      description: "Students practicing traditional Swahili henna designs"
    },
    {
      id: 3,
      category: "Programs",
      title: "Swahili Kitchen Apprenticeship",
      src: "/gallery/kitchen-app.jpg",
      description: "Young chefs learning authentic coastal recipes"
    }
  ];

  const categories = ["All", "Our Events", "Crafts in Action", "Programs"];
  const [selectedCategory, setSelectedCategory] = useState("Programs"); // Default to Programs

  const filteredImages = selectedCategory === "All" 
    ? [] // Empty for now
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
            Explore the vibrant moments, traditional crafts, and community spirit that define Mila Zetu
          </p>

          {/* Category Filter - All buttons remain */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-orange-600 hover:bg-orange-700 text-white" 
                  : "border-orange-300 text-orange-700 hover:bg-orange-100"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Only shows Programs by default */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm bg-orange-600 px-2 py-1 rounded">{image.category}</span>
                    <h3 className="text-lg font-semibold mt-2">{image.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-orange-600 font-medium">{image.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{image.title}</h3>
                  <p className="text-amber-700 text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            selectedCategory !== "Programs" && (
              <div className="col-span-3 text-center py-12">
                <p className="text-amber-700">No images available in this category yet</p>
              </div>
            )
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Want to Be Featured?</h2>
          <p className="text-lg text-amber-800 mb-6 max-w-3xl mx-auto">
            Join our programs and become part of the Mila Zetu story. Every workshop, event, 
            and cultural gathering creates new memories and strengthens our community bonds.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Get Involved Today
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Gallery;