import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ReviewsSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviewPlatforms = [
    { id: 'all', name: 'All Reviews', icon: 'Star' },
    { id: 'google', name: 'Google', icon: 'Search' },
    { id: 'yelp', name: 'Yelp', icon: 'MessageSquare' },
    { id: 'opentable', name: 'OpenTable', icon: 'Calendar' },
    { id: 'tripadvisor', name: 'TripAdvisor', icon: 'MapPin' }
  ];

  const overallRatings = {
    google: { rating: 4.8, reviews: 342, platform: 'Google' },
    yelp: { rating: 4.6, reviews: 189, platform: 'Yelp' },
    opentable: { rating: 4.9, reviews: 156, platform: 'OpenTable' },
    tripadvisor: { rating: 4.7, reviews: 98, platform: 'TripAdvisor' }
  };

  const reviews = [
    {
      id: 1,
      platform: 'google',
      author: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2024-08-10',
      title: 'Exceptional dining experience!',
      content: `bigbro exceeded all expectations! The ambiance is perfect for a special occasion, and the service was impeccable. Chef Isabella's seasonal menu was absolutely divine - every dish was a work of art. The wine pairing recommendations from Sarah were spot-on. We'll definitely be returning for our anniversary next year!`,
      helpful: 23,
      verified: true,
      response: {
        author: 'Marcus Chen - General Manager',
        content: 'Thank you so much for this wonderful review, Sarah! We\'re thrilled that you had such a memorable experience with us. Chef Isabella and our sommelier Sarah will be delighted to hear your kind words. We look forward to celebrating your anniversary with you next year!',
        date: '2024-08-11'
      }
    },
    {
      id: 2,
      platform: 'yelp',
      author: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2024-08-08',
      title: 'Perfect for business dinners',
      content: `I've hosted several business dinners at bigbro, and it never disappoints. The private dining room is elegant and provides the perfect atmosphere for important conversations. The staff is professional and attentive without being intrusive. The menu offers something for everyone, including excellent vegetarian options.`,
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      platform: 'opentable',author: 'Maria Rodriguez',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',rating: 5,date: '2024-08-06',title: 'Outstanding food and service',
      content: `From the moment we walked in, we felt welcomed. The duck breast special was cooked to perfection, and the truffle risotto was incredibly rich and flavorful. Our server was knowledgeable about the menu and made excellent recommendations. The dessert was the perfect ending to a fantastic meal.`,
      helpful: 15,
      verified: true,
      response: {
        author: 'Isabella Rodriguez - Executive Chef',content: 'Maria, thank you for taking the time to share your experience! I\'m so pleased you enjoyed the duck breast and truffle risotto - both are personal favorites of mine. Your kind words about our team mean the world to us. We hope to welcome you back soon!',
        date: '2024-08-07'
      }
    },
    {
      id: 4,
      platform: 'google',
      author: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      date: '2024-08-04',
      title: 'Great atmosphere, minor wait time',
      content: `bigbro has a wonderful atmosphere and the food quality is excellent. We had a slight wait despite our reservation, but the staff was apologetic and offered complimentary appetizers. The main courses were outstanding, particularly the seafood dishes. Would recommend making reservations well in advance.`,
      helpful: 12,
      verified: true
    },
    {
      id: 5,
      platform: 'tripadvisor',
      author: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2024-08-02',
      title: 'Dietary restrictions handled perfectly',
      content: `As someone with multiple food allergies, I was nervous about dining out. The staff at bigbro went above and beyond to accommodate my needs. Chef Isabella personally came out to discuss options, and they created a modified version of their signature dish that was absolutely delicious. Truly exceptional service!`,
      helpful: 28,
      verified: true
    },
    {
      id: 6,
      platform: 'yelp',
      author: 'Robert Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      date: '2024-07-30',
      title: 'Wine selection is incredible',
      content: `The wine program at bigbro is outstanding. Sarah, the sommelier, has curated an impressive selection that perfectly complements the menu. Her knowledge and passion for wine really enhanced our dining experience. The food was exceptional as well - every course was perfectly executed.`,
      helpful: 20,
      verified: true
    }
  ];

  const filteredReviews = selectedPlatform === 'all' 
    ? reviews 
    : reviews?.filter(review => review?.platform === selectedPlatform);

  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews?.slice(0, 3);

  const calculateOverallRating = () => {
    const totalRating = Object.values(overallRatings)?.reduce((sum, platform) => 
      sum + (platform?.rating * platform?.reviews), 0
    );
    const totalReviews = Object.values(overallRatings)?.reduce((sum, platform) => 
      sum + platform?.reviews, 0
    );
    return (totalRating / totalReviews)?.toFixed(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)]?.map((_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-accent fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="bg-card rounded-xl shadow-brand overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <h2 className="text-3xl font-heading font-bold mb-2">Guest Reviews</h2>
        <p className="text-white/90 leading-relaxed">
          See what our guests are saying about their bigbro experience
        </p>
      </div>
      {/* Overall Ratings Summary */}
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Overall Score */}
          <div className="lg:col-span-1 text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">
              {calculateOverallRating()}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(parseFloat(calculateOverallRating())))}
            </div>
            <p className="text-sm text-muted-foreground">
              {Object.values(overallRatings)?.reduce((sum, p) => sum + p?.reviews, 0)} reviews
            </p>
          </div>

          {/* Platform Ratings */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(overallRatings)?.map(([key, data]) => (
              <div key={key} className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="font-heading font-bold text-lg text-foreground">
                  {data?.rating}
                </div>
                <div className="flex justify-center mb-1">
                  {renderStars(Math.round(data?.rating))}
                </div>
                <p className="text-xs text-muted-foreground">{data?.platform}</p>
                <p className="text-xs text-muted-foreground">{data?.reviews} reviews</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Platform Filter */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {reviewPlatforms?.map((platform) => (
            <button
              key={platform?.id}
              onClick={() => setSelectedPlatform(platform?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedPlatform === platform?.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon name={platform?.icon} size={16} />
              <span className="text-sm">{platform?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Reviews List */}
      <div className="p-6 space-y-6">
        {displayedReviews?.map((review) => (
          <div key={review?.id} className="bg-background border border-border rounded-xl p-6">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <Image
                  src={review?.avatar}
                  alt={review?.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-foreground">{review?.author}</h4>
                    {review?.verified && (
                      <div className="flex items-center space-x-1 text-success">
                        <Icon name="CheckCircle" size={14} />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="flex">{renderStars(review?.rating)}</div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(review?.date)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize">
                      {review?.platform}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="mb-4">
              <h5 className="font-medium text-foreground mb-2">{review?.title}</h5>
              <p className="text-muted-foreground leading-relaxed">{review?.content}</p>
            </div>

            {/* Review Actions */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                  <Icon name="ThumbsUp" size={14} />
                  <span>Helpful ({review?.helpful})</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                  <Icon name="Share" size={14} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Management Response */}
            {review?.response && (
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-foreground text-sm">
                        {review?.response?.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(review?.response?.date)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review?.response?.content}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Show More/Less Button */}
        {filteredReviews?.length > 3 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAllReviews(!showAllReviews)}
              iconName={showAllReviews ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
            >
              {showAllReviews ? 'Show Less Reviews' : `Show All ${filteredReviews?.length} Reviews`}
            </Button>
          </div>
        )}

        {/* Write Review CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <h4 className="font-heading font-semibold text-foreground mb-2">
            Share Your Experience
          </h4>
          <p className="text-muted-foreground mb-4">
            Help others discover bigbro by sharing your dining experience
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => window.open('https://g.page/r/bigbro-restaurant/review', '_blank')}
              iconName="Star"
              iconPosition="left"
            >
              Review on Google
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://yelp.com/biz/bigbro-restaurant', '_blank')}
              iconName="MessageSquare"
              iconPosition="left"
            >
              Review on Yelp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;