import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Food Blogger",
      image:
        "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review: `Savoria exceeded every expectation I had. Chef Isabella's attention to detail and passion for quality ingredients shines through in every dish. The seasonal menu perfectly captures the essence of California cuisine with Mediterranean influences.\n\nThe service was impeccable, and the atmosphere strikes the perfect balance between elegant and welcoming. This is exactly what neighborhood dining should be—exceptional food in a warm, inviting setting.`,
      date: "December 2024",
      platform: "Food & Wine Blog",
      verified: true,
      occasion: "Anniversary Dinner",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Regular Customer",
      image:
        "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review: `I've been dining at Savoria since they opened, and they continue to impress me with their consistency and innovation. The staff knows my preferences, and Chef Isabella often surprises me with off-menu creations that perfectly match my taste.\n\nWhat sets Savoria apart is their genuine care for the community. They source locally, support other small businesses, and create a space where neighbors become friends over incredible food.`,
      date: "November 2024",
      platform: "Google Reviews",
      verified: true,
      occasion: "Regular Dining",
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Corporate Event Planner",
      image:
        "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review: `Savoria catered our company's annual celebration, and the experience was flawless from start to finish. The team worked with us to create a custom menu that impressed our clients and colleagues alike.\n\nThe presentation was stunning, the flavors were exceptional, and the service was professional yet warm. Several attendees have already asked for Savoria's contact information for their own events.`,
      date: "October 2024",
      platform: "Yelp",
      verified: true,
      occasion: "Corporate Event",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Wine Enthusiast",
      image:
        "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review: `James, the sommelier, is absolutely brilliant. His wine pairings elevated our dining experience to new heights. Each selection perfectly complemented the flavors of our dishes, and his knowledge and passion for wine made the evening educational as well as delicious.\n\nThe wine list is thoughtfully curated with options for every palate and budget. This is a restaurant that truly understands the art of food and wine pairing.`,
      date: "September 2024",
      platform: "OpenTable",
      verified: true,
      occasion: "Wine Tasting Dinner",
    },
  ];

  const mediaFeatures = [
    {
      publication: "Food & Wine Magazine",
      title: "Best New Neighborhood Restaurants",
      date: "2024",
      quote:
        "Savoria brings sophisticated dining to the neighborhood level with exceptional results.",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200",
      type: "Feature Article",
    },
    {
      publication: "Local Eats Weekly",
      title: "Chef Spotlight: Isabella Martinez",
      date: "2024",
      quote:
        "A rising star in the culinary world with a commitment to community and quality.",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200",
      type: "Chef Profile",
    },
    {
      publication: "Sustainable Dining Guide",
      title: "Farm-to-Table Excellence",
      date: "2023",
      quote:
        "Savoria sets the standard for responsible sourcing and environmental consciousness.",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200",
      type: "Sustainability Feature",
    },
    {
      publication: "City Restaurant Review",
      title: "Hidden Gems Worth Finding",
      date: "2023",
      quote:
        "A neighborhood treasure that rivals the city's most acclaimed establishments.",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
      type: "Restaurant Review",
    },
  ];

  const communityStats = [
    { label: "5-Star Reviews", value: "98%", icon: "Star" },
    { label: "Return Customers", value: "85%", icon: "RotateCcw" },
    { label: "Community Events", value: "24", icon: "Calendar" },
    { label: "Local Partnerships", value: "15+", icon: "Handshake" },
  ];

  const awards = [
    {
      title: "Best Neighborhood Restaurant",
      organization: "Local Choice Awards",
      year: "2024",
      icon: "Award",
    },
    {
      title: "Sustainability Champion",
      organization: "Green Restaurant Association",
      year: "2024",
      icon: "Leaf",
    },
    {
      title: "Outstanding Service",
      organization: "Hospitality Excellence",
      year: "2023",
      icon: "Heart",
    },
    {
      title: "Rising Chef Recognition",
      organization: "Culinary Institute",
      year: "2023",
      icon: "ChefHat",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}

        {/* Featured Testimonials */}

        {/* Call to Action */}
        <div className="bg-background p-8 lg:p-12 rounded-2xl shadow-subtle text-center">
          <Icon
            name="MessageHeart"
            size={48}
            className="text-accent mx-auto mb-6"
          />
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
            Share Your Savoria Story
          </h3>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed mb-8">
            We love hearing from our guests! Share your dining experience with
            us on social media or leave a review to help others discover the
            Savoria experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg">
              <Icon name="Instagram" size={20} className="text-accent" />
              <span className="font-body text-sm text-foreground">
                @savoria_restaurant
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg">
              <Icon name="Facebook" size={20} className="text-accent" />
              <span className="font-body text-sm text-foreground">
                Savoria Restaurant
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg">
              <Icon name="Star" size={20} className="text-accent" />
              <span className="font-body text-sm text-foreground">
                Leave a Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
