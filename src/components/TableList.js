import React, { Fragment, useState } from 'react';
import moment from 'moment';
import DetailsModal from './DetailsModal';
import Spinner from './Spinner';

const TableList = ({ details, currentPost, loading, setLoading }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [modalData, setModalData] = useState([]);

  const handleClick = (data) => {
    console.log('working');
    setShowDetailsModal(true);

    const modalData = details.filter((d) => d.flight_number === data);
    setModalData(modalData);
    console.log(modalData);
  };

  return (
    <>
      {showDetailsModal && (
        <DetailsModal
          setShowDetailsModal={setShowDetailsModal}
          modalData={modalData}
        />
      )}
      {loading && <Spinner />}
      {details.length > 0 ? (
        currentPost.map((list, index) => (
          <Fragment key={index}>
            <tr onClick={() => handleClick(list.flight_number)}>
              <td>{list.flight_number}</td>
              <td>
                {moment(list.launch_date_utc).format('D MMMM YYYY [at] h:mm')}
              </td>
              <td>{list.launch_site.site_name}</td>
              <td>{list.mission_name}</td>
              <td>{list.rocket.second_stage.payloads[0].orbit}</td>

              <td>
                <div className='badge'>
                  <div className='badge-center'>
                    {list.launch_success === true ? (
                      <div
                        className='badge-content'
                        style={{
                          background: '#DEF7EC',
                          color: '#03543F',
                        }}
                      >
                        Success
                      </div>
                    ) : list.launch_success === null ? (
                      <div
                        className='badge-content'
                        style={{
                          background: '#FEF3C7',
                          color: '#92400F',
                        }}
                      >
                        Upcoming
                      </div>
                    ) : (
                      <div
                        className='badge-content'
                        style={{
                          background: '#FDE2E1',
                          color: '#981B1C',
                        }}
                      >
                        Failed
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td>{list.rocket.rocket_name}</td>
            </tr>
          </Fragment>
        ))
      ) : (
        <>
          <tr>
            <td>No results</td>
          </tr>
        </>
      )}
    </>
  );
};

export default TableList;
