import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({
  postPerPage,
  totalPost,
  paginate,
  pageValue,
  toValue,
  fromValue,
  filterValue,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const next = pageValue + 1;
  const prev = pageValue - 1;

  return (
    <nav>
      <ul className='pagination-details'>
        <li className='page-item'>
          {pageValue === 1 ? (
            <Link to='#'>
              <i className='fas fa-chevron-left'></i>
            </Link>
          ) : (
            <Link
              onClick={() => paginate(prev)}
              to={`/${prev}/${filterValue}/${fromValue}/${toValue}`}
            >
              <i className='fas fa-chevron-left'></i>
            </Link>
          )}
        </li>
        {pageNumbers.map((number, index) => (
          <li key={number} className='page-item'>
            <Link
              onClick={() => paginate(number)}
              to={`/${index + 1}/${filterValue}/${fromValue}/${toValue}`}
              className='page-link active'
            >
              {number}
            </Link>
          </li>
        ))}
        <li className='page-item'>
          {pageValue === pageNumbers.length ? (
            <Link to='#'>
              <i className='fas fa-chevron-right'></i>
            </Link>
          ) : (
            <Link
              onClick={() => paginate(next)}
              to={`/${next}/${filterValue}/${fromValue}/${toValue}`}
            >
              <i className='fas fa-chevron-right'></i>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
