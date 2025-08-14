import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const CookingMethodologySection = () => {
  const [activeMethod, setActiveMethod] = useState(0);

  const cookingMethods = [
    {
      id: 1,
      name: "Slow Braising",
      category: "Traditional Technique",
      image:
        "https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Our signature slow-braising technique transforms tough cuts into tender, flavorful masterpieces. We use traditional copper pots and carefully controlled temperatures to develop deep, complex flavors over hours of patient cooking.",
      benefits: [
        "Enhanced flavor development",
        "Perfect texture",
        "Nutrient retention",
        "Aromatic complexity",
      ],
      signature_dish: "48-Hour Braised Short Ribs",
      icon: "Flame",
    },
    {
      id: 2,
      name: "Sous Vide Precision",
      category: "Modern Innovation",
      image:
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Precision cooking at exact temperatures ensures perfect doneness every time. This technique allows us to achieve textures and flavors impossible through traditional methods while maintaining the integrity of premium ingredients.",
      benefits: [
        "Precise temperature control",
        "Consistent results",
        "Enhanced natural flavors",
        "Optimal texture",
      ],
      signature_dish: "Sous Vide Salmon with Herb Oil",
      icon: "Thermometer",
    },
    {
      id: 3,
      name: "Wood-Fired Grilling",
      category: "Artisan Craft",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Our custom wood-fired grill uses carefully selected hardwoods to impart distinctive smoky flavors. Each protein is grilled to perfection, creating beautiful char marks while maintaining juicy interiors.",
      benefits: [
        "Natural smoke flavor",
        "High-heat searing",
        "Authentic technique",
        "Visual appeal",
      ],
      signature_dish: "Wood-Fired Ribeye Steak",
      icon: "Zap",
    },
    {
      id: 4,
      name: "Fermentation Arts",
      category: "Ancient Wisdom",
      image:
        "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "We embrace the ancient art of fermentation to create unique flavors and enhance nutritional value. Our in-house fermentation program produces everything from house-made kimchi to aged vinegars.",
      benefits: [
        "Probiotic benefits",
        "Umami development",
        "Extended shelf life",
        "Unique flavor profiles",
      ],
      signature_dish: "House-Fermented Vegetable Medley",
      icon: "Beaker",
    },
  ];

  const kitchenPhilosophy = [
    {
      principle: "Respect for Ingredients",
      description:
        "Every ingredient deserves to be treated with care and understanding of its unique properties.",
      icon: "Leaf",
    },
    {
      principle: "Technique Mastery",
      description:
        "Combining time-honored methods with modern innovation to achieve culinary excellence.",
      icon: "Award",
    },
    {
      principle: "Seasonal Harmony",
      description:
        "Adapting our methods to highlight the natural beauty of seasonal ingredients.",
      icon: "Calendar",
    },
    {
      principle: "Continuous Learning",
      description:
        "Always exploring new techniques while honoring traditional culinary wisdom.",
      icon: "BookOpen",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Icon name="ChefHat" size={18} />
            <span className="font-body font-medium text-sm">
              Culinary Craft
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Cooking Methodology
          </h2>

          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Our kitchen philosophy blends traditional techniques with modern
            innovation, creating dishes that honor culinary heritage while
            embracing contemporary excellence.
          </p>
        </div>

        {/* Cooking Methods Showcase */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Method Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-brand h-[500px]">
                <Image
                  src={cookingMethods?.[activeMethod]?.image}
                  alt={cookingMethods?.[activeMethod]?.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Method Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon
                      name={cookingMethods?.[activeMethod]?.icon}
                      size={24}
                    />
                    <span className="text-sm font-body opacity-90">
                      {cookingMethods?.[activeMethod]?.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {cookingMethods?.[activeMethod]?.name}
                  </h3>
                  <p className="text-sm opacity-90">
                    Signature: {cookingMethods?.[activeMethod]?.signature_dish}
                  </p>
                </div>
              </div>

              {/* Method Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {cookingMethods?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMethod(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeMethod
                        ? "bg-accent scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Method Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={cookingMethods?.[activeMethod]?.icon}
                      size={24}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {cookingMethods?.[activeMethod]?.name}
                    </h3>
                    <p className="text-accent font-body font-medium">
                      {cookingMethods?.[activeMethod]?.category}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {cookingMethods?.[activeMethod]?.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Technique Benefits
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {cookingMethods?.[activeMethod]?.benefits?.map(
                    (benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-card p-3 rounded-lg"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-secondary flex-shrink-0"
                        />
                        <span className="font-body text-sm text-foreground">
                          {benefit}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Signature Dish */}
              <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Star" size={20} className="text-accent" />
                  <h4 className="text-lg font-heading font-semibold text-foreground">
                    Signature Creation
                  </h4>
                </div>
                <p className="text-xl font-body font-medium text-accent">
                  {cookingMethods?.[activeMethod]?.signature_dish}
                </p>
                <p className="text-sm text-muted-foreground font-body mt-2">
                  Experience this technique at its finest in our signature dish
                </p>
              </div>

              {/* Method Navigation Buttons */}
              <div className="flex flex-wrap gap-2">
                {cookingMethods?.map((method, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMethod(index)}
                    className={`px-4 py-2 rounded-lg font-body text-sm transition-all duration-200 ${
                      index === activeMethod
                        ? "bg-accent text-accent-foreground shadow-subtle"
                        : "bg-card text-foreground hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {method?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kitchen Philosophy */}

        {/* Behind the Scenes */}
      </div>
    </section>
  );
};

export default CookingMethodologySection;
