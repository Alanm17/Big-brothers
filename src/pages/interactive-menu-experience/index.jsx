import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import MenuFilters from "./components/MenuFilters";
import MenuGrid from "./components/MenuGrid";
import WineSection from "./components/WineSection";
import SpecialMenus from "./components/SpecialMenus";
import OrderSummary from "./components/OrderSummary";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const InteractiveMenuExperience = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDietaryFilters, setActiveDietaryFilters] = useState([]);
  const [showSeasonalOnly, setShowSeasonalOnly] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [showWineSection, setShowWineSection] = useState(false);

  // Mock menu data
  const menuItems = [
    {
      id: 1,
      category: "appetizers",
      name: "Truffle Arancini",
      description:
        "Crispy risotto balls filled with aged parmesan and black truffle, served with saffron aioli",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      dietary: ["vegetarian"],
      seasonal: true,
      chefNote:
        "Our signature appetizer features locally sourced truffles from Oregon, hand-rolled daily",
      winePairing: "Champagne or Pinot Grigio",
      ingredients: [
        "Arborio rice",
        "Black truffle",
        "Parmesan",
        "Saffron",
        "Fresh herbs",
      ],
      preparation:
        "Slow-cooked risotto formed into balls, breaded and fried to golden perfection",
      nutrition: { calories: 320, protein: 12 },
      customizations: [
        "Extra truffle",
        "Gluten-free breadcrumbs",
        "Vegan cheese option",
      ],
    },
    {
      id: 2,
      category: "appetizers",
      name: "Seared Scallops",
      description:
        "Pan-seared diver scallops with cauliflower purée, pancetta crisps, and microgreens",
      price: 24,
      image:
        "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=500&h=300&fit=crop",
      dietary: ["gluten-free"],
      seasonal: false,
      chefNote:
        "Day-boat scallops from Maine, seared to caramelized perfection with a tender center",
      winePairing: "Chardonnay or Sauvignon Blanc",
      ingredients: [
        "Diver scallops",
        "Cauliflower",
        "Pancetta",
        "Microgreens",
        "Butter",
      ],
      preparation:
        "High-heat searing technique for perfect caramelization while maintaining tenderness",
      nutrition: { calories: 280, protein: 22 },
      customizations: [
        "No pancetta",
        "Extra scallops",
        "Dairy-free preparation",
      ],
    },
    {
      id: 3,
      category: "mains",
      name: "Wagyu Beef Tenderloin",
      description:
        "Grade A5 Wagyu tenderloin with roasted bone marrow, seasonal vegetables, and red wine reduction",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=300&fit=crop",
      dietary: ["gluten-free"],
      seasonal: false,
      chefNote:
        "Authentic Japanese Wagyu, dry-aged for 28 days to develop complex flavors",
      winePairing: "Cabernet Sauvignon or Bordeaux blend",
      ingredients: [
        "Wagyu beef",
        "Bone marrow",
        "Root vegetables",
        "Red wine",
        "Fresh thyme",
      ],
      preparation:
        "Reverse sear method for even cooking, finished with herb butter",
      nutrition: { calories: 650, protein: 45 },
      customizations: [
        "Temperature preference",
        "Extra vegetables",
        "Sauce on side",
      ],
    },
    {
      id: 4,
      category: "mains",
      name: "Wild Salmon Wellington",
      description:
        "Atlantic salmon wrapped in puff pastry with spinach, mushroom duxelles, and hollandaise",
      price: 42,
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop",
      dietary: [],
      seasonal: true,
      chefNote:
        "Wild-caught salmon from Alaska, wrapped in house-made puff pastry",
      winePairing: "Pinot Noir or Chardonnay",
      ingredients: [
        "Wild salmon",
        "Puff pastry",
        "Spinach",
        "Mushrooms",
        "Hollandaise",
      ],
      preparation: "Traditional Wellington technique with modern presentation",
      nutrition: { calories: 520, protein: 35 },
      customizations: [
        "No mushrooms",
        "Extra hollandaise",
        "Gluten-free pastry",
      ],
    },
    {
      id: 5,
      category: "mains",
      name: "Roasted Vegetable Risotto",
      description:
        "Creamy arborio risotto with seasonal roasted vegetables, aged parmesan, and truffle oil",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&h=300&fit=crop",
      dietary: ["vegetarian", "gluten-free"],
      seasonal: true,
      chefNote:
        "Made with organic vegetables from our partner farms, stirred continuously for perfect texture",
      winePairing: "Pinot Grigio or light Chardonnay",
      ingredients: [
        "Arborio rice",
        "Seasonal vegetables",
        "Parmesan",
        "Truffle oil",
        "Vegetable stock",
      ],
      preparation:
        "Traditional stirring method with warm stock added gradually",
      nutrition: { calories: 420, protein: 15 },
      customizations: ["Vegan cheese", "Extra vegetables", "No truffle oil"],
    },
    {
      id: 6,
      category: "desserts",
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with molten center, vanilla bean ice cream, and berry compote",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop",
      dietary: ["vegetarian"],
      seasonal: false,
      chefNote:
        "Made with Belgian dark chocolate and served immediately for the perfect molten center",
      winePairing: "Port wine or Moscato",
      ingredients: [
        "Dark chocolate",
        "Butter",
        "Eggs",
        "Vanilla ice cream",
        "Mixed berries",
      ],
      preparation:
        "Baked to order in individual ramekins for optimal temperature and texture",
      nutrition: { calories: 480, protein: 8 },
      customizations: [
        "Gluten-free version",
        "Dairy-free ice cream",
        "Extra berries",
      ],
    },
    {
      id: 7,
      category: "desserts",
      name: "Seasonal Fruit Tart",
      description:
        "Buttery pastry shell filled with vanilla custard and topped with fresh seasonal fruits",
      price: 14,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop",
      dietary: ["vegetarian"],
      seasonal: true,
      chefNote:
        "Features the best seasonal fruits available, with house-made vanilla bean custard",
      winePairing: "Riesling or Prosecco",
      ingredients: [
        "Pastry shell",
        "Vanilla custard",
        "Seasonal fruits",
        "Apricot glaze",
        "Mint",
      ],
      preparation:
        "Pastry baked fresh daily, assembled to order for optimal freshness",
      nutrition: { calories: 320, protein: 6 },
      customizations: [
        "Gluten-free crust",
        "Sugar-free custard",
        "Specific fruit selection",
      ],
    },
  ];

  // Mock wine data
  const wineData = [
    {
      id: 1,
      type: "red",
      name: "Château Margaux 2018",
      region: "Bordeaux, France",
      year: 2018,
      price: 45,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=400&fit=crop",
      description:
        "Full-bodied red with notes of blackcurrant, cedar, and tobacco",
      tastingNotes: ["Blackcurrant", "Cedar", "Tobacco", "Vanilla"],
      foodPairings: ["Wagyu Beef", "Lamb", "Aged Cheeses"],
      rating: 5,
    },
    {
      id: 2,
      type: "white",
      name: "Chablis Premier Cru 2020",
      region: "Burgundy, France",
      year: 2020,
      price: 38,
      image:
        "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=300&h=400&fit=crop",
      description: "Crisp and mineral-driven with citrus and green apple notes",
      tastingNotes: ["Citrus", "Green Apple", "Mineral", "Crisp"],
      foodPairings: ["Scallops", "Salmon", "Oysters"],
      rating: 4,
    },
    {
      id: 3,
      type: "sparkling",
      name: "Dom Pérignon 2012",
      region: "Champagne, France",
      year: 2012,
      price: 65,
      image:
        "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=300&h=400&fit=crop",
      description: "Elegant champagne with fine bubbles and complex flavors",
      tastingNotes: ["Brioche", "Citrus", "Almond", "Honey"],
      foodPairings: ["Truffle Arancini", "Caviar", "Celebration dishes"],
      rating: 5,
    },
  ];

  // Mock special menus data
  const specialMenusData = [
    {
      id: 1,
      name: "Chef's Tasting Menu",
      description:
        "An extraordinary culinary journey featuring seven courses of our chef's most innovative creations, each paired with carefully selected wines.",
      price: 125,
      courses: 7,
      duration: "3 hours",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      highlights: [
        "Amuse-bouche with champagne",
        "Signature truffle course",
        "Wagyu beef preparation",
        "Artisanal cheese selection",
      ],
      features: ["Wine Pairing", "Vegetarian Option", "Private Dining"],
      availability: "Tuesday - Saturday evenings",
    },
    {
      id: 2,
      name: "Romantic Anniversary Menu",
      description:
        "Intimate dining experience designed for couples celebrating special moments, featuring aphrodisiac ingredients and romantic presentation.",
      price: 95,
      courses: 5,
      duration: "2.5 hours",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop",
      highlights: [
        "Oyster and champagne welcome",
        "Chocolate and strawberry finale",
        "Rose petal garnishes",
        "Complimentary champagne toast",
      ],
      features: ["Candlelit Setting", "Rose Petals", "Champagne Toast"],
      availability: "Available daily",
    },
    {
      id: 3,
      name: "Seasonal Harvest Menu",
      description:
        "Celebrating the bounty of each season with locally sourced ingredients at their peak, creating dishes that capture the essence of the moment.",
      price: 78,
      courses: 4,
      duration: "2 hours",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      highlights: [
        "Farm-to-table ingredients",
        "Seasonal vegetable showcase",
        "Local wine pairings",
        "Chef's seasonal inspiration",
      ],
      features: ["Locally Sourced", "Seasonal", "Farm Partnership"],
      availability: "Changes quarterly",
    },
  ];

  // Filter menu items based on active filters
  const filteredMenuItems = menuItems?.filter((item) => {
    // Category filter
    if (activeCategory !== "all" && item?.category !== activeCategory) {
      return false;
    }

    // Dietary filters
    if (activeDietaryFilters?.length > 0) {
      const hasMatchingDietary = activeDietaryFilters?.some(
        (filter) => item?.dietary && item?.dietary?.includes(filter)
      );
      if (!hasMatchingDietary) return false;
    }

    // Seasonal filter
    if (showSeasonalOnly && !item?.seasonal) {
      return false;
    }

    return true;
  });

  const handleAddToOrder = (item) => {
    setOrderItems((prev) => {
      const existingItem = prev?.find(
        (orderItem) =>
          orderItem?.id === item?.id &&
          orderItem?.type === (item?.type || "food")
      );

      if (existingItem) {
        return prev?.map((orderItem) =>
          orderItem?.id === item?.id &&
          orderItem?.type === (item?.type || "food")
            ? { ...orderItem, quantity: orderItem?.quantity + 1 }
            : orderItem
        );
      } else {
        return [...prev, { ...item, quantity: 1, type: item?.type || "food" }];
      }
    });
  };

  const handleRemoveFromOrder = (itemId, itemType = "food") => {
    setOrderItems((prev) =>
      prev?.filter((item) => !(item?.id === itemId && item?.type === itemType))
    );
  };

  const handleUpdateQuantity = (itemId, itemType = "food", newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveFromOrder(itemId, itemType);
    } else {
      setOrderItems((prev) =>
        prev?.map((item) =>
          item?.id === itemId && item?.type === itemType
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const handleCheckout = () => {
    alert("Redirecting to checkout... (Demo functionality)");
  };

  const handleViewSpecialMenu = (menu) => {
    alert(`Viewing ${menu?.name} details... (Demo functionality)`);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Interactive Menu Experience - bigbro Restaurant</title>
        <meta
          name="description"
          content="Explore bigbro's exquisite menu with detailed descriptions, wine pairings, and dietary accommodations. Discover our seasonal specialties and special occasion menus."
        />
        <meta
          name="keywords"
          content="restaurant menu, fine dining, wine pairing, seasonal menu, dietary accommodations, special occasions"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Culinary Excellence
                <span className="block text-primary">Awaits You</span>
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto mb-8">
                Discover our carefully crafted menu where every dish tells a
                story of passion, tradition, and innovation. From seasonal
                specialties to timeless classics, each creation is designed to
                create unforgettable dining experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4"></div>
            </div>
            {/* Quick Stats */}\
          </div>
        </section>

        {/* Special Menus Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SpecialMenus
              specialMenus={specialMenusData}
              onViewMenu={handleViewSpecialMenu}
            />
          </div>
        </section>

        {/* Menu Filters and Items */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Complete Menu
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Filter by category, dietary preferences, or seasonal
                availability to find your perfect dish
              </p>
            </div>

            <MenuFilters
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeDietaryFilters={activeDietaryFilters}
              setActiveDietaryFilters={setActiveDietaryFilters}
              showSeasonalOnly={showSeasonalOnly}
              setShowSeasonalOnly={setShowSeasonalOnly}
            />

            <MenuGrid
              items={filteredMenuItems}
              onAddToOrder={handleAddToOrder}
            />
          </div>
        </section>

        {/* Wine Section */}

        {/* Order Summary */}
        <OrderSummary
          orderItems={orderItems}
          onRemoveItem={handleRemoveFromOrder}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Experience bigbro?
            </h2>
            <p className="text-xl text-white/90 font-body mb-8">
              Reserve your table today and embark on a culinary journey that
              will create lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.open("/contact-location-hub", "_self")}
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InteractiveMenuExperience;
