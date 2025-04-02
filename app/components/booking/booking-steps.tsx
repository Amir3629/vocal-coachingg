import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function BookingSteps() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-[#111] border border-gray-800 rounded-xl shadow-2xl p-4 max-w-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-medium text-lg">{t('booking.steps.title', 'Buchungsschritte')}</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C8A97E] flex items-center justify-center text-black font-medium">
                  1
                </div>
                <div>
                  <p className="text-white font-medium">{t('booking.steps.selectDate', 'Datum auswählen')}</p>
                  <p className="text-gray-400 text-sm mt-1">{t('booking.steps.selectDateDesc', 'Wählen Sie Ihr gewünschtes Datum aus dem Kalender')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C8A97E] flex items-center justify-center text-black font-medium">
                  2
                </div>
                <div>
                  <p className="text-white font-medium">{t('booking.steps.selectTime', 'Uhrzeit auswählen')}</p>
                  <p className="text-gray-400 text-sm mt-1">{t('booking.steps.selectTimeDesc', 'Wählen Sie Ihre bevorzugte Uhrzeit aus der Liste')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C8A97E] flex items-center justify-center text-black font-medium">
                  3
                </div>
                <div>
                  <p className="text-white font-medium">{t('booking.steps.confirm', 'Termin bestätigen')}</p>
                  <p className="text-gray-400 text-sm mt-1">{t('booking.steps.confirmDesc', 'Bestätigen Sie Ihre Auswahl und erhalten Sie eine Bestätigungsmail')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 