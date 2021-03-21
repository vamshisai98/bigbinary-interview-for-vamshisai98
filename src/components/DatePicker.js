import React, { useState } from 'react';
import DatePickerModal from './DatePickerModal';
import moment from 'moment';
const DatePicker = ({ pageValue, filter, fromValue, toValue }) => {
  const [showDateModal, setShowDateModal] = useState(false);

  const handleDateOpen = () => {
    setShowDateModal(true);
  };

  return (
    <div className='date-picker'>
      <button onClick={handleDateOpen} className='date-btn'>
        <i className='far fa-calendar'></i>
        {fromValue === '' && toValue === '' ? (
          <span>Select Date</span>
        ) : (
          <span>
            {moment(fromValue).format('D MMMM YYYY')} -&nbsp;
            {moment(toValue).format('D MMMM YYYY')}
          </span>
        )}
        <i className='fas fa-chevron-down'></i>
      </button>
      {showDateModal && (
        <DatePickerModal
          setShowDateModal={setShowDateModal}
          pageValue={pageValue}
          filter={filter}
        />
      )}
    </div>
  );
};

export default DatePicker;
