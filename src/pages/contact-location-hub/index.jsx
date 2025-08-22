import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import ContactForm from "./components/ContactForm";
import LocationInfo from "./components/LocationInfo";

import ReviewsSection from "./components/ReviewsSection";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const ContactLocationHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickContactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our team",
      action: "tel:+15551234567",
      actionText: "(555) 123-4567",
      available: "Daily 10 AM - 8 PM",
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Send us a detailed message",
      action: "mailto:hello@bigbro.com",
      actionText: "hello@bigbro.com",
      available: "Response within 24 hours",
    },

    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Chat with our support team",
      action: "#",
      actionText: "Start Chat",
      available: "Mon-Fri 9 AM - 6 PM",
    },
  ];

  const handleQuickAction = (action) => {
    if (action?.startsWith("tel:") || action?.startsWith("mailto:")) {
      window.open(action, "_self");
    } else if (action?.startsWith("/")) {
      window.location.href = action;
    } else {
      // Handle other actions like live chat
      console.log("Action:", action);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Location - Big Brother's Burger | Get in Touch</title>
        <meta
          name="description"
          content="Contact Big Brother's Burger for reservations, events, or inquiries. Find our location, hours, accessibility information, and connect with our team."
        />
        <meta
          name="keywords"
          content="contact Big Brother's Burger, restaurant location, reservations, dining hours, accessibility, staff directory"
        />
        <meta
          property="og:title"
          content="Contact & Location - Big Brother's Burger"
        />
        <meta
          property="og:description"
          content="Get in touch with Big Brother's Burger. Find our location, contact information, and connect with our passionate team."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bigbro.com/contact-location-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-background via-muted/20 to-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="MapPin" size={16} />
                <span>
                  Located in 2nd Floor, 149-6, Gunja-dong, Gwangjin-gu, Seoul,
                  South Korea
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Connect with
                <span className="text-primary block">
                  Big Brother's Burger'
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Whether you're planning a special celebration, have questions
                about our menu, or need assistance with dietary accommodations,
                our passionate team is here to help create your perfect dining
                experience.
              </p>

              {/* Quick Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {quickContactMethods?.map((method, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-brand transition-all duration-300 group cursor-pointer"
                    onClick={() => handleQuickAction(method?.action)}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon
                        name={method?.icon}
                        size={24}
                        className="text-primary group-hover:text-white"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {method?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method?.description}
                    </p>
                    <div className="text-primary font-medium text-sm mb-2">
                      {method?.actionText}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {method?.available}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-error/5 border border-error/20 rounded-xl p-4 inline-flex items-center space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-error" />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">
                    Emergency Contact
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For urgent matters:{" "}
                    <span className="text-error font-medium">
                      (555) 123-4999
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
              {/* Contact Form */}

              {/* Location Information */}
              <div>
                <LocationInfo />
              </div>
            </div>

            {/* Staff Directory */}

            {/* Reviews Section */}
            <div className="mb-16">
              <ReviewsSection />
            </div>

            {/* Social Media Feed */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Experience Big Brother's Burger?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join us for an unforgettable culinary journey where every meal
              tells a story and every moment becomes a cherished memory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  (window.location.href = "/reservations-booking-hub")
                }
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90 shadow-brand"
              >
                Make a Reservation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  (window.location.href = "/interactive-menu-experience")
                }
                iconName="ChefHat"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Explore Our Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="ChefHat" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      Big Brother's Burger
                    </h3>
                    <p className="text-sm text-white/70">Restaurant</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Where every meal tells a story and every moment becomes a
                  cherished memory.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/homepage"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/interactive-menu-experience"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Menu
                    </a>
                  </li>
                  <li>
                    <a
                      href="/reservations-booking-hub"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Reservations
                    </a>
                  </li>
                  <li>
                    <a
                      href="/culinary-story-about"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      Our Story
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span>123 Culinary Avenue, NY 10001</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Phone" size={14} />
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} />
                    <span>hello@bigbro.com</span>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h4 className="font-heading font-semibold mb-4">Hours</h4>
                <ul className="space-y-1 text-sm text-white/70">
                  <li>Mon-Thu: 5:00 PM - 10:00 PM</li>
                  <li>Fri-Sat: 5:00 PM - 11:00 PM</li>
                  <li>Sunday: 4:00 PM - 9:00 PM</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/70 text-sm">
                © {new Date()?.getFullYear()} bigbro Restaurant. All rights
                reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactLocationHub;
