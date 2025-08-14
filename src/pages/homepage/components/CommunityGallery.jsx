import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Moments', icon: 'Grid3X3' },
    { id: 'celebrations', name: 'Celebrations', icon: 'PartyPopper' },
    { id: 'couples', name: 'Date Nights', icon: 'Heart' },
    { id: 'families', name: 'Family Time', icon: 'Users' },
    { id: 'business', name: 'Business', icon: 'Briefcase' }
  ];

  const communityPhotos = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: 'celebrations',
      caption: "Sarah\'s 30th Birthday Celebration",
      customerName: "Sarah & Friends",
      occasion: "Birthday Dinner",
      date: "Dec 2024",
      likes: 24
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_400.jpg",
      category: 'couples',
      caption: "Perfect Anniversary Dinner",
      customerName: "Michael & Emma",
      occasion: "5th Anniversary",
      date: "Jan 2025",
      likes: 31
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&h=400&q=80",
      category: 'families',
      caption: "Three Generations Together",
      customerName: "The Johnson Family",
      occasion: "Family Reunion",
      date: "Dec 2024",
      likes: 18
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: 'business',
      caption: "Successful Deal Celebration",
      customerName: "TechCorp Team",
      occasion: "Business Dinner",
      date: "Jan 2025",
      likes: 15
    },
    {
      id: 5,
      image: "https://images.pixabay.com/photo/2016/11/29/13/39/adult-1869772_400.jpg",
      category: 'celebrations',
      caption: "Graduation Celebration",
      customerName: "Lisa & Family",
      occasion: "PhD Graduation",
      date: "Dec 2024",
      likes: 27
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&h=400&q=80",
      category: 'couples',
      caption: "Proposal Night Magic",
      customerName: "David & Rachel",
      occasion: "Engagement",
      date: "Jan 2025",
      likes: 42
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: 'families',
      caption: "Sunday Family Brunch",
      customerName: "The Martinez Family",
      occasion: "Weekly Tradition",
      date: "Jan 2025",
      likes: 22
    },
    {
      id: 8,
      image: "https://images.pixabay.com/photo/2016/11/29/13/24/attractive-1869763_400.jpg",
      category: 'business',
      caption: "Client Appreciation Dinner",
      customerName: "Sterling & Associates",
      occasion: "Year-End Event",
      date: "Dec 2024",
      likes: 19
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? communityPhotos 
    : communityPhotos?.filter(photo => photo?.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Camera" size={20} className="text-secondary" />
            <span className="text-secondary font-body font-medium">Community Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Celebrating Life's Special Moments
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            See how our guests create unforgettable memories at Savoria. Every celebration tells a unique story of joy, connection, and exceptional dining.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => handleCategoryChange(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-body font-medium transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPhotos?.map((photo) => (
            <div
              key={photo?.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src={photo?.image}
                  alt={photo?.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-body font-semibold mb-1">{photo?.caption}</h3>
                  <p className="text-sm text-white/80 mb-2">{photo?.customerName}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-white/60" />
                      <span className="text-xs text-white/80">{photo?.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} className="text-accent" />
                      <span className="text-xs text-white/80">{photo?.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-body font-medium">
                  {photo?.occasion}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & CTA */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Stats */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Join Our Community of Happy Diners
              </h3>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm font-body text-muted-foreground">Celebrations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-secondary mb-1">1,200+</div>
                  <div className="text-sm font-body text-muted-foreground">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-accent mb-1">4.9★</div>
                  <div className="text-sm font-body text-muted-foreground">Average Rating</div>
                </div>
              </div>

              <p className="text-muted-foreground font-body mb-6">
                Share your special moments with us and become part of the Savoria family. Tag us in your photos for a chance to be featured in our community gallery.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Instagram" size={20} className="text-muted-foreground" />
                  <span className="text-sm font-body text-muted-foreground">@savoria_restaurant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Hash" size={20} className="text-muted-foreground" />
                  <span className="text-sm font-body text-muted-foreground">#SavoriaMemories</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center md:text-right">
              <div className="space-y-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => navigate('/dining-experience-gallery')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                  iconName="Camera"
                  iconPosition="left"
                >
                  View Full Gallery
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/reservations-booking-hub')}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Create Your Memory
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  ))}
                </div>
                <p className="text-sm font-body text-muted-foreground">
                  "The perfect place for life's special moments"
                </p>
                <p className="text-xs font-body text-muted-foreground mt-1">
                  - Recent Google Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGallery;