import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import ImageLightbox from './ImageLightbox';

const GalleryGrid = ({ images, activeCategory }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images?.filter(image => image?.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages?.findIndex(img => img?.id === selectedImage?.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages?.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages?.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages?.[newIndex]);
    setLightboxIndex(newIndex);
  };

  if (filteredImages?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="ImageOff" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
          No Images Found
        </h3>
        <p className="text-muted-foreground">
          No images available for the selected category.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages?.map((image, index) => (
          <div
            key={image?.id}
            className="group relative bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-brand transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(image, index)}
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={image?.src}
                alt={image?.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-heading font-semibold mb-1">
                  {image?.title}
                </h4>
                <p className="text-white/80 text-sm">
                  {image?.description}
                </p>
              </div>
              
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="ZoomIn" size={20} color="white" />
                </div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                {image?.categoryName}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeLightbox}
          onNext={() => navigateLightbox('next')}
          onPrev={() => navigateLightbox('prev')}
          currentIndex={lightboxIndex + 1}
          totalImages={filteredImages?.length}
        />
      )}
    </>
  );
};

export default GalleryGrid;