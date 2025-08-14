import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const ChefJourneySection = () => {
  const chefData = {
    name: "Chef Isabella Martinez",
    title: "Executive Chef & Culinary Director",
    image:
      "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote:
      "Cooking is not just about feeding the body; it's about nourishing the soul and creating memories that last a lifetime.",
    journey: `My culinary journey began in my grandmother's kitchen in Valencia, where I learned that food is love made visible. After training at Le Cordon Bleu Paris and working in Michelin-starred restaurants across Europe, I discovered my true calling: bringing authentic flavors to life while honoring traditional techniques.\n\nAt Savoria, we believe every ingredient has a story to tell. My philosophy centers on respecting the natural essence of each component while elevating it through careful technique and passionate presentation. Every dish we create is a conversation between tradition and innovation.`,
    achievements: [
      "Le Cordon Bleu Paris Graduate (2015)",
      "James Beard Rising Chef Nominee (2020)",
      "Featured in Food & Wine Magazine (2021)",
      "Michelin Guide Recognition (2022)",
    ],
    philosophy: "Farm-to-table excellence with Mediterranean soul",
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Chef Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-brand">
              <Image
                src={chefData?.image}
                alt={`${chefData?.name} - Executive Chef at Savoria`}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-brand max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <Icon
                  name="Award"
                  size={24}
                  className="text-accent-foreground"
                />
                <span className="font-heading font-semibold text-sm">
                  Recognition
                </span>
              </div>
              <p className="text-xs font-body opacity-90">
                James Beard Rising Chef Nominee & Michelin Guide Featured
              </p>
            </div>
          </div>

          {/* Chef Story Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Icon name="ChefHat" size={18} />
                <span className="font-body font-medium text-sm">
                  Meet Our Chef
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
                {chefData?.name}
              </h2>

              <p className="text-xl text-secondary font-body font-medium">
                {chefData?.title}
              </p>

              <p className="text-lg text-muted-foreground font-body italic">
                "{chefData?.philosophy}"
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg">
              <p className="text-lg font-body text-foreground italic leading-relaxed">
                {chefData?.quote}
              </p>
            </blockquote>

            {/* Journey Story */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Culinary Journey
              </h3>
              <div className="prose prose-lg max-w-none">
                {chefData?.journey?.split("\n\n")?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground font-body leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Achievements */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefJourneySection;
