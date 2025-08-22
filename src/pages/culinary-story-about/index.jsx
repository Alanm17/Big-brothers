import React from "react";
import Header from "../../components/ui/Header";
import ChefJourneySection from "./components/ChefJourneySection";
import IngredientSourcingSection from "./components/IngredientSourcingSection";
import CookingMethodologySection from "./components/CookingMethodologySection";
import RestaurantHeritageSection from "./components/RestaurantHeritageSection";
import StaffProfilesSection from "./components/StaffProfilesSection";
import SocialProofSection from "./components/SocialProofSection";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const CulinaryStoryAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-8">
              <Icon name="BookOpen" size={18} />
              <span className="font-body font-medium text-sm">Our Story</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground mb-8 leading-tight">
              Culinary Story
              <span className="block text-accent">& Heritage</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed mb-12">
              Discover the passion, craftsmanship, and community spirit that
              defines bigbro. From our chef's journey to our commitment to local
              sourcing, every element tells the story of our dedication to
              culinary excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/interactive-menu-experience")}
                iconName="ChefHat"
                iconPosition="left"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Explore Our Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </section>
      {/* Main Content Sections */}
      <ChefJourneySection />

      <CookingMethodologySection />
      <RestaurantHeritageSection />

      <SocialProofSection />
      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Icon
            name="Heart"
            size={64}
            className="text-white mx-auto mb-8 opacity-90"
          />

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
            Experience Our Story
          </h2>

          <p className="text-xl text-white/90 font-body leading-relaxed mb-10">
            Every dish we serve carries the essence of our journey, our values,
            and our commitment to creating memorable dining experiences. Join us
            and become part of the bigbro story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/contact-location-hub")}
              iconName="MapPin"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Visit Us Today
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Icon name="ChefHat" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">bigbro</h3>
                  <p className="text-sm opacity-80">Restaurant</p>
                </div>
              </div>
              <p className="text-background/80 font-body leading-relaxed max-w-md">
                Where every meal tells a story and every guest becomes part of
                our culinary journey. Experience the perfect blend of tradition
                and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => navigate("/homepage")}
                  className="block text-background/80 hover:text-accent transition-colors font-body text-sm"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/interactive-menu-experience")}
                  className="block text-background/80 hover:text-accent transition-colors font-body text-sm"
                >
                  Menu
                </button>

                <button
                  onClick={() => navigate("/contact-location-hub")}
                  className="block text-background/80 hover:text-accent transition-colors font-body text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80 font-body text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>123 Culinary Street, Food District</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@bigbro.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 font-body text-sm">
              © {new Date()?.getFullYear()} bigbro Restaurant. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CulinaryStoryAbout;
