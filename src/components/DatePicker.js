import React, { useState } from 'react';
import DatePickerModal from './DatePickerModal';

const DatePicker = ({ pageValue, filter }) => {
  const [showDateModal, setShowDateModal] = useState(false);

  const handleDateOpen = () => {
    setShowDateModal(true);
  };

  return (
    <div className='date-picker'>
      <button onClick={handleDateOpen}>Select date</button>
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
