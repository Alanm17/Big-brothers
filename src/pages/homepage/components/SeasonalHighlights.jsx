import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const SeasonalHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const seasonalDishes = [
    {
      id: 1,
      name: "Autumn Harvest Risotto",
      description:
        "Creamy arborio rice with roasted butternut squash, wild mushrooms, and aged parmesan. Finished with truffle oil and fresh sage from our herb garden.",
      price: "$28",
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      chef: "Chef Marcus",
      technique: "Slow-stirred for 18 minutes",
      ingredients: [
        "Organic butternut squash",
        "Wild porcini mushrooms",
        "24-month aged parmesan",
        "Black truffle oil",
      ],
      dietary: ["Vegetarian", "Gluten-free option available"],
      season: "Fall Special",
    },
    {
      id: 2,
      name: "Pan-Seared Atlantic Salmon",
      description:
        "Fresh Atlantic salmon with lemon herb crust, served with roasted seasonal vegetables and saffron beurre blanc sauce.",
      price: "$34",
      image:
        "https://images.pixabay.com/photo/2014/11/05/15/57/salmon-518032_800.jpg",
      chef: "Chef Isabella",
      technique: "Perfectly seared, finished in oven",
      ingredients: [
        "Wild-caught Atlantic salmon",
        "Organic lemon zest",
        "Fresh herbs",
        "Spanish saffron",
      ],
      dietary: ["Gluten-free", "Keto-friendly"],
      season: "Chef's Signature",
    },
    {
      id: 3,
      name: "Braised Short Rib",
      description:
        "48-hour braised beef short rib with red wine reduction, garlic mashed potatoes, and roasted root vegetables.",
      price: "$42",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&h=600&q=80",
      chef: "Chef Marcus",
      technique: "48-hour slow braise",
      ingredients: [
        "Prime beef short rib",
        "Bordeaux red wine",
        "Yukon gold potatoes",
        "Heirloom carrots",
      ],
      dietary: ["Gluten-free"],
      season: "Winter Comfort",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % seasonalDishes?.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + seasonalDishes?.length) % seasonalDishes?.length
    );
  };

  const currentDish = seasonalDishes?.[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={20} className="text-accent" />
            <span className="text-accent font-body font-medium">
              Seasonal Highlights
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Chef's Featured Creations
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our carefully crafted seasonal dishes, featuring the finest
            ingredients and time-honored techniques
          </p>
        </div>

        {/* Featured Dish Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dish Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-brand">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={currentDish?.image}
                  alt={currentDish?.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Season Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-body font-medium">
                  {currentDish?.season}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-brand transition-all duration-200 hover:scale-110"
              >
                <Icon name="ChevronLeft" size={24} className="text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-brand transition-all duration-200 hover:scale-110"
              >
                <Icon name="ChevronRight" size={24} className="text-primary" />
              </button>
            </div>

            {/* Dish Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {currentDish?.name}
                  </h3>
                  <span className="text-2xl font-heading font-bold text-accent">
                    {currentDish?.price}
                  </span>
                </div>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  {currentDish?.description}
                </p>
              </div>

              {/* Chef & Technique */}
              <div className="flex items-center space-x-6 py-4 border-y border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="ChefHat" size={20} className="text-primary" />
                  <span className="font-body font-medium text-foreground">
                    {currentDish?.chef}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="font-body text-muted-foreground">
                    {currentDish?.technique}
                  </span>
                </div>
              </div>

              {/* Key Ingredients */}
              <div>
                <h4 className="font-body font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Leaf" size={18} className="text-secondary mr-2" />
                  Key Ingredients
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentDish?.ingredients?.map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm font-body text-muted-foreground">
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dietary Information */}
              <div className="flex flex-wrap gap-2">
                {currentDish?.dietary?.map((diet, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-body font-medium rounded-full"
                  >
                    {diet}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="default"
                  onClick={() => navigate("/interactive-menu-experience")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                  iconName="Menu"
                  iconPosition="left"
                >
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {seasonalDishes?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlights;
