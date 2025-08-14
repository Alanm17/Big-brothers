import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CustomerSubmissions = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    caption: '',
    image: null
  });

  const customerPhotos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop",
      customerName: "Sarah Johnson",
      caption: "Amazing anniversary dinner! The ambiance was perfect and the food was incredible.",
      date: "Dec 10, 2024",
      verified: true
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?w=300&h=300&fit=crop",
      customerName: "Mike Chen",
      caption: "Best pasta I\'ve ever had! Will definitely be coming back soon.",
      date: "Dec 8, 2024",
      verified: true
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg?w=300&h=300&fit=crop",
      customerName: "Emily Rodriguez",
      caption: "Celebrated my birthday here and it was magical! Thank you Savoria team!",
      date: "Dec 5, 2024",
      verified: true
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop",
      customerName: "David Thompson",
      caption: "The cocktails here are works of art. Highly recommend the signature drinks!",
      date: "Dec 3, 2024",
      verified: true
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e?.target?.files?.[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowSubmissionForm(false);
    setFormData({ name: '', email: '', caption: '', image: null });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
            <Icon name="Users" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Customer Moments
            </h3>
            <p className="text-sm text-muted-foreground">
              Share your Savoria experience
            </p>
          </div>
        </div>
        
        <Button
          variant="default"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={() => setShowSubmissionForm(true)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Share Photo
        </Button>
      </div>
      {/* Submission Form */}
      {showSubmissionForm && (
        <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading font-semibold text-foreground">
              Share Your Experience
            </h4>
            <button
              onClick={() => setShowSubmissionForm(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Your Name"
                type="text"
                name="name"
                value={formData?.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <Input
              label="Caption"
              type="text"
              name="caption"
              value={formData?.caption}
              onChange={handleInputChange}
              placeholder="Tell us about your experience..."
              required
            />
            
            <Input
              label="Upload Photo"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
            
            <div className="flex items-center space-x-3">
              <Button
                type="submit"
                variant="default"
                iconName="Upload"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Submit Photo
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowSubmissionForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
      {/* Customer Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {customerPhotos?.map((photo) => (
          <div
            key={photo?.id}
            className="group bg-background border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-300"
          >
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={16} color="white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h5 className="font-body font-semibold text-foreground">
                    {photo?.customerName}
                  </h5>
                  {photo?.verified && (
                    <Icon name="BadgeCheck" size={16} className="text-primary" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {photo?.date}
                </p>
              </div>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-lg mb-3">
              <Image
                src={photo?.image}
                alt={`Photo by ${photo?.customerName}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <p className="text-sm text-foreground leading-relaxed">
              {photo?.caption}
            </p>
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Heart" size={16} />
                  <span className="text-sm">Like</span>
                </button>
                
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={16} />
                  <span className="text-sm">Comment</span>
                </button>
              </div>
              
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Share2" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button
          variant="outline"
          iconName="Eye"
          iconPosition="left"
          className="border-primary text-primary hover:bg-primary/5"
        >
          View All Customer Photos
        </Button>
      </div>
    </div>
  );
};

export default CustomerSubmissions;