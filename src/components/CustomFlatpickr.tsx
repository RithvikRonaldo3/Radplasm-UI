import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

interface FlatpickrProps {
  className?: string;
  value?: Date | Date[] | null | undefined; // Update to accept Date, Date[], null, or undefined
  options?: object;
  placeholder?: string;
  onChange: (date: Date | [Date, Date]) => void;
}

const CustomFlatpickr: React.FC<FlatpickrProps> = ({ className, value, options, placeholder, onChange }) => {
  return (
    <Flatpickr
      className={className}
      data-enable-time
      value={value ?? undefined} // Pass undefined if value is null or undefined
      options={options}
      placeholder={placeholder}
      onChange={(selectedDates) => {
        if (selectedDates instanceof Array) {
          // If multiple dates are selected, interpret as a date range
          const [startDate, endDate] = selectedDates;
          const dateRange: [Date, Date] = [startDate, endDate];
          onChange(dateRange);
        } else {
          // If a single date is selected, pass it as is
          onChange(selectedDates);
        }
      }}
    />
  );
};

export default CustomFlatpickr;
