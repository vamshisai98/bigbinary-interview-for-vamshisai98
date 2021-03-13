import React, { useEffect, useState } from 'react';

import moment from 'moment';

const Table = () => {
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    try {
      const resp = await fetch(`https://api.spacexdata.com/v3/launches`);
      const data = await resp.json();
      setDetails(data);
      // console.log(data.slice(0, 30));
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
          {details.length > 0 ? (
            details.map((list, index) => (
              <tr key={index}>
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
                      {list.launch_success == true ? (
                        <div
                          className='badge-content'
                          style={{
                            background: '#DEF7EC',
                            color: '#03543F',
                          }}
                        >
                          Success
                        </div>
                      ) : list.launch_success == null ? (
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
            ))
          ) : (
            <tr>
              <td>No results</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className='pagination'>paginate</div>
    </div>
  );
};

export default Table;
