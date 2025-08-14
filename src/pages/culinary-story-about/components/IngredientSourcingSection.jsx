import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const IngredientSourcingSection = () => {
  const [activeSupplier, setActiveSupplier] = useState(0);

  const suppliers = [
    {
      id: 1,
      name: "Green Valley Organic Farm",
      location: "Sonoma County, CA",
      specialty: "Organic Vegetables & Herbs",
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800",
      partnership: "5 years",
      testimonial: "Working with Savoria has been incredible. Chef Isabella truly understands the value of fresh, seasonal produce and respects our farming practices.",
      owner: "Maria Rodriguez",
      products: ["Heirloom Tomatoes", "Fresh Basil", "Seasonal Greens", "Root Vegetables"]
    },
    {
      id: 2,
      name: "Pacific Coast Seafood Co.",
      location: "Monterey Bay, CA",
      specialty: "Sustainable Seafood",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      partnership: "3 years",
      testimonial: "Savoria\'s commitment to sustainable sourcing aligns perfectly with our mission. They understand the importance of responsible fishing practices.",
      owner: "Captain James Wilson",
      products: ["Wild Salmon", "Dungeness Crab", "Local Rockfish", "Seasonal Shellfish"]
    },
    {
      id: 3,
      name: "Artisan Cheese Collective",
      location: "Petaluma, CA",
      specialty: "Handcrafted Cheeses",
      image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=800",
      partnership: "4 years",
      testimonial: "Chef Isabella has an exceptional palate for cheese. She selects varieties that perfectly complement her seasonal menus.",
      owner: "Sophie Laurent",
      products: ["Aged Goat Cheese", "Truffle Brie", "Seasonal Cheddars", "Fresh Mozzarella"]
    }
  ];

  const seasonalCalendar = [
    {
      season: "Spring",
      icon: "Flower2",
      color: "text-green-600",
      bgColor: "bg-green-50",
      ingredients: ["Asparagus", "Peas", "Spring Onions", "Fresh Herbs", "Artichokes", "Strawberries"]
    },
    {
      season: "Summer",
      icon: "Sun",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      ingredients: ["Tomatoes", "Zucchini", "Corn", "Stone Fruits", "Berries", "Bell Peppers"]
    },
    {
      season: "Fall",
      icon: "Leaf",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      ingredients: ["Squash", "Pumpkins", "Apples", "Root Vegetables", "Mushrooms", "Brussels Sprouts"]
    },
    {
      season: "Winter",
      icon: "Snowflake",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      ingredients: ["Citrus", "Cabbage", "Leeks", "Potatoes", "Winter Greens", "Pomegranates"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Icon name="Sprout" size={18} />
            <span className="font-body font-medium text-sm">Farm to Table</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Ingredient Sourcing
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            We partner with local farms and artisans who share our commitment to quality, sustainability, and authentic flavors. Every ingredient tells a story of passion and craftsmanship.
          </p>
        </div>

        {/* Supplier Partnerships */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">
            Our Trusted Partners
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Supplier Images */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-brand h-[400px]">
                <Image
                  src={suppliers?.[activeSupplier]?.image}
                  alt={suppliers?.[activeSupplier]?.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Supplier Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-2xl font-heading font-bold mb-2">
                    {suppliers?.[activeSupplier]?.name}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={16} />
                      <span>{suppliers?.[activeSupplier]?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{suppliers?.[activeSupplier]?.partnership} partnership</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Supplier Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {suppliers?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSupplier(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeSupplier 
                        ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Supplier Details */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {suppliers?.[activeSupplier]?.name}
                </h4>
                <p className="text-lg text-secondary font-body font-medium mb-4">
                  {suppliers?.[activeSupplier]?.specialty}
                </p>
                
                {/* Testimonial */}
                <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-secondary/5 rounded-r-lg mb-6">
                  <p className="text-foreground font-body italic leading-relaxed mb-3">
                    "{suppliers?.[activeSupplier]?.testimonial}"
                  </p>
                  <cite className="text-muted-foreground font-body text-sm">
                    — {suppliers?.[activeSupplier]?.owner}, {suppliers?.[activeSupplier]?.name}
                  </cite>
                </blockquote>
              </div>

              {/* Products */}
              <div>
                <h5 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Featured Products
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  {suppliers?.[activeSupplier]?.products?.map((product, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-background p-3 rounded-lg">
                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partnership Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-heading font-bold text-accent mb-1">
                    {suppliers?.[activeSupplier]?.partnership}
                  </div>
                  <div className="text-sm font-body text-muted-foreground">Partnership</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-heading font-bold text-accent mb-1">100%</div>
                  <div className="text-sm font-body text-muted-foreground">Sustainable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Calendar */}
        <div>
          <h3 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">
            Seasonal Sourcing Calendar
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCalendar?.map((season, index) => (
              <div key={index} className={`${season?.bgColor} p-6 rounded-xl border border-border/50`}>
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${season?.color} bg-white rounded-full mb-4 shadow-subtle`}>
                    <Icon name={season?.icon} size={32} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground">
                    {season?.season}
                  </h4>
                </div>
                
                <div className="space-y-2">
                  {season?.ingredients?.map((ingredient, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${season?.color?.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                      <span className="font-body text-sm text-foreground">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 text-center bg-background p-8 lg:p-12 rounded-2xl shadow-subtle">
          <Icon name="Heart" size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
            Our Sourcing Commitment
          </h3>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            We believe that exceptional cuisine begins with exceptional ingredients. Our partnerships with local farmers and artisans ensure that every dish reflects our commitment to quality, sustainability, and community support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientSourcingSection;