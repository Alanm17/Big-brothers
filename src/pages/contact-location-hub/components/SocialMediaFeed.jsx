import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SocialMediaFeed = () => {
  const [activeTab, setActiveTab] = useState('instagram');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: 'Instagram',
      handle: '@bigbro_restaurant',
      followers: '12.5K',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'Facebook',
      handle: 'bigbro Restaurant',
      followers: '8.2K',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'Twitter',
      handle: '@bigbro_nyc',
      followers: '5.8K',
      color: 'from-blue-400 to-blue-500'
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
      caption: 'Tonight\'s special: Pan-seared duck breast with cherry gastrique and roasted root vegetables. Limited availability! 🦆✨',
      likes: 234,
      comments: 18,
      timeAgo: '2 hours ago',
      hashtags: ['#DuckSpecial', '#SeasonalMenu', '#bigbroExperience']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
      caption: 'Behind the scenes with Chef Isabella preparing our signature truffle risotto. The aroma alone is worth the visit! 👨‍🍳',
      likes: 189,
      comments: 12,
      timeAgo: '6 hours ago',
      hashtags: ['#BehindTheScenes', '#TruffleRisotto', '#ChefLife']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
      caption: 'Cozy corner table for two with candlelight and city views. Perfect for your next date night! 💕',
      likes: 156,
      comments: 8,
      timeAgo: '1 day ago',
      hashtags: ['#DateNight', '#Ambiance', '#CityViews']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop',
      caption: 'Wine Wednesday! Our sommelier Sarah recommends this exceptional Burgundy to pair with tonight\'s menu. 🍷',
      likes: 142,
      comments: 15,
      timeAgo: '2 days ago',
      hashtags: ['#WineWednesday', '#Burgundy', '#WinePairing']
    }
  ];

  const facebookPosts = [
    {
      id: 1,
      type: 'event',
      title: 'Valentine\'s Day Special Menu',
      description: 'Join us for a romantic evening with our exclusive 5-course Valentine\'s menu. Limited seating available.',
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop',
      likes: 89,
      shares: 23,
      comments: 12,
      timeAgo: '3 hours ago'
    },
    {
      id: 2,
      type: 'review',
      title: 'Customer Spotlight',
      description: '"Absolutely incredible dining experience! The service was impeccable and every dish was a work of art." - Maria S.',
      rating: 5,
      likes: 67,
      shares: 8,
      comments: 6,
      timeAgo: '1 day ago'
    }
  ];

  const twitterPosts = [
    {
      id: 1,
      text: 'Fresh ingredients just arrived from our local farm partners! Tonight\'s menu will feature the best of seasonal produce 🥕🌿 #FarmToTable #LocalIngredients',
      likes: 45,
      retweets: 12,
      replies: 3,
      timeAgo: '4 hours ago'
    },
    {
      id: 2,
      text: 'Reminder: We\'re open for lunch service starting this weekend! Saturday & Sunday 11:30 AM - 3:00 PM 🍽️ #WeekendLunch #NewHours',
      likes: 38,
      retweets: 18,
      replies: 7,
      timeAgo: '8 hours ago'
    }
  ];

  const formatTimeAgo = (timeAgo) => {
    return timeAgo;
  };

  const handleSocialLink = (platform) => {
    const urls = {
      instagram: 'https://instagram.com/bigbro_restaurant',
      facebook: 'https://facebook.com/bigbro.restaurant',
      twitter: 'https://twitter.com/bigbro_nyc'
    };
    window.open(urls?.[platform], '_blank');
  };

  const renderInstagramFeed = () => (
    <div className="space-y-6">
      {instagramPosts?.map((post) => (
        <div key={post?.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-brand transition-all duration-300">
          <Image
            src={post?.image}
            alt="Instagram post"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <p className="text-foreground mb-3 leading-relaxed">{post?.caption}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {post?.hashtags?.map((tag, index) => (
                <span key={index} className="text-primary text-sm hover:underline cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Heart" size={16} />
                  <span>{post?.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={16} />
                  <span>{post?.comments}</span>
                </div>
              </div>
              <span>{formatTimeAgo(post?.timeAgo)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFacebookFeed = () => (
    <div className="space-y-6">
      {facebookPosts?.map((post) => (
        <div key={post?.id} className="bg-background border border-border rounded-xl p-4 hover:shadow-brand transition-all duration-300">
          <div className="mb-3">
            <h3 className="font-heading font-bold text-foreground mb-2">{post?.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{post?.description}</p>
          </div>
          {post?.image && (
            <Image
              src={post?.image}
              alt="Facebook post"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
          )}
          {post?.rating && (
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(post?.rating)]?.map((_, i) => (
                <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
              ))}
            </div>
          )}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="ThumbsUp" size={16} />
                <span>{post?.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Share" size={16} />
                <span>{post?.shares}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={16} />
                <span>{post?.comments}</span>
              </div>
            </div>
            <span>{formatTimeAgo(post?.timeAgo)}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTwitterFeed = () => (
    <div className="space-y-4">
      {twitterPosts?.map((post) => (
        <div key={post?.id} className="bg-background border border-border rounded-xl p-4 hover:shadow-brand transition-all duration-300">
          <p className="text-foreground mb-3 leading-relaxed">{post?.text}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={16} />
                <span>{post?.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Repeat" size={16} />
                <span>{post?.retweets}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={16} />
                <span>{post?.replies}</span>
              </div>
            </div>
            <span>{formatTimeAgo(post?.timeAgo)}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-card rounded-xl shadow-brand overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-primary p-6 text-white">
        <h2 className="text-3xl font-heading font-bold mb-2">Follow Our Journey</h2>
        <p className="text-white/90 leading-relaxed">
          Stay connected with daily specials, behind-the-scenes moments, and culinary inspiration
        </p>
      </div>
      {/* Social Platform Tabs */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {socialPlatforms?.map((platform) => (
            <button
              key={platform?.id}
              onClick={() => setActiveTab(platform?.id)}
              className={`flex items-center space-x-3 px-6 py-4 font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === platform?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={platform?.icon} size={18} />
              <div className="text-left">
                <div className="font-medium">{platform?.name}</div>
                <div className="text-xs text-muted-foreground">{platform?.followers} followers</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Feed Content */}
      <div className="p-6">
        {/* Platform Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${socialPlatforms?.find(p => p?.id === activeTab)?.color} flex items-center justify-center`}>
              <Icon 
                name={socialPlatforms?.find(p => p?.id === activeTab)?.icon} 
                size={24} 
                className="text-white" 
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">
                {socialPlatforms?.find(p => p?.id === activeTab)?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {socialPlatforms?.find(p => p?.id === activeTab)?.handle}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => handleSocialLink(activeTab)}
            iconName="ExternalLink"
            iconPosition="right"
          >
            Follow Us
          </Button>
        </div>

        {/* Feed Content */}
        {activeTab === 'instagram' && renderInstagramFeed()}
        {activeTab === 'facebook' && renderFacebookFeed()}
        {activeTab === 'twitter' && renderTwitterFeed()}
      </div>
      {/* Social Media CTA */}
      <div className="bg-muted/30 border-t border-border p-6">
        <div className="text-center">
          <h4 className="font-heading font-semibold text-foreground mb-2">
            Share Your bigbro Experience
          </h4>
          <p className="text-muted-foreground mb-4">
            Tag us in your photos and use #bigbroExperience to be featured on our feed!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialPlatforms?.map((platform) => (
              <Button
                key={platform?.id}
                variant="outline"
                size="sm"
                onClick={() => handleSocialLink(platform?.id)}
                iconName={platform?.icon}
                iconPosition="left"
              >
                {platform?.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFeed;