import React from "react";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const SpecialPackages = ({ onPackageSelect }) => {
  const packages = [
    {
      id: "wine-dinner",
      title: "Wine Pairing Dinner",
      subtitle: "Curated by our Sommelier",
      description: `Experience an exquisite 5-course tasting menu perfectly paired with premium wines from our cellar.\n\nEach dish is crafted to complement the selected wines, creating a harmonious dining experience that celebrates both culinary artistry and wine expertise.`,
      price: 125,
      duration: "3 hours",
      availability: "Friday & Saturday evenings",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
      features: [
        "5-course tasting menu",
        "Premium wine pairings",
        "Sommelier presentation",
        "Take-home wine notes",
      ],
      icon: "Wine",
    },
    {
      id: "chefs-table",
      title: "Chef's Table Experience",
      subtitle: "Interactive Culinary Journey",
      description: `Join our executive chef for an intimate dining experience at our kitchen counter.\n\nWatch as each course is prepared before your eyes while learning about techniques, ingredients, and the inspiration behind each dish.`,
      price: 150,
      duration: "2.5 hours",
      availability: "Tuesday - Thursday",
      image:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?w=400&h=300&fit=crop",
      features: [
        "Kitchen counter seating",
        "Chef interaction",
        "7-course tasting menu",
        "Behind-the-scenes access",
      ],
      icon: "ChefHat",
    },
    {
      id: "private-dining",
      title: "Private Dining Room",
      subtitle: "Exclusive Space for Groups",
      description: `Reserve our elegant private dining room for special celebrations and business gatherings.\n\nAccommodates up to 16 guests with customizable menu options and dedicated service staff for an unforgettable experience.`,
      price: 75,
      duration: "Flexible",
      availability: "Daily (advance booking)",
      image:
        "https://images.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg?w=400&h=300&fit=crop",
      features: [
        "Seats up to 16 guests",
        "Custom menu options",
        "Dedicated service",
        "AV equipment available",
      ],
      icon: "Users",
    },
    {
      id: "cooking-class",
      title: "Hands-On Cooking Class",
      subtitle: "Learn from Our Chefs",
      description: `Master the art of fine dining with our interactive cooking classes.\n\nLearn professional techniques, work with premium ingredients, and enjoy the fruits of your labor with wine pairings.`,
      price: 95,
      duration: "3 hours",
      availability: "Sunday afternoons",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      features: [
        "Hands-on instruction",
        "Professional techniques",
        "Recipe cards included",
        "Wine pairing included",
      ],
      icon: "BookOpen",
    },
  ];

  const handlePackageInquiry = (packageData) => {
    onPackageSelect(packageData);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Special Dining Experiences
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Elevate your visit with our curated special experiences, designed to
          create lasting memories through exceptional cuisine and personalized
          service.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {packages?.map((pkg) => (
          <div
            key={pkg?.id}
            className="bg-card rounded-lg shadow-brand overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Package Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={pkg?.image}
                alt={pkg?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-brand">
                  <Icon
                    name={pkg?.icon}
                    size={24}
                    className="text-accent-foreground"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-semibold text-foreground">
                    ${pkg?.price} per person
                  </span>
                </div>
              </div>
            </div>

            {/* Package Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  {pkg?.title}
                </h3>
                <p className="text-sm text-accent font-medium">
                  {pkg?.subtitle}
                </p>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                {pkg?.description}
              </p>

              {/* Package Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Clock"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-muted-foreground">{pkg?.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Calendar"
                    size={16}
                    className="text-muted-foreground"
                  />
                  <span className="text-muted-foreground">
                    {pkg?.availability}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                  Includes
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {pkg?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-success flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  onClick={() => handlePackageInquiry(pkg)}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Inquire Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handlePackageInquiry(pkg)}
                  iconName="Calendar"
                  iconPosition="left"
                  className="flex-1"
                >
                  Book Experience
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contact Information */}
      <div className="bg-accent/10 rounded-lg p-6 text-center">
        <Icon name="Phone" size={32} className="text-accent mx-auto mb-4" />
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          Need Help Choosing?
        </h3>
        <p className="text-muted-foreground mb-4">
          Our team is happy to help you select the perfect dining experience for
          your occasion.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center space-x-2">
            <Icon name="Phone" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Mail" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">
              events@bigbro.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPackages;
