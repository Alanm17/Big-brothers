import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StaffProfilesSection = () => {
  const [activeProfile, setActiveProfile] = useState(0);

  const staffMembers = [
    {
      id: 1,
      name: "Isabella Martinez",
      position: "Executive Chef & Owner",
      image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "15 years",
      specialty: "Mediterranean-California Fusion",
      bio: `Isabella's culinary journey began in her grandmother's kitchen in Valencia, where she learned that food is love made visible. After training at Le Cordon Bleu Paris and working in Michelin-starred restaurants across Europe, she founded Savoria to bring authentic flavors to life while honoring traditional techniques.\n\nHer philosophy centers on respecting the natural essence of each ingredient while elevating it through careful technique and passionate presentation. Every dish at Savoria reflects her commitment to quality, sustainability, and creating memorable dining experiences.`,
      credentials: [
        "Le Cordon Bleu Paris Graduate",
        "James Beard Rising Chef Nominee",
        "Michelin Guide Recognition",
        "Certified Sommelier Level 2"
      ],
      quote: "Cooking is not just about feeding the body; it's about nourishing the soul and creating memories that last a lifetime.",
      social: {
        instagram: "@chef_isabella_savoria",
        linkedin: "isabella-martinez-chef"
      }
    },
    {
      id: 2,
      name: "Marcus Thompson",
      position: "Sous Chef",
      image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "8 years",
      specialty: "Pastry & Desserts",
      bio: `Marcus brings precision and creativity to Savoria's dessert program. Trained at the Culinary Institute of America, he specializes in creating desserts that perfectly complement our seasonal menus while showcasing his innovative approach to classic techniques.\n\nHis attention to detail and passion for flavor balance make him an invaluable part of our culinary team. Marcus believes that dessert should be the perfect ending to a memorable meal, leaving guests with a sweet final impression.`,
      credentials: [
        "Culinary Institute of America Graduate",
        "Certified Pastry Chef",
        "Sugar Art Specialist",
        "Food Safety Certified"
      ],
      quote: "A great dessert doesn't just end a meal—it creates a lasting memory that brings people back.",
      social: {
        instagram: "@marcus_pastry_art",linkedin: "marcus-thompson-pastry"
      }
    },
    {
      id: 3,
      name: "Sofia Rodriguez",position: "Restaurant Manager",image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",experience: "12 years",specialty: "Guest Experience & Operations",
      bio: `Sofia ensures that every guest at Savoria feels welcomed and valued. With over a decade of experience in hospitality management, she has a keen eye for detail and a genuine passion for creating exceptional dining experiences.\n\nHer leadership style focuses on empowering the front-of-house team to deliver personalized service that makes each visit special. Sofia believes that great hospitality is about anticipating needs and creating moments of delight throughout the dining experience.`,
      credentials: [
        "Hospitality Management Degree","Certified Restaurant Manager","Wine Service Certified","Customer Experience Specialist"
      ],
      quote: "True hospitality is making our guests feel like they\'re dining in the home of a dear friend.",
      social: {
        instagram: "@sofia_savoria_mgr",
        linkedin: "sofia-rodriguez-hospitality"
      }
    },
    {
      id: 4,
      name: "James Chen",
      position: "Head Sommelier",
      image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "10 years",
      specialty: "Wine Pairing & Education",
      bio: `James curates Savoria's wine program with expertise and passion, creating pairings that enhance both food and wine. His extensive knowledge of global wine regions and varietals allows him to guide guests through perfect matches for their dining experience.\n\nHe believes that wine should complement and elevate food, creating harmonious combinations that surprise and delight. James regularly conducts wine education sessions for both staff and guests, sharing his love for viticulture and the stories behind each bottle.`,
      credentials: [
        "Master Sommelier Candidate",
        "Court of Master Sommeliers Level 3",
        "Wine & Spirit Education Trust Diploma",
        "Certified Sake Professional"
      ],
      quote: "The perfect wine pairing doesn't just complement the dish—it creates a new experience entirely.",
      social: {
        instagram: "@james_wine_savoria",
        linkedin: "james-chen-sommelier"
      }
    }
  ];

  const teamStats = [
    { label: "Team Members", value: "24", icon: "Users" },
    { label: "Combined Experience", value: "180+", icon: "Clock" },
    { label: "Certifications", value: "35+", icon: "Award" },
    { label: "Languages Spoken", value: "8", icon: "Globe" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Icon name="Users" size={18} />
            <span className="font-body font-medium text-sm">Our Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Behind every exceptional dining experience is a passionate team of culinary professionals and hospitality experts dedicated to creating memorable moments for our guests.
          </p>
        </div>

        {/* Staff Profiles */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-brand h-[600px]">
                <Image
                  src={staffMembers?.[activeProfile]?.image}
                  alt={`${staffMembers?.[activeProfile]?.name} - ${staffMembers?.[activeProfile]?.position}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Profile Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {staffMembers?.[activeProfile]?.name}
                  </h3>
                  <p className="text-lg font-body mb-2">
                    {staffMembers?.[activeProfile]?.position}
                  </p>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{staffMembers?.[activeProfile]?.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} />
                      <span>{staffMembers?.[activeProfile]?.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {staffMembers?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProfile(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeProfile 
                        ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Profile Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  {staffMembers?.[activeProfile]?.name}
                </h3>
                <p className="text-xl text-secondary font-body font-medium mb-4">
                  {staffMembers?.[activeProfile]?.position}
                </p>
                
                {/* Quote */}
                <blockquote className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg mb-6">
                  <p className="text-lg font-body text-foreground italic leading-relaxed">
                    "{staffMembers?.[activeProfile]?.quote}"
                  </p>
                </blockquote>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  Professional Background
                </h4>
                <div className="prose prose-lg max-w-none">
                  {staffMembers?.[activeProfile]?.bio?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground font-body leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  Credentials & Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {staffMembers?.[activeProfile]?.credentials?.map((credential, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-card p-3 rounded-lg">
                      <Icon name="Award" size={16} className="text-accent flex-shrink-0" />
                      <span className="font-body text-sm text-foreground">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  Connect
                </h4>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 bg-card p-3 rounded-lg">
                    <Icon name="Instagram" size={16} className="text-accent" />
                    <span className="font-body text-sm text-foreground">
                      {staffMembers?.[activeProfile]?.social?.instagram}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-card p-3 rounded-lg">
                    <Icon name="Linkedin" size={16} className="text-accent" />
                    <span className="font-body text-sm text-foreground">
                      {staffMembers?.[activeProfile]?.social?.linkedin}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Navigation Buttons */}
              <div className="flex flex-wrap gap-2">
                {staffMembers?.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProfile(index)}
                    className={`px-4 py-2 rounded-lg font-body text-sm transition-all duration-200 ${
                      index === activeProfile
                        ? 'bg-accent text-accent-foreground shadow-subtle'
                        : 'bg-card text-foreground hover:bg-accent/10 hover:text-accent'
                    }`}
                  >
                    {member?.name?.split(' ')?.[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Statistics */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">
            Our Team by Numbers
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {teamStats?.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-subtle hover:shadow-brand transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={stat?.icon} size={32} className="text-primary" />
                </div>
                
                <div className="text-3xl font-heading font-bold text-accent mb-2">
                  {stat?.value}
                </div>
                
                <div className="text-sm font-body text-muted-foreground">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Culture */}
        <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-subtle">
          <div className="text-center mb-8">
            <Icon name="Heart" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Our Team Culture
            </h3>
            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              At Savoria, we believe that exceptional dining experiences are created by passionate people who love what they do. Our team is united by a shared commitment to culinary excellence, genuine hospitality, and continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="BookOpen" size={24} className="text-secondary" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground">
                Continuous Learning
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                We invest in our team's growth through ongoing training and culinary education
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground">
                Collaborative Spirit
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                Every team member contributes to creating memorable experiences for our guests
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name="Star" size={24} className="text-secondary" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground">
                Excellence Standard
              </h4>
              <p className="text-sm text-muted-foreground font-body">
                We maintain the highest standards in everything we do, from food to service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffProfilesSection;