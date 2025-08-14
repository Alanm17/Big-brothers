import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ReservationForm = ({ selectedDate, selectedTime, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partySize: '2',
    specialRequests: '',
    occasion: '',
    dietaryRestrictions: '',
    seatingPreference: 'no-preference'
  });

  const [errors, setErrors] = useState({});

  const occasionOptions = [
    'Birthday',
    'Anniversary',
    'Date Night',
    'Business Dinner',
    'Celebration',
    'Other'
  ];

  const seatingOptions = [
    { value: 'no-preference', label: 'No Preference' },
    { value: 'dining-room', label: 'Main Dining Room' },
    { value: 'bar', label: 'Bar Area' },
    { value: 'patio', label: 'Outdoor Patio' },
    { value: 'private', label: 'Private Dining' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    const partySize = parseInt(formData?.partySize);
    if (partySize < 1 || partySize > 12) {
      newErrors.partySize = 'Party size must be between 1 and 12';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value?.replace(/\D/g, '');
    const match = cleaned?.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match?.[1]}) ${match?.[2]}-${match?.[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e?.target?.value);
    handleInputChange('phone', formatted);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        date: selectedDate,
        time: selectedTime
      });
    }
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!selectedDate || !selectedTime) {
    return (
      <div className="bg-card rounded-lg p-6 shadow-brand">
        <div className="text-center py-8">
          <Icon name="Users" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            Complete Your Selection
          </h3>
          <p className="text-muted-foreground">
            Please select both a date and time to proceed with your reservation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-brand">
      <div className="mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          Reservation Details
        </h3>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={16} />
            <span>{formatDate(selectedDate)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>{selectedTime}</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
            Contact Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              error={errors?.firstName}
              required
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              type="text"
              value={formData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              error={errors?.lastName}
              required
              placeholder="Enter your last name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Input
              label="Email Address"
              type="email"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
              placeholder="your.email@example.com"
            />
            <Input
              label="Phone Number"
              type="tel"
              value={formData?.phone}
              onChange={handlePhoneChange}
              error={errors?.phone}
              required
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {/* Reservation Preferences */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
            Reservation Preferences
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Party Size
              </label>
              <select
                value={formData?.partySize}
                onChange={(e) => handleInputChange('partySize', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1)?.map(size => (
                  <option key={size} value={size?.toString()}>
                    {size} {size === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
              {errors?.partySize && (
                <p className="text-sm text-error mt-1">{errors?.partySize}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Seating Preference
              </label>
              <select
                value={formData?.seatingPreference}
                onChange={(e) => handleInputChange('seatingPreference', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              >
                {seatingOptions?.map(option => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Special Occasion */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
            Special Occasion (Optional)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {occasionOptions?.map(occasion => (
              <button
                key={occasion}
                type="button"
                onClick={() => handleInputChange('occasion', formData?.occasion === occasion ? '' : occasion)}
                className={`
                  p-3 rounded-lg border text-sm transition-all duration-200
                  ${formData?.occasion === occasion
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground hover:border-primary hover:bg-primary/5'
                  }
                `}
              >
                {occasion}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">
            Additional Information
          </h4>
          <div className="space-y-4">
            <Input
              label="Dietary Restrictions or Allergies"
              type="text"
              value={formData?.dietaryRestrictions}
              onChange={(e) => handleInputChange('dietaryRestrictions', e?.target?.value)}
              placeholder="Please let us know about any dietary needs"
            />
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Special Requests
              </label>
              <textarea
                value={formData?.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e?.target?.value)}
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-none"
                placeholder="Any special requests or notes for your visit..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-border">
          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isLoading}
            iconName="Calendar"
            iconPosition="left"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-brand"
          >
            {isLoading ? 'Confirming Reservation...' : 'Confirm Reservation'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;