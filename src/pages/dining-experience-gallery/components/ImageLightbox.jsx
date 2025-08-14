import React, { useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImageLightbox = ({ 
  image, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  currentIndex, 
  totalImages 
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e?.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
      >
        <Icon name="X" size={24} color="white" />
      </button>
      {/* Navigation Buttons */}
      {totalImages > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <Icon name="ChevronLeft" size={24} color="white" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <Icon name="ChevronRight" size={24} color="white" />
          </button>
        </>
      )}
      {/* Image Container */}
      <div className="max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-full max-h-full">
          <Image
            src={image?.src}
            alt={image?.alt}
            className="max-w-full max-h-[70vh] object-contain"
          />
          
          {/* Image Info */}
          <div className="p-6 bg-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {image?.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {image?.description}
                </p>
                
                {image?.details && (
                  <div className="space-y-2">
                    {image?.chef && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="ChefHat" size={16} className="mr-2" />
                        <span>Chef: {image?.chef}</span>
                      </div>
                    )}
                    {image?.ingredients && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Leaf" size={16} className="mr-2" />
                        <span>Key Ingredients: {image?.ingredients}</span>
                      </div>
                    )}
                    {image?.occasion && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        <span>Occasion: {image?.occasion}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="ml-4 text-right">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                  {image?.categoryName}
                </span>
                <div className="text-sm text-muted-foreground">
                  {currentIndex} of {totalImages}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Heart"
                  iconPosition="left"
                  className="text-muted-foreground hover:text-primary"
                >
                  Save
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                  className="text-muted-foreground hover:text-primary"
                >
                  Share
                </Button>
              </div>
              
              {image?.category === 'food' && (
                <Button
                  variant="default"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Order This Dish
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
};

export default ImageLightbox;