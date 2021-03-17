import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postPerPage, totalPost, paginate, pageValue }) => {
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
          <Link onClick={() => paginate(prev)} to={`/${prev}`}>
            <i className='fas fa-chevron-left'></i>
          </Link>
        </li>
        {pageNumbers.map((number, index) => (
          <li key={number} className='page-item'>
            <Link
              onClick={() => paginate(number)}
              to={`/${index + 1}`}
              className='page-link'
            >
              {number}
            </Link>
          </li>
        ))}
        <li className='page-item'>
          <Link onClick={() => paginate(next)} to={`/${next}`}>
            <i className='fas fa-chevron-right'></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
