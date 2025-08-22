import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const GalleryHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16 lg:py-24">
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-brand">
            <Icon name="Camera" size={32} color="white" />
          </div>
        </div>

        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
          Dining Experience Gallery
        </h1>

        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Immerse yourself in the visual story of bigbro through our curated
          collection of culinary artistry, dining atmosphere, and memorable
          moments that define our restaurant experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            iconName="ChefHat"
            iconPosition="left"
            className="border-primary text-primary hover:bg-primary/5"
          >
            View Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
