import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WineSection = ({ wines, onAddToOrder }) => {
  const [selectedType, setSelectedType] = useState('all');

  const wineTypes = [
    { id: 'all', name: 'All Wines', icon: 'Wine' },
    { id: 'red', name: 'Red Wines', icon: 'Grape' },
    { id: 'white', name: 'White Wines', icon: 'Droplets' },
    { id: 'sparkling', name: 'Sparkling', icon: 'Sparkles' },
    { id: 'dessert', name: 'Dessert Wines', icon: 'Cake' }
  ];

  const filteredWines = selectedType === 'all' 
    ? wines 
    : wines?.filter(wine => wine?.type === selectedType);

  return (
    <div className="bg-card rounded-xl p-8 shadow-brand">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Wine & Beverage Selection
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Curated by our sommelier to perfectly complement your dining experience
        </p>
      </div>
      {/* Wine Type Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {wineTypes?.map((type) => (
          <Button
            key={type?.id}
            variant={selectedType === type?.id ? "default" : "outline"}
            onClick={() => setSelectedType(type?.id)}
            iconName={type?.icon}
            iconPosition="left"
            className={`${
              selectedType === type?.id 
                ? 'bg-accent text-accent-foreground shadow-brand' 
                : 'hover:bg-accent/10 hover:text-accent'
            }`}
          >
            {type?.name}
          </Button>
        ))}
      </div>
      {/* Wine Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWines?.map((wine) => (
          <div
            key={wine?.id}
            className="bg-background rounded-lg p-6 shadow-subtle hover:shadow-brand transition-all duration-300 hover:scale-105"
          >
            {/* Wine Image */}
            <div className="relative h-32 mb-4 overflow-hidden rounded-lg">
              <Image
                src={wine?.image}
                alt={wine?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-body font-semibold">
                ${wine?.price}
              </div>
            </div>

            {/* Wine Details */}
            <div className="mb-4">
              <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                {wine?.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-2">
                {wine?.region} • {wine?.year}
              </p>
              <p className="text-sm text-foreground font-body">
                {wine?.description}
              </p>
            </div>

            {/* Tasting Notes */}
            <div className="mb-4">
              <h4 className="text-sm font-body font-semibold text-foreground mb-2">
                Tasting Notes:
              </h4>
              <div className="flex flex-wrap gap-1">
                {wine?.tastingNotes?.map((note, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-body rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Food Pairings */}
            {wine?.foodPairings && (
              <div className="mb-4">
                <h4 className="text-sm font-body font-semibold text-foreground mb-2">
                  Pairs Well With:
                </h4>
                <p className="text-xs text-muted-foreground font-body">
                  {wine?.foodPairings?.join(', ')}
                </p>
              </div>
            )}

            {/* Sommelier Rating */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span className="text-sm font-body font-medium text-foreground">
                  Sommelier Rating
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < wine?.rating ? 'text-accent fill-current' : 'text-muted-foreground'}
                  />
                ))}
              </div>
            </div>

            {/* Add to Order Button */}
            <Button
              variant="default"
              fullWidth
              onClick={() => onAddToOrder(wine)}
              iconName="Plus"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand"
            >
              Add to Order
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineSection;