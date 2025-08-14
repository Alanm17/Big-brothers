import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "Menu", path: "/interactive-menu-experience", icon: "ChefHat" },
    { name: "Our Story", path: "/culinary-story-about", icon: "Heart" },

    { name: "Gallery", path: "/dining-experience-gallery", icon: "Camera" },
    { name: "Contact", path: "/contact-location-hub", icon: "MapPin" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-brand border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation("/homepage")}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 from-primary to-accent rounded-lg flex items-center justify-center ">
                  <img src="assets/images/BBBurger.png" alt="logo" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  Big Brother's Burger
                </h1>
                <p className="text-xs text-muted-foreground font-body -mt-1">
                  Restaurant
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-body font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? "text-primary bg-primary/10 shadow-subtle"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={18}
                  className={
                    isActivePath(item?.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }
                />
                <span>{item?.name}</span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 border-t border-border bg-background/95 backdrop-blur-md"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 py-4 space-y-2">
            {[...navigationItems]?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? "text-primary bg-primary/10 shadow-subtle"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={20}
                  className={
                    isActivePath(item?.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }
                />
                <span>{item?.name}</span>
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border"></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
