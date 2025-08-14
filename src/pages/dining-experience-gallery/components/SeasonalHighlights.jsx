import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const SeasonalHighlights = () => {
  const seasonalCollections = [
    {
      id: 1,
      season: "Winter 2024",
      title: "Cozy Winter Warmth",
      description:
        "Hearty comfort foods and warm ambiance perfect for cold evenings",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
      dishes: ["Truffle Risotto", "Braised Short Ribs", "Mulled Wine"],
      color: "from-blue-500 to-purple-600",
      icon: "Snowflake",
    },
    {
      id: 2,
      season: "Fall 2024",
      title: "Autumn Harvest",
      description:
        "Celebrating the bounty of fall with seasonal ingredients and warm spices",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=400&fit=crop",
      dishes: ["Pumpkin Soup", "Roasted Turkey", "Apple Tart"],
      color: "from-orange-500 to-red-600",
      icon: "Leaf",
    },
    {
      id: 3,
      season: "Summer 2024",
      title: "Fresh & Light",
      description: "Light, refreshing dishes perfect for warm summer evenings",
      image:
        "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg?w=600&h=400&fit=crop",
      dishes: ["Gazpacho", "Grilled Salmon", "Berry Parfait"],
      color: "from-green-500 to-teal-600",
      icon: "Sun",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Valentine's Day Special",
      date: "February 14, 2025",
      description:
        "Romantic dinner experience with special menu and live music",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      price: "$125 per couple",
    },
    {
      id: 2,
      title: "Wine Tasting Evening",
      date: "February 20, 2025",
      description:
        "Curated wine selection paired with chef's special appetizers",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      price: "$85 per person",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Seasonal Collections */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Seasonal Collections
            </h3>
            <p className="text-sm text-muted-foreground">
              Discover our seasonal culinary journey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {seasonalCollections?.map((collection) => (
            <div
              key={collection?.id}
              className="group relative bg-background border border-border rounded-xl overflow-hidden hover:shadow-brand transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={collection?.image}
                  alt={collection?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute top-4 left-4">
                <div
                  className={`flex items-center space-x-2 px-3 py-1 bg-gradient-to-r ${collection?.color} rounded-full text-white text-sm font-medium`}
                >
                  <Icon name={collection?.icon} size={14} />
                  <span>{collection?.season}</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-heading font-bold text-foreground mb-2">
                  {collection?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {collection?.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                    Featured Dishes
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {collection?.dishes?.map((dish, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  className="w-full border-primary text-primary hover:bg-primary/5"
                >
                  View Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming Events */}
    </div>
  );
};

export default SeasonalHighlights;
