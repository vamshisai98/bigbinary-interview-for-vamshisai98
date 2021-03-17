import React from 'react';

const Filter = () => {
  return (
    <div className='filter-section'>
      <i
        className='fas fa-filter'
        style={{ paddingTop: '8px', fontSize: '11px' }}
      ></i>
      <select name='' id=''>
        <option value='All Launches'>All Launches</option>
        <option value='Upcoming Launches'>Upcoming Launches</option>
        <option value='Successful Launches'>Successful Launches</option>
        <option value='Failed Launches'>Failed Launches</option>
      </select>
    </div>
  );
};

export default Filter;
