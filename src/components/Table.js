import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';
import DetailsModal from './DetailsModal';
import TableList from './TableList';

import Filter from './Filter';
import DatePicker from './DatePicker';

const Table = () => {
  const location = useLocation();
  const pageValue = parseInt(location.pathname.split('/')[1] || 1);
  const filterValue = location.pathname.split('/')[2] || 'all';
  const fromValue = location.pathname.split('/')[3] || '';
  const toValue = location.pathname.split('/')[4] || '';

  const [details, setDetails] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageValue || 1);
  const postPerPage = 12;

  const [filter, setFilter] = useState(filterValue);

  const [loading, setLoading] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexOfLastPost - postPerPage;
  const currentPost = filterArr.slice(indexofFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClick = (data) => {
    setShowDetailsModal(true);
    const modalData = details.filter((d) => d.mission_name === data);
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
      const dateFilter = filterDetailsData.filter((obj) => {
        return (
          obj.launch_date_utc >= fromValue && obj.launch_date_utc <= toValue
        );
      });

      setDetails(data);

      if (fromValue === '' && toValue === '') {
        setFilterArr(filterDetailsData);
      } else {
        setFilterArr(dateFilter);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDetails();
    setCurrentPage(pageValue);
  }, [filterValue, fromValue, toValue, currentPage]);

  return (
    <div className='space-table'>
      <div className='filter-section'>
        <div className='date'>
          <DatePicker
            pageValue={pageValue}
            filter={filter}
            toValue={toValue}
            fromValue={fromValue}
          />
        </div>

        <div className='filter'>
          <Filter
            setFilter={setFilter}
            filter={filter}
            pageValue={pageValue}
            toValue={toValue}
            fromValue={fromValue}
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
              filterArr={filterArr}
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
          toValue={toValue}
          fromValue={fromValue}
          filterValue={filterValue}
        />
      </div>
    </div>
  );
};

export default Table;
