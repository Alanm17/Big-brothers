import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const ReservationWidget = () => {
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    phone: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const timeSlots = [
    { value: "17:00", label: "5:00 PM" },
    { value: "17:30", label: "5:30 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "18:30", label: "6:30 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "19:30", label: "7:30 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "20:30", label: "8:30 PM" },
    { value: "21:00", label: "9:00 PM" },
  ];

  const guestOptions = [
    { value: "1", label: "1 Guest" },
    { value: "2", label: "2 Guests" },
    { value: "3", label: "3 Guests" },
    { value: "4", label: "4 Guests" },
    { value: "5", label: "5 Guests" },
    { value: "6", label: "6 Guests" },
    { value: "7", label: "7 Guests" },
    { value: "8", label: "8+ Guests" },
  ];

  const availabilityData = [
    { date: "2025-01-15", available: true, slots: 8 },
    { date: "2025-01-16", available: true, slots: 12 },
    { date: "2025-01-17", available: true, slots: 6 },
    { date: "2025-01-18", available: false, slots: 0 },
    { date: "2025-01-19", available: true, slots: 15 },
  ];

  const handleInputChange = (field, value) => {
    setReservationData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleQuickReservation = () => {
    if (!reservationData?.date || !reservationData?.time) {
      setShowForm(true);
      return;
    }
    navigate("/reservations-booking-hub", {
      state: {
        prefilledData: reservationData,
      },
    });
  };

  const handleFullReservation = () => {
    navigate("/reservations-booking-hub");
  };

  const getTodayDate = () => {
    const today = new Date();
    return today?.toISOString()?.split("T")?.[0];
  };

  const getAvailabilityForDate = (date) => {
    const availability = availabilityData?.find((item) => item?.date === date);
    return availability || { available: true, slots: 10 };
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Reservation Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Icon name="Calendar" size={20} className="text-accent" />
                <span className="text-accent font-body font-medium">
                  Reserve Your Table
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Secure Your Culinary Experience
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Book your table at bigbro and embark on a memorable dining
                journey. Our reservation system offers real-time availability
                and special dining options to enhance your experience.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">
                    Real-time Availability
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Instant confirmation
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Wine" size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">
                    Wine Pairings
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Curated selections
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">
                    Premium Seating
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Best table options
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">
                    Special Events
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Private dining
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-background p-6 rounded-xl border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-foreground font-body italic mb-3">
                    "The reservation process was seamless, and the dining
                    experience exceeded all expectations. bigbro truly delivers
                    on their promise of exceptional hospitality."
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-body font-semibold text-foreground">
                      Sarah Mitchell
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className="text-accent fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Widget */}
          <div className="bg-background rounded-2xl shadow-brand p-8 border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Make a Reservation
              </h3>
              <p className="text-muted-foreground font-body">
                Select your preferred date and time
              </p>
            </div>

            <div className="space-y-6">
              {/* Quick Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="date"
                  label="Date"
                  value={reservationData?.date}
                  onChange={(e) => handleInputChange("date", e?.target?.value)}
                  min={getTodayDate()}
                  required
                />

                <Select
                  label="Time"
                  options={timeSlots}
                  value={reservationData?.time}
                  onChange={(value) => handleInputChange("time", value)}
                  placeholder="Select time"
                />
              </div>

              <Select
                label="Number of Guests"
                options={guestOptions}
                value={reservationData?.guests}
                onChange={(value) => handleInputChange("guests", value)}
              />

              {/* Availability Display */}
              {reservationData?.date && (
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name={
                          getAvailabilityForDate(reservationData?.date)
                            ?.available
                            ? "CheckCircle"
                            : "XCircle"
                        }
                        size={20}
                        className={
                          getAvailabilityForDate(reservationData?.date)
                            ?.available
                            ? "text-success"
                            : "text-error"
                        }
                      />
                      <span className="font-body font-medium text-foreground">
                        {getAvailabilityForDate(reservationData?.date)
                          ?.available
                          ? "Available"
                          : "Fully Booked"}
                      </span>
                    </div>
                    {getAvailabilityForDate(reservationData?.date)
                      ?.available && (
                      <span className="text-sm text-muted-foreground">
                        {getAvailabilityForDate(reservationData?.date)?.slots}{" "}
                        slots remaining
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Form (Conditional) */}
              {showForm && (
                <div className="space-y-4 pt-4 border-t border-border">
                  <Input
                    type="text"
                    label="Full Name"
                    placeholder="Enter your name"
                    value={reservationData?.name}
                    onChange={(e) =>
                      handleInputChange("name", e?.target?.value)
                    }
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      label="Phone"
                      placeholder="(555) 123-4567"
                      value={reservationData?.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e?.target?.value)
                      }
                      required
                    />

                    <Input
                      type="email"
                      label="Email"
                      placeholder="your@email.com"
                      value={reservationData?.email}
                      onChange={(e) =>
                        handleInputChange("email", e?.target?.value)
                      }
                      required
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  onClick={handleQuickReservation}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                  disabled={
                    !reservationData?.date ||
                    !getAvailabilityForDate(reservationData?.date)?.available
                  }
                >
                  {showForm ? "Confirm Reservation" : "Quick Reserve"}
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleFullReservation}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold"
                  iconName="Settings"
                  iconPosition="left"
                >
                  Advanced Options
                </Button>
              </div>

              {/* Special Offers */}
              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Gift"
                    size={20}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">
                      Special Dining Packages
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Enhance your experience with wine pairings, chef's tasting
                      menu, or private dining options.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleFullReservation}
                      className="text-accent hover:bg-accent/10 p-0 h-auto font-body"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Explore Packages
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationWidget;
