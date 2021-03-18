import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
import DetailsModal from './DetailsModal';
import TableList from './TableList';
import moment from 'moment';

import Filter from './Filter';
import DatePicker from './DatePicker';

const Table = () => {
  const location = useLocation();

  const pageValue = parseInt(location.pathname.split('/')[1] || 1);
  // const [pageValue, setPageValue] = useState(pageNo);
  const filterValue = location.pathname.split('/')[2] || 'all';

  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageValue);
  const [postPerPage, setPostPerPage] = useState(12);

  const [filter, setFilter] = useState(filterValue);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [filterArr, setFilterArr] = useState([]);

  const indexOfLastPost = currentPage * postPerPage;

  const indexofFirstPost = indexOfLastPost - postPerPage;

  const currentPost = filterArr.slice(indexofFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [loading, setLoading] = useState(false);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleClick = (data) => {
    setShowDetailsModal(true);
    const modalData = details.filter((d) => d.flight_number === data);
    setModalData(modalData);
  };

  const getDetails = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`https://api.spacexdata.com/v3/launches`);
      const data = await resp.json();
      if (data.length > 0) setLoading(false);

      const filterDetailsData = data.filter((x) => {
        if (filterValue === 'upcoming') {
          return x.launch_success === null;
        } else if (filterValue === 'success') {
          return x.launch_success === true;
        } else if (filterValue === 'failed') {
          return x.launch_success === false;
        } else {
          return details;
        }
      });

      setDetails(data);
      setFilterArr(filterDetailsData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const setDateFilter = (data1, data2) => {
    console.log(moment(data1).toDate());
    console.log(data2);
  };

  useEffect(() => {
    getDetails();
  }, [filterValue]);

  return (
    <div className='space-table'>
      <div className='filter-section'>
        <div className='date'>
          <DatePicker setDateFilter={setDateFilter} />
        </div>
        <div className='filter'>
          <Filter
            setFilter={setFilter}
            filter={filter}
            pageValue={pageValue}
            to={to}
            from={from}
            filterValue={filterValue}
          />
        </div>
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
          {
            <TableList
              details={details}
              currentPost={currentPost}
              loading={loading}
              setLoading={setLoading}
              handleClick={handleClick}
            />
          }
        </tbody>
      </table>
      {showDetailsModal && (
        <DetailsModal
          setShowDetailsModal={setShowDetailsModal}
          modalData={modalData}
        />
      )}

      <div className='pagination'>
        <Pagination
          postPerPage={postPerPage}
          totalPost={filterArr.length}
          paginate={paginate}
          pageValue={pageValue}
          filterArr={filterArr}
          to={to}
          from={from}
          filterValue={filterValue}
        />
      </div>
    </div>
  );
};

export default Table;
