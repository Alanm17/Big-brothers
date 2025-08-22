import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import ReservationCalendar from "./components/ReservationCalendar";
import TimeSlotSelector from "./components/TimeSlotSelector";
import ReservationForm from "./components/ReservationForm";
import SpecialPackages from "./components/SpecialPackages";
import ReservationConfirmation from "./components/ReservationConfirmation";
import Button from "../../components/ui/Button";
import Icon from "../../components/AppIcon";

const ReservationsBookingHub = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentStep, setCurrentStep] = useState("booking"); // 'booking', 'packages', 'confirmation'
  const [isLoading, setIsLoading] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Mock available time slots data
  const [availableSlots] = useState(() => {
    const slots = {};
    const today = new Date();

    // Generate slots for next 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      const dateStr = date?.toISOString()?.split("T")?.[0];

      // Skip Mondays (restaurant closed)
      if (date?.getDay() === 1) continue;

      const daySlots = [];

      // Lunch slots (11:30 AM - 2:30 PM)
      const lunchTimes = [
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
      ];
      lunchTimes?.forEach((time) => {
        daySlots?.push({
          time,
          available: Math.floor(Math.random() * 8) + 1, // 1-8 tables available
        });
      });

      // Dinner slots (5:00 PM - 9:30 PM)
      const dinnerTimes = [
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
      ];
      dinnerTimes?.forEach((time) => {
        daySlots?.push({
          time,
          available: Math.floor(Math.random() * 10) + 1, // 1-10 tables available
        });
      });

      slots[dateStr] = daySlots;
    }

    return slots;
  });

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleReservationSubmit = async (formData) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setReservationData(formData);
    setCurrentStep("confirmation");
    setIsLoading(false);
  };

  const handlePackageSelect = (packageData) => {
    setSelectedPackage(packageData);
    // You could open a modal or navigate to a package-specific booking flow
    console.log("Package selected:", packageData);
  };

  const handleNewReservation = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setReservationData(null);
    setSelectedPackage(null);
    setCurrentStep("booking");
  };

  const handleCloseConfirmation = () => {
    setCurrentStep("booking");
  };

  const steps = [
    { id: "booking", label: "Book Table", icon: "Calendar" },
    { id: "packages", label: "Special Experiences", icon: "Star" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (currentStep === "confirmation") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-6 py-12">
            <ReservationConfirmation
              reservationData={reservationData}
              onNewReservation={handleNewReservation}
              onClose={handleCloseConfirmation}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Reserve Your Table
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Secure your spot for an unforgettable dining experience at
                bigbro. Choose from our regular dining options or explore our
                special culinary experiences.
              </p>

              {/* Step Navigation */}
              <div className="flex items-center justify-center space-x-8 mb-8">
                {steps?.map((step, index) => (
                  <button
                    key={step?.id}
                    onClick={() => setCurrentStep(step?.id)}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
                      ${
                        currentStep === step?.id
                          ? "bg-primary text-primary-foreground shadow-brand"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }
                    `}
                  >
                    <Icon name={step?.icon} size={20} />
                    <span className="font-medium">{step?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {currentStep === "booking" ? (
              <div className="max-w-7xl mx-auto">
                {/* Booking Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div
                      className={`
                      flex items-center space-x-2 px-3 py-1 rounded-full text-sm
                      ${
                        selectedDate
                          ? "bg-success text-white"
                          : "bg-muted text-muted-foreground"
                      }
                    `}
                    >
                      <Icon name="Calendar" size={16} />
                      <span>Select Date</span>
                      {selectedDate && <Icon name="Check" size={16} />}
                    </div>

                    <div className="w-8 h-px bg-border"></div>

                    <div
                      className={`
                      flex items-center space-x-2 px-3 py-1 rounded-full text-sm
                      ${
                        selectedTime
                          ? "bg-success text-white"
                          : "bg-muted text-muted-foreground"
                      }
                    `}
                    >
                      <Icon name="Clock" size={16} />
                      <span>Select Time</span>
                      {selectedTime && <Icon name="Check" size={16} />}
                    </div>

                    <div className="w-8 h-px bg-border"></div>

                    <div
                      className={`
                      flex items-center space-x-2 px-3 py-1 rounded-full text-sm
                      ${
                        selectedDate && selectedTime
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }
                    `}
                    >
                      <Icon name="Users" size={16} />
                      <span>Guest Details</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Calendar */}
                  <div className="lg:col-span-1">
                    <ReservationCalendar
                      selectedDate={selectedDate}
                      onDateSelect={handleDateSelect}
                      availableSlots={availableSlots}
                    />
                  </div>

                  {/* Time Slots */}
                  <div className="lg:col-span-1">
                    <TimeSlotSelector
                      selectedDate={selectedDate}
                      availableSlots={availableSlots}
                      selectedTime={selectedTime}
                      onTimeSelect={handleTimeSelect}
                    />
                  </div>

                  {/* Reservation Form */}
                  <div className="lg:col-span-1">
                    <ReservationForm
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      onSubmit={handleReservationSubmit}
                      isLoading={isLoading}
                    />
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-12 bg-card rounded-lg p-6 shadow-brand">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4 text-center">
                    Reservation Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <Icon name="Clock" size={24} className="text-accent" />
                      <h4 className="font-medium text-foreground">
                        Operating Hours
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Tue-Sun: 11:30 AM - 10:00 PM
                        <br />
                        Closed Mondays
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Icon name="Phone" size={24} className="text-accent" />
                      <h4 className="font-medium text-foreground">
                        Contact Us
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567
                        <br />
                        reservations@bigbro.com
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Icon name="MapPin" size={24} className="text-accent" />
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">
                        149-6, Gunja-dong
                        <br />
                        Seoul, South Korea
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto">
                <SpecialPackages onPackageSelect={handlePackageSelect} />
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        {currentStep === "booking" && (
          <section className="bg-primary/5 py-12">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Looking for Something Special?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our curated dining experiences including wine pairings,
                chef's table, and private dining options for memorable
                occasions.
              </p>
              <Button
                variant="default"
                onClick={() => setCurrentStep("packages")}
                iconName="Star"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                View Special Experiences
              </Button>
            </div>
          </section>
        )}
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Icon
                name="ChefHat"
                size={20}
                className="text-accent-foreground"
              />
            </div>
            <span className="text-xl font-heading font-bold">bigbro</span>
          </div>
          <p className="text-sm opacity-80">
            © {new Date()?.getFullYear()} bigbro Restaurant. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ReservationsBookingHub;
