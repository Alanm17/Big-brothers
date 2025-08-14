import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const MenuItem = ({ item, onAddToOrder }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getDietaryIcon = (dietary) => {
    const icons = {
      vegetarian: { icon: "Leaf", color: "text-secondary" },
      vegan: { icon: "Sprout", color: "text-secondary" },
      "gluten-free": { icon: "Shield", color: "text-accent" },
      "dairy-free": { icon: "Milk", color: "text-primary" },
    };
    return icons?.[dietary] || { icon: "Info", color: "text-muted-foreground" };
  };

  return (
    <div
      className={`bg-card rounded-xl overflow-hidden shadow-brand transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        isExpanded ? "ring-2 ring-primary/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item?.image}
          alt={item?.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />

        {/* Seasonal Badge */}
        {item?.seasonal && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-body font-semibold shadow-brand">
            <Icon name="Calendar" size={14} className="inline mr-1" />
            Seasonal
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-lg font-heading font-bold shadow-brand">
          ${item?.price}
        </div>

        {/* Dietary Indicators */}
        {item?.dietary && item?.dietary?.length > 0 && (
          <div className="absolute bottom-3 left-3 flex space-x-2">
            {item?.dietary?.map((diet) => {
              const { icon, color } = getDietaryIcon(diet);
              return (
                <div
                  key={diet}
                  className="bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-brand"
                  title={diet?.charAt(0)?.toUpperCase() + diet?.slice(1)}
                >
                  <Icon name={icon} size={16} className={color} />
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {item?.name}
          </h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            {item?.description}
          </p>
        </div>

        {/* Chef's Note (Hover Reveal) */}
        {item?.chefNote && (
          <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <div className="flex items-start space-x-3">
              <Icon name="ChefHat" size={20} className="text-primary mt-1" />
              <div>
                <p className="text-sm font-body font-semibold text-primary mb-1">
                  Chef's Note
                </p>
                <p className="text-sm text-foreground font-body">
                  {item?.chefNote}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Wine Pairing */}

        {/* Ingredients Preview */}
        {item?.ingredients && (
          <div className="mb-4">
            <p className="text-sm font-body font-semibold text-foreground mb-2">
              Key Ingredients:
            </p>
            <div className="flex flex-wrap gap-2">
              {item?.ingredients?.slice(0, 4)?.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-body rounded-full"
                >
                  {ingredient}
                </span>
              ))}
              {item?.ingredients?.length > 4 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full">
                  +{item?.ingredients?.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            className="hover:bg-primary/5 hover:text-primary"
          >
            {isExpanded ? "Less Info" : "More Info"}
          </Button>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-border animate-fade-in">
            {/* Full Ingredients List */}
            {item?.ingredients && (
              <div className="mb-4">
                <h4 className="font-body font-semibold text-foreground mb-2">
                  Complete Ingredients:
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  {item?.ingredients?.join(", ")}
                </p>
              </div>
            )}

            {/* Preparation Method */}
            {item?.preparation && (
              <div className="mb-4">
                <h4 className="font-body font-semibold text-foreground mb-2">
                  Preparation:
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  {item?.preparation}
                </p>
              </div>
            )}

            {/* Nutritional Info */}
            {item?.nutrition && (
              <div className="mb-4">
                <h4 className="font-body font-semibold text-foreground mb-2">
                  Nutritional Information:
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Calories:</span>
                    <span className="text-foreground font-medium">
                      {item?.nutrition?.calories}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Protein:</span>
                    <span className="text-foreground font-medium">
                      {item?.nutrition?.protein}g
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Customization Options */}
            {item?.customizations && (
              <div>
                <h4 className="font-body font-semibold text-foreground mb-2">
                  Customization Options:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item?.customizations?.map((option, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-body rounded-full"
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
