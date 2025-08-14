import React from 'react';
import Icon from '../../../components/AppIcon';

const TimeSlotSelector = ({ selectedDate, availableSlots, selectedTime, onTimeSelect }) => {
  if (!selectedDate) {
    return (
      <div className="bg-card rounded-lg p-6 shadow-brand">
        <div className="text-center py-8">
          <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            Select a Date First
          </h3>
          <p className="text-muted-foreground">
            Please choose a date from the calendar to view available time slots.
          </p>
        </div>
      </div>
    );
  }

  const dateStr = selectedDate?.toISOString()?.split('T')?.[0];
  const slots = availableSlots?.[dateStr] || [];

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSlotStatus = (slot) => {
    if (slot?.available === 0) return 'unavailable';
    if (slot?.available <= 2) return 'limited';
    return 'available';
  };

  const getSlotStatusText = (slot) => {
    if (slot?.available === 0) return 'Fully Booked';
    if (slot?.available <= 2) return `${slot?.available} tables left`;
    return 'Available';
  };

  const groupSlotsByPeriod = (slots) => {
    const periods = {
      lunch: { label: 'Lunch', slots: [] },
      dinner: { label: 'Dinner', slots: [] },
      lateNight: { label: 'Late Night', slots: [] }
    };

    slots?.forEach(slot => {
      const hour = parseInt(slot?.time?.split(':')?.[0]);
      if (hour < 15) {
        periods?.lunch?.slots?.push(slot);
      } else if (hour < 21) {
        periods?.dinner?.slots?.push(slot);
      } else {
        periods?.lateNight?.slots?.push(slot);
      }
    });

    return periods;
  };

  const periods = groupSlotsByPeriod(slots);

  return (
    <div className="bg-card rounded-lg p-6 shadow-brand">
      <div className="mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          Available Times
        </h3>
        <p className="text-muted-foreground">
          {formatDate(selectedDate)}
        </p>
      </div>
      {slots?.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="Clock" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
            No Available Times
          </h4>
          <p className="text-muted-foreground mb-4">
            All time slots are booked for this date. Please try another day.
          </p>
          <p className="text-sm text-accent">
            Call us at (555) 123-4567 for waitlist options
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(periods)?.map(([key, period]) => {
            if (period?.slots?.length === 0) return null;

            return (
              <div key={key}>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                  {period?.label}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {period?.slots?.map((slot) => {
                    const status = getSlotStatus(slot);
                    const isSelected = selectedTime === slot?.time;
                    const isDisabled = status === 'unavailable';

                    return (
                      <button
                        key={slot?.time}
                        onClick={() => !isDisabled && onTimeSelect(slot?.time)}
                        disabled={isDisabled}
                        className={`
                          relative p-3 rounded-lg border transition-all duration-200 min-h-[60px]
                          ${isDisabled 
                            ? 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50' 
                            : isSelected
                              ? 'border-primary bg-primary text-primary-foreground shadow-brand'
                              : status === 'limited' ?'border-warning bg-warning/10 text-warning hover:bg-warning/20' :'border-border bg-background text-foreground hover:border-primary hover:bg-primary/5'
                          }
                        `}
                      >
                        <div className="text-sm font-semibold">
                          {slot?.time}
                        </div>
                        <div className="text-xs mt-1">
                          {getSlotStatusText(slot)}
                        </div>
                        {status === 'limited' && !isSelected && (
                          <div className="absolute top-1 right-1">
                            <Icon name="AlertTriangle" size={12} className="text-warning" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* Time Slot Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-success rounded-full"></div>
          <span className="text-xs text-muted-foreground">Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-warning rounded-full"></div>
          <span className="text-xs text-muted-foreground">Limited</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-muted rounded-full"></div>
          <span className="text-xs text-muted-foreground">Unavailable</span>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotSelector;