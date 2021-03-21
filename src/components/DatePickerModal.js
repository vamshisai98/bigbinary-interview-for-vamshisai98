import React, { useState, useRef, useEffect } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const DatePickerModal = ({ setShowDateModal, pageValue, filter }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
  }, [startDate, endDate]);

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
          {startDate && endDate && (
            <Redirect
              to={`/${pageValue}/${filter}/${moment
                .utc(startDate)
                .format()}/${moment.utc(endDate).format()}`}
            ></Redirect>
          )}
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
