import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ReservationCalendar = ({ selectedDate, onDateSelect, availableSlots }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth?.setMonth(currentMonth?.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const isDateAvailable = (date) => {
    if (!date) return false;
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const isDateSelected = (date) => {
    if (!date || !selectedDate) return false;
    return date?.toDateString() === selectedDate?.toDateString();
  };

  const hasAvailableSlots = (date) => {
    if (!date) return false;
    const dateStr = date?.toISOString()?.split('T')?.[0];
    return availableSlots?.[dateStr] && availableSlots?.[dateStr]?.length > 0;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="bg-card rounded-lg p-6 shadow-brand">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
        >
          <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
        </button>
        
        <h3 className="text-lg font-heading font-semibold text-foreground">
          {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
        </h3>
        
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
        >
          <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
        </button>
      </div>
      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames?.map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days?.map((date, index) => {
          const isAvailable = isDateAvailable(date);
          const isSelected = isDateSelected(date);
          const hasSlots = hasAvailableSlots(date);

          return (
            <button
              key={index}
              onClick={() => date && isAvailable && onDateSelect(date)}
              disabled={!date || !isAvailable}
              className={`
                relative p-3 text-sm rounded-lg transition-all duration-200 min-h-[44px]
                ${!date ? 'invisible' : ''}
                ${!isAvailable ? 'text-muted-foreground cursor-not-allowed' : ''}
                ${isAvailable && !isSelected ? 'text-foreground hover:bg-primary/10 hover:text-primary' : ''}
                ${isSelected ? 'bg-primary text-primary-foreground shadow-brand' : ''}
                ${hasSlots && isAvailable && !isSelected ? 'font-semibold' : ''}
              `}
            >
              {date && (
                <>
                  <span>{date?.getDate()}</span>
                  {hasSlots && isAvailable && !isSelected && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <span className="text-xs text-muted-foreground">Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-xs text-muted-foreground">Selected</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationCalendar;