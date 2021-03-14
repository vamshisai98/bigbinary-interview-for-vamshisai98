import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination-details'>
        <li className='page-item'>Prev</li>
        {pageNumbers.map((number, index) => (
          <li key={number} className='page-item'>
            <Link
              onClick={() => paginate(number)}
              to={`/page=${index + 1}`}
              className='page-link'
            >
              {number}
            </Link>
          </li>
        ))}
        <li className='page-item'>Next</li>
      </ul>
    </nav>
  );
};

export default Pagination;
