import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

const StaffDirectory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const staffMembers = [
    {
      id: 1,
      name: "Marcus Chen",
      title: "General Manager",
      department: "management",
      email: "marcus.chen@bigbro.com",
      phone: "(555) 123-4567 ext. 101",
      specialties: ["Operations", "Guest Relations", "Staff Management"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Marcus brings over 15 years of hospitality experience to bigbro, ensuring every guest receives exceptional service.",
      availability: "Monday - Friday, 10 AM - 8 PM",
    },
    {
      id: 2,
      name: "Isabella Rodriguez",
      title: "Executive Chef",
      department: "culinary",
      email: "isabella.rodriguez@bigbro.com",
      phone: "(555) 123-4567 ext. 102",
      specialties: [
        "Menu Development",
        "Dietary Accommodations",
        "Seasonal Cuisine",
      ],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Chef Isabella crafts innovative dishes using locally sourced ingredients, creating memorable culinary experiences.",
      availability: "Tuesday - Saturday, 2 PM - 11 PM",
    },
    {
      id: 3,
      name: "David Thompson",
      title: "Events Coordinator",
      department: "events",
      email: "david.thompson@bigbro.com",
      phone: "(555) 123-4567 ext. 103",
      specialties: ["Private Dining", "Corporate Events", "Wedding Receptions"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "David specializes in creating unforgettable private events, from intimate dinners to grand celebrations.",
      availability: "Monday - Saturday, 9 AM - 6 PM",
    },
    {
      id: 4,
      name: "Sarah Kim",
      title: "Sommelier",
      department: "beverage",
      email: "sarah.kim@bigbro.com",
      phone: "(555) 123-4567 ext. 104",
      specialties: ["Wine Pairings", "Beverage Programs", "Staff Training"],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Sarah curates our wine selection and creates perfect pairings to complement our seasonal menu offerings.",
      availability: "Wednesday - Sunday, 4 PM - 10 PM",
    },
    {
      id: 5,
      name: "Michael Foster",
      title: "Reservations Manager",
      department: "reservations",
      email: "reservations@bigbro.com",
      phone: "(555) 123-4568",
      specialties: ["Table Management", "Special Requests", "Group Bookings"],
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Michael ensures seamless reservation experiences and accommodates special dining requests with attention to detail.",
      availability: "Daily, 10 AM - 8 PM",
    },
    {
      id: 6,
      name: "Elena Vasquez",
      title: "Marketing Director",
      department: "marketing",
      email: "elena.vasquez@bigbro.com",
      phone: "(555) 123-4567 ext. 105",
      specialties: ["Media Relations", "Social Media", "Brand Partnerships"],
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      bio: "Elena manages our brand presence and media relationships, sharing bigbro's story with the community.",
      availability: "Monday - Friday, 9 AM - 5 PM",
    },
  ];

  const departments = [
    { id: "all", name: "All Departments", icon: "Users" },
    { id: "management", name: "Management", icon: "Crown" },
    { id: "culinary", name: "Culinary", icon: "ChefHat" },
    { id: "events", name: "Events", icon: "Calendar" },
    { id: "beverage", name: "Beverage", icon: "Wine" },
    { id: "reservations", name: "Reservations", icon: "Phone" },
    { id: "marketing", name: "Marketing", icon: "Megaphone" },
  ];

  const filteredStaff =
    selectedDepartment === "all"
      ? staffMembers
      : staffMembers?.filter(
          (member) => member?.department === selectedDepartment
        );

  const handleContact = (member, method) => {
    if (method === "email") {
      window.open(`mailto:${member?.email}`, "_self");
    } else if (method === "phone") {
      window.open(`tel:${member?.phone?.replace(/[^\d+]/g, "")}`, "_self");
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-brand overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-primary p-6 text-white">
        <h2 className="text-3xl font-heading font-bold mb-2">Our Team</h2>
        <p className="text-white/90 leading-relaxed">
          Meet the passionate professionals who make your bigbro experience
          exceptional
        </p>
      </div>
      {/* Department Filter */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {departments?.map((dept) => (
            <button
              key={dept?.id}
              onClick={() => setSelectedDepartment(dept?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedDepartment === dept?.id
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon name={dept?.icon} size={16} />
              <span className="text-sm">{dept?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Staff Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff?.map((member) => (
            <div
              key={member?.id}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-brand transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-foreground text-lg leading-tight">
                    {member?.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {member?.title}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {member?.availability}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member?.bio}
              </p>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="font-medium text-foreground text-sm mb-2">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1">
                  {member?.specialties?.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContact(member, "email")}
                  iconName="Mail"
                  iconPosition="left"
                  className="flex-1"
                >
                  Email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContact(member, "phone")}
                  iconName="Phone"
                  iconPosition="left"
                  className="flex-1"
                >
                  Call
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Mail" size={12} />
                  <span className="truncate">{member?.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Phone" size={12} />
                  <span>{member?.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStaff?.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Users"
              size={48}
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-foreground mb-2">
              No team members found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different department to see our team members.
            </p>
          </div>
        )}
      </div>
      {/* Emergency Contact */}
      <div className="bg-error/5 border-t border-error/20 p-6">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-error mt-0.5" />
          <div className="flex-1">
            <h4 className="font-medium text-foreground mb-2">
              Emergency Contact
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              For urgent matters outside business hours, please contact our
              emergency line:
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:+15551234999", "_self")}
              iconName="Phone"
              iconPosition="left"
              className="border-error text-error hover:bg-error hover:text-white"
            >
              Emergency: (555) 123-4999
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDirectory;
