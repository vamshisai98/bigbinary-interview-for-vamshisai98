import React, { Fragment, useRef, useEffect } from 'react';
import moment from 'moment';

const DetailsModal = ({ setShowDetailsModal, modalData }) => {
  const handleClose = () => {
    setShowDetailsModal(false);
  };

  const inpRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!inpRef.current.contains(e.target)) {
        setShowDetailsModal(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <Fragment>
      <div className='details-modal'>
        <div className='details-modal-box' ref={inpRef}>
          <div className='details-modal-content'>
            {modalData.map((x, index) => (
              <div className='modal-container' key={index}>
                <div className='modal-content-header'>
                  <div className='rocket-image'>
                    <img
                      className='rocket-img'
                      src={x.links.mission_patch_small}
                      alt='rocket'
                    />
                  </div>
                  <div className='rocket-info'>
                    <div className='rocket-name'>
                      <div className='rocket-mission-name'>
                        {x.mission_name}
                      </div>
                      {x.launch_success === true ? (
                        <div
                          className='modal-badge'
                          style={{
                            background: '#DEF7EC',
                            color: '#03543F',
                          }}
                        >
                          Success
                        </div>
                      ) : x.launch_success === null ? (
                        <div
                          className='modal-badge'
                          style={{
                            background: '#FEF3C7',
                            color: '#92400F',
                          }}
                        >
                          Upcoming
                        </div>
                      ) : (
                        <div
                          className='modal-badge'
                          style={{
                            background: '#FDE2E1',
                            color: '#981B1C',
                          }}
                        >
                          Failed
                        </div>
                      )}
                      <div className='closebutton'>
                        <i className='fas fa-times' onClick={handleClose}></i>
                      </div>
                    </div>
                    <div className='rocket-type-info'>
                      {x.rocket.rocket_name}
                    </div>
                    <div className='rocket-links'>
                      <a href={x.links.article_link} rel='noopener noreferrer'>
                        <i className='fas fa-globe'></i>
                      </a>
                      <a href={x.links.article_link} rel='noopener noreferrer'>
                        <i className='fab fa-wikipedia-w'></i>
                      </a>
                      <a href={x.links.video_link} rel='noopener noreferrer'>
                        <i className='fab fa-youtube'></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='rocket-details'>
                  {x.details}{' '}
                  <a
                    href={x.links.wikipedia}
                    target='rel="noopener noreferrer"'
                  >
                    Wikipedia
                  </a>
                </div>
                <div className='rocket-config'>
                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Flight Number</div>
                    <div className='rocket-config-value'>{x.flight_number}</div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Mission Name</div>
                    <div className='rocket-config-value'>{x.mission_name}</div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Rocket-Type</div>
                    <div className='rocket-config-value'>
                      {x.rocket.rocket_type}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Rocket Name</div>
                    <div className='rocket-config-value'>
                      {x.rocket.rocket_name}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Manufacturer</div>
                    <div className='rocket-config-value'>
                      {x.rocket.second_stage.payloads[0].manufacturer}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Nationality</div>
                    <div className='rocket-config-value'>
                      {x.rocket.second_stage.payloads[0].nationality}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Launch Date</div>
                    <div className='rocket-config-value'>
                      {moment(x.launch_date_utc).format(
                        'D MMMM YYYY [at] h:mm'
                      )}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Payload Type</div>
                    <div className='rocket-config-value'>
                      {x.rocket.second_stage.payloads[0].payload_type}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Orbit</div>
                    <div className='rocket-config-value'>
                      {x.rocket.second_stage.payloads[0].orbit}
                    </div>
                  </div>

                  <div className='rocket-config-container'>
                    <div className='rocket-config-title'>Launch Site</div>
                    <div className='rocket-config-value'>
                      {x.launch_site.site_name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsModal;
