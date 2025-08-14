import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const MenuFilters = ({
  activeCategory,
  setActiveCategory,
  activeDietaryFilters,
  setActiveDietaryFilters,
  showSeasonalOnly,
  setShowSeasonalOnly,
}) => {
  const categories = [
    { id: "all", name: "All Items", icon: "ChefHat" },
    { id: "appetizers", name: "Appetizers", icon: "Utensils" },
    { id: "mains", name: "Main Courses", icon: "Beef" },
    { id: "desserts", name: "Desserts", icon: "Cake" },
  ];

  const dietaryOptions = [
    {
      id: "vegetarian",
      name: "Vegetarian",
      icon: "Leaf",
      color: "text-secondary",
    },
    { id: "vegan", name: "Vegan", icon: "Sprout", color: "text-secondary" },
    {
      id: "gluten-free",
      name: "Gluten-Free",
      icon: "Shield",
      color: "text-accent",
    },
    {
      id: "dairy-free",
      name: "Dairy-Free",
      icon: "Milk",
      color: "text-primary",
    },
  ];

  const toggleDietaryFilter = (filterId) => {
    setActiveDietaryFilters((prev) =>
      prev?.includes(filterId)
        ? prev?.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-brand mb-8">
      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Menu Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category?.id)}
              iconName={category?.icon}
              iconPosition="left"
              className={`${
                activeCategory === category?.id
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category?.name}
            </Button>
          ))}
        </div>
      </div>
      {/* Dietary Filters */}
      <div className="mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Dietary Preferences
        </h3>
        <div className="flex flex-wrap gap-3">
          {dietaryOptions?.map((option) => (
            <Button
              key={option?.id}
              variant={
                activeDietaryFilters?.includes(option?.id)
                  ? "default"
                  : "outline"
              }
              onClick={() => toggleDietaryFilter(option?.id)}
              iconName={option?.icon}
              iconPosition="left"
              className={`${
                activeDietaryFilters?.includes(option?.id)
                  ? "bg-secondary text-secondary-foreground shadow-brand"
                  : "hover:bg-secondary/10 hover:text-secondary"
              }`}
            >
              {option?.name}
            </Button>
          ))}
        </div>
      </div>
      {/* Seasonal Filter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon name="Calendar" size={20} className="text-accent" />
          <span className="font-body font-medium text-foreground">
            Show Seasonal Items Only
          </span>
        </div>
        <Button
          variant={showSeasonalOnly ? "default" : "outline"}
          onClick={() => setShowSeasonalOnly(!showSeasonalOnly)}
          iconName={showSeasonalOnly ? "Check" : "Plus"}
          iconPosition="left"
          className={`${
            showSeasonalOnly
              ? "bg-accent text-accent-foreground shadow-brand"
              : "hover:bg-accent/10 hover:text-accent"
          }`}
        >
          {showSeasonalOnly ? "Active" : "Activate"}
        </Button>
      </div>
    </div>
  );
};

export default MenuFilters;
