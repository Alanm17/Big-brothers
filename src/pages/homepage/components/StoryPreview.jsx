import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const StoryPreview = () => {
  const navigate = useNavigate();

  const storyHighlights = [
    {
      id: 1,
      title: "Tradition Meets Innovation",
      description:
        "Our culinary philosophy blends time-honored techniques with contemporary creativity",
      icon: "Heart",
    },
    {
      id: 2,
      title: "Local Sourcing",
      description:
        "We partner with local farms and suppliers to bring you the freshest seasonal ingredients",
      icon: "Leaf",
    },
    {
      id: 3,
      title: "Passionate Craftsmanship",
      description:
        "Every dish is crafted with meticulous attention to detail and genuine love for the culinary arts",
      icon: "Award",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Icon name="BookOpen" size={20} className="text-primary" />
                <span className="text-primary font-body font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Where Culinary Dreams Come to Life
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Founded in 2018 with a simple vision: to create a dining
                experience that celebrates both the artistry of cooking and the
                joy of sharing exceptional food with loved ones. At bigbro, we
                believe that every meal should tell a story—one of passion,
                quality, and genuine hospitality.
              </p>
            </div>

            {/* Story Highlights */}
            <div className="space-y-6">
              {storyHighlights?.map((highlight) => (
                <div key={highlight?.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={highlight?.icon}
                      size={24}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {highlight?.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {highlight?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chef Quote */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <blockquote className="text-foreground font-body italic text-lg mb-3">
                    "Cooking is not just about feeding the body—it's about
                    nourishing the soul and creating memories that last a
                    lifetime."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon name="ChefHat" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground">
                        Chef Marcus Rodriguez
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Executive Chef & Co-Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                onClick={() => navigate("/culinary-story-about")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Read Our Full Story
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/dining-experience-gallery")}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body font-semibold"
                iconName="Camera"
                iconPosition="left"
              >
                View Gallery
              </Button>
            </div>
          </div>

          {/* Atmospheric Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-brand">
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=500&q=80"
                    alt="bigbro dining room atmosphere"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Secondary Images */}
              <div className="relative overflow-hidden rounded-xl shadow-brand">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="Chef preparing dish"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-brand">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="https://images.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_400.jpg"
                    alt="Restaurant interior detail"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-brand p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary mb-1">
                  6+
                </div>
                <div className="text-sm font-body text-muted-foreground">
                  Years of Excellence
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 bg-accent text-accent-foreground rounded-2xl shadow-brand p-6">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold mb-1">2018</div>
                <div className="text-sm font-body">Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryPreview;
