import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      caption: "Fresh truffle pasta made with love ✨ #bigbroExperience",
      likes: 234,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=400&fit=crop",
      caption: "Behind the scenes: Our chef preparing tonight's special 👨‍🍳",
      likes: 189,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      image:
        "https://images.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg?w=400&h=400&fit=crop",
      caption: "Celebrating another beautiful evening at bigbro 🥂",
      likes: 312,
      timestamp: "1 day ago",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop",
      caption: "Sunday brunch vibes with our signature cocktails 🍹",
      likes: 156,
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Icon name="Instagram" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              @bigbro_restaurant
            </h3>
            <p className="text-sm text-muted-foreground">
              Follow us for daily updates
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {instagramPosts?.map((post) => (
          <div
            key={post?.id}
            className="group relative bg-muted rounded-lg overflow-hidden cursor-pointer hover:shadow-brand transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={post?.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm line-clamp-2 mb-2">
                  {post?.caption}
                </p>
                <div className="flex items-center justify-between text-white/80 text-xs">
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={12} />
                    <span>{post?.likes}</span>
                  </div>
                  <span>{post?.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          variant="default"
          iconName="Instagram"
          iconPosition="left"
          className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0"
        >
          View All Posts
        </Button>
      </div>
    </div>
  );
};

export default InstagramFeed;
