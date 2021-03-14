import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
import TableList from './TableList';

const Table = () => {
  const location = useLocation();
  console.log(location);
  const pageValue = parseInt(location.pathname.split('=')[1]);
  // console.log(pageValue);

  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageValue);
  const [postPerPage, setPostPerPage] = useState(11);

  const indexOfLastPost = currentPage * postPerPage;

  const indexofFirstPost = indexOfLastPost - postPerPage;

  const currentPost = details.slice(indexofFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getDetails = async () => {
    try {
      const resp = await fetch(`https://api.spacexdata.com/v3/launches`);
      const data = await resp.json();
      setDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDetails();
    console.log(details);
  }, []);

  return (
    <div className='space-table'>
      <div className='filter-section'>
        <div className='date'>date</div>
        <div className='filter'>filter</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Launched (UTC)</th>
            <th>Location</th>
            <th>Mission</th>
            <th>Orbit</th>
            <th>Launched Status</th>
            <th>Rocket</th>
          </tr>
        </thead>
        <tbody>
          {<TableList details={details} currentPost={currentPost} />}
        </tbody>
      </table>

      <div className='pagination'>
        <Pagination
          postPerPage={postPerPage}
          totalPost={details.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Table;
