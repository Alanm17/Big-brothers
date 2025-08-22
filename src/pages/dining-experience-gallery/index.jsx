import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/ui/Header";
import GalleryHeader from "./components/GalleryHeader";
import CategoryFilter from "./components/CategoryFilter";
import GalleryGrid from "./components/GalleryGrid";
import InstagramFeed from "./components/InstagramFeed";
import CustomerSubmissions from "./components/CustomerSubmissions";
import SeasonalHighlights from "./components/SeasonalHighlights";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const DiningExperienceGallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos", icon: "Grid3X3", count: 48 },
    { id: "food", name: "Food Artistry", icon: "ChefHat", count: 18 },
    { id: "atmosphere", name: "Dining Atmosphere", icon: "Home", count: 12 },
    { id: "kitchen", name: "Kitchen Craft", icon: "Flame", count: 8 },
    { id: "celebrations", name: "Celebrations", icon: "PartyPopper", count: 6 },
    { id: "seasonal", name: "Seasonal Highlights", icon: "Calendar", count: 4 },
  ];

  const galleryImages = [
    // Food Artistry
    {
      id: 1,
      category: "food",
      categoryName: "Food Artistry",
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=800&fit=crop",
      alt: "Truffle pasta with fresh herbs",
      title: "Truffle Pasta Perfection",
      description:
        "Hand-made pasta with black truffle shavings and fresh herbs, finished with aged parmesan",
      chef: "Chef Marco Rossi",
      ingredients: "Black truffle, fresh pasta, parmesan, herbs",
    },
    {
      id: 2,
      category: "food",
      categoryName: "Food Artistry",
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800&h=800&fit=crop",
      alt: "Grilled salmon with seasonal vegetables",
      title: "Atlantic Salmon Delight",
      description:
        "Fresh Atlantic salmon grilled to perfection with seasonal roasted vegetables and lemon butter sauce",
      chef: "Chef Sarah Chen",
      ingredients: "Atlantic salmon, seasonal vegetables, lemon butter",
    },
    {
      id: 3,
      category: "food",
      categoryName: "Food Artistry",
      src: "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg?w=800&h=800&fit=crop",
      alt: "Artisanal cheese and charcuterie board",
      title: "Artisan Charcuterie Board",
      description:
        "Curated selection of imported cheeses, cured meats, and seasonal accompaniments",
      chef: "Chef David Laurent",
      ingredients: "Imported cheeses, cured meats, seasonal fruits",
    },
    {
      id: 4,
      category: "food",
      categoryName: "Food Artistry",
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=800&fit=crop",
      alt: "Signature cocktail with garnish",
      title: "Signature bigbro Martini",
      description:
        "Our house special martini with premium gin, dry vermouth, and signature olive blend",
      chef: "Mixologist Alex Rivera",
      ingredients: "Premium gin, dry vermouth, signature olives",
    },
    {
      id: 5,
      category: "food",
      categoryName: "Food Artistry",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop",
      alt: "Chocolate dessert with gold leaf",
      title: "Decadent Chocolate Soufflé",
      description:
        "Rich chocolate soufflé with vanilla bean ice cream and edible gold leaf",
      chef: "Pastry Chef Emma Thompson",
      ingredients: "Dark chocolate, vanilla bean, gold leaf",
    },
    {
      id: 6,
      category: "food",
      categoryName: "Food Artistry",
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=800&fit=crop",
      alt: "Fresh salad with edible flowers",
      title: "Garden Fresh Salad",
      description:
        "Mixed greens with edible flowers, cherry tomatoes, and house vinaigrette",
      chef: "Chef Isabella Martinez",
      ingredients: "Mixed greens, edible flowers, cherry tomatoes",
    },

    // Dining Atmosphere
    {
      id: 7,
      category: "atmosphere",
      categoryName: "Dining Atmosphere",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop",
      alt: "Elegant dining room with warm lighting",
      title: "Main Dining Room",
      description:
        "Our elegant main dining room featuring warm ambient lighting and comfortable seating",
      details: "Accommodates up to 80 guests with intimate table arrangements",
    },
    {
      id: 8,
      category: "atmosphere",
      categoryName: "Dining Atmosphere",
      src: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?w=800&h=800&fit=crop",
      alt: "Private dining area with chandelier",
      title: "Private Dining Suite",
      description:
        "Exclusive private dining area perfect for special occasions and business meetings",
      details: "Seats up to 12 guests with personalized service",
    },
    {
      id: 9,
      category: "atmosphere",
      categoryName: "Dining Atmosphere",
      src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=800&fit=crop",
      alt: "Bar area with craft cocktails",
      title: "Craft Cocktail Bar",
      description:
        "Our sophisticated bar area featuring an extensive selection of premium spirits and craft cocktails",
      details: "Full bar service with expert mixologists",
    },
    {
      id: 10,
      category: "atmosphere",
      categoryName: "Dining Atmosphere",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
      alt: "Outdoor terrace dining",
      title: "Garden Terrace",
      description:
        "Beautiful outdoor terrace surrounded by lush greenery, perfect for al fresco dining",
      details: "Seasonal outdoor seating with garden views",
    },

    // Kitchen Craft
    {
      id: 11,
      category: "kitchen",
      categoryName: "Kitchen Craft",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop",
      alt: "Chef preparing fresh pasta",
      title: "Fresh Pasta Making",
      description:
        "Our chefs hand-crafting fresh pasta daily using traditional Italian techniques",
      chef: "Chef Marco Rossi",
    },
    {
      id: 12,
      category: "kitchen",
      categoryName: "Kitchen Craft",
      src: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?w=800&h=800&fit=crop",
      alt: "Chef plating a dish",
      title: "Artful Plating",
      description: "Meticulous attention to detail in every dish presentation",
      chef: "Chef Sarah Chen",
    },
    {
      id: 13,
      category: "kitchen",
      categoryName: "Kitchen Craft",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
      alt: "Kitchen team in action",
      title: "Kitchen Brigade",
      description:
        "Our talented kitchen team working in perfect harmony during service",
      details: "Professional kitchen team with years of experience",
    },

    // Celebrations
    {
      id: 14,
      category: "celebrations",
      categoryName: "Celebrations",
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=800&fit=crop",
      alt: "Birthday celebration table",
      title: "Birthday Celebration",
      description: "Special birthday setup with custom cake and decorations",
      occasion: "Birthday Party",
    },
    {
      id: 15,
      category: "celebrations",
      categoryName: "Celebrations",
      src: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=800&h=800&fit=crop",
      alt: "Anniversary dinner setup",
      title: "Anniversary Dinner",
      description:
        "Romantic anniversary dinner with special table setting and roses",
      occasion: "Wedding Anniversary",
    },
    {
      id: 16,
      category: "celebrations",
      categoryName: "Celebrations",
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop",
      alt: "Corporate event dining",
      title: "Corporate Event",
      description: "Professional corporate dining event with customized menu",
      occasion: "Business Meeting",
    },

    // Seasonal Highlights
    {
      id: 17,
      category: "seasonal",
      categoryName: "Seasonal Highlights",
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop",
      alt: "Winter seasonal menu",
      title: "Winter Comfort Menu",
      description:
        "Hearty winter dishes featuring seasonal ingredients and warm spices",
      details: "Available December through February",
    },
    {
      id: 18,
      category: "seasonal",
      categoryName: "Seasonal Highlights",
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?w=800&h=800&fit=crop",
      alt: "Spring fresh ingredients",
      title: "Spring Garden Fresh",
      description:
        "Light and fresh spring menu featuring locally sourced ingredients",
      details: "Available March through May",
    },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Gallery Header */}
      <GalleryHeader />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Gallery Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Gallery Grid */}
            <GalleryGrid
              images={galleryImages}
              activeCategory={activeCategory}
            />

            {/* Load More Button */}
            <div className="text-center">
              <Button
                variant="outline"
                iconName="MoreHorizontal"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Load More Photos
              </Button>
            </div>
          </div>

          {/* Sidebar */}
        </div>

        {/* Seasonal Highlights Section */}
        <div className="mt-16">
          <SeasonalHighlights />
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Camera" size={32} color="white" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Create Your Own Memories?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us at bigbro and become part of our visual story. Every meal
              is an opportunity to create beautiful memories worth sharing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/contact-location-hub")}
                iconName="Phone"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="ChefHat" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">bigbro</h3>
                  <p className="text-sm opacity-80">Restaurant</p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-4">
                Where every meal tells a story and every moment becomes a
                cherished memory. Experience the artistry of culinary excellence
                at bigbro.
              </p>
              <div className="flex items-center space-x-4">
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-background/60 hover:text-background cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-background/60 hover:text-background cursor-pointer transition-colors"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-background/60 hover:text-background cursor-pointer transition-colors"
                />
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <button
                    onClick={() => navigate("/homepage")}
                    className="hover:text-background transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/interactive-menu-experience")}
                    className="hover:text-background transition-colors"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/culinary-story-about")}
                    className="hover:text-background transition-colors"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">
                    123 Culinary Street, Food District
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">hello@bigbro.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © {new Date()?.getFullYear()} bigbro Restaurant. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DiningExperienceGallery;
