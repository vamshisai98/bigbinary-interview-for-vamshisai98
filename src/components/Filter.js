import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Filter = ({ setFilter, filter, pageValue, to, from, filterValue }) => {
  const handleChangeFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  useEffect(() => {}, [filter]);

  return (
    <div className='filter-section'>
      <i
        className='fas fa-filter'
        style={{ paddingTop: '8px', fontSize: '11px' }}
      ></i>
      <Link to={`/${pageValue}/${filter}/${to}/${from}`}>
        <select onChange={handleChangeFilter} defaultValue={filterValue}>
          <option value='all'>All Launches</option>
          <option value='upcoming'>Upcoming Launches</option>
          <option value='success'>Successful Launches</option>
          <option value='failed'>Failed Launches</option>
        </select>
      </Link>
    </div>
  );
};

export default Filter;
