import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = () => {
  const [activeTab, setActiveTab] = useState('location');

  const operatingHours = [
    { day: 'Monday', hours: '5:00 PM - 10:00 PM', isToday: false },
    { day: 'Tuesday', hours: '5:00 PM - 10:00 PM', isToday: false },
    { day: 'Wednesday', hours: '5:00 PM - 10:00 PM', isToday: true },
    { day: 'Thursday', hours: '5:00 PM - 10:00 PM', isToday: false },
    { day: 'Friday', hours: '5:00 PM - 11:00 PM', isToday: false },
    { day: 'Saturday', hours: '4:00 PM - 11:00 PM', isToday: false },
    { day: 'Sunday', hours: '4:00 PM - 9:00 PM', isToday: false }
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Phone',
      primary: '(555) 123-4567',
      secondary: 'Main dining room',
      action: 'tel:+15551234567',
      actionText: 'Call Now'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'hello@savoria.com',
      secondary: 'General inquiries',
      action: 'mailto:hello@savoria.com',
      actionText: 'Send Email'
    },
    {
      icon: 'Calendar',
      title: 'Reservations',
      primary: '(555) 123-4568',
      secondary: 'Booking & events',
      action: 'tel:+15551234568',
      actionText: 'Call to Book'
    }
  ];

  const accessibilityFeatures = [
    {
      icon: 'Accessibility',
      title: 'Wheelchair Accessible',
      description: 'Full wheelchair access with ramp entrance and accessible restrooms'
    },
    {
      icon: 'Car',
      title: 'Valet Parking',
      description: 'Complimentary valet service available Thursday through Sunday'
    },
    {
      icon: 'Volume2',
      title: 'Hearing Assistance',
      description: 'Assistive listening devices available upon request'
    },
    {
      icon: 'Eye',
      title: 'Visual Accommodations',
      description: 'Large print menus and braille menus available'
    }
  ];

  const nearbyLandmarks = [
    { name: 'Central Park', distance: '2 blocks north', icon: 'Trees' },
    { name: 'Metro Station', distance: '1 block east', icon: 'Train' },
    { name: 'Art Museum', distance: '3 blocks south', icon: 'Palette' },
    { name: 'Shopping District', distance: '4 blocks west', icon: 'ShoppingBag' }
  ];

  const tabs = [
    { id: 'location', label: 'Location', icon: 'MapPin' },
    { id: 'hours', label: 'Hours', icon: 'Clock' },
    { id: 'accessibility', label: 'Accessibility', icon: 'Accessibility' }
  ];

  const handleDirections = () => {
    const address = "123 Culinary Avenue, Downtown District, New York, NY 10001";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <div className="bg-card rounded-xl shadow-brand overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
        <h2 className="text-3xl font-heading font-bold mb-2">Visit Savoria</h2>
        <p className="text-white/90 leading-relaxed">
          Located in the heart of downtown, we're easily accessible by car or public transit
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'location' && (
          <div className="space-y-8">
            {/* Address & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    Our Address
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium text-foreground">123 Culinary Avenue</p>
                        <p className="text-muted-foreground">Downtown District</p>
                        <p className="text-muted-foreground">New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    onClick={handleDirections}
                    iconName="Navigation"
                    iconPosition="left"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    View on Maps
                  </Button>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-foreground">
                    Contact Information
                  </h4>
                  {contactMethods?.map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={method?.icon} size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{method?.primary}</p>
                          <p className="text-sm text-muted-foreground">{method?.secondary}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(method?.action, '_self')}
                        iconName="ExternalLink"
                        iconPosition="right"
                      >
                        {method?.actionText}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Map */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Find Us Here
                </h3>
                <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Savoria Restaurant Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=40.7589,-73.9851&z=15&output=embed"
                    className="border-0"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-3">Nearby Landmarks</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {nearbyLandmarks?.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name={landmark?.icon} size={14} className="text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{landmark?.name}</p>
                          <p className="text-xs text-muted-foreground">{landmark?.distance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hours' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Operating Hours
              </h3>
              <div className="space-y-3">
                {operatingHours?.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                      schedule?.isToday
                        ? 'bg-primary/10 border border-primary/20' :'bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {schedule?.isToday && (
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      )}
                      <span className={`font-medium ${
                        schedule?.isToday ? 'text-primary' : 'text-foreground'
                      }`}>
                        {schedule?.day}
                        {schedule?.isToday && (
                          <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span className={`font-mono ${
                      schedule?.isToday ? 'text-primary font-semibold' : 'text-muted-foreground'
                    }`}>
                      {schedule?.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Hours Notice */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-2">Special Hours & Holidays</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Holiday hours may vary - please call ahead</li>
                    <li>• Last seating is 30 minutes before closing</li>
                    <li>• Private events may affect regular hours</li>
                    <li>• Kitchen closes 15 minutes before restaurant closing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="flex items-center justify-between p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="font-medium text-success">Currently Open</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Closes at 10:00 PM today
              </span>
            </div>
          </div>
        )}

        {activeTab === 'accessibility' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Accessibility Features
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're committed to providing an inclusive dining experience for all our guests. 
                Our restaurant is fully accessible and we're happy to accommodate special needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accessibilityFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">{feature?.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-heading font-semibold text-foreground mb-4">
                Additional Accommodations
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Service Animals Welcome</p>
                    <p className="text-sm text-muted-foreground">
                      Service animals are always welcome in our dining room
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Utensils" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Dietary Accommodations</p>
                    <p className="text-sm text-muted-foreground">
                      Our chefs can modify dishes for allergies and dietary restrictions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Advance Notice Appreciated</p>
                    <p className="text-sm text-muted-foreground">
                      Please call ahead for specific accommodations to ensure the best experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Accessibility */}
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => window.open('tel:+15551234567', '_self')}
                iconName="Phone"
                iconPosition="left"
              >
                Call for Accessibility Questions
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInfo;