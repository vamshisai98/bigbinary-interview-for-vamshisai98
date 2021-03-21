import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Filter = ({ setFilter, filter, toValue, fromValue, filterValue }) => {
  const history = useHistory();

  const handleChangeFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    history.push(`/${1}/${e.target.value}/${fromValue}/${toValue}`);
  };

  return (
    <div className='filter-section'>
      <i
        className='fas fa-filter'
        style={{ paddingTop: '8px', fontSize: '11px' }}
      ></i>
      {/* <Link to={`/${1}/${filter}/${fromValue}/${toValue}`}> */}
      <select onChange={handleChangeFilter} defaultValue={filterValue}>
        <option value='all'>All Launches</option>
        <option value='upcoming'>Upcoming Launches</option>
        <option value='success'>Successful Launches</option>
        <option value='failed'>Failed Launches</option>
      </select>
      {/* </Link> */}
    </div>
  );
};

export default Filter;
