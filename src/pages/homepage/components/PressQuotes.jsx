import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const PressQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const pressQuotes = [
    {
      id: 1,
      quote:
        "Savoria elevates neighborhood dining to an art form. Every dish tells a story of passion, precision, and exceptional taste. This is destination dining at its finest.",
      author: "James Morrison",
      publication: "City Food & Wine Magazine",
      rating: "★★★★★",
      date: "December 2024",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      id: 2,
      quote:
        "Chef Marcus Rodriguez has created something truly special at Savoria. The perfect balance of innovation and tradition makes every meal an unforgettable experience.",
      author: "Sarah Chen",
      publication: "Metropolitan Dining Review",
      rating: "★★★★★",
      date: "January 2025",
      avatar:
        "https://images.pixabay.com/photo/2016/11/29/20/22/girl-1871104_100.jpg",
    },
    {
      id: 3,
      quote:
        "From the warm ambiance to the exceptional service, Savoria delivers on every front. This restaurant has quickly become the gold standard for fine dining in our city.",
      author: "Robert Williams",
      publication: "Gourmet Today",
      rating: "★★★★★",
      date: "November 2024",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 4,
      quote:
        "Savoria's commitment to local sourcing and sustainable practices, combined with their culinary excellence, makes them a standout in today's dining landscape.",
      author: "Maria Rodriguez",
      publication: "Sustainable Eats Weekly",
      rating: "★★★★★",
      date: "December 2024",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];

  const awards = [
    {
      id: 1,
      title: "Best New Restaurant 2024",
      organization: "City Dining Awards",
      icon: "Award",
    },
    {
      id: 2,
      title: "Excellence in Service",
      organization: "Hospitality Guild",
      icon: "Star",
    },
    {
      id: 3,
      title: "Sustainable Dining Leader",
      organization: "Green Restaurant Association",
      icon: "Leaf",
    },
    {
      id: 4,
      title: "Chef's Choice Award",
      organization: "Culinary Institute",
      icon: "ChefHat",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % pressQuotes?.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [pressQuotes?.length]);

  const goToQuote = (index) => {
    setCurrentQuote(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Quote" size={20} className="text-accent" />
            <span className="text-accent font-body font-medium">
              Press & Recognition
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Critics Are Saying
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Savoria has earned recognition from leading food critics and
            publications for our commitment to culinary excellence and
            exceptional dining experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Featured Quote Carousel */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-8 shadow-brand border border-border">
              {/* Quote Content */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon
                    name="Quote"
                    size={24}
                    className="text-accent-foreground"
                  />
                </div>

                <div className="pl-8">
                  <blockquote className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-6 italic">
                    "{pressQuotes?.[currentQuote]?.quote}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={pressQuotes?.[currentQuote]?.avatar}
                        alt={pressQuotes?.[currentQuote]?.author}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-body font-semibold text-foreground">
                          {pressQuotes?.[currentQuote]?.author}
                        </h4>
                        <span className="text-accent text-sm">
                          {pressQuotes?.[currentQuote]?.rating}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pressQuotes?.[currentQuote]?.publication} •{" "}
                        {pressQuotes?.[currentQuote]?.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {pressQuotes?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? "bg-accent scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
        </div>
      </div>
    </section>
  );
};

export default PressQuotes;
