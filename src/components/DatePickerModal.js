import React, { useState, useRef, useEffect } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const DatePickerModal = ({ setShowDateModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const inpRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!inpRef.current.contains(e.target)) {
        setShowDateModal(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className='date-modal'>
      <div className='date-modal-box' ref={inpRef}>
        <div className='date-modal-content'>
          <div className='closeDatebutton'>
            <i
              className='fas fa-times'
              onClick={() => {
                setShowDateModal(false);
              }}
            ></i>
          </div>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            months={1}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
