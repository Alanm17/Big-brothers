import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Where Every Meal Tells a Story",
      subtitle: "Experience culinary artistry where tradition meets innovation",
      cta: "Discover Our Menu",
    },
    {
      id: 2,
      image:
        "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1920.jpg",
      title: "Crafted with Passion, Served with Warmth",
      subtitle: "Each dish is a masterpiece of flavor and presentation",
      cta: "Reserve Your Table",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&h=1080&q=80",
      title: "Your Neighborhood Destination",
      subtitle: "Creating extraordinary dining experiences since 2018",
      cta: "Our Story",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleCTAClick = (slideIndex) => {
    switch (slideIndex) {
      case 0:
        navigate("/interactive-menu-experience");
        break;
      case 1:
        navigate("/culinary-story-about");
        break;
      default:
        navigate("/interactive-menu-experience");
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Hero Slides */}
      <div className="relative w-full h-full">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide?.image}
                alt={slide?.title}
                className="w-full h-full object-cover"
              />
              {/* Warm Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-accent/30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6 max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in">
                    {slide?.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-body animate-fade-in">
                    {slide?.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                    <Button
                      variant="default"
                      size="lg"
                      onClick={() => handleCTAClick(index)}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold shadow-brand px-8 py-4"
                      iconName="ChefHat"
                      iconPosition="left"
                    >
                      {slide?.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm font-body mb-2">Scroll</span>
          <Icon name="ChevronDown" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
