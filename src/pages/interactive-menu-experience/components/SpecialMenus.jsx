import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const SpecialMenus = ({ specialMenus, onViewMenu }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Special Occasion Menus
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Curated dining experiences for your most memorable moments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialMenus?.map((menu) => (
          <div
            key={menu?.id}
            className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Menu Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={menu?.image}
                alt={menu?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-2 rounded-full font-heading font-bold shadow-brand">
                ${menu?.price}
                <span className="text-sm font-body font-normal ml-1">
                  per person
                </span>
              </div>

              {/* Menu Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {menu?.name}
                </h3>
                <p className="text-sm text-white/90 font-body">
                  {menu?.courses} courses • {menu?.duration}
                </p>
              </div>
            </div>

            {/* Menu Content */}
            <div className="p-6">
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                {menu?.description}
              </p>

              {/* Menu Highlights */}
              <div className="mb-4">
                <h4 className="font-body font-semibold text-foreground mb-2">
                  Menu Highlights:
                </h4>
                <div className="space-y-2">
                  {menu?.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon
                        name="ChefHat"
                        size={14}
                        className="text-primary mt-1"
                      />
                      <span className="text-sm text-foreground font-body">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {menu?.features?.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-body rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center justify-between mb-4 p-3 bg-accent/5 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-sm font-body font-medium text-foreground">
                    Available:
                  </span>
                </div>
                <span className="text-sm text-accent font-body font-semibold">
                  {menu?.availability}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => onViewMenu(menu)}
                  iconName="Eye"
                  iconPosition="left"
                  className="flex-1 hover:bg-primary/5 hover:text-primary"
                >
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenus;
