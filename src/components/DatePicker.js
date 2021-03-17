import React, { useState } from 'react';
import DatePickerModal from './DatePickerModal';

const DatePicker = () => {
  const [showDateModal, setShowDateModal] = useState(false);

  const handleDateOpen = () => {
    setShowDateModal(true);
  };

  return (
    <div className='date-picker'>
      <button onClick={handleDateOpen}>Select date</button>
      {showDateModal && <DatePickerModal setShowDateModal={setShowDateModal} />}
    </div>
  );
};

export default DatePicker;
