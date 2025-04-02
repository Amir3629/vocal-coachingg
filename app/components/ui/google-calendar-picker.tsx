"use client"

import React, { useState, useEffect } from 'react'
import { Calendar } from './calendar'
import { X, Calendar as CalendarIcon, Clock, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

interface GoogleCalendarPickerProps {
  onChange: (date: Date | undefined) => void
  value?: Date
  placeholder?: string
  className?: string
  showTimeSelector?: boolean
  disablePastDates?: boolean
}

// Interface for time slots
interface TimeSlot {
  label: string;
  value: string;
  available: boolean;
}

// Default time slots
const DEFAULT_TIME_SLOTS: TimeSlot[] = [
  { label: '09:00', value: '09:00', available: true },
  { label: '09:50', value: '09:50', available: true },
  { label: '10:40', value: '10:40', available: true },
  { label: '12:00', value: '12:00', available: true },
  { label: '12:50', value: '12:50', available: true },
  { label: '14:30', value: '14:30', available: true },
  { label: '15:20', value: '15:20', available: true },
  { label: '16:10', value: '16:10', available: true },
  { label: '17:00', value: '17:00', available: true },
];

// Helper function to check if a date is in the past
const isPastDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

// Helper function to check if a date is a weekend (day 0 is Sunday and day 6 is Saturday)
const isWeekend = (date: Date) => {
  return date.getDay() === 0 || date.getDay() === 6;
};

// Add custom styling to hide Saturday and Sunday columns
const customCalendarStyles = `
  .rdp-day_saturday,
  .rdp-day_sunday {
    display: none !important;
  }
  
  .rdp-head_cell:first-child,
  .rdp-head_cell:last-child {
    display: none !important;
  }

  .rdp-table {
    width: 100% !important;
  }

  .rdp-month {
    width: 100% !important;
  }

  .rdp-caption {
    padding: 0 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .rdp-nav {
    gap: 0.5rem !important;
  }
`;

export default function GoogleCalendarPicker({
  onChange,
  value,
  placeholder = "Datum auswählen",
  className = "",
  showTimeSelector = true,
  disablePastDates = true
}: GoogleCalendarPickerProps) {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date | undefined>(value);
  const [isOpen, setIsOpen] = useState(false);
  const [timeSlot, setTimeSlot] = useState<string | undefined>();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  // Determine the container width based on content
  const containerWidth = showTimeSlots && date ? 'w-[380px]' : 'w-[270px]';

  // Update the parent component when a date and time are selected
  useEffect(() => {
    if (date) {
      onChange(date);
    }
  }, [date, onChange]);

  // Disable past dates and weekends
  const disabledDays = (day: Date) => {
    if (disablePastDates && isPastDate(day)) {
      return true;
    }
    return isWeekend(day);
  };

  // Format date for display
  const formatDate = (date?: Date) => {
    if (!date) return placeholder;
    
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  const handleDateSelect = (date?: Date) => {
    setDate(date);
    setTimeSlot(undefined);
    setIsConfirmed(false);
    setShowTimeSlots(!!date);
  };

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
    
    // Start smooth closing animation sequence
    setTimeout(() => {
      setIsConfirming(true);
      
      setTimeout(() => {
        setIsConfirming(false);
        setIsConfirmed(true);
        
        // Start closing the calendar smoothly
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
          }, 300);
        }, 500);
      }, 500);
    }, 200);
  };

  return (
    <div className="relative">
      <style jsx global>{customCalendarStyles}</style>
      
      <div 
        className={`flex items-center justify-between bg-[#1A1A1A] border border-gray-700 rounded-lg px-4 py-3 cursor-pointer hover:border-[#C8A97E] transition-colors ${className}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="flex items-center">
          <CalendarIcon className="w-5 h-5 text-[#C8A97E] mr-2" />
          <span className="text-gray-300">{date ? formatDate(date) : placeholder}</span>
          {timeSlot && date && (
            <span className="ml-2 text-[#C8A97E]">({timeSlot})</span>
          )}
        </div>
        {date && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDate(undefined);
              setTimeSlot(undefined);
              setIsConfirmed(false);
            }}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
              onClick={() => setIsOpen(false)}
            />

            {/* Calendar Card */}
            <div className="fixed inset-0 flex items-center justify-center z-[10000]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className={`relative ${containerWidth} max-w-[90vw]`}
              >
                <motion.div 
                  className="bg-[#111] border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                  animate={{ scale: isClosing ? 0.95 : 1, opacity: isClosing ? 0 : 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex justify-between items-center p-2 border-b border-gray-800">
                    <h3 className="text-white font-medium text-lg">{t('booking.selectDate', 'Datum auswählen')}</h3>
                    <button 
                      onClick={() => setIsOpen(false)} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-2 flex flex-row justify-center items-start gap-1">
                    <div className="w-[240px]">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        disabled={disabledDays}
                        initialFocus
                        classNames={{
                          head_row: "flex justify-between w-full",
                          head_cell: "text-[#C8A97E] rounded-md font-medium text-[0.8rem] text-center",
                          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#C8A97E]/10",
                          day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center hover:bg-gray-800/50 rounded-md mx-auto",
                          day_selected: "bg-[#C8A97E] text-black hover:bg-[#C8A97E] hover:text-black",
                          day_today: "bg-[#C8A97E]/10 text-[#C8A97E] font-semibold",
                          table: "w-full border-collapse",
                          months: "flex flex-col space-y-2",
                          month: "space-y-2"
                        }}
                      />
                    </div>
                    
                    {showTimeSelector && (
                      <AnimatePresence>
                        {showTimeSlots && date && (
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-[110px] border-l border-gray-800 pl-2"
                          >
                            <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                              <Clock className="w-4 h-4 mr-1 text-[#C8A97E]" />
                              {t('booking.selectTime', 'Uhrzeit auswählen')}
                            </h4>
                            
                            <div className="grid grid-cols-1 gap-1.5">
                              {DEFAULT_TIME_SLOTS.map((slot) => (
                                <motion.button
                                  key={slot.value}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.3 + parseInt(slot.value) * 0.1 }}
                                  className={`text-center px-3 py-2 rounded-md transition-all duration-300 ${
                                    timeSlot === slot.value
                                      ? 'bg-[#C8A97E] text-black font-medium'
                                      : slot.available 
                                        ? 'bg-[#1A1A1A] text-white hover:bg-[#222]'
                                        : 'bg-[#1A1A1A]/50 text-gray-500 cursor-not-allowed'
                                  }`}
                                  onClick={() => slot.available && handleTimeSelect(slot.value)}
                                  disabled={!slot.available}
                                >
                                  {slot.label}
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {(isConfirming || isConfirmed) && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="p-4 border-t border-gray-800 flex items-center justify-center"
                      >
                        {isConfirming ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-[#C8A97E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-sm text-gray-300">{t('booking.confirmingBooking', 'Wird bestätigt...')}</span>
                          </>
                        ) : (
                          <motion.div className="flex items-center text-[#C8A97E]">
                            <Check className="w-5 h-5 mr-2" />
                            <span>{t('booking.bookingConfirmed', 'Termin bestätigt!')}</span>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 