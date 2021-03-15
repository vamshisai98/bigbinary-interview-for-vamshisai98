import React, { Fragment } from 'react';

const DetailsModal = ({ setShowDetailsModal }) => {
  const handleClose = () => {
    setShowDetailsModal(false);
  };
  return (
    <Fragment>
      <div className='details-modal'>
        <div className='details-modal-box'>
          <div className='details-modal-content'>
            <div className='modal-content-header'>
              <div className='rocket-image'>
                <img
                  className='rocket-img'
                  src='https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
                  alt='rocket image'
                />
              </div>
              <div className='rocket-info'>
                <div className='rocket-name1'>
                  CRS-1 <div className='modal-badge'>Success</div>
                  <div className='closebutton'>
                    <i className='fas fa-times' onClick={handleClose}></i>
                  </div>
                </div>
                <div className='rocket-type-info'>Falcon 9</div>
                <div className='rocket-links'>
                  <a href=''>Nasa</a>
                  <a href=''>Website</a>
                  <a href=''>Youtube</a>
                </div>
              </div>
            </div>
            <div className='rocket-details'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              cumque placeat delectus sunt, magni, deleniti iste autem qui
              dolorem hic consequatur incidunt. Dolorem, ex tempore! Modi
              possimus voluptas quisquam a? <a href=''>Wikipedia</a>
            </div>
            <div className='rocket-config'>
              <div className='rocket-config-container'>
                <div className='flight-number'>Flight Number</div>
                <div className='rocket-config-value'>9</div>
              </div>

              <div className='rocket-config-container'>
                <div className='mission-name'>Mission Name</div>
                <div className='rocket-config-value'>CRS-1</div>
              </div>

              <div className='rocket-config-container'>
                <div className='rocket-type'>Rocket-Type</div>
                <div className='rocket-config-value'>v1.0</div>
              </div>

              <div className='rocket-config-container'>
                <div className='rocket-name'>Rocket Name</div>
                <div className='rocket-config-value'>Falcon9</div>
              </div>

              <div className='rocket-config-container'>
                <div className='manufacturer'>Manufacturer</div>
                <div className='rocket-config-value'>SpaceX</div>
              </div>

              <div className='rocket-config-container'>
                <div className='nationality'>Nationality</div>
                <div className='rocket-config-value'>SpaceX</div>
              </div>

              <div className='rocket-config-container'>
                <div className='launch-date'>Launch Date</div>
                <div className='rocket-config-value'>08 october 2012 00:35</div>
              </div>

              <div className='rocket-config-container'>
                <div className='payload-type'>Payload Type</div>
                <div className='rocket-config-value'>Dragon 1.0</div>
              </div>

              <div className='rocket-config-container'>
                <div className='orbit'>Orbit</div>
                <div className='rocket-config-value'>ISS</div>
              </div>

              <div className='rocket-config-container'>
                <div className='launch-site'>Launch Site</div>
                <div className='rocket-config-value'>CCAFS SLC 40</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsModal;
