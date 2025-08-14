import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ReservationConfirmation = ({ reservationData, onNewReservation, onClose }) => {
  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time) => {
    const [hours, minutes] = time?.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const confirmationNumber = `SAV${Date.now()?.toString()?.slice(-6)}`;

  return (
    <div className="bg-card rounded-lg p-8 shadow-brand max-w-2xl mx-auto">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Check" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Reservation Confirmed!
        </h2>
        <p className="text-muted-foreground">
          Thank you for choosing Savoria. We look forward to serving you.
        </p>
      </div>
      {/* Confirmation Details */}
      <div className="bg-background rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Reservation Details
          </h3>
          <div className="text-sm text-muted-foreground">
            Confirmation #{confirmationNumber}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date & Time */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Calendar" size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Date</div>
                <div className="font-medium text-foreground">
                  {formatDate(reservationData?.date)}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Time</div>
                <div className="font-medium text-foreground">
                  {formatTime(reservationData?.time)}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Party Size</div>
                <div className="font-medium text-foreground">
                  {reservationData?.partySize} {reservationData?.partySize === '1' ? 'Guest' : 'Guests'}
                </div>
              </div>
            </div>
          </div>

          {/* Guest Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="User" size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Guest Name</div>
                <div className="font-medium text-foreground">
                  {reservationData?.firstName} {reservationData?.lastName}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium text-foreground">
                  {reservationData?.email}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Phone" size={20} className="text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium text-foreground">
                  {reservationData?.phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        {(reservationData?.occasion || reservationData?.seatingPreference !== 'no-preference' || 
          reservationData?.dietaryRestrictions || reservationData?.specialRequests) && (
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
              Additional Information
            </h4>
            <div className="space-y-2 text-sm">
              {reservationData?.occasion && (
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Occasion:</span>
                  <span className="text-foreground">{reservationData?.occasion}</span>
                </div>
              )}
              {reservationData?.seatingPreference !== 'no-preference' && (
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Seating:</span>
                  <span className="text-foreground">
                    {reservationData?.seatingPreference?.replace('-', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                  </span>
                </div>
              )}
              {reservationData?.dietaryRestrictions && (
                <div className="flex items-start space-x-2">
                  <Icon name="AlertCircle" size={16} className="text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground">Dietary:</span>
                  <span className="text-foreground">{reservationData?.dietaryRestrictions}</span>
                </div>
              )}
              {reservationData?.specialRequests && (
                <div className="flex items-start space-x-2">
                  <Icon name="MessageSquare" size={16} className="text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground">Notes:</span>
                  <span className="text-foreground">{reservationData?.specialRequests}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Important Information */}
      <div className="bg-accent/10 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
          <Icon name="Info" size={16} className="text-accent" />
          <span>Important Information</span>
        </h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start space-x-2">
            <Icon name="Clock" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <span>Please arrive 10 minutes before your reservation time</span>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Phone" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <span>For changes or cancellations, call us at (555) 123-4567</span>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Car" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <span>Complimentary valet parking available after 6 PM</span>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Shirt" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <span>Smart casual dress code preferred</span>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="default"
          onClick={onNewReservation}
          iconName="Plus"
          iconPosition="left"
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Make Another Reservation
        </Button>
        <Button
          variant="outline"
          onClick={onClose}
          iconName="X"
          iconPosition="left"
          className="flex-1"
        >
          Close
        </Button>
      </div>
      {/* Contact Information */}
      <div className="text-center mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">
          Questions about your reservation?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Phone" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Mail" size={16} className="text-muted-foreground" />
            <span className="text-foreground font-medium">reservations@savoria.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;