import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const RestaurantHeritageSection = () => {
  const timeline = [
    {
      year: "2018",
      title: "The Dream Begins",
      description:
        "Chef Isabella Martinez envisioned a restaurant that would bridge traditional Mediterranean flavors with contemporary California cuisine.",
      image:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800",
      milestone: "Concept Development",
    },
    {
      year: "2019",
      title: "Finding Our Home",
      description:
        "After months of searching, we discovered this historic building in the heart of the neighborhood, with its perfect blend of character and potential.",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      milestone: "Location Secured",
    },
    {
      year: "2020",
      title: "Building Our Vision",
      description:
        "Despite global challenges, we transformed the space into a warm, inviting dining destination that reflects our commitment to community and craft.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      milestone: "Restaurant Design",
    },
    {
      year: "2021",
      title: "Grand Opening",
      description:
        "bigbro opened its doors to the community, immediately becoming a beloved neighborhood gathering place for memorable dining experiences.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      milestone: "Official Launch",
    },
    {
      year: "2022",
      title: "Recognition & Growth",
      description:
        "Our commitment to excellence earned recognition from food critics and loyal patrons, establishing bigbro as a culinary destination.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      milestone: "Awards & Acclaim",
    },
    {
      year: "2025",
      title: "Continuing the Journey",
      description:
        "Today, we continue to evolve while staying true to our founding principles of quality, community, and culinary excellence.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      milestone: "Present Day",
    },
  ];

  const achievements = [
    {
      title: "James Beard Recognition",
      year: "2022",
      description: "Outstanding Restaurant Nominee",
      icon: "Award",
    },
    {
      title: "Michelin Guide Feature",
      year: "2023",
      description: "Recommended Restaurant",
      icon: "Star",
    },
    {
      title: "Local Choice Award",
      year: "2024",
      description: "Best Neighborhood Restaurant",
      icon: "Heart",
    },
    {
      title: "Sustainability Certification",
      year: "2024",
      description: "Green Restaurant Association",
      icon: "Leaf",
    },
  ];

  const values = [
    {
      title: "Community First",
      description:
        "We believe in being more than just a restaurant—we're a gathering place that brings people together over exceptional food.",
      icon: "Users",
    },
    {
      title: "Culinary Excellence",
      description:
        "Every dish reflects our commitment to quality ingredients, masterful technique, and innovative presentation.",
      icon: "ChefHat",
    },
    {
      title: "Sustainable Practices",
      description:
        "We source responsibly, minimize waste, and support local farmers and producers who share our environmental values.",
      icon: "Recycle",
    },
    {
      title: "Authentic Hospitality",
      description:
        "Our team creates warm, welcoming experiences that make every guest feel like part of the bigbro family.",
      icon: "Smile",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Icon name="Clock" size={18} />
            <span className="font-body font-medium text-sm">Our Story</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Restaurant Heritage
          </h2>

          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            From a passionate dream to a beloved neighborhood destination,
            discover the journey that shaped bigbro into the culinary
            experience it is today.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">
            Our Journey
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <div
                      className={`bg-background p-6 rounded-xl shadow-subtle ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-body font-medium mb-3">
                        <Icon name="Calendar" size={14} />
                        <span>{item?.year}</span>
                      </div>

                      <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                        {item?.title}
                      </h4>

                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                        {item?.description}
                      </p>

                      <div className="inline-flex items-center space-x-1 text-primary text-sm font-body font-medium">
                        <Icon name="Milestone" size={14} />
                        <span>{item?.milestone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand"></div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="relative overflow-hidden rounded-xl shadow-brand h-64">
                      <Image
                        src={item?.image}
                        alt={`${item?.title} - ${item?.year}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {values?.map((value, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl shadow-subtle hover:shadow-brand transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon
                      name={value?.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                      {value?.title}
                    </h4>

                    <p className="text-muted-foreground font-body leading-relaxed">
                      {value?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHeritageSection;
