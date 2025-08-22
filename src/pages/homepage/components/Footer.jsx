import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date()?.getFullYear();

  const navigationLinks = [
    { name: "Menu", path: "/interactive-menu-experience" },
    { name: "Our Story", path: "/culinary-story-about" },

    { name: "Gallery", path: "/dining-experience-gallery" },
    { name: "Contact", path: "/contact-location-hub" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "Yelp", icon: "Star", url: "#" },
  ];

  const contactInfo = {
    address: "123 Culinary Street, Foodie District, FC 12345",
    phone: "(555) 123-FOOD",
    email: "hello@bigbro.com",
    hours: {
      weekdays: "Tuesday - Thursday: 5:00 PM - 10:00 PM",
      weekend: "Friday - Saturday: 5:00 PM - 11:00 PM",
      sunday: "Sunday: 4:00 PM - 9:00 PM",
      closed: "Closed Mondays",
    },
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="ChefHat" size={28} color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">bigbro</h3>
                <p className="text-sm text-white/70">Restaurant</p>
              </div>
            </div>
            <p className="text-white/80 font-body mb-6 leading-relaxed">
              Where every meal tells a story. Experience culinary artistry where
              tradition meets innovation in the heart of our community.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks?.map((link) => (
                <li key={link?.path}>
                  <button
                    onClick={() => navigate(link?.path)}
                    className="text-white/80 hover:text-accent font-body transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <Icon
                      name="ArrowRight"
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <span>{link?.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={18}
                  className="text-accent mt-1 flex-shrink-0"
                />
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  {contactInfo?.address}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Phone"
                  size={18}
                  className="text-accent flex-shrink-0"
                />
                <a
                  href={`tel:${contactInfo?.phone}`}
                  className="text-white/80 hover:text-accent font-body text-sm transition-colors duration-200"
                >
                  {contactInfo?.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Icon
                  name="Mail"
                  size={18}
                  className="text-accent flex-shrink-0"
                />
                <a
                  href={`mailto:${contactInfo?.email}`}
                  className="text-white/80 hover:text-accent font-body text-sm transition-colors duration-200"
                >
                  {contactInfo?.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-accent flex-shrink-0"
                />
                <p className="text-white/80 font-body text-sm">
                  {contactInfo?.hours?.weekdays}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-accent flex-shrink-0"
                />
                <p className="text-white/80 font-body text-sm">
                  {contactInfo?.hours?.weekend}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Icon
                  name="Clock"
                  size={16}
                  className="text-accent flex-shrink-0"
                />
                <p className="text-white/80 font-body text-sm">
                  {contactInfo?.hours?.sunday}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Icon
                  name="XCircle"
                  size={16}
                  className="text-white/50 flex-shrink-0"
                />
                <p className="text-white/60 font-body text-sm">
                  {contactInfo?.hours?.closed}
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <h5 className="font-body font-semibold mb-2 flex items-center">
                <Icon name="Bell" size={16} className="text-accent mr-2" />
                Stay Updated
              </h5>
              <p className="text-xs text-white/70 mb-3">
                Get notified about seasonal menus and special events
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent"
                />
                <button className="px-3 py-2 bg-accent text-accent-foreground rounded text-sm font-body font-medium hover:bg-accent/90 transition-colors duration-200">
                  <Icon name="Send" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-white/60 font-body text-sm">
                © {currentYear} bigbro Restaurant. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-white/60 hover:text-accent font-body text-sm transition-colors duration-200">
                  Privacy Policy
                </button>
                <button className="text-white/60 hover:text-accent font-body text-sm transition-colors duration-200">
                  Terms of Service
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span className="text-white/70 font-body text-sm">
                  Best New Restaurant 2024
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className="text-accent fill-current"
                  />
                ))}
                <span className="text-white/70 font-body text-sm ml-1">
                  4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
